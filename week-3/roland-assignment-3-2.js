var header = require('../roland-header.js');
/*
============================================
; Title:  roland-assignment-2-2.js
; Author: Jonathan Roland
; Date:   23 August 2020
; Modified By:
; Description: A program demonstrating an understanding of the Factory Pattern.
;===========================================
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

//output exercise header
console.log(header.display('Jonathan','Roland','Assignment 3.2'));
console.log('\n');

// start program
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

function Oracle(properties){
    this.username = properties.username || "or-admin";
    this.password = properties.password || "or-s3cret";
    this.server = properties.server || "localhost:9090";
    this.version = properties.version || "12c"
}

function Informix(properties){
    this.username = properties.username || "in-admin";
    this.password = properties.password || "in-s3cret";
    this.server = properties.server || "localhost:8088";
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if(properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } 
    if(properties.databaseType === "MySql") {
        this.databaseClass = MySql;
    }
    if(properties.databaseType === "Oracle") {
        this.databaseClass = Oracle;
    } 
    if(properties.databaseType === "Informix") {
        this.databaseClass = Informix;
    }

    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "or-user",
    password: "or-pass"
});

var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: 'Informix',
    username: "in-user",
    password: "in-pass"
});

console.log(oracle);
console.log('\n');
console.log(informix);




// end program



