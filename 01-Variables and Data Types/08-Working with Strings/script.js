let x;

const fName = 'Sidney';
const age = 19;

x = 'Hello, my name is ' + fName + ' and I am ' + age + ' years old.';

// Template Literals
x = `Hello, my name is ${fName} and I am ${age} years old.`;

// String Properties and Methods
const s = new String('Hello World');

x = s.length;
x = typeof s;

// Access value by key
x = s[1];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);
x = s.indexOf('e')

x = s.substring(0, 4);
x = s.substring(6);

x = s.slice(-9);
x = '       Hello World';
x = x.trim();

x = s.replace('World', 'Sidney');

x = s.includes('lo');

x = s.valueOf();
x = s.split(' ');

console.log(x);