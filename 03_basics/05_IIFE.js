// Immetiately Invoked function Expressions (IIFE) :

(function chai(){  //named IIFE
    console.log(`DB is connected`);    // synthaticly corrected IIFE
})();   // semi colon is req to end function.

// INTERVIEW QUE : global scope ke polution se problem hoti hey kahi barr to uss global scope ke variables hey aur kuch bhi declartion hey
//                 huskey pollution ko hatane ke liye humne IIFE ka use kiya.


// IIFE for arrow function.
((name) => {  // Unnamed IIFE , Simple IIFE
    console.log(`My name is ${name}`);
})("rohit")
