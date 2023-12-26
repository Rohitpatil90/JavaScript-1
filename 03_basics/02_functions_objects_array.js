// 02_functions_objects_array.js

// functions :
function CalculteCartValues(val1, val2, ...num1){   ///... rest operator / spred operator same but calling is based on what he was doing
    // rest operator is used to store multiple elements in one variable in form of array.
    return num1
}

//console.log(CalculteCartValues(1212)); //1212
console.log(CalculteCartValues(500,300,200,1000, 2000, 101));  // val1=>500 , val2 => 300 , num1 =>[200, 1000, 2000, 101]


//  objects : 
// passing objects in function .
let myobj ={
    username : "rohan",
    price : "499"
}

function AccountLogin( obj){
     console.log(`username is ${obj.username} and the price is ${obj.price}`);
}
   console.log(AccountLogin(myobj));


// direct object passing to function
   function FBLogin(FBobj){
    console.log(`email is ${FBobj.email} and password is ${FBobj.pass} this are the details`);
   }
   FBLogin({
    email : "marco123@gmail.com",
    pass : "marco@643"
   })


// passing array's in functions

let myarray = ["ms dhoni", "virat kkohli", "sanju samson"]
function cricketers(cricplayers){
    console.log(`${cricplayers} this are my favourite players`);
}
cricketers(myarray) // passing array to function
cricketers(["rinku singh", "sanju samson", "rishabh pant", "ruturaj gaikwad"]) // direct array passing.


