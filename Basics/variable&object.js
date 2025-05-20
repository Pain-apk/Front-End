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