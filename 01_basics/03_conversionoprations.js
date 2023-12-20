let score = "33"
//console.log(score);
//console.log(typeof score);

let marks = Number(score)
//console.log(typeof marks);
//console.log(marks);

let result = String(marks)
//console.log(typeof result);
//console.log(result);

// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0

let booleanNo = 999
let conversionToBollean = Boolean(booleanNo)
//console.log(typeof conversionToBollean);
//console.log(conversionToBollean);

// 1 => true
// 0 => false
// rohit => error
// "rohit" => true
// 999 => true
// "" => false


/********************** Operations  ************************************************/

let value = 3
//console.log(-value); // => -3

//console.log(2+2); => 2
//console.log(2-3); => -1
//console.log(2*3); => 6
//console.log(2**3); => 8
//console.log(2/3); => 0.6666
//console.log(2%3); => 2

let str1 = "hi"
let str2 = " rohit"
let str3 = str1 + str2
//console.log(str3);  => hi rohit

//console.log("1" + 2);  => 12
//console.log(1 + "2");  => 12
//console.log("1"+2+2);  => 122
//console.log(1+2+"2");  => 32
//console.log(1+2+"3"+2+1); => 3321

//console.log(1+2-3*4%8); => -1 (don't do this is not best practice)

//console.log(true); => true
//console.log(+true); => 1
//console.log(true+); => error
//console.log(+""); => 0

let num1 , num2 , num3

num1 = num2 = num3 = 2+2
//console.table([num1 , num2 , num3]) => 4 each but don't do this this is not best practice try in simple way

let gamecounter = 100
gamecounter++                //postfix
console.log(gamecounter);    //101
gamecounter = 200
++gamecounter                //prefix
console.log(gamecounter);    //201







