var x = 1;
a();
b(); // we are calling the functions before defining them. This will work properly, as seen
// in Hoisting.
console.log(x);
function a() {
  var x = 10; // local scope because of separate execution context
  console.log(x);
}
function b() {Ho
  var x = 100;
  console.log(x);
}


//  hosting is an concept which enables to extract values form the variables and function even before
// assigning values without getting any error and this is happening due to the 1st phase of memory creation phase of execuation context .
