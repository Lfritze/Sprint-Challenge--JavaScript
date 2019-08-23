// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

//// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action


function consume(a, b, cb) {
  console.log(cb(a, b)); // a and b are arguments for the cb
};


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(num1, num2){
  return num1 + num2;
};

function multiply(num1, num2){
  return num1 * num2;
}

function greeting(firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you!`
}


// Step 3: Check your work by un-commenting the following calls to consume(): 
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: 

// Nesting protects the babies from the big bad wolf (outer scopes).  Parents go to jail if they hurt their children but children are allowed to hurt their parents. (probably not the best example lol)

// The nestedFunction() is in a nested scope. Nested functions can access arguments, variables (etc.) in outer scopes. Outer scope functions cannot access inner scope functions. 

// Higher chain items (inheritance) cannot access functions nested within. This is protected.  The nested function can access the parent functions.




const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
