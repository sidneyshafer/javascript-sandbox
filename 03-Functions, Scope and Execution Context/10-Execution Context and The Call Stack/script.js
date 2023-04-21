// Execution Context - behind the scenes

// When you run any JavaScript code, a special environment is created to handle the transformation & execution of code. This is called the execution context. It contains the currectly running code and everything that aids in its execution. There is a global execution context as well as a function execution context for every function invoked.

// JavaScript is single-threaded and synchronous

// EXECUTION CONTEXT PHASES

/* Memory Creation Phase:
 * 1. Create the global object (browser = window, Node.js = global)
 * 2. Create the 'this' object and bind it to the global object
 * 3. Setup memory heap for storing variables and function references
 * 4. Store functions and variables in global execution context and set to "undefined"
 */

/* Execution Phase:
 * 1. Executre code line by line
 * 2. Create a new execution context for each function call
 */

// The Call Stack
/*
 * Stack of functions to be executed
 * Manages execution contexts
 * Stacks are LIFO - last in first out 
 */