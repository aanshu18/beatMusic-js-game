//Js has JIT compiler

/*parser - Abstract binary tree - interpreter(line by line reading) - if there is repeated code like loop send to profiler which with help of compiler produces optimised Code--after interperter --bytecode is formed
*/
//viat - JS engine stored in chrome


//dynamically typed language --no need to specify data type

//weakly typed language -type coersion allowed

//a,_,$ var starting letter allowed

//var a,b=10;

/*if(cond)
    {}
else if(asd)
    console.log(asd);
else
    console.log(a)
*/


//    switch same as c



var a =1;

for(a=2;a<10;a++)   
    console.log("value os ",+a);

for(var a=2;a<9 ;a=a+2)
    console.log("value :"+a)

//for of...used in arrays and strings

let fruits = ['apple','peach','orange'];
for(item of fruits)
    console.log(item);

//for in ....used for enum ie objects...can be used for iterables in which index acts as keys

let fruits2 = ['apple','peach','orange'];
for(item in fruits2)
    console.log(item); //0,1,2 printed


//for each
var aa = [1,2,3,4,6];
aa.forEach(item => console.log(item));

//while same as c,c++
//do while same as c,c++

//operators

//binary shift operator also same as c,c++

//  == and ===  both used for comparison nut === allows type coercion that is one type can change into other at the time of comparison. ===does not allow type coercion
//Object.is(2,2) same as ===


//HOISTING
//JS engine allocates memory to func and var during the creation phase and not during execution phase
//This is also done in Global execution context
//there are 2 context , execution context and global execution context
//function is fully hoisted but for var ,only left part is hoisted
//let, const, (function..) will not get hoisted as hoisting takes place when the 1st word is var or function
    //var one =1; here js engine will hoist var one = "undefined"
    //var one =1; for this line , it will ignore one as it is already there
    //function a(){console.log("hi");} here hoisting occurs
    //function a(){console.log("hi again");} again func will be hoisted and rewritten

 //when we assign function to a variable we are using function expression
 
 // NOTE : every execution context has a creation and execution phase
 
 //changes are made in same var which is in window scope 


 /*
 var favFood ="grapes";
 var foodthought = function(){
    console.log("original choice "+ favFood);
    favFood = "sushi";
    console.log("new choice "+favFoog);
}
foogthought();

*/

 /*
here favFood is declared again in the function, so it will get hoisted in its execution context and will ignore the windows favFood


 var foodthought = function(){
    //favFood is yet not initialized that is why it will print undefined and throws an error like c,c++ or java
    console.log("original choice "+ favFood);
    favFood = "sushi";
    console.log("new choice "+favFoog);
}
foogthought();

*/

/*
var is partially hoisted as even when undefined it stores and prints undefined value and not throw an exception

console.log(a); undefined printed
var a = 10; 
console.log(a);
*/

//to stop this hoisting in var, let and const got created, when we use let and const used , it throw an exception

//let and const enables block level scope
//const reinitialisation not allowed

//if variable is initialised using let inside loop and accessed outside it will throw an exception

//we can declare same variable using var mulitple times irrespective of in same block or not, it doesnt show any exception, but in case of let keyword the scope is block level and if we re delcare a variable using let in same block it will show an exception


//CONST : const reference and value can be changed using property

//DATATYPE in JS
//dynamically types
//2 data types- Primitive ---int,float, String,Boolean,Symbol values

//primitive datatype --String
//" ", ' ', ` ` all three allowed for string
//example: 
/*
var age = 30;
var str = `Alex is ${age}`;
console.log(str);
*/

//console.log(typeof("abs"));

//Boolean - o, null, undefined are consider false

//Symbol - used for creating unique properties of objects

//2nd datatype- Object,Array

//Object- key value pair
//can be created using 1. Literal uses {} 2. using new keyword
 /* example*/
 /*
var obj = {
    name: "Anshu",
    roll_no:1,
    sing: function(){
        console.log(`${this.name} sings`);
    },
    dance(){
        console.log(`${this.name} dances`);
    }
};

console.log(obj.name);
obj.sing();
console.log(obj["roll_no"]);
obj.dance();
*/

//JS object creation using new keyword--used to create object via constructor

//object comparison ---using ==, === and Object.is() checks for referential equality
/*
let animal = new Object();
let cat = animal;
let dog = animal;
cat ==dog // true since same object reference
let horse = new Object(); //new address allocated
cat ==horse //false
cat == horse //false
Object.is(cat,horse); //false
*/

//Object comparison --compare content using JSON.stringify
//example  JSON.stringify(cat) === JSON.stringify(horse) //true


//Arrays in JS
//inside [], can have mixed datatypes as elements
/*
var a=[2,3,4,,6];
console.log(a[3]); //undefined
*/
/*
array are special type of object and new keyword can be used also to create array
let arr = new Array(23,'cat',new Object());
typeof(arr) //Object
*/


