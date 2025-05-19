const a = 10;
//variable cannot be changed or reassigned
let b = 20;
//variable can be changed or reassigned
b = 30;
var c = 40;
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
console.log(myArray.slice(0,4));
console.log(a);
console.log(b);
console.log(c);
for(i=0;i<myArray.length;i++){
    console.log(myArray[i]);

}
/*ways to print arrays, objects, nested objects
  and variables we can also pass their values to varuables*/
console.log(object1.name);
console.log(nestedObject.address.city);
console.log(nestedObject['address']['state']);