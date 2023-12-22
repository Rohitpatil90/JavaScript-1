// number :
// we can declare the numbers in two ways :
let num1 = 100                 // js automatic find that is number
const num2 = new Number(300)   // dedicatly declare number
console.log(num1);
console.log(num2);

// methods 

let num4 = 30
console.log(num4.toFixed(2));  //30.00 increse 2 num after point
console.log(num4.toPrecision(1)); //30.000  consider as total number what we want 
let num5 = num4.toString(); // number converted into string 
console.log(num4.toString());  //30
console.log(num5);     //30
console.log(typeof num5); //string
console.log(num4.toLocaleString('en-In')); // 30


/*---------------------------Maths---------------------------------------- */

let num6 = 60.56
console.log(Math.abs(-4)); // 4 it gives absolute value if we give in negative but it returns positive only
console.log()

// .round()
// .ceil()
// .floor()
// .min()
// .max()
// 


