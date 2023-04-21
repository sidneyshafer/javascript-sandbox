let x;

x = 5 + Number('5');

x = 5 * '5';

x = 5 + null;

x = Number(null);
x = Number(true); //1
x = Number(false); //0

x = 5 + true;

x = 5 + undefined; //NaN

console.log(x, typeof x);