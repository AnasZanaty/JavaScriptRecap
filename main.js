
// window.onload = function (){
// document.querySelector("h1").style.color = "Blue";
// };

// const { use } = require("react");

// single line

// document.write("heelo page");

// document.createElement("")

// console.log("debug");

// console.error("error");

// console.table(["anas","mo"]);

// console.log("hello from %cjs %cfile", "color: red; font-size :40px","color: blue; font-size :40px")

//es6 

// var myname = "osama"

// console.log("hello"+ myname);


// ====> es6 standards

// console.log(`Hello ${myname}`);  


//data types

//string

//  ==> string
// console.log(typeof"anas"); 

// // ==> number
// console.log(typeof 3); 

// // ==> array  ==> object type 

// console.log(typeof[10, 20 , 30]); 

// console.log(typeof["aa", "dd" , "dd"]); 

// // object only 

// console.log(typeof {name:"osama", age:20 , country:'egy'}); 

// //boolean

// console.log(typeof true);

// //undefined مش موجود اصلا

// console.log(typeof undefined)

// //object فارغ القيمة

// console.log(typeof null)


// let age = 25; //Block scope
// age =30; //can be edited

// var name = "Anas"  //High scope //global scope
// name = "mo"

// const wife = "esraa";

// wife = "salma"; //TypeError: Assignment to constant variable


// const user = {name : "Ahmed"}

// user.name = "momo";


// function great(name){
//     return "Hello" + name;
// }

// const great = (name)=>{
//         return "Hello" + name;
// }

// console.log(100.10.toString());

// console.log(100.10.toFixed());

// console.log(parseInt("100 anas"))

// console.log(parseFloat("100.444 anas"))


// console.log (Number.isInteger("100")) //false

// console.log (Number.isNaN("ahmed"/2)) //true

// console.log (Number.isNaN("ahmed")) //false

// console.log(Math.round(99.5)); //100

// console.log(Math.ceil(99.2)); //100

// console.log(Math.floor(99.9)); //99

// console.log(Math.trunc(99.5)); //remove the remain //99

// console.log(Math.min(99.9, -100 , 2.5 , -7));  //-100

// console.log(Math.max(99.9, -100 , 2.5 , -7)); //99.9

// console.log(Math.pow(2,3)); //8

// console.log(Math.random()); // generate a random number from 1 to 0

// let name = "   anas   "
// console.log(name[1]); //space
// console.log(name.charAt(1)); //space
// console.log(name.length);

// console.log(name.length  );

// console.log(name.trim()  ); //remove spaces 
// console.log(name.trim().charAt(2).toUpperCase()  ); //A

// console.log(name.toUpperCase())
// console.log(name.toLowerCase());


// let a = "Anas full stack developer"

// console.log(a.indexOf("full"))

// console.log(a.indexOf("full", 8)); //start from index 8 but the count is from 0  ===> -1 as he didnt find it
// console.log(a.indexOf("stack", 8)); //start from index 8 but the count is from 0  ===>  10 as he found it after 8 indexes

// console.log(a.lastIndexOf("e")); //last e 23

// console.log(a.slice(0,5)); //Anas

// console.log(a.slice(-9,)); //developer

// console.log(a.repeat(2)); //Anas full stack developerAnas full stack developer

// console.log(a.split()); //returned as array

// console.log(a.split("")); //returned each char as array

// console.log(a.split(" ")); // ['Anas', 'full', 'stack', 'developer']

// console.log(a.split(" ",2));  //2 teh count of splits  ['Anas', 'full']

// console.log(a.substring(2,6));
// console.log(a.substring(6,2)); //swap directly
// console.log(a.substring(-9,));//transform any negative to 0 

// console.log(a.slice(2,6)); 
// console.log(a.slice(6,2)); //cant swap
// console.log(a.slice(-5,2));  // start counting indexes from the end

// console.log(a.substr(2,6)); // start counting from 2 and count another 6 
// console.log(a.substr(-5,2)); // / start counting indexes from the end and count another 2 (0 index not counted we are counting chars here)
// console.log(a.slice(-5,2)); // subtract from lenght to get the start which will be
// //start 20 , end  2  so it will fail 

// // console.log(a.includes("Anas")); //true //is string contains Anas in the whole string
// // console.log(a.includes("Anas",10));  //true//is string contains Anas start from index 10
// // console.log(a.startsWith("a",2));//true but "A" is false (case sensitive)
// // console.log(a.endsWith("r"));//true 
// // console.log(a.endsWith("s",4 ));//true  4 is the length of chars number of chars (Anas) and yes ends with s 


// //comparison operators

// console.log(10 != "10");  //false

// console.log(10==="10") //false  


// // == , !=  equal and not equal compare value only 
// // === , !== identical and not identical compare value and type 


// //ternary operator 

// //falcy value 
// let x= 0; // or let x=""  or let x =null

//  typeof(x) === typeof(7) ? console.log("equality") :
//  x>5 ?
//  console.log("not equal")
//  : console.log("nothing");


//  //null coalescing 

// console.log(`the price is ${x || 100}`) //100 for (null , undefined and falcey value)

// console.log(`the price is ${x ?? 100}`) //0 for (null , undefiend)


//ARRAYS


let myFriend =["Ahmed", "Mohamed" , "Sayed", ["Marwan" , "Ali"]];

console.log(`hello ${myFriend[0]}`); //Ahmed

console.log(`hello ${myFriend[1][2]}`); //h

console.log(`hello ${myFriend[3]}`); //"Marwan Ali"
 
console.log(`hello ${myFriend[3][1]}`); //" Ali"

console.log(`hello ${myFriend[3][1][1]}`); //" l"

myFriend[1] ="mahmoud" //update array

myFriend[3] ="anas" //changed the nested array to string 

console.log(myFriend) // ['Ahmed', 'mahmoud', 'Sayed', 'anas']

console.log (Array.isArray(myFriend)) //true

let str ="momo"

console.log (Array.isArray(str)) //false
