var initialize = function() {
     var result = "";
     result = ` INSERT INTO post(shopid,userid,fuelid,price,my_date) VALUES ( 1 , 3 , 1 , 1.561 , ' 2019-03-03 '),
                    ( 1 , 3 , 2 , 1.56 , ' 2019-03-02 '),
                    ( 1 , 2 , 3 , 1.884 , ' 2019-03-04 '),
                    ( 1 , 3 , 4 , 1.31 , ' 2019-03-04 '),
                    ( 1 , 4 , 5 , 1.438 , ' 2019-03-01 '),
                    ( 1 , 1 , 6 , 0.681 , ' 2019-03-02 '),
                    ( 1 , 4 , 7 , 0.855 , ' 2019-03-02 '),
                    ( 2 , 3 , 1 , 1.564 , ' 2019-03-04 '),
                    ( 2 , 1 , 2 , 1.739 , ' 2019-03-02 '),
                    ( 2 , 3 , 3 , 1.724 , ' 2019-03-04 '),
                    ( 2 , 1 , 4 , 1.265 , ' 2019-03-04 '),
                    ( 2 , 3 , 5 , 1.449 , ' 2019-03-04 '),
                    ( 2 , 3 , 6 , 0.759 , ' 2019-03-04 '),
                    ( 2 , 1 , 7 , 0.928 , ' 2019-03-01 '),
                    ( 3 , 5 , 1 , 1.496 , ' 2019-03-03 '),
                    ( 3 , 2 , 2 , 1.649 , ' 2019-03-04 '),
                    ( 3 , 5 , 3 , 1.812 , ' 2019-03-03 '),
                    ( 3 , 4 , 4 , 1.365 , ' 2019-03-03 '),
                    ( 3 , 2 , 5 , 1.468 , ' 2019-03-03 '),
                    ( 3 , 5 , 6 , 0.703 , ' 2019-03-02 '),
                    ( 3 , 5 , 7 , 0.794 , ' 2019-03-02 '),
                    ( 4 , 1 , 1 , 1.474 , ' 2019-03-03 '),
                    ( 4 , 5 , 2 , 1.626 , ' 2019-03-04 '),
                    ( 4 , 3 , 3 , 1.899 , ' 2019-03-03 '),
                    ( 4 , 2 , 4 , 1.335 , ' 2019-03-03 '),
                    ( 4 , 1 , 5 , 1.396 , ' 2019-03-04 '),
                    ( 4 , 1 , 6 , 0.698 , ' 2019-03-02 '),
                    ( 4 , 5 , 7 , 0.85 , ' 2019-03-03 '),
                    ( 5 , 1 , 1 , 1.518 , ' 2019-03-02 '),
                    ( 5 , 3 , 2 , 1.558 , ' 2019-03-01 '),
                    ( 5 , 3 , 3 , 1.896 , ' 2019-03-04 '),
                    ( 5 , 2 , 4 , 1.317 , ' 2019-03-04 '),
                    ( 5 , 4 , 5 , 1.472 , ' 2019-03-01 '),
                    ( 5 , 2 , 6 , 0.809 , ' 2019-03-02 '),
                    ( 5 , 1 , 7 , 0.771 , ' 2019-03-04 '),
                    ( 6 , 1 , 1 , 1.524 , ' 2019-03-02 '),
                    ( 6 , 5 , 2 , 1.573 , ' 2019-03-02 '),
                    ( 6 , 2 , 3 , 1.713 , ' 2019-03-03 '),
                    ( 6 , 1 , 4 , 1.361 , ' 2019-03-01 '),
                    ( 6 , 1 , 5 , 1.401 , ' 2019-03-03 '),
                    ( 6 , 2 , 6 , 0.704 , ' 2019-03-04 '),
                    ( 6 , 4 , 7 , 0.927 , ' 2019-03-01 '),
                    ( 7 , 5 , 1 , 1.479 , ' 2019-03-02 '),
                    ( 7 , 4 , 2 , 1.735 , ' 2019-03-01 '),
                    ( 7 , 2 , 3 , 1.794 , ' 2019-03-04 '),
                    ( 7 , 4 , 4 , 1.312 , ' 2019-03-01 '),
                    ( 7 , 4 , 5 , 1.414 , ' 2019-03-03 '),
                    ( 7 , 1 , 6 , 0.651 , ' 2019-03-02 '),
                    ( 7 , 5 , 7 , 0.806 , ' 2019-03-02 '),
                    ( 8 , 1 , 1 , 1.485 , ' 2019-03-04 '),
                    ( 8 , 2 , 2 , 1.721 , ' 2019-03-04 '),
                    ( 8 , 3 , 3 , 1.69 , ' 2019-03-01 '),
                    ( 8 , 4 , 4 , 1.273 , ' 2019-03-03 '),
                    ( 8 , 1 , 5 , 1.449 , ' 2019-03-03 '),
                    ( 8 , 1 , 6 , 0.756 , ' 2019-03-04 '),
                    ( 8 , 2 , 7 , 0.76 , ' 2019-03-04 '),
                    ( 9 , 4 , 1 , 1.552 , ' 2019-03-01 '),
                    ( 9 , 3 , 2 , 1.606 , ' 2019-03-01 '),
                    ( 9 , 1 , 3 , 1.854 , ' 2019-03-02 '),
                    ( 9 , 3 , 4 , 1.29 , ' 2019-03-03 '),
                    ( 9 , 3 , 5 , 1.351 , ' 2019-03-02 '),
                    ( 9 , 4 , 6 , 0.764 , ' 2019-03-04 '),
                    ( 9 , 2 , 7 , 0.852 , ' 2019-03-04 '),
                    ( 10 , 5 , 1 , 1.493 , ' 2019-03-02 '),
                    ( 10 , 1 , 2 , 1.744 , ' 2019-03-02 '),
                    ( 10 , 5 , 3 , 1.887 , ' 2019-03-04 '),
                    ( 10 , 3 , 4 , 1.302 , ' 2019-03-03 '),
                    ( 10 , 3 , 5 , 1.462 , ' 2019-03-03 '),
                    ( 10 , 3 , 6 , 0.708 , ' 2019-03-02 '),
                    ( 10 , 2 , 7 , 0.869 , ' 2019-03-02 '),
                    ( 11 , 2 , 1 , 1.536 , ' 2019-03-04 '),
                    ( 11 , 3 , 2 , 1.633 , ' 2019-03-02 '),
                    ( 11 , 4 , 3 , 1.755 , ' 2019-03-01 '),
                    ( 11 , 2 , 4 , 1.381 , ' 2019-03-03 '),
                    ( 11 , 1 , 5 , 1.496 , ' 2019-03-02 '),
                    ( 11 , 2 , 6 , 0.672 , ' 2019-03-01 '),
                    ( 11 , 3 , 7 , 0.904 , ' 2019-03-03 '),
                    ( 12 , 4 , 1 , 1.548 , ' 2019-03-03 '),
                    ( 12 , 2 , 2 , 1.707 , ' 2019-03-03 '),
                    ( 12 , 2 , 3 , 1.836 , ' 2019-03-01 '),
                    ( 12 , 5 , 4 , 1.3 , ' 2019-03-04 '),
                    ( 12 , 3 , 5 , 1.395 , ' 2019-03-01 '),
                    ( 12 , 1 , 6 , 0.679 , ' 2019-03-02 '),
                    ( 12 , 5 , 7 , 0.839 , ' 2019-03-04 '),
                    ( 13 , 2 , 1 , 1.594 , ' 2019-03-03 '),
                    ( 13 , 1 , 2 , 1.719 , ' 2019-03-02 '),
                    ( 13 , 4 , 3 , 1.76 , ' 2019-03-04 '),
                    ( 13 , 4 , 4 , 1.264 , ' 2019-03-03 '),
                    ( 13 , 1 , 5 , 1.382 , ' 2019-03-01 '),
                    ( 13 , 4 , 6 , 0.674 , ' 2019-03-03 '),
                    ( 13 , 5 , 7 , 0.844 , ' 2019-03-01 '),
                    ( 14 , 3 , 1 , 1.488 , ' 2019-03-04 '),
                    ( 14 , 2 , 2 , 1.666 , ' 2019-03-03 '),
                    ( 14 , 1 , 3 , 1.823 , ' 2019-03-04 '),
                    ( 14 , 2 , 4 , 1.298 , ' 2019-03-04 '),
                    ( 14 , 4 , 5 , 1.474 , ' 2019-03-02 '),
                    ( 14 , 4 , 6 , 0.77 , ' 2019-03-03 '),
                    ( 14 , 3 , 7 , 0.845 , ' 2019-03-04 '),
                    ( 15 , 2 , 1 , 1.554 , ' 2019-03-04 '),
                    ( 15 , 3 , 2 , 1.64 , ' 2019-03-03 '),
                    ( 15 , 3 , 3 , 1.866 , ' 2019-03-02 '),
                    ( 15 , 3 , 4 , 1.309 , ' 2019-03-01 '),
                    ( 15 , 5 , 5 , 1.423 , ' 2019-03-04 '),
                    ( 15 , 4 , 6 , 0.773 , ' 2019-03-03 '),
                    ( 15 , 1 , 7 , 0.81 , ' 2019-03-01 '),
                    ( 16 , 5 , 1 , 1.474 , ' 2019-03-02 '),
                    ( 16 , 5 , 2 , 1.635 , ' 2019-03-03 '),
                    ( 16 , 2 , 3 , 1.77 , ' 2019-03-04 '),
                    ( 16 , 5 , 4 , 1.31 , ' 2019-03-02 '),
                    ( 16 , 5 , 5 , 1.425 , ' 2019-03-04 '),
                    ( 16 , 5 , 6 , 0.711 , ' 2019-03-03 '),
                    ( 16 , 3 , 7 , 0.847 , ' 2019-03-02 '),
                    ( 17 , 2 , 1 , 1.586 , ' 2019-03-01 '),
                    ( 17 , 2 , 2 , 1.698 , ' 2019-03-01 '),
                    ( 17 , 4 , 3 , 1.691 , ' 2019-03-03 '),
                    ( 17 , 1 , 4 , 1.295 , ' 2019-03-01 '),
                    ( 17 , 5 , 5 , 1.495 , ' 2019-03-02 '),
                    ( 17 , 1 , 6 , 0.768 , ' 2019-03-02 '),
                    ( 17 , 1 , 7 , 0.769 , ' 2019-03-03 '),
                    ( 18 , 2 , 1 , 1.565 , ' 2019-03-03 '),
                    ( 18 , 3 , 2 , 1.618 , ' 2019-03-01 '),
                    ( 18 , 2 , 3 , 1.734 , ' 2019-03-01 '),
                    ( 18 , 4 , 4 , 1.267 , ' 2019-03-04 '),
                    ( 18 , 5 , 5 , 1.438 , ' 2019-03-01 '),
                    ( 18 , 1 , 6 , 0.735 , ' 2019-03-01 '),
                    ( 18 , 3 , 7 , 0.821 , ' 2019-03-02 '),
                    ( 19 , 2 , 1 , 1.574 , ' 2019-03-03 '),
                    ( 19 , 1 , 2 , 1.721 , ' 2019-03-01 '),
                    ( 19 , 2 , 3 , 1.893 , ' 2019-03-01 '),
                    ( 19 , 1 , 4 , 1.378 , ' 2019-03-03 '),
                    ( 19 , 5 , 5 , 1.375 , ' 2019-03-01 '),
                    ( 19 , 2 , 6 , 0.778 , ' 2019-03-03 '),
                    ( 19 , 2 , 7 , 0.846 , ' 2019-03-03 '),
                    ( 20 , 3 , 1 , 1.581 , ' 2019-03-04 '),
                    ( 20 , 3 , 2 , 1.63 , ' 2019-03-03 '),
                    ( 20 , 5 , 3 , 1.762 , ' 2019-03-01 '),
                    ( 20 , 2 , 4 , 1.376 , ' 2019-03-01 '),
                    ( 20 , 5 , 5 , 1.483 , ' 2019-03-01 '),
                    ( 20 , 4 , 6 , 0.673 , ' 2019-03-01 '),
                    ( 20 , 5 , 7 , 0.92 , ' 2019-03-02 '),
                    ( 21 , 4 , 1 , 1.524 , ' 2019-03-02 '),
                    ( 21 , 1 , 2 , 1.697 , ' 2019-03-01 '),
                    ( 21 , 5 , 3 , 1.79 , ' 2019-03-04 '),
                    ( 21 , 2 , 4 , 1.342 , ' 2019-03-03 '),
                    ( 21 , 3 , 5 , 1.405 , ' 2019-03-02 '),
                    ( 21 , 3 , 6 , 0.794 , ' 2019-03-01 '),
                    ( 21 , 5 , 7 , 0.845 , ' 2019-03-04 '),
                    ( 22 , 2 , 1 , 1.46 , ' 2019-03-01 '),
                    ( 22 , 4 , 2 , 1.643 , ' 2019-03-04 '),
                    ( 22 , 4 , 3 , 1.693 , ' 2019-03-03 '),
                    ( 22 , 1 , 4 , 1.3 , ' 2019-03-04 '),
                    ( 22 , 1 , 5 , 1.454 , ' 2019-03-04 '),
                    ( 22 , 5 , 6 , 0.695 , ' 2019-03-03 '),
                    ( 22 , 5 , 7 , 0.848 , ' 2019-03-04 '),
                    ( 23 , 4 , 1 , 1.541 , ' 2019-03-04 '),
                    ( 23 , 1 , 2 , 1.56 , ' 2019-03-01 '),
                    ( 23 , 2 , 3 , 1.861 , ' 2019-03-02 '),
                    ( 23 , 2 , 4 , 1.295 , ' 2019-03-02 '),
                    ( 23 , 4 , 5 , 1.44 , ' 2019-03-02 '),
                    ( 23 , 4 , 6 , 0.685 , ' 2019-03-02 '),
                    ( 23 , 3 , 7 , 0.917 , ' 2019-03-03 '),
                    ( 24 , 4 , 1 , 1.545 , ' 2019-03-03 '),
                    ( 24 , 1 , 2 , 1.726 , ' 2019-03-02 '),
                    ( 24 , 4 , 3 , 1.709 , ' 2019-03-03 '),
                    ( 24 , 4 , 4 , 1.378 , ' 2019-03-04 '),
                    ( 24 , 1 , 5 , 1.358 , ' 2019-03-02 '),
                    ( 24 , 5 , 6 , 0.794 , ' 2019-03-01 '),
                    ( 24 , 2 , 7 , 0.798 , ' 2019-03-01 '),
                    ( 25 , 3 , 1 , 1.563 , ' 2019-03-04 '),
                    ( 25 , 1 , 2 , 1.706 , ' 2019-03-02 '),
                    ( 25 , 2 , 3 , 1.819 , ' 2019-03-04 '),
                    ( 25 , 1 , 4 , 1.35 , ' 2019-03-03 '),
                    ( 25 , 2 , 5 , 1.377 , ' 2019-03-04 '),
                    ( 25 , 4 , 6 , 0.675 , ' 2019-03-04 '),
                    ( 25 , 2 , 7 , 0.929 , ' 2019-03-04 '),
                    ( 26 , 3 , 1 , 1.541 , ' 2019-03-01 '),
                    ( 26 , 4 , 2 , 1.659 , ' 2019-03-03 '),
                    ( 26 , 3 , 3 , 1.689 , ' 2019-03-03 '),
                    ( 26 , 3 , 4 , 1.279 , ' 2019-03-02 '),
                    ( 26 , 1 , 5 , 1.437 , ' 2019-03-02 '),
                    ( 26 , 5 , 6 , 0.815 , ' 2019-03-03 '),
                    ( 26 , 3 , 7 , 0.923 , ' 2019-03-02 '),
                    ( 27 , 4 , 1 , 1.485 , ' 2019-03-03 '),
                    ( 27 , 3 , 2 , 1.658 , ' 2019-03-02 '),
                    ( 27 , 3 , 3 , 1.862 , ' 2019-03-01 '),
                    ( 27 , 5 , 4 , 1.259 , ' 2019-03-03 '),
                    ( 27 , 2 , 5 , 1.464 , ' 2019-03-01 '),
                    ( 27 , 2 , 6 , 0.688 , ' 2019-03-03 '),
                    ( 27 , 1 , 7 , 0.868 , ' 2019-03-04 '),
                    ( 28 , 3 , 1 , 1.54 , ' 2019-03-02 '),
                    ( 28 , 4 , 2 , 1.59 , ' 2019-03-03 '),
                    ( 28 , 3 , 3 , 1.881 , ' 2019-03-03 '),
                    ( 28 , 4 , 4 , 1.279 , ' 2019-03-02 '),
                    ( 28 , 3 , 5 , 1.437 , ' 2019-03-02 '),
                    ( 28 , 1 , 6 , 0.793 , ' 2019-03-03 '),
                    ( 28 , 2 , 7 , 0.815 , ' 2019-03-02 '),
                    ( 29 , 2 , 1 , 1.577 , ' 2019-03-03 '),
                    ( 29 , 1 , 2 , 1.627 , ' 2019-03-01 '),
                    ( 29 , 5 , 3 , 1.685 , ' 2019-03-02 '),
                    ( 29 , 3 , 4 , 1.377 , ' 2019-03-01 '),
                    ( 29 , 2 , 5 , 1.402 , ' 2019-03-03 '),
                    ( 29 , 2 , 6 , 0.711 , ' 2019-03-01 '),
                    ( 29 , 3 , 7 , 0.766 , ' 2019-03-04 '),
                    ( 30 , 2 , 1 , 1.515 , ' 2019-03-04 '),
                    ( 30 , 4 , 2 , 1.659 , ' 2019-03-01 '),
                    ( 30 , 1 , 3 , 1.898 , ' 2019-03-04 '),
                    ( 30 , 1 , 4 , 1.274 , ' 2019-03-04 '),
                    ( 30 , 3 , 5 , 1.404 , ' 2019-03-03 '),
                    ( 30 , 4 , 6 , 0.79 , ' 2019-03-01 '),
                    ( 30 , 4 , 7 , 0.886 , ' 2019-03-04 '),
                    ( 31 , 1 , 1 , 1.588 , ' 2019-03-03 '),
                    ( 31 , 5 , 2 , 1.742 , ' 2019-03-03 '),
                    ( 31 , 1 , 3 , 1.727 , ' 2019-03-01 '),
                    ( 31 , 1 , 4 , 1.355 , ' 2019-03-01 '),
                    ( 31 , 5 , 5 , 1.442 , ' 2019-03-02 '),
                    ( 31 , 2 , 6 , 0.738 , ' 2019-03-03 '),
                    ( 31 , 5 , 7 , 0.871 , ' 2019-03-03 '),
                    ( 32 , 4 , 1 , 1.57 , ' 2019-03-03 '),
                    ( 32 , 3 , 2 , 1.606 , ' 2019-03-04 '),
                    ( 32 , 2 , 3 , 1.742 , ' 2019-03-04 '),
                    ( 32 , 5 , 4 , 1.373 , ' 2019-03-02 '),
                    ( 32 , 1 , 5 , 1.392 , ' 2019-03-01 '),
                    ( 32 , 5 , 6 , 0.79 , ' 2019-03-02 '),
                    ( 32 , 4 , 7 , 0.812 , ' 2019-03-01 '),
                    ( 33 , 3 , 1 , 1.591 , ' 2019-03-02 '),
                    ( 33 , 2 , 2 , 1.659 , ' 2019-03-03 '),
                    ( 33 , 4 , 3 , 1.75 , ' 2019-03-02 '),
                    ( 33 , 2 , 4 , 1.258 , ' 2019-03-01 '),
                    ( 33 , 1 , 5 , 1.482 , ' 2019-03-03 '),
                    ( 33 , 2 , 6 , 0.801 , ' 2019-03-04 '),
                    ( 33 , 2 , 7 , 0.892 , ' 2019-03-03 '),
                    ( 34 , 4 , 1 , 1.462 , ' 2019-03-01 '),
                    ( 34 , 5 , 2 , 1.562 , ' 2019-03-04 '),
                    ( 34 , 5 , 3 , 1.717 , ' 2019-03-04 '),
                    ( 34 , 5 , 4 , 1.389 , ' 2019-03-02 '),
                    ( 34 , 1 , 5 , 1.376 , ' 2019-03-04 '),
                    ( 34 , 5 , 6 , 0.765 , ' 2019-03-03 '),
                    ( 34 , 2 , 7 , 0.781 , ' 2019-03-03 ') ;`
    return result;
}

module.exports = initialize;
