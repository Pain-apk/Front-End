const a = 10;
//variable cannot be changed or reassigned
let b = 20;
//variable can be changed or reassigned
b = 30;
var c = 40;
/*type conversion of variables
String to number */
const str = "123";
const num = Number(str);
 //console.log(typeof num);
 //number to string
const num2 = 456;
const str2 = String(num2);
 //console.log(typeof str2);
 //number to boolean
const num3 = 0;
const bool = Boolean(num3);
 /* "33" => 33
 "33abs" => NaN
 null => 0
 */
 //console.log(typeof bool);
 //old way of declaring variables
const myArray = [1,2,3,4,5];
 object1 = {
    name: "Aditya",
   age: 20,
  isStudent: true,

}
nestedObject = {
    name: "aditya",
    age: 20,
    isStudent: true,
    address: {
  city: "Nagpur",
    state: "maharastra",
      country: "India",
  }
}
let people = [
  ["aditya","Rahul"],
  ["Aniket","Sanket"],
  ["Rohan","Sohan"],
];
console.table(people);
console.table(object1);
//Used to display data in tabular format
//Type conversion in JavaScript
//String to number
let score  = "44";
let scoreint = Number(score);
console.log(scoreint);
//If we convert this type of String then it will give NaN
let score2  = "44avc";
let scoreint2 = Number(score);
console.log(scoreint);
//console.log(myArray.slice(0,4));
//console.log(a);
//console.log(b);
//console.log(c);
for(i=0;i<myArray.length;i++){
  //  console.log(myArray[i]);

}
/*ways to print arrays, objects, nested objects
  and variables we can also pass their values to varuables*/
//console.log(object1.name);
//console.log(nestedObject.address.city);
//console.log(nestedObject['address']['state']);
//console.log(1+2+"2");
//console.log("1"+2+2);
//both will print different output and to prevent these
// we use () parenthesis inorder to seperate the values
// There are 2 types of memory Stack for primitive data types
// and heap for non primitive data types
//primitives data tpyes are called by vaalue
//primitive data type values are called by reference
//Stack(primitive), Heap(non-primitive)
