/*
   Memory : 
            1)stack
            2) Heap

                1)stack :
                           for primitive datatype stack memory is used */
                           //ex. 
                           let firstName = "rohit"
                           let secondName = firstName
                           secondName = "satyam"
                           console.log(firstName);
                           console.log(secondName);

                           // in stack - primitive - and we get the copy in stack

            /*  2)Heap :
                          for non-primitive datatype heap memory is used */
                          //ex. 
                          let myobj1 = {
                            email : "rohit123@gmail.com" ,
                            roll : 234
                          }

                          let myobj2 = myobj1

                          myobj2.email = "satyam1234@gmail.com"

                          console.log(myobj1.email);
                          console.log(myobj2.email);

                          /* In the Heap memory we get the reference what we assign the last line that we refer to all*/ 

                          // two obj.email same eamil because it ref => heap
                          // two names are diff because it copy => stack 
