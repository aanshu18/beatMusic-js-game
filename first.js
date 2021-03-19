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

