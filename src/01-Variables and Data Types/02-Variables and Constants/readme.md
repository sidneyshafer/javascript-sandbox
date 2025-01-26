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
> For more information about the project structure of this section, check out the main Javascript sandbox [documentation](https://github.com/sidneyshafer/javascript-sandbox/tree/main?tab=readme-ov-file#project-structure-overview).

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

<kbd> <br> [Back to Top](#variables-and-constants) <br> </kbd>