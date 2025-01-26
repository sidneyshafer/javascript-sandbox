# JavaScript Sandbox

>Code snippets for learning the basics of JavaScript.

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

This section contains a detailed breakdown of JavaScript variables and data types. Navigate to more specific sub-sections:

|    | Section Topic     | Overview | Programming Files | 
| -- |-----------------  | -------- |------------------ |
| 01 | Using the Console | JavaScript comments, keyboard shortcuts, and logging to the console | [01-Using the Console](/src/01-Variables%20and%20Data%20Types/01-Using%20the%20Console) |

> [!NOTE]
> All programming files for this section can be found in [01-Using the Console](/src/01-Variables%20and%20Data%20Types/01-Using%20the%20Console)

## Using the Console

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

**Basic Logging**
```javascript
console.log(100);
console.log("Hello World!");
```
* The `console.log()` method is used to print a message or information directly to the browser's console.
* This method can take any value as parameter (number, string, array, object, etc.) and returns the value of the parameter given.
* In this case, the number `100` and the string `Hello World!` will print to the console (on separate lines).

> [!TIP]
> Check out this [excellent article](https://www.geeksforgeeks.org/javascript-console-log-method/) for more information about logging to the console.