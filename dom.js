//DOM

//when browser parses the html code, it converts it into a document that will contain objects corresponding to each element of html doc known as nodes

//DOM provides you with different functionalities which can be used to access and manipulate the webpages

//DOM is not strictly tied to browser as other tools like nodejs can parse can HTML

//Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document

//there are 2 main objects that we deal in general : 1. Document 2. Window

//Document Object: it is entry point of the document, it provides all major functionalities related to DOM content. console.dir(document) is used to get the functionalities list provided woth document object


console.log("1st line");

console.log(document);
console.dir(document)
console.log(document.domain);
console.log(document.body);
console.log(document.head);
console.log(document.URL);
console.log(document.all);
console.log(document.all[1]);

document.title = "this is modified title";

console.log(document.title);
document.all[2].textContent = "title again changed";


//Window Object: this basically refers to current tab or browser,we can access and manipulate browser specific properties via this windows object. Window is a global object and thus this refers to the window

//window.open("","",width=100,height=100);
//window.print()
//window.open("https://www.google.com");

/*
var age =  prompt("please enter your age",true);
if(age>20)
    alert("you are eligible to vote");
else 
    alert("you are not eligible to vote");    

*/


//Querying the DOM 
//1. document.getElementById
console.log("document.getElementById");
var head = document.getElementById("head1");
console.dir(head);


//2.document.getElementsByClassName()    - multiple elements can be grouped together and treated as a single unit by having same class name
console.log("document.getElementsByClassName");

var listOfHobbies = document.getElementsByClassName("hobby");
console.log(listOfHobbies);


//3.document.getElementsByTagName()   

console.log("document.getElementsByTagName");
var listOfParas = document.getElementsByTagName("p");
console.log(listOfParas);



//4.document.querySelector()
//class .class #id 
console.log("document.querySelector");
var listOfParas = document.querySelector(".hobby");
//querySelectorAll will give all matching id or class or tag
console.log(listOfParas);
var listOfParas = document.querySelectorAll(".hobby");
console.log(listOfParas);


//manipulate Style
console.log("manipulate Style");
var id2 = document.getElementById("heading1");
console.log(id2);
id2.style.color="green";
id2.align='center';


//manipulating Text and content
var id2 = document.getElementById("heading1");
id2.textContent="this is modified header"
id2.innerHTML="this is again modified header - innerHTML"
//innerHTML can be used manipulate tags also and textContent only manipulates text
id2.innerHTML='<h6>this is headder</h6>'



//manipulating attributes
var link = document.querySelector('a');
link.getAttribute('href');
link.setAttribute('href', 'https://www.google.com/');



var listOfParas = document.getElementsByTagName("*");
for(var i=0;i<listOfParas.length;i++)
    console.log(listOfParas[i].tagName);



//DOM events
//common events- click, change, mouseover and mouseout
//event must be seleceted and then attached to a specific element by means of an Event listener 
//to add a listener, use the addEventListener method through this syntax 
//element.addEventListener('type',functiionToCall);

function changeDOMevent(id){
    if(id.innerHTML==='unclicked button')
        id.innerHTML  = 'clicked button';
    else if(id.innerHTML==='clicked button')
        id.innerHTML  = 'unclicked button';    
}

//using anonymous function
var button = document.getElementById("btn");
button.addEventListener('click',function(){
alert("button was clicked s");
});

//using named function...here parentheses is not used in function call as the browser calls the function itself
var button2 = document.getElementById("btn2");
button2.addEventListener('click',onClickfunction);
function onClickfunction(){
    alert("button was clicked using named function");
}

//inside a listener the 'this'  keeyword refers to the item that was clickec on/hovered upon/keypress on.etc
var list = document.querySelectorAll("li");
for(var i=0;i<list.length;i++){
    list[i].addEventListener('click', function(){
        this.style.color='pink';
    })
}

var unordlist = document.querySelectorAll("ul");
for(var i=0;i<unordlist.length;i++){
    unordlist[i].addEventListener('mouseover', function(){
        this.style.color='green';
    })
}