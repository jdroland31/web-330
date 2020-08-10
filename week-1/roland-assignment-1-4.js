var header = require('../roland-header.js');

/*
============================================
; Title:  roland-assignment-1-4.js
; Author: Jonathan Roland
; Date:   9 August 2020
; Modified By:
; Description: A program demonstrating an understanding of function interfaces in Javascript
;===========================================
Expected output:

FirstName LastName
<AssignmentName>
<Today's Date>

Car added to the racetrack!
Truck added to the racetrack!
Jeep added to the racetrack!

-- The following vehicles have been added to the racetrack --
Truck: <Model>
Car: <Model>
Jeep: <Model>

*/

// start program

//output exercise header
console.log(header.display('Jonathan','Roland','Assignment 1.4'));
console.log('\n');

function Car(model){
    this.type = "Car";
    this.model = model;
}

Car.prototype.start = function(){
    return "Car: "+this.model+" added to the racetrack!";
}

function Truck(model,year){
    this.type = "Truck";
    this.model = model;
    this.year = year;
}

Truck.prototype.start = function(){
    return "Truck: "+this.model+" added to the racetrack!";
}

function Jeep(model,year,color){
    this.type = "Jeep";
    this.model = model;
    this.year = year;
    this.color = color;
}

Jeep.prototype.start = function(){
    return "Jeep: "+this.model+" added to the racetrack!";
}

var racetrack = [];

function driveIt(vehicle){
    racetrack.push(vehicle.start());
}

var car = new Car('535i');

var truck = new Truck('F250','2011');

var jeep = new Jeep('Wrangler','2009','Sand');

driveIt(car);

driveIt(truck);

driveIt(jeep);

console.log("-- The following vehicles have been added to the racetrack --");

for(var i=0; i<racetrack.length; i++){
    console.log(racetrack[i]);
}


// end program