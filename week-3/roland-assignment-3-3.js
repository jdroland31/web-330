var header = require('../roland-header.js');
/*
============================================
; Title:  roland-assignment-3-3.js
; Author: Jonathan Roland
; Date:   23 August 2020
; Modified By:
; Description: A program demonstrating an understanding of the Singleton Pattern.
;===========================================
/*
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/
//output exercise header
console.log(header.display('Jonathan','Roland','Assignment 3.3'));
console.log('\n');

// start program

var DatabaseSingleton = (function() {
    var instance;    
    function createInstance() {        
        var postgresDatabase = new Object("Database instance initialized!");
        return postgresDatabase;    
    }     
    return {        
        getInstance: function() {            
            if (!instance) {                
                instance = createInstance();            
            }             
            return instance;        
        }     
} })();

function databaseSingletonTest(){
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();
    console.log("Same database instance? " + (oracle === postgres));
}

databaseSingletonTest();

// end program