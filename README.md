# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your TL and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your team lead.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your team lead

1. Describe the biggest difference between `.forEach` & `.map`.

The main difference is that map returns a new array of elements while passing each element back to the callback.
the forEach method executes a function once for each array element.
Map creates a new array with the results of calling a function on every element in the array.

2. What is the difference between a function and a method?

Both are functions.  The difference is that a method is a function inside an object or class.  A function becomes a method when it is inside an object or class.

3. What is closure?

Closure provides access to an outer function’s scope from an inner function. If a variable isn’t defined in a function scope, the function will look outside its lexical scope to find the referenced variable in the outer scope.  
Closure is all about understanding the nested environment.

4. Describe the four rules of the 'this' keyword.

Window / Global Binding- This works in the global scope. The 'this' keyword will be the window object. The window object is an open window in the browser. Global is not country, state, county, city.  Global is world.

Implicit Binding - 
This is the most commonly used principle. When a function is called with a dot before it (preceding dot), 'this' is the object before the dot. Example,  'this.functionName'.  The dot notation is used to invoke a function.  The items to the left of the dot become the CONTEXT for 'this' in the function. The context is to the left when invoked.
 
New Binding - 
New Binding is for a constructor function and 'this' refers to the specific instance of the object and is returned by the constructor function. A Constructor function constructs other objects as its main purpose.
 
Explicit Binding - 
Explicit binding occurs when we use .call(), .apply(), or .bind() on a function.  We are explicitly passing a 'this' context to call() and apply().  Note: apply works great for arrays. 
 
5. Why do we need super() in an extended class?

It’s a matter of inheritance. Super() is used to tell the parent’s constructor() to be concerned with the child’s attributes and removes the need to type out cumbersome syntax such as Object.create and bind, call, apply.   This is to pass any new attributes back up to the constructor() of the parent object.

## Project Set up

Follow these steps to set up and work on your project:

- [ ] Create a forked copy of this project.
- [ ] Add TL as collaborator on Github.
- [ ] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [ ] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [ ] You are now ready to build this project with your preferred IDE
- [ ] Implement the project on your Branch, committing changes regularly.
- [ ] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your team lead as a Reviewer on the Pull-request
- [ ] TL then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
