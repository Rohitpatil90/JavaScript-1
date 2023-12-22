let str1 = "superman"
let str2 = "batman"

const str3 = str1 + " is Stronger Than " + str2      // concatinating but this is old don't use
console.log(str3);

// string interpolation (modern way of concatinating)
console.log(`No i think  ${str2}  is Stronger than ${str1}`);

// 2nd way to declare string 
const gameName = new String ('rohan')
console.log(gameName);
console.log(gameName[0]);   // finding value using index

// methods
console.log(gameName.__proto__); // object => {} (<=output)
console.log(gameName.length);    // shows the length of string
console.log(gameName.slice(0, 4));  // output => roha
console.log(gameName.trim());  // trim the unwanted space
console.log(gameName.charAt(4)); // n
console.log(gameName.indexOf('a')); // it shows the index of letter
console.log(gameName.substring(0 , 4)); //