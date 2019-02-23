'use strict';

var Postlist = require('../../model/Posts/getPostModel.js');

// check geoLng, geoLat has correct form, return true if bad format, else false
function checkGeo(lat, lng) {
    // regular expression to match required format
    var relat = /[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)/;
    var relng = /[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)/;
    return (!relat.test(lat) || !relng.test(lng));
}

// check date has correct form, return true if bad format, else false
function checkDate(mystring) {
    // regular expression to match required date format
    var re = /\d\d\d\d-(0[1-9]|1[0-2])-([12]\d|0[1-9]|3[01])/;
    return !re.test(mystring);
}

// true if from later than to, checks from is not later than to
function compDate(from, to) {
    var r1 = from.split("-");
    var r2 = to.split("-");
    var df = new Date(r1[0], r1[1], r1[2]);
    var dt = new Date(r2[0], r2[1], r2[2]);
    return (df.getTime() > dt.getTime()); // probably works, should test
}

// true if inp not a positive integer
function checkInt2(inp) {
    return (!Number.isInteger(Number(inp)) || Number(inp) < 1);
}

// false if |list[i] - value| = 1 for some i, else true
function checkPrev(mylist, value) {
    for (var i=0; i<mylist.length; i++) {
        if ((mylist[i] - value == 1) || (value - mylist[i] == 1)) return false;
    }
    return true;
}

