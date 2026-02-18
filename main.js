
//                             //## JavaScript Refresh Notes

// This section is a quick recap of the core JavaScript concepts I needed to refresh after getting back to working with React again.

// The goal is to revisit the fundamentals (scope, closures, promises, async/await, array methods, etc.) to make sure my React code stays clean, predictable, and easier to debug.

// These notes are not meant to be a full guide, but rather a focused reminder of the parts of JavaScript that are used frequently in real-world React development.



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


// let myFriend =["Ahmed", "Mohamed" , "Sayed", "Ali"];

// console.log(`hello ${myFriend[0]}`); //Ahmed

// console.log(`hello ${myFriend[1][2]}`); //h

// console.log(`hello ${myFriend[3]}`); //"Marwan Ali"

// console.log(`hello ${myFriend[3][1]}`); //" Ali"

// console.log(`hello ${myFriend[3][1][1]}`); //" l"

// myFriend[1] ="mahmoud" //update array

// myFriend[3] ="anas" //changed the nested array to string

// console.log(myFriend) // ['Ahmed', 'mahmoud', 'Sayed', 'anas']

// console.log (Array.isArray(myFriend)) //true

// let str ="momo"

// console.log (Array.isArray(str)) //false



                //length , index of , shift , sort

// console.log(myFriend.length);

// myFriend[3] = "mohsen";

// console.log(myFriend.length) ="mohsen"; // add to  array

// console.log(myFriend.length-1) ="mohsen"; //override the last value in any array


// myFriend.unshift("lolo","soso"); //adding in the start of the array
// myFriend.push("lolo","soso"); //adding in the last of the array
// myFriend.shift() //remove the first element in the array

// console.log(myFriend)


// console.log(myFriend.indexOf("Ahmed", 2)) //اللي جنبها دي انا قولتله ابحث من اندكس 2
// //-1 عشان ملاقهوش

// console.log(myFriend.indexOf("Sayed", 1))
// //2

//sort +ve numbers then -ve then strings ABC

//reverse العكس

// myFriend.sort().reverse();
// console.log(myFriend.slice(1,3)) //not included the ending //mohamed sayed
// console.log(myFriend.slice(-3,-1)) //mohamed sayed بس العد من اليمين

// // myFriend.splice(0,0,"Ahmed","hassan")

// console.log(myFriend)

// myFriend.splice(2,1,"Ahmed","hassan") //sayed will be deleted and other strings will be replaced him

// console.log(myFriend)

// let newarray  =[1,2]
// let friends = myFriend.concat(newarray,"Ahmed","hassan") //sayed will be deleted and other strings will be replaced him

// console.log(friends)

// console.log(friends.join(" ,  "))  يفصل بين العناصر ويزيل الاقواس


//for loops


//continue عديه اعمل له Skip
//break بنخرج برة اللووب


//label

