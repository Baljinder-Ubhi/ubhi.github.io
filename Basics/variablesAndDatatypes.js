const accountId = 144553
let accountEmail = "abc@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "b@u.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountEmail);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

//-------------------Data Types----------------

"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

let name = "Ubhi"
let age = 30
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object