exports.my_post_list = function(req, res) {

    var flag = false;
    var error;
    var tempstr;
    var tempdate;
    var temp;
    var temp2;

    var start = 0;
    var count = 20;
    var geoflag = false;
    var geoDist;
    var geoLng;
    var geoLat;
    var dateflag = false;
    var dateFrom;
    var dateTo;
    // shop, products = (shop1,shop2,...,shop_last)
    var shop_flag = false;
    var shops = "(";
    var product_flag = false;
    var products = "(";
    var tag_flag = 0;
    var tags = [];  // tags = [tag1, tag2, ...]
    var sort = [0];   // price|ASC -> 0, price|DESC -> 1, date|ASC -> 3, date|DESC -> 4, geo.dist|ASC -> 6, geo.dist|DESC -> 7
    var sort2 = " ORDER BY price ASC";

    if (req.query.format && req.query.format != "json") {
        flag = true;
        error = "Unsupported format !";
    }
    if (flag == false && req.query.start) {
        if (!Number.isInteger(Number(req.query.start)) || Number(req.query.start) < 0) {
            flag = true;
            error = "Variable start is of type Integer and should not be negative !";
        }
        else start = Number(req.query.start);
    }
    if (flag == false && req.query.count) {
        if (checkInt2(req.query.count)) {
            flag = true;
            error = "Variable count is of type Integer and should be positive !";
        }
        else count = Number(req.query.count);
    }
    if (flag == false) {
        if (!req.query.geoDist && !req.query.geoLng && !req.query.geoLat) {
            geoflag = false;
        }
        else if (req.query.geoDist && req.query.geoLng && req.query.geoLat) {
            if (checkInt2(req.query.geoDist)) {
                flag = true;
                error = "Variable geoDist is of type Integer and should be positive !";
            }
            else if (checkGeo(req.query.geoLat, req.query.geoLng)) {
                flag = true;
                error = "Coordinates are not in the right format (lat -> [-90, 90] | lng -> [-180, 180]) !";
            }
            else {
                geoflag = true;
                geoDist = req.query.geoDist;
                geoLng = req.query.geoLng;
                geoLat = req.query.geoLat;
            }
        }
        else {
            flag = true;
            error = "[geoDist, geoLng, geoLat] should all either be undeclared or have a value !";
        }
    }
    if (flag == false) {
        if (!req.query.dateFrom && !req.query.dateTo) {
            dateflag = false;
            tempdate = new Date();
            tempstr = tempdate.toLocaleDateString().split("/");
            dateFrom = tempstr[2] + "-" + tempstr[0] + "-" + tempstr[1];
            dateTo = dateFrom;
        }
        else if (req.query.dateFrom && req.query.dateTo) {
            if (checkDate(req.query.dateFrom) || checkDate(req.query.dateTo)) {
                flag = true;
                error = "Date has format YYYY-MM-DD !";
            }
            else if (compDate(req.query.dateFrom, req.query.dateTo)) {
                flag = true;
                error = "dateFrom must not be later than dateTo !";
            }
            else {
                dateflag = true;
                dateFrom = req.query.dateFrom;
                dateTo = req.query.dateTo;
            }
        }
        else {
            flag = true;
            error = "[dateFrom, dateTo] should both either be undeclared or have a value !";
        }
    }
    if (flag == false && req.query.shops) {
        shop_flag = true;
        for (var i=0; i<req.query.shops.length; i++) {
            if (checkInt2(req.query.shops[i])) {
                flag = true;
                error = "Variable shopId is a String of type Integer and should be positive !";
                break;
            }
            else if (i == 0) shops += req.query.shops[i];
            else shops += "," + req.query.shops[i];
        }
        shops += ")";
    }
    if (flag == false && req.query.products) {
        product_flag = true;
        for (var i=0; i<req.query.products.length; i++) {
            if (checkInt2(req.query.products[i])) {
                flag = true;
                error = "Variable productId is a String of type Integer and should be positive !";
                break;
            }
            else if (i == 0) products += req.query.products[i];
            else products += "," + req.query.products[i];
        }
        products += ")";
    }
    if (flag == false && req.query.tags) {
        tag_flag = true;
        for (var i=0; i<req.query.tags.length; i++) {
            if (typeof req.query.tags[i] != "string") {
                flag = true;
                error = "Variable tag is of type String !";
                break;
            }
            else tags.push(req.query.tags[i]);
        }
    }
    if (flag == false && req.query.sort) {
        sort = [];
        sort2 = " ORDER BY ";
        if (req.query.sort.length > 3) {
            flag = true;
            error = "Wrong sort list !";
        }
        else {
            for (var i=0; i<req.query.sort.length; i++) {
                if (req.query.sort.length[i] == "price|ASC") {
                    temp = 0;
                    temp2 = "price ASC";
                }
                else if (req.query.sort.length[i] == "price|DESC") {
                    temp = 1;
                    temp2 = "price DESC";
                }
                else if (req.query.sort.length[i] == "date|ASC") {
                    temp = 3;
                    temp2 = "dateFrom ASC";
                }
                else if (req.query.sort.length[i] == "date|DESC") {
                    temp = 4;
                    temp2 = "dateFrom DESC"
                }
                else if (req.query.sort.length[i] == "geo.dist|ASC") {
                    temp = 6;
                    temp2 = "dist ASC";
                    if (geoflag == false) {
                        flag = true;
                        error = "Cannot sort by distance. Current location not provided.";
                        break;
                    }
                }
                else if (req.query.sort.length[i] == "geo.dist|DESC") {
                    temp = 7;
                    temp2 = "dist DESC";
                    if (geoflag == false) {
                        flag = true;
                        error = "Cannot sort by distance. Current location not provided.";
                        break;
                    }
                }
                else {
                    flag = true;
                    error = "Not valied value in sort list !";
                    break;
                }
                if (checkPrev(sort, temp)) {
                    sort.push(temp);
                    if (i == 0) sort2 += temp2;
                    else sort2 = sort2 + ", " + temp2;
                }
                else {
                    flag = true;
                    error = "Wrong sort list";
                    break;
                }
            }
        }
    }

    if (flag == true) {
        // checks failed
        res.status(400).json({
            "success": "false",
            "message": error
        });
    }
    else {

        Postlist(start, count, geoflag, geoDist, geoLng, geoLat, dateFrom, dateTo, shop_flag, shops, product_flag, products, tag_flag, tags, sort2, function(err, result) {
            if (err) res.status(400).json(result);
            else {
                if (result.success == true) res.json(result);
                else res.status(400).json(result);
            }
        });
    }
};