/*
Method in array

arr.push(3); //push at end of array
arr.pop(); //remove last element
arr.unshift(3); //add element at first index
arr.shift(); //remove first element

arr.splice(1,3,"hello"); //replace elements from 1 st to 3rd both included with "hello"

arr.splice(1,3,"hello"); //remove elements from 1st to 3rd element from the array

slice - create new array from existing array
let arr2 = arr.slice(1); it means assigns memory for arr2 for elements from index =1 of arr to length of arr 

let arr3 = [1,2,3,4,5]
let arr4 = arr3.slice(1,3); arr2 becomes [2,3] as last index is not included

arr.length     //gives length of the array

let arr = [1,2,3,4,5,6,7]

for(let i=0;i<arr.length;i++)
    console.log(arr[i]+" ");
arr.forEach(item => console.log(item+ " "));    

for(item of arr)
console.log(item);

for(item in arr)
console.log(item);
 
*/
console.log("testing");
let arr = [1,2,3,4,5,6,7]

arr.forEach(item => console.log(item+ " "));
console.log("testing");


for(item of arr)
console.log(item);

for(item in arr)
console.log(item);

/*
FUNCTIONS
can be created using 2 ways --1. function keyword 2.function expression

1. when doing function definition using function keyword, it gets its definition at compile time. Also hoisting happens here as if we call this function before defining then it works fine due to hoisting


2. Function Expression
starts with var keyword and it gets its definition at runtime time
var happy = function(){
}
happy();

IIFE
    immediately invoked Function Expression
   
    (function(){
        })();

    if a functions starts with function keyword then JS considers it function definition and if not then it is considered as function expression

    IIFE not hoisted by JS engine
    No explicit calling of IIFE is required

    Function expression can be invoked immediately but function definition cant
      EXample:   function(){}()   //will throw an error
*/

//even if we define a variable using var, if it is defined inside a function then its scope is inside that function and wont be accessable outside the function and give exception and not undefined 

/*
Methods oF FUNCTIONS
1.Call
2. Bind
3.Apply
*/
/*
Call and Apply used to borrow methods of another object

let animal = {
    name: 'dog',
    eat(a,b){
        console.log(this.name + " is eating " + a + " "+ b)
    }
}

let human = {
        name: 'Anshu',
    
};

animal.eat(2,"cookies");

borrow eat method from animal to human

animal.eat.call(human,4,"chips");
animal.eat.apply(human,4,"chips");  this throws error 
animal.eat.apply(human,[5,"grapes"]);  //after passing arguments in array in apply method, it works same as call()






*/


/*
 Bind()
 return the fucntion definition which can be used later which can be called with arguments also
 
 let animal = {
    name: 'dog',
    eat(a,b){
        console.log(this.name + " is eating " + a + " "+ b)
    }
}

let human = {
        name: 'Anshu',
    
};

let human_eat = animal.eat.bind(human);
we are binding human object, now human_eat will work as function
human_eat(21,"apples");

*/


/*
this keyword
this is an object whose property is in the function
return reference to whole current object 

function a(){
    console.log(this);
}
a()
Here function a is the property of window object
*/




/*

Arrow Function
Used to make this keyword lexically bound, we use arrow functions

this will get bound to current object

Doesnt use function keyword

let obj = {
    name:'func_name',
    print: function(){
        console.log('a',this);
        var second_fun = function(){
            console.log('b',this);
        }
        second_fun();
    }
};
obj.print();
a {name: "func_name", print: ƒ}
b Window {window: Window, self: Window, document: document, name: "", location: Location, …}
here second this refers to window object, not obj 
so one way is to bind this second_fun fuinction to object obj using bind function, but arrow functions automatically does this to us

let obj2 = {
    name:'func_name',
    print: function(){
        console.log('a',this);
        var second_fun = () => {
            console.log('b',this);
        }
        second_fun();
    }
};
obj2.print();
a {name: "func_name", print: ƒ}
b {name: "func_name", print: ƒ}

*/


let obj = {
    name:'func_name',
    print: function(){
        console.log('a',this);
        var second_fun = function(){
            console.log('b',this);
        }
        second_fun();
    }
};
obj.print();

let obj2 = {
    name:'func_name',
    print: function(){
        console.log('a',this);
        var second_fun = () => {
            console.log('b',this);
        }
        second_fun();
    }
};
obj2.print();

/*
HIGHER order functions

either take function as argument or return functionas as an argument

set Interval function is an example

*/
let obj3 = {
    name:'func_name',
    obj_func(){
        console.log(this);
    }
};

function printt(){
    console.log("hi");
}

setInterval(printt,1000);