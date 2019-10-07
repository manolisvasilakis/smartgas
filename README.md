# Smartgas - Fuel Price Observatory
This application was developped as part of the 9th semester course, Software Engineering of the National Technical University of Athens, taught by Konstantinos Saidis and Vasilios Veskoukis in the winter semester of 2018. The project was developed by a team of 6 members.

## Task description

### General description
The project task is to develop an online price observatory, wich will allow users to record electronically fuel prices in various gas stations. The observatory will operate by crowdsourcing, so volunteers record prices to share them with others through a web service. Special emphasis should be placed on the development of the appropriate web API.

### Technical Specifications
* The observatory shall consist of (a) a backend and (b) a frontend subsystems, which should be implemented in Java, Javascript or similar. 
* The language of the user interfaces should be in Greek.
* A build automation tool of team's choice should be used.
* The observatory should provide an appropriate RESTful Web API to interface with third party applications. 
* The following three user roles should be supported: 
  - registered user - volunteer
  - administrator
  - reader 
* HTTPS protocol should be supported for all pages and utilities via self-signed certificate.
* Spatial display of data should be done through a platform with an online map service (e.g. Google Maps or equivalent) with use of a suitable javascript library (openlayers, mapbox or other).
* Responsive, user-friendly designed and fully funcional pages should be provided in a uniform way for Desktop, Tablet and Mobile devices.

## Getting Started 
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* MySQL and Redis should be installed and configured appropriatly. 

* GULP should be installed too.
```
npm i gulp gulp-cli gulp-multi-process npm
```
### Installing

Execute the following in order to install dependencies, run the automated tests and bootstrap the servers.  
```
$(npm bin)/gulp

```

## Built With

### Backend 

* NodeJS
* Express.js
* MySQL - Main database
* Redis - Used in order to invalidate Json Web Tokens of users that have logged out.

### Frontend

* Angular
* Angular Material
* HTML5 and CSS

### Test Automation

* Jest

### Building Automation

* GULP

## Team members

| Name                        | github user name                                         |
| --------------------------- |--------------------------------------------------------- |
|Alex Kafiris                 |[alexkaf](https://github.com/alexkaf)                     |
|Eleftherios Kanavakis        |[filmnoirprod](https://github.com/filmnoirprod)           |
|Manolis Vasilakis            |[manolisvasilakis](https://github.com/manolisvasilakis)   |
|Constantinos Karouzos        |[ckarouzos](https://github.com/ckarouzos)                 |
|Manos Zaranis                |[manzar96](https://github.com/manzar96)                   |
|Konstantinos Alexakis        |[konAlexakis](https://github.com/konAlexakis)             |

## Desktop overview 
  

### Application's Main Page

<img src="https://github.com/filmnoirprod/smartgas/blob/master/Images/img1.png" width="800" height="400">

### Add New Fuel Type 

<img src="https://github.com/filmnoirprod/smartgas/blob/master/Images/img2.png" width="800" height="400">

### Choose your current location from a drop down list of close locations

<img src="https://github.com/filmnoirprod/smartgas/blob/master/Images/img3.png" width="800" height="400">

### Email verification after signing up

<img src="https://github.com/filmnoirprod/smartgas/blob/master/Images/img4.png" width="800" height="400">

### History of user's entries

<img src="https://github.com/filmnoirprod/smartgas/blob/master/Images/img5.png" width="800" height="400">

### Search for fuel entries using max distance slide bar

<img src="https://github.com/filmnoirprod/smartgas/blob/master/Images/img6.png" width="800" height="400">

### Add a new price fuel entry

<img src="https://github.com/filmnoirprod/smartgas/blob/master/Images/img7.png" width="800" height="400">

### Delete a fuel Type

<img src="https://github.com/filmnoirprod/smartgas/blob/master/Images/img8.png" width="800" height="400">

### Find a nearby gas station

<img src="https://github.com/filmnoirprod/smartgas/blob/master/Images/img9.png" width="800" height="400">

### An example of the application's responsiveness (Apple iPhone X Display)

<img src="https://github.com/filmnoirprod/smartgas/blob/master/Images/img10.png" width="800" height="400">
