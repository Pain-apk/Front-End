//operators allows you to test qualities of varibles
//there are 5 types of operators
//1.Arithmetic operators(+,-,*,/,**,%,++,--)
//2.Assignment Operators(=,+=,-=,*=,/=)
//3.Comparison Operators(==,===,!=,!==,>,<,>=,<=) - used to compare two values and return a boolean result
//4.Logical Operators(&&,||,!)
//5.Bitwise Operators(&,|,^,~,<<,>>)
//6.Ternary Operators( ? : )
//Arithmeti Operators
let a = 10;
let b = 20;
let sum = a+b;
//+ Operator is used to add two numbers or concatenate two strings
let string1= "hello";
let string2= "Aditya";
let string3 = string1 + string2;
console.log(string3);
console.log(sum);
let diff = b-a;
console.log(diff);
let product = a*b;
console.log(product);
let quotient = a/b;
console.log(quotient);
let remainder = a%b;
console.log(remainder);
let exponent = a**b;
console.log("We used exponent operator to find a to the power of  2  =" +a**2);
a ++;
console.log(a);
//increment 1 is added to a
b --;
console.log(b);
//decrement 1 is substracted from b
//Assignment Operators
let c=a+b;
//Assignment of a+b to c using =
console.log(c);
a+=b;
//assignment of a+b to a using +=
console.log(a);
//similary we can use -=,*=,/=,%=,**=
//Comparison Operators
let x = 10;
let y = 20;
let stringx = "10";
console.log(x==y);
//== operator is used to compare two values and return a boolean result
console.log(x==stringx);
//== operators is not that strict as it allows data type conversionn
console.log(x===stringx);
//===, !== operators is used when you strictly want to compare two values without data type conversion
console.log(x!=y);
//not equal to ad !== strictly not equal to
//other operators are >,<,>=,<=
//Logical Operators
let v = 10;
let w = 20;
let z = 30;
let p = 40;
console.log(v<w && w>p);
//&& operator is used to check is both conditions are true
console.log(v<w || w>p);
// || operator is used to check if any one conditio is true
// ! operator is used to check if condition is false
