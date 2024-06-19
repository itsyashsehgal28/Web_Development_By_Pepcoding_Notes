/**  
    JS is the extension stands for JavaScript

    How to run the file : node filename.js  ---> node 4_Intro.js

    variables are declared using let , var and const but these dont tell you what type of variable it is (integer , float or string etc.)

    if a variable is declared but has not been initialized , its value is undefined 

    to print something we use console.log() , no semicolons needed , aa bhi jayenge toh no worries refer to line 34

    to add string before a value to be dispalyed refer to line 45

    javascript only tells you that it is a variable , doesnt tell you its type 

    DataTypes in JavaScript: 
        Primitive : ATOMIC DATATYPES , which cannot be broken down

            NUMBER ---> NOT INTEGER AND FLOAT ONLY NUMBER , here 5/2 is 2.5 not 2 (keeping it simple )
            STRING ---> NOT CHARACTER AND STRING , ITS THE SAME THING HERE 
            BOOLEAN --> TRUE OR FALSE
            NULL   ---> NULL DOESN'T MEAN UNDEFINED  , NULL IS A VALUE , UNDEFINED MEANS IT DOESNT HAVE A VALUE ITS NOT INITIALIZED 
            
        Non-Primitive : DataTypes that are a combination of 2 or more primitive datatypes
            ARRAYS
            OBJECT
            FUNCTIONS


    loops , if else etc are same like in java , c and c++ 

*/

console.log("Hello World");

let a;
console.log(a); //undefined

a = 10; // integer
a = 10.4; // float
a = true; // boolean
a = "i am a string"; // string
a = "i am also string"; // string

console.log("variable contains :", a); // variable contains : i am also string ---> takes the last value assigned to it

// Loop to print from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// program to find prime number
n = 23;
let flag;
for (i = 2; i < n / 2; i++) {
  if (n % i == 0) {
    flag = 1;
  }
}

if (flag == 1) {
  console.log("not a prime number");
} else {
  console.log("Prime number");
}

// NON PRIMITIVE DATATYPES


/*
                                                            FUNCTIONS


    parameters need not be defined and can be of any type 
    
    no return type is needed anything can be returned which is available in the function 

    INVOKING A FUNCTION BEFORE IT IS DEFINED IS KNOWN AS -------> HOISTING , hence line 83 works

    in hoisting , the compiler goes through the program once to know the functions and check syntaxes etc.
*/

sayHi(); // HOISTING                                     output : hi , undefined since no param

function sayHi(param) {
  //function heading
  console.log("hi");                
  console.error(param);
  return("returned from a function ");
}

sayHi(); //function calling                              output : hi , undefined since no param
sayHi("yash"); // string as a parameter                  output : hi yash
rval = sayHi([1, 2, 3, 4, 5]); // array as a parameter          output : hi [1,2,3,4,5]
console.log(rval);


/*
                                                            OBJECTS
    
    Objects are known as dictionary in PYTHON , HashMap in JAVA

    its a key : value pair

    key : value    ----> then its called as a PROPERTY
    key : function ----> then its called as a METHOD 

    if console.log(naruto.sayHello()) is written then output is Dattebayo undefined because 
    1st console will stay idle and second will print dattebayo , first puts up undefined 

    if we want to set / update (new value to be set or new key to be added ) it is done simply with the new values 

    DIFFERENCE BETWEEN    []      AND        .      OPERATOR
        whatever value is inside [] the object will first check for that string/key and then if it finds it , then will assign value
        . operator will directly apply value without checking

*/

let naruto = {
    name : "naruto uzumaki" , // comma at the end and also to add other key value pairs
    age : 16 , 
    address : { // object under object
        area : "fire nation",
        village : "konoha",
    },
    isBest : false , 
    friends : ["sakura", "kakashi" , "sasuke" , "jiraiya"], //array
    sayHello : function(){ //function
        console.log("Dattebayo");
    }
}

console.log(naruto.name);
console.log(naruto.address.area);
console.log(naruto.isBest);
console.log(naruto.friends[3]);
naruto.sayHello();                   //dont need console.log here as it is already present in the function

console.log(naruto);

// SET / UPDATE
naruto.villain = "madara" ;
naruto.age = 17;

console.log(naruto);                 // to get the whole object

// delete key
delete naruto.age;

console.log(naruto);

// loop to get every key value pair in object                    WORKS SAME AS CONSOLE.LOG(NARUTO)
for (key in naruto){
    console.log(key , ":" , naruto[key]);            // naruto[key] is another method to get the key in the object
}

propkey = "friends";
console.log(naruto[propkey]);                          // whichever key is inside [] it will get it for you 


/*
                                                            ARRAY
    let arr = [1,3,5,7];   basic declaration

    arr.length to get the length of an array     THIS IS A PROPERTY , NOT A FUNCTION HENCE NO BRACKETS AFTER LENGTH

    ARRAY is not homogenous here , array=[2 , true , "heyy"]

    PUSH is a method to add value at the end of an array 
    POP is a method to remove from the end of the array 

    UNSHIFT is used to add value to the 0 position of the array also a method
    SHIFT is used to remove value from the 0 position of the array also a method

    index of is used for getting the index of a certain value 
    contains is used to check if a value is present or not 

    DIFFERENCE BETWEEEN SLICE AND SPLICE
    SLICE : doesnt change the main array , displays number from starting index , to number - 1
    SPLICE : makes changes in the main array , is used to delete but gives from which index and how many nos from that index to be deleted 
 */

    let arr = [1,3,5,7,9,11];  

    console.log(arr.length)
    arr.push("last value");
    arr.unshift("first value");
    console.log(arr);
    arr.pop()
    arr.shift()
    console.log(arr)

    console.log(arr.slice(2,5));    // index 2,3,4 which is 5,7,9 will be printed 
    console.log(arr);               // main array is not changed 

    console.log(arr.splice(4,2));   // 9,11
    console.log(arr);


/*
                                                                STRINGS
    Single or double quotes doesnt matter

    trim , ltrim and rtrim is used to trim white spaces from both sides , left side and right side only

*/

let s = "my name is Yash Sehgal and i am gonna be a full stack developer"
console.log(s.charAt(4));       // gives the character at specified index
console.log(s.charCodeAt(4));   // gives the ascii code for the character at the specified index
console.log(s.substring(2,6));  // gives the substring from starting index to ending index -1
console.log(s.split(" "));      // split using delimeter as space
console.log(s.split(""));       // no delimeter so will split every character , space will be a character too

str = s.split(" ");
console.log(str.join("$"))      // adds delimeter after every element

strin = "            hi          "
console.log(strin.trim())