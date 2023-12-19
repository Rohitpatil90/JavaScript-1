let name = "Rohit"
const accountID = 1234
let accountEmail = "rohit123@gmail.com"
var accountpass = "12345678"
accountcity = "karad"

//accountID = 123 not allowed because once you declare a const not allowed to change

/*
prefer not to use var
because of issue in block scope and function scope
*/

console.log(name);
console.table([name, accountID, accountEmail, accountpass, accountcity])