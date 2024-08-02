// Important JS Interview Output Based Questions
// Figure out the output

// Question 1-

// function f(a,b,c) {
//   m = [ "1","2","3" ];
//   a = 3;
//   b[0] = "X";
//   c.first = false ;
// }
// var x = 4;
// var y= ["A","B","C"];
// var z = {first: true} ;
// f(x,y,z);
// console.log(x,y,z)     

// Output - 

// (concept used- pass by value and pass by reference)

// => 4 
// "X","B","C"                
// first:false

// Question 2 -

// (function () {
//   console.log(1);
//   setTimeout(function() {console.log(2)} , 1000);
//   setTimeout(function() {console.log(3)} , 0);
//   console.log(4);
// })();

// Output -
//=> 1,4,3,2

// Question 3 -

// const a = 1+10;
// const b = "1" + "1";
// console.log( a == b, "hello");
// console.log( a === b, "hello")

// Output -

//=> true 'hello'           ( ,strict operator does not perform type conversion )
// false 'hello'

// Question 4 -

// const a = 1 + "1" - 2 * "1" ;
// console.log(a,"hello")

// Output 

// By precedence (multiplication,add and subtraction) priority is left to right
// (2*"1"=2, 1+ "1" = 11{concatenate}, 11-2 = 9)

//=> 9 'hello'

// Question 5 -

// const x = 1 + "1" ;
// const y = 1 + +"1" ;
// console.log(x,"hello");
// console.log(y,"hello");

// Output 

// => 11 'hello'
// 2 'hello'  {unary operator + converts the string into a number +"1" will be 1}

// Question 6 -

// const a = { b:1 };
// const c = a;
// a.b = 2 ;
// console.log(c.b, "hello");

// Output -

// => 2 'hello'    {shallow copy and deep copy in JS}

// Question 7 - 

// const a = [1,2,3,4,5];
// const b = [1,2,3,4,5];
// const c = a ;
// console.log( a == b , "hello");
// console.log( a === c , "hello");

// Output

// => false 'hello'
// true 'hello'  {this is true bcz address and reference both are same}

// Question 8 - 

// console.log(a,"hello");
// var a = 1;

// Output -

// => undefined 'hello'   {concept - hoisting}

// Question 9 -

// for ( var i=0; i<3; i++){
//   setTimeout(() => console.log(i),1);
// }

// Output - 

// => 3 3  {var has global scope}

// Question 10 - 

// console.log(1, "hello");
// setTimeout(()=>console.log(2, "hello"), 0);
// Promise.resolve(3).then((res)=>console.log(res, "hello"));
// console.log(4, "hello")

// Output -

//  => 1 'hello'
// 4 'hello'
// 3 'hello'
// 2 'hello'   
// {for promise there is microtask queue and callstack queue gave priority to microtask so instead of 1,4,2,3 the correct answer will be 1,4,3,2}



