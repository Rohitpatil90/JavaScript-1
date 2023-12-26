// 01_functions_parameters.js

// functions and parameters.

// syntax for function :
 
function saymyname(){
    console.log("r");
    console.log("o");
    console.log("h");
    console.log("i");
    console.log("t");
}
saymyname()

// 2 :
function addtwonumbers(num1 , num2){
    console.log(num1+num2);
}
//addtwonumbers(12,15) 27
//addtwonumbers(12,"27") 1227
//addtwonumbers("12",27)  1227
//addtwonumbers(12 , null) 12

//3 :

function tellmyname(num1,num2){
    let result = num1 + num2
    return result
    // let name = "rohit"  this two lines are not executed because you write return further code will not be executed
   // console.log(name);
}

let myresult = tellmyname(12,27)
console.log(myresult);


// 4 :

function loginusermessage(username){
    return `${username} is just logged in` // string interpolation
}

let message = loginusermessage("rhohit9022") // rohit is just logged in
console.log(message);
console.log(loginusermessage()); // undefined is just logged in


// 5 :

function loggedIn(username1){
    if(username1 == undefined){
        let message = console.log("please enter username");
        return message
    }
    else{
        let message = console.log(`${username1} is logged IN Now`);
        return message
    }
}

 //console.log(loggedIn());  // please enter username
 console.log(loggedIn("rohit")); //rohit is logged in now

 

