// 03_objects.js

// objects : 
 /* 
      
     singleton = constructor se singleton banega 
               = literals se single ton nhi banta

    object literals = 
       const jsuser = {}
       
  */

let jsuser = {
    name : "rohit " ,
    age : 55 ,
    div : "A" ,
    email : "roh1234@gmail.com" ,
    isloggedIN : true ,
    lastLoginDays : ["sunday" , "monday" , "wednesday"]
}


console.log(jsuser.email); // 1st way to fetch object property value
console.log(jsuser["email"]); // 2nd way to fetch property value

