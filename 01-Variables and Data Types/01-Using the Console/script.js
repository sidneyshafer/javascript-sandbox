// Single line comment
/*
Multi-line
Comment
*/

//KEY BOARD SHORTCUTS
/*
* 1. Shift + Up/Down/Right/Left arrow - highlight code
* 2. CMD|CTRL + Right/Left arrow
* 3. OPT|ALT + Up/Down arrow - move line of code up or down
* 4. Shift + OPT|ALT + Up/Down arrow - duplicate line of code
* 5. CMD|CTRL + D - select a phrase and next instance of same phrase
* * * -- 6. CMD|CTRL + Shift + L - highlight all selected phrase
* 7. OPT|ALT + Click - create multiple cursors wherever you click
*/

console.log(100);

console.log("Hello World!");

const word = "Apple";
console.log(word);

console.log(20, 'Hey', true);

console.error('Alert');
console.warn('Warning');

console.table({firstName: 'Sidney', email: 'sidney@gmail.com'});

console.group('group');
console.log(word);
console.log(20, 'Hey', true);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: blue;'

console.log('%cHello World', styles)