// mainLoop:
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     if (j === 1) {
//       continue mainLoop; // يكمل اللوب الخارجي مباشرة
//     }
//     console.log(i, j);
//   }
// }


//do while لازم هتنفذ اول اتيريشن بعد كدة بتشيك على الشرط

//While بتشيك الاول فممكن جدا اول اتيريشن متحصلشح



                      //FUNCTIONS

// function sayhello(userName, age){

//     if(age === undefined)
// age ="UnKnown"

// age = age || "UnKnown"

//     console.log(`Hello from my function ${userName} and my age is ${age}`)
// }

// sayhello(" ya nosa" );


// function sayhello(userName, age){
//     return `Hello from my function ${userName} and my age is ${age}`
// }

//default value for parameters are undefined


                                      //rest parameters


// function calc (...numbers){
// console.log(Array.isArray(numbers)) //true ه=هي عبارة عن مصفوفة لماحطيت تريبل دوت

// let result =0;

// for (let i = 0 ; i<numbers.length ; i++){
// result+=numbers[i];
// }
// return `final result of summition is ${result}`
// }

// console.log(calc(10,20,30,40,50));


                                //Anonymous function ملهاش اسم او تايتل

//  document.getElementById("show").onclick = function (){
//     console.log("show");
//  } ;            
 
//  setTimeout(function(){  //timeout 2 sec , no need to name my function 
//     console.log("good");
//  },2000)


                               //Arrow functions

                               //without parameters 
                               
//  let print1 = () => 10;  //must be one line
//  console.log(print1());


//   let print2 = (num, name) => {return`hell this is num ${num} and this is the string ${name}`};
 
//  console.log(print2(15,"hi")); //هنا لازم ريترن عشان في اقواس


//priority for local scope then to global scope

//lexical scope  multi functions with different scopes


//higher order functions 

let myNums = [1,2,3,4,5,6]

let maped = myNums.map(function(element, index , arr){
    return element+element
})


                                    //higher order map function with arrow function

// //1
// let mapedWithArrow = myNums.map((element, index , arr) => element+element)
// //2
// let mapedWithArrow1input = myNums.map((element) => element+element)

// console.log(maped)
// console.log(mapedWithArrow)
// console.log(mapedWithArrow1input)

// function addition(elm){
//     return elm+elm
// }
 
// //3
// let add = myNums.map(addition);
// console.log(add)
 



// transfor array to string use ==> join("")
// transfor string to array use ==> split("")


                            // paractice on map




// let mixedString = "AnAs"
// let oppositeMixedString = mixedString.split("")
//                                     .map(function(element){
//                                         return element === element.toLowerCase()?element.toUpperCase(): element.toLowerCase()
//                                     })
// console.log(oppositeMixedString.join(""));    

// let numbers =[1, -5, 2,-3]
// let oppositeNumbers = numbers.map(function(element){
//     return  element*-1 
// })
// console.log(oppositeNumbers)

// let NumberWithName ="A45nas205"
// let ignoreNumbers = NumberWithName.split("").map(function(element){
//     return isNaN(element)? element: ""
// })

// let ignoreNumbersArrow = NumberWithName.split("").map((element) => isNaN(element)? element: ""
// )

// console.log(ignoreNumbers.join(""))
// console.log(ignoreNumbersArrow.join(""))




                                    //Higher order Function fillter

 // if filter condition return true the element with return with same value 
 
//  let names =["anas", "mo", "ahmed"]

//  let filtered = names.filter(function(element){
//     return element.startsWith("a")
//  })

//  console.log(filtered)


                                // Higher order Reduce Function


// let nums =[1,2,3,4,5]
// let addWithReduce= nums.reduce(function(accumlator , current , index , arr){
//     return accumlator+current
// })

// console.log(addWithReduce)

// //with initial value 
// let addWithReduceWithInitial= nums.reduce(function(accumlator , current , index , arr){
//     return accumlator+current
// },0)

// console.log(addWithReduceWithInitial)


//first accumilator first value is the first element if ther's no dfault value
//then the result of the function is the next accumilator value 

 // first current the is the  next element after accumilator or after initial value
//then the next current is the next element 




                        // Higher Order Function ForEach


// let allLis = document.querySelectorAll("ul li");
// let allDivs = document.querySelectorAll(".content div");

// allLis.forEach(function(ele) { 

//     ele.onclick = function()
    
//     {

//         //remove active class from all element 
//         allLis.forEach(function(ele){
//             ele.classList.remove("active")
//         })

//         //add the Active class to the clicked class only

//  this.classList.add("active")   // 
 
//      //hide all divs

//      allDivs.forEach(function(ele){
//         ele.style.display = "none"
//      });

//     };  

// });

                        //Object



// let user = {
//   name: "Anas",
//   addresses: {
//     egypt: {
//       one: "Cairo",
//       two: "Alexandria"
//     }
//   }
// };

// console.log(user["addresses"]["egypt"]["one"]); // Cairo

// user["phone"] = 022222222; //adding new prop to object
// console.log(user) 

// user.sayHello = function(){ //adding methods to object
//     return 'hello'
// }
// console.log(user.sayHello) 


//                          //decliration with new keyword 

// let userwithnew = new Object({
//     age : 20
// });

// // userwithnew["phone"] = 022222222; //adding new prop to object
// // console.log(userwithnew) 

// userwithnew.sayHello = function(){ //adding methods to object

// return this.age*2

// }
// console.log(userwithnew.sayHello) 

// console.log(userwithnew) 


                           //this

// myvar ="ahlan"

// console.log(this) //window
// console.log(this.myvar) //ahlan

//this in the scope of object refer to the object instead of user/age you can use this.age


                        //decliration with Object.create({}) method 


// let obj =  Object.create();

                                        //copying object

// let userwithnew = new Object({
//     age : 20
// });

// userwithnew.sayHello = function(){ //adding methods to object

// return this.age*2

// }

// let obj =  Object.create(userwithnew);

// obj.a = 10;
// obj.age =30;

// console.log(obj); //why not returning the multible
// console.log(obj.sayHello()); //60 عشان انا عامل this في الاوبجكت الاصلي



                                //declaring object with assign mehtod


                                
// let obj1 = new Object({
//     age : 10,
//     name : "anas", 
//     double : function(){
//         return this.age *2
//     }
// });

// let obj2 = new Object({
//     age : 20,
//     double : function(){
//         return this.age *2
//     }
// });

// let target = new Object({
//     age : 30,
//     double : function(){
//         return this.age *2
//     }
// });


// let assignedObj = Object.assign({},obj1, obj2); 

// // assignedObj.age = 50;

// console.log(assignedObj) 
// console.log(target)  // the same as assignedObj

// console.log(assignedObj.double()) //100





                                    //DOM

// document.getElementById(); //for id 
// document.getElementsByName(); //for name ex: p
// document.getElementsByClassName(); //for class
// document.querySelector(); //id , class or name 
// let myQqueryall =document.querySelectorAll(); //array of elements

// console.log(myQqueryall[1]);
// console.log(document.title) //page title
// console.log(document.body) //page body
// console.log(document.forms) //page forms
// console.log(document.form[0]) // first page form
// console.log(document.form[0].obj1) // first page with name obj1 form
// console.log(document.links[0].href) // first link in the page


                               //InnerText , Attributes

// let myElement = document.querySelector(".js");
// console.log(myElement.innerHTML); //print html contain tags
// console.log(myElement.textContent);  //print html without tags tags

// let mylink = document.querySelector(".link");

// console.log(mylink.getAttribute("class"));
// console.log(mylink.getAttribute("href"));

// mylink.setAttribute("href","https://twitter.com");
// mylink.setAttribute("title","twitter");

// mylink.hasAttribute("data-src") // true or false if has attribute
//  mylink.removeAttribute("data-src"); // remove attribute
//mylink.hasAttributes();

// let myElement = document.createElement("div");
// let myAttr = document.createAttribute("data-custom");
// let mycomment = document.createComment("this is my div")

// myElement.setAttributeNode(myAttr); //attr willbe set with default values 
// myElement.setAttribute("data-test", "Testing");

// myElement.appendChild(document.createTextNode("Hello")); // ✅ صح

// myElement.appendChild(mycomment); 

// console.log(myElement);

//children  ==> get elements only
//childNodes ==> get elements with comments and texts


                                    //DOM EVENTS


//on click
// let mybtn = document.getElementById("btn");
// let mytext = document.getElementById("text");
// let mysubmit = document.getElementById("myform");

// mybtn.onclick = function (){
//     return console.log("clicked");
// }

// mybtn.oncontextmenu = function (){ //when click right
//     return console.log("clicked");
// }

// mybtn.onmouseenter = function (){ //when mouse hover
//     return console.log("clicked");
// }

// mybtn.onmouseleave = function (){ //when mouse leave hovering
//     return console.log("clicked");
// }

// mybtn.onscroll = function (){ //when scrolling
//     return console.log("clicked");
//}

// window.onresize = function (){ //when resize
//     return console.log("clicked");
// }

// mytext.onfocus = function (){ //when focus on text
//     return console.log("clicked");
// }

// mytext.onblur = function (){ //when focus get out of text
//     return console.log("blur");
// }

// mysubmit.onsubmit = function (){ //when focus dubmitting
//     return console.log("submit");
// }




                                //Validation

 //preventDefault() تمنع الفاليديشن الافتراضي

 const myform = document.getElementById("myform");
const username = document.getElementById("username");
const email = document.getElementById("email");
const error = document.getElementById("error");

// myform.addEventListener("submit", function (event) {

//     event.preventDefault(); // تمنع الإرسال والـ reload

//     if (username.value.trim() === "") {
//         error.textContent = "Username is required";
//         return;
//     }

//     if (email.value.trim() === "") {
//         error.textContent = "Email is required";
//         return;
//     }

//     error.textContent = "";
//     console.log("Form submitted successfully ✅");
// });


                            //Event simulation

                            
// email.onblur = function (){
//     email.focus() // ايفينت اجباري
// }


                            // classList


//  let element = document.getElementById("content");
// console.log(element.classList);

// console.log(element.classList.contains("osama"));  //if has a class with name osama
// console.log(element.classList.item("0"));  //class index 0

// element.onclick = function (){ //adding classed
//     element.classList.add("add-one", "add-two")
// }

// element.onclick = function (){ //removing classes
//     element.classList.add("one", "two")
// }

// element.onclick = function (){ // add removing if found or not like switch classes
//     element.classList.toggle("one", "two")
// }

                                //css style in DOM

// element.style.color = "red";
// element.style.cssText = "color : green ; opacity : 0.9";

// element.style.removeProperty("color"); //remove property
// element.style.setProperty("color","red"); //set property

// document.styleSheets[0].rules[0].style.removeProperty("color"); //if you have external css



                            //DOM BEFORE , AFTER , APPEND, preappend , REMOVE


//  let element = document.getElementById("content");
// let createdP = document.createElement("p");

// element.after(createdP) //set element after element
// element.before(createdP) //set element before element
// element.append(createdP) //set element in the last of element
//element.prepend(createdP) //set element in the first of element
// element.remove(); //remove the whole element

// console.log(element)



                             //   DOM traversing

// const child = document.getElementById("child1");

// console.log(child.parentElement);

// const parent = document.getElementById("parent");

// console.log(parent.children);        // عناصر فقط
// console.log(parent.childNodes);      // عناصر + نصوص + مسافات

// const child1 = document.getElementById("child1");

// child1.nextElementSibling;     // الأخ اللي بعده
// child1.previousElementSibling; // الأخ اللي قبله
// child1.nextSibling;//الااخ اللي بعده ومش شرط عنصر


                                // DOM CLoning نيخ عناصر
        
// var card = document.getElementById("card");
// var btn = document.getElementById("copy");

// btn.onclick = function () {
//     // عمل نسخة عميقة (deep clone)
//     var clone = card.cloneNode(true);

//     clone.id = "newone"
//     // إزالة الـ id عشان ما يتكررش
//     //clone.removeAttribute("id");

//     // ممكن تعدل محتوى النسخة لو عايز
//     clone.getElementsByTagName("h3")[0].textContent = "New Product";
//     clone.getElementsByTagName("p")[0].textContent = "Price: 200$";
// clone.id
//     // ضيف النسخة للصفحة
//     document.body.appendChild(clone);
// };


                                    //Add EventListener

//ممكن تضيف أكتر من Listener لنفس الحدث.

// const btn = document.getElementById("btn");

// btn.addEventListener("click", function() {
//     console.log("First listener");
// });

// btn.addEventListener("click", function() {
//     console.log("Second listener");
// });



const myP = document.getElementById("myP");

// لما تدوس على العنصر الأصلي يعمل clone
myP.onclick = function () {
    let newP = myP.cloneNode(true);  // deep clone
    newP.className = "clone";        // اعطيه class
    document.body.appendChild(newP); // أضفه للصفحة
};


// ده غلط، لأن querySelector بيرجع أول عنصر بس، والنسخة ممكن تكون لسة مش موجودة وقت التنفيذ

// let cloned = document.querySelector(".clone"); 
// cloned.onclick = function () {
//     console.log("I'm Cloned");
// };


// Event delegation لكل الـ clicks في الصفحة
document.addEventListener("click", function(e) {
    if (e.target) // العنصر اللي دوست عليه 
     {
        console.log(e.target); // هيرجع العنصر اللي اتضغط عليه
    }
});
