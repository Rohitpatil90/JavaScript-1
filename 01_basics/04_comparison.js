// simple comparisons
//console.log(2>1);   true
//console.log(1>2);   false
//console.log(2==2);  true
//console.log(3!=3);  false
//console.log(2>=2);  true


// some tricky comparisons
//console.log("2">1);  true
//console.log(3>"2");  true      it will solve but avoid this type of comparisons

//console.log(null>1);      false 
//console.log(null>0);      false 
//console.log(null == 0);  false 
//console.log(null >= 0);   true

// the reason is that an equality check == and comparisons>< >= <=work diffrently
// comparisons converts null into a number , treating it as 0
// thats why (3) null>= 0 is true and (1) null >= 0 is false

console.log(undefined > 0); //false
console.log(undefined < 0); // false
console.log(undefined >= 0);//false
console.log(undefined <= 0);// false
console.log(undefined == 0); // false

console.log(2 === 2);   // true
console.log("2" === 2); // false
