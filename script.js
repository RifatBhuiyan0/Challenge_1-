const myString = 'developer';

const myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

console.log(myNewString);



const x =  Math.ceil(Math.random()*100);
const y = Math.ceil(Math.random()*50);

/// Get the sum
const sum = x + y;
const sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);

// Get the difference
const difference = x - y;
const differenceOutput = `${x} - ${y} = ${difference}`;
console.log(differenceOutput);

// Get the product
const product = x*y;
const productOutput = `${x} _ ${y} = ${product}`;
console.log(productOutput);

// Get the quotient
const quotient = x / y;
const quotientOutput = `${x} / ${y} = ${quotient}`;
console.log(quotientOutput);

// Get the remainder
const rm = x % y;
const rmOutput = `${x} % ${y} = ${rm}`;
console.log(rmOutput);




let xy;

let d = new Date();

xy = d.toString();
console.log(xy);
xy = d.getFullYear();
console.log(xy);





