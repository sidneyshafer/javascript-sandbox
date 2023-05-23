// console.log(123);
import { capitalizeWords, makeMoney } from "./modules/utils.js";
import Person from "./modules/Person.js";

console.log(capitalizeWords('hello world'));
console.log(makeMoney(100));

const person1 = new Person('Sidney', 19);
person1.greet();