/* Datatypes :
        
     1) primitive :
                     1) string 
                     2) number
                     3) boolean
                     4) null
                     5) undefined
                     6) symbol  (symbol is use to make value unique)
                     7) bigInt  (use for large numbers) */
        
                     //ex.
                     let name = "rohit" //string
                     let age = 23 //number
                     let isLoggedIn = true //boolean
                     let score; //undefined
                     const id = Symbol("123")  //symbol
                     let bigNumber = 78875343572828974n //bigInt n convert number datatype into bigInt datatype
                     let result = null  //

                     // type of datatype and value
                     //string 
                     console.log(name);         //rohit
                     console.log(typeof name);  //string

                     //number 
                     console.log(age);          //23
                     console.log(typeof age);   //number

                     //boolean
                     console.log(isLoggedIn);  //true
                     console.log(typeof isLoggedIn);   //boolean

                     //null 
                     console.log(result);        //null
                     console.log(typeof result); //object

                     //undefined
                     console.log(score);       //undefined
                     console.log(typeof score); //undefined

                     //symbol
                     console.log(id);         //symbol(123)
                     console.log(typeof id);  //symbol

                     // bigInt
                     console.log(bigNumber);         //784947656353647484n
                     console.log(typeof bigNumber);  //bigint


  /*   2) Reference Type (non-primitive) : (directly allocated memory refrence)
                     1) array
                     2) object
                     3) function */


                     // ex. type of non-primitive data type
                     //array
                     let arrayEx = ["homeLander" , "superman" , "batman" , "spiderMan"]
                     console.log(arrayEx);  // ["homeLander" , "superman" , "batman" , "spiderMan"]
                     console.log(typeof arrayEx); // object

                     //object
                     let myob = {
                       

                     }
                     console.log(myob);          //{}
                     console.log(typeof myob);  //object

                     //function
                     function showinfo(){
                        student:suraj
                        rollno:45
                        div:A
                     }
                     console.log(showinfo);         //[function: showinfo]
                     console.log(typeof showinfo);  //function

                     