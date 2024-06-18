/**  
    JS is the extension stands for JavaScript

    How to run the file : node filename.js  ---> node 4_Intro.js

    variables are declared using let , var and const but these dont tell you what type of variable it is (integer , float or string etc.)

    if a variable is declared but has not been initialized , its value is undefined 

    to print something we use console.log() , no semicolons needed , aa bhi jayenge toh no worries refer to line 15

    to add string before a value to be dispalyed refer to line 26

    javascript only tells you that it is a variable , doesnt tell you its type 

    DataTypes in JavaScript: 
        Primitive : ATOMIC DATATYPES 

            NUMBER ---> NOT INTEGER AND FLOAT ONLY NUMBER , here 5/2 is 2.5 not 2 (keeping it simple )
            STRING ---> NOT CHARACTER AND STRING , ITS THE SAME THING HERE 
            BOOLEAN --> TRUE OR FALSE
            NULL   ---> NULL DOESN'T MEAN UNDEFINED  , NULL IS A VALUE , UNDEFINED MEANS IT DOESNT HAVE A VALUE ITS NOT INITIALIZED 

    loops , if else etc are same like in java , c and c++ 

*/ 

console.log("Hello World")

let a 
console.log(a); //undefined 

a = 10                   // integer
a = 10.4                 // float 
a = true                 // boolean
a = "i am a string"      // string
a = 'i am also string'   // string

console.log("variable contains :",a); // variable contains : i am also string ---> takes the last value assigned to it


for ( let i=1;i<=10;i++){
    console.log(i);
};