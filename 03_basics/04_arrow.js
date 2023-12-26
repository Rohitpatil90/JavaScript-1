// this.variableName => current context (meanig in js)
// interview : browser ke andar jo global object hey vo window object hwy

// create simple object :
const myobj = {
    username : "suraj8744" ,
    price : 899 ,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

myobj.welcomeMessage()
myobj.username = "somanath1234"
myobj.welcomeMessage()

console.log(this); // empty because we can't declare any single variable in global 


// arrow function :
  const myarrow = () =>{
    let FirstName = "Sai"
    let LastName = "sudarshan"
    console.log(this);
  }
  myarrow()  // {} empty paranthisis

  // arrow function syntax
  //() => {} // synatx of arrow function
  const myarrowfunction = ( num11 , num12) =>{     // this synatx also used for arrow function , function i stored on const variable
      return num11 + num12     
  } 
console.log(myarrowfunction(10,12));

// 2nd way 
// implicit return
const ndarrowfunction = (num21,num23) =>  num21 + num23
console.log(ndarrowfunction(50,101));

// Note : curley brasis hoga to return likhna hoga aur implicit hoga to nhi likhna hoga

const myarrowforobj = (num31, num32) => ({name:"rohit"})  // parathisis is req for to declare object in arrow function
console.log(myarrowforobj(12,12));
