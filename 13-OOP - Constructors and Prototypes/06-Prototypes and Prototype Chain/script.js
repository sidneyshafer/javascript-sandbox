function Rectangle(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
}

Rectangle.prototype.area = function () {
    return this.height * this.width;
};

Rectangle.prototype.perimeter = function () {
    return 2 * (this.height + this.width);
};

Rectangle.prototype.isSquare = function () {
    return this.height === this.width;
};

Rectangle.prototype.changeName = function (newName) {
    return this.name = newName;
};

const rect = new Rectangle('Rect', 10, 10);
const rect2 = new Rectangle('Rect', 30, 40);

console.log(rect);
console.log(rect.area());
console.log(rect.perimeter());
console.log(rect.changeName('Rect 1'));

console.log(rect2.area());

// console.log(Object.getPrototypeOf(rect));

