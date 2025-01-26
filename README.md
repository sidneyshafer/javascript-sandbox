# JavaScript Sandbox

>Programming examples with code breakdowns for learning the basics of JavaScript.

## Table of Contents
* [Project Structure Overview](#project-structure-overview)
* [Variables and Data Types](#variables-and-data-types)
* [Arrays and Objects](#)
* [Functions, Scope, and Execution Context](#)
* [Logic and Control Flow](#)
* [Loops, Iterations, and Array Methods](#)
* [Document Object Model (DOM)](#)
* [Events](#)
* [Asynchronous JavaScript](#)
* [Fetch API and Async Await](#)
* [Web and Browser APIs](#)
* [OOP - Constructors and Prototypes](#)
* [Classes, Getters, Setters, and Private Properties](#)
* [Iterators, Generators, and Data Structures](#)
* [More on Algorithms & Data Structures](#)

## Project Structure Overview

Each project is set up with two distinct files: `index.html` and `script.js`. The `index.html` file contains a simple HTML structure, and is mainly used to link to `script.js` to view JavaScript output in the web browser.

The `index.html` file has this general structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[SECTION NAME]</title>
</head>
<body>
    <h1>[SECTION TOPIC NAME]</h1>

    <script src="script.js"></script>
</body>
</html>
```

> [!TIP]
> Check out this excellent [sandbox](https://github.com/sidneyshafer/html-sandbox) for more information on HTML.

## Variables and Data Types

This section contains a detailed breakdown of [JavaScript Variables and Data Types](/src/01-Variables%20and%20Data%20Types). Navigate to more specific sub-sections:

|    | Section Topic     | Overview | Files | 
| -- |-----------------  | -------- |------------------ |
| 01 | [Using the Console](#using-the-console) | JavaScript comments, keyboard shortcuts, and logging to the console | [:link::file_folder:](/src/01-Variables%20and%20Data%20Types/01-Using%20the%20Console) |
| 02 | [Variables and Constants](#variables-and-constants) | Declaring and assigning variables with var, let, and const | [:link::file_folder:](/src/01-Variables%20and%20Data%20Types/02-Variables%20and%20Constants) |

---
## Using the Console
* [JavaScript Comments](#javascript-comments)
* [Keyboard Shortcuts](#keyboard-shortcuts)
* [Logging to the Console](#logging-to-the-console)

> [!NOTE]
> All programming files for this section can be found in [01-Using the Console](/src/01-Variables%20and%20Data%20Types/01-Using%20the%20Console)

### JavaScript Comments
```javascript
// Single line comment
```
* `\\` will create a single line comment of textual information.

```javascript
/*
Multi-line
Comment
*/
```
* `\\` will create a multi-line comment of textual information.

### Keyboard Shortcuts

1. **Shift + Up/Down/Right/Left Arrow - Highlight Code**
    * Holding the `Shift` key while pressing an arrow key allows you to select text incrementally.
    * **Up/Down Arrow**: Selects lines above or below the current cursor position.
    * **Right/Left Arrow**: Selects characters to the right or left of the cursor.

2. **CMD (Mac) | CTRL (Windows) + Right/Left Arrow**
    * Moves the cursor to the start or end of a word.
    * **Right Arrow**: Moves to the beginning of the next word.
    * **Left Arrow**: Moves to the beginning of the current or previous word.

3. **OPT (Mac) | ALT (Windows) + Up/Down Arrow**
    * Moves the line (or selected lines) of code up or down without needing to copy and paste.

4. **Shift + OPT (Mac) | ALT (Windows) + Up/Down Arrow**
    * Duplicates the current line (or selected lines) and places the duplicate directly above or below.

5. **CMD (Mac) | CTRL (Windows) + D**
    * Selects the current word or phrase where the cursor is located and then moves to select the next occurrence of the same word or phrase.

6. **CMD (Mac) | CTRL (Windows) + Shift + L**
    * Highlights all occurrences of a selected word or phrase in the document.
    * Places a cursor at each occurrence so you can edit them simultaneously.

7. **OPT (Mac) | ALT (Windows) + Click**
    * Creates multiple cursors at the clicked positions.
    * Each cursor acts independently, allowing you to edit text in multiple locations simultaneously.

### Logging to the Console
---
**Basic Logging**
```javascript
console.log(100);
console.log("Hello World!");
```
* The `console.log()` method is used to print a message or information directly to the browser's console.
* This method can take any value as parameter (number, string, array, object, etc.) and returns the value of the parameter given.
* In this case, the number `100` and the string `Hello World!` will print to the console (on separate lines).
---

**Declaring and Logging Variables**
```javascript
const word = "Apple";
console.log(word);
```
* Declare a constant variable named `word` and assign it a value of `"Apple"`.
* Logs the value of `word` to the console with the statement `console.log(word)`.
* Output would be the value `Apple`.
---

**Logging Multiple Values**
```javascript
console.log(20, 'Hey', true);
```
* Logs multiple values in a single `console.log` statement.
---

**Error and Warning Logging**
```javascript
console.error('Alert');
console.warn('Warning');
```
* `console.error`: Logs an error message styled in red.
* `console.warn`: Logs a warning message styled in yellow.
---

**Logging Data in Table Format**
```javascript
console.table({firstName: 'Sidney', email: 'example@gmail.com'});
```
* Displays the provided object as a table in the console.
* In this case, a table with two columns (`firstName` and `email`) and corresponding values.

**Grouping Logs**
```javascript
console.group('group');
console.log('This is a grouped log.');
console.log('Something is happening...');
console.groupEnd();
```
* Groups related logs together for better organization in the console.
* Logs between `console.group()` and `console.groupEnd()` are nested under the specified group.
* In this case, the group is defined as having the name `'group'` in the first `console.group()` statement.
---

**Styled Console Logging**
```javascript
const styles = 'padding: 10px; background-color: white; color: blue;';
console.log('%cHello World', styles);
```
* Logs a styled message using the format specifier `%c` in the string and applying the CSS styles defined in the `styles` variable.
* **`%c`: Applies CSS style rules to the output string as specified by the second parameter.**
* A message `"Hello World"` will output in the console with the specified styles.

> [!NOTE]
> For more information about console format specifiers, check out this [article](https://developer.chrome.com/docs/devtools/console/format-style) published by the Chrome DevTools.
---
> [!TIP]
> Check out this [excellent article](https://www.geeksforgeeks.org/javascript-console-log-method/) for more information about general logging to the console.

<kbd> <br> [Back to Top](#table-of-contents) <br> </kbd>
---

## Variables and Constants
* [Variable Rules & Naming Conventions](#variable-rules--naming-conventions)
* [Variable Declaration](#variable-declaration)
* [Declaration without Initializing](#declaration-without-initializing)
* [Re-Assigning Variables](#re-assigning-variables)
* [Scope Behavior](#scope-behavior)
* [Differences between Let and Var](#differences-between-let-and-var)
* [Constants](#constants)
* [Declaring Multiple Variables](#declaring-multiple-variables)
* [Summary of Variable Keywords](#summary-of-variable-keywords)

> [!NOTE]
> All programming files for this section can be found in [02-Variables and Constants](/src/01-Variables%20and%20Data%20Types/02-Variables%20and%20Constants/)

---
### Variable Rules & Naming Conventions
**Rules:**
* Variable names can only include letters, numbers, underscores (`_`), and dollar signs (`$`).
* Variable names cannot start with a number.

**Naming Conventions:**
| Type            | Description                      | Example |
| --------------- | -------------------------------- | ------- |
| camelCase       | Common in JavaScript             | `firstName` |
| underscore_case | Used in some languages or styles | `first_name` |
| PascalCase      | Often used for class names       | `FirstName` |
| lowercase       | Rarely used in JavaScript but acceptable | `firstname` |

### Variable Declaration
```javascript
let firstName = 'Sidney';
var temp = 'temp string';
const x = 100;
```
* JavaScript provides three main ways to declare variables: `var`, `let`, and `const`.
* `var` and `let` can be used to declare variables that can be reassigned.
* Variables declared with `const` **cannot** be reassigned and must be initialized when declared.
* In this example, all variables are initialized when declared.

### Declaration without Initializing
* You can declare variables without initializing them using either `let` or `var`, assigning a value later:
```javascript
let score;
score = 1;
```

### Re-Assigning Variables
* Variables declared with `let` or `var` can be reassigned:
```javascript
var temp = 'temp string';
temp = 'new string';

let age = 30;
age = 31;
```

### Scope Behavior
* Inside an if block, a variable declared with `let` retains its value:
```javascript
let score;
score = 1;

if (true) {
    score += 1;
}
console.log(score); // Output: 2
```

### Differences between Let and Var

In JavaScript, `let` and `var` are both used to declare variables. The key difference is that `let` is **block-scoped**, meaning a variable is only accessible within the block of code where it's defined, while `var` is **function-scoped**, allowing access to the variable throughout the entire function it's declared in. Using `let` is considered the preferred practice due to its more predictable scoping behavior and prevention of accidental variable re-declarations within the same scope. 

**Example**
```javascript
if (true) {
    let x = 10; // x is only accessible within this "if" block
    var y = 20; // y is accessible outside the "if" block as well
}

console.log(x); // This will throw an error because "x" is not accessible here
console.log(y); // This will print 20
```

> [!TIP]
> Check out this [interesting thread](https://stackoverflow.com/questions/762011/what-is-the-difference-between-let-and-var) on Stack Overflow for more information on scope differences between let and var.

### Constants
```javascript
const x = 100;
// x = 200; // Error: Cannot be directly re-assigned
// const score1; // Error: Cannot declare without initializing it
```
* A `const` variable must be initialized when declared.
* It cannot be reassigned directly, but its contents (for **objects** or **arrays**) can be modified:
```javascript
const array = [1, 2, 3, 4];
array.push(5);
console.log(array); // Outputs: [1, 2, 3, 4, 5]
```

### Declaring Multiple Variables
* You can declare multiple variables in a single statement:
```javascript
let a, b, c; // Declares but does not initialize variables
const d = 10, e = 20, f = 30; // Declares and initializes constants
```

### Summary of Variable Keywords
| Feature        | `var`           | `let`         | `const`       |
| -------------- | --------------- | ------------- | ------------- |
| Declaration    | Allowed         | Allowed       | Allowed       |
| Re-assignment  | Allowed         | Allowed       | Not allowed (allowed for object and array properties) |
| Initialization | Optional        | Optional      | Required       |
| Scope          | Function-scoped | Block-scoped  | Block-scoped   |
| Re-declaration | Allowed within the same scope | Not allowed within the same scope | Not allowed within the same scope |

<kbd> <br> [Back to Top](#table-of-contents) <br> </kbd>
---