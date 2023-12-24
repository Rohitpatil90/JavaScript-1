// 05_Object_and_JSON.js
// Object de-structure and json api intro

// de-structure :
const course = {
    courseName : "salesforce Dev" ,
    price : 49999 ,
    courseInstructor : "rohit" ,
    coursePeriod : "6 Months"
}

//course.courseInstructor

const {courseInstructor : ins} = course;  // de-structure
console.log();
console.log(ins);


//---------------------------------- JSON  ---------------------------------------------

// json in json property write in string and also value in string
// json format :
  /*
   {
     this is json format 
   }
  */


   // ex. 
   {
    //"name" : "js Course" ,
    //"price" : "999"  ,                     // thid is the syntax of json 
    //"courseInstructor" : "rohit"
   }