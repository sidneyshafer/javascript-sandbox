// FizzBuzz Challenge
/* Print/log numbers from 1 to 100 
 * for multiples of three print "Fizz"
 * for multiples of five print "Buzz"
 * for multiples of three and five print "FizzBuzz"
*/

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        continue;
    } else if (i % 3 === 0) {
        console.log("Fizz");
        continue;
    } else if (i % 5 === 0) {
        console.log("Buzz");
        continue;
    } else {
        console.log(i)
    }
}