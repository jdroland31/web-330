var header = require('../roland-header.js');

/*
============================================
; Title:  roland-assignment-1-3.js
; Author: Jonathan Roland
; Date:   9 August 2020
; Modified By:
; Description: A program demonstrating an understanding of class-like functions in Javascript
;===========================================
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program

//output exercise header
console.log(header.display('Jonathan','Roland','Assignment 1.3'));
console.log('\n');

function Cellphone(manufacturer,model,color,price){
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;

    this.getPrice = function(){
        return this.price;
    }

    this.getModel = function(){
        return this.model;
    }

    this.getDetails = function(){
        return "Manufacturer: "+this.manufacturer+"\nModel: "+this.getModel()+"\nColor: "+this.color+"\nPrice: "+this.getPrice();
    }

}

var examplePhone = new Cellphone('Nokia','Huge Brick','Gray','$50');

console.log(examplePhone.getDetails());


// end program