//Closure
//when function gets called it is popped out of the stack but still all the arguments are stored in the closure which are linked in the sub  functions which is not self contained that is it is using some variables or argument of outer function

 
function f1(grandfather) {
    
    return function(father) {
         return function(son){
                console.log(`${grandfather}--${father}--${son}`);
        }
    }
}

//f1("aaa")("bbb")("ccc");

let f2 = (grandfather) => (father) => (son)  => console.log(`${grandfather}--${father}--${son}`);

//f2("aaa")("bbb")("ccc");








//Advanced function - currying
//currying is a transformation of functions that translates a function from callable as f(a,b,c) into callable as f(a)(b)(c)
//currying does not call the function. it transforms it

//example 
let multiply = (a,b) => a*b; //normal multiplication functions

//now using currying
let curriedMultiply = (a) => (b) => a*b; 
//curriedMultiply(5) ---- returns (b)=> a*b;
//lets say one argument is fixed always that is we want to multiply by 7 always

let multiplyBy7 = curriedMultiply(7);
//multiplyBy7(5)--- returns 35



//currying using bind

let add = (a,b) => console.log(a+b);

let addBy10 = add.bind(this,10);
//addBy10(4); --- returns 14
//bind represents the functions definition which can be used later 
//internally what bind does is it creates a copy of add function
//so internally addBy10 looks like this
/*
let addBy10 = function(y){
    let x =10;
    console.log(x+y);
}
*/

//currying using arrow functions
let mul = (a) => (b) => console.log(a*b);
let mul10 = mul(10);
//mul(2) --- returns 20





//advanced function - composition
//it is a mechanism in which We combine multiple simple functions to build a more complicated function. result of one function is passed to the next function

const addfun = (a,b) => a+b;

const mulfun = (a,b) => a*b;
addfun(2,mulfun(3,5));




//promise
//promise is an object which May produce a single value sometime in the future. it will return either a resolved value or the reason why it is not resolved
//promise can have 3 states - 1. fulfilled 2.rejected 3.pending
// before promise we had callbacks where we used to get complicated nested stack

const promise = new Promise((resolve,reject) => {
    if(true)
        resolve("it worked");
    else
        reject("did not work, rejected");
});

promise.then(result => result+ " haha");
//it returns
//Promise {<fulfilled>: "it worked haha"}
//__proto__: Promise
//[[PromiseState]]: "fulfilled"
//[[PromiseResult]]: "it worked haha"

const promise2 = new Promise((resolve,reject) => {
    if(false)
        resolve("it worked");
    else
        reject("did not work, rejected");
});

promise2.then(result => result+ " haha");
promise2.then(result => result+ " catched result").catch(result => result + "-now fulfilled event though rejected");




//Advanced array functions
//1. map
//creates copy of the array with some manipulation
//no forEach, no new array, no push, no side effect and also purity of function is maintained.
//map always returns a value

let arr = [1,2,3,4,5];
let newArr = arr.map(num => num+1);


//2. filter
//filter the array as per condition
let arr22 = [10,2,33,42,5];
let newArr22 = arr22.filter(num =>num>30);

//3. reduce
//can be used to combine filte and map
let arr222 = [10,2,33,42,5];
let newArr222 = arr222.reduce((accumulator,num) => accumulator*num,100);