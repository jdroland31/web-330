var header = require('../roland-header.js');

/*
============================================
; Title:  roland-assignment-2-2.js
; Author: Jonathan Roland
; Date:   17 August 2020
; Modified By:
; Description: A program demonstrating an understanding of prototypes in the context of object cloning.
;===========================================

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

//output exercise header
console.log(header.display('Jonathan','Roland','Assignment 2.2'));
console.log('\n');

var Person = {
    getAge: function(){
        return this.age;
    }
}

var testPerson = Object.create(Person,{
    "age":{
        "value":25
    },
    "fullname":{
        "value":"John Doe"
    }
});

testPerson.getAge();

console.log("The person's full name is "+testPerson.fullname);
console.log("The person's age is "+testPerson.getAge());

// end program