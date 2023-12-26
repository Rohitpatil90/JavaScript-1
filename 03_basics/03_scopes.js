// 03_scopes.js
let num1 = 10
const num2 = 20   // global scope
var num3 = 30

{} // => we call him scope only when function , if-else , for loop not for object

if(true){
    let num4 = 40
    const num5 = 50   // block scope
    var num6 = 60
}
//console.log(num4) error because of local scope
//console.log(num5) error because of local scope  this variables are declared in local scope we can't acceses this variables outside of the scope
console.log(num6);  // this is accesess but this is wrong that's why we avoid to use var.

// Note : 
// global are different in inspect console and diff in our environment where we node to run js.


// nested scope :
   // functions :
   function MyCurrentLocation(){
    const country = "India"
    function insideLocation() {
        const city = "delhi"
        console.log(`my country is ${country} and city is ${city}`);
    }
    //console.log(`city is ${insideLocation.city}`); this is wrong because we can't access state outside of scope
    insideLocation() // req call inside function after outside function , also calling sub-function
   }
   MyCurrentLocation()  // calling main function

   // if-else scope
   if(true){
    let myname = "suraj"
    if(myname == "suraj"){
        let surname = "salunkhe"
        console.log(`all details are filled correctly`);
        console.log(`First Name of student is ${myname} and Last Name is ${surname}`);
    }
   }



   // ---------------------- Interesting -------------------------------------------------
   addonenum(12)  // we can access this in function
   function addonenum(num1){
    return num1 + 1                      // this is function
   } 

   
   addtwonum(15) // we can't access in this function beacuse of because we pass function to an variable that's why
   const addtwonum = function addthreenum(num3){
    return num3 + 1                                       // this is also a function but we this in js expression
   }
   
   
