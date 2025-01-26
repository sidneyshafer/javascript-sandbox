// Single line comment

/*
Multi-line
Comment
*/

//KEY BOARD SHORTCUTS
/*
1. Shift + Up/Down/Right/Left arrow - highlight code
2. CMD|CTRL + Right/Left arrow
3. OPT|ALT + Up/Down arrow - move line of code up or down
4. Shift + OPT|ALT + Up/Down arrow - duplicate line of code
5. CMD|CTRL + D - select a phrase and next instance of same phrase
6. CMD|CTRL + Shift + L - highlight all selected phrase
7. OPT|ALT + Click - create multiple cursors wherever you click
*/

// Basic Logging
console.log(100);
console.log("Hello World!");

// Declaring and Logging Variables
const word = "Apple";
console.log(word);

// Logging Multiple Values
console.log(20, 'Hey', true);

// Error and Warning Logging
console.error('Alert');
console.warn('Warning');

// Logging Data in Table Format
console.table({firstName: 'Sidney', email: 'example@gmail.com'});

// Grouping Logs
console.group('group');
console.log('This is a grouped log.');
console.log('Something is happening...');
console.groupEnd();

// Styled Console Logging
const styles = 'padding: 10px; background-color: white; color: blue;';
console.log('%cHello World', styles)