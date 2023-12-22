// Date And Time :
let dob = new Date()
console.log(dob);                 // 2023-12-22T19:37:33.025Z
console.log(dob.toDateString());  // Fri Dec 22 2023
console.log(dob.toString());      // Fri Dec 22 2023 19:39:18 GMT+0000 (Coordinated Universal Time)
console.log(dob.toISOString());   // 2023-12-22T19:41:30.599Z
console.log(dob.toJSON());        // 2023-12-22T19:41:30.599Z
console.log(dob.toLocaleString());// 12/22/2023, 7:41:30 PM

// different ways to write date

let loggedDate1 = new Date(2023, 0, 23);           // 2023-01-23T00:00:00.000Z
let loggedDate2 = new Date("2023, 2, 15, 5, 3");   // Invalid Date
let loggedDate3 = new Date("2023-10-11");          // 2023-10-11T00:00:00.000Z
let loggedDate4 = new Date("01-04-2023");          // 2023-01-04T00:00:00.000Z

console.log(loggedDate1);
console.log(loggedDate2);
console.log(loggedDate3);
console.log(loggedDate4);

let mytime = Date.now()
console.log(mytime);
console.log(mytime.gettime());
