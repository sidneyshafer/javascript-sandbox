class Rectangle {
    // constructor method
    constructor(name, width, height) {
        this.name = name;
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }

    isSquare() {
        return this.width === this.height;
    }

    logArea() {
        console.log('Rectangle Area: ' + this.area());
    }
}

const square = new Rectangle('Square', 20, 20);
console.log(square);
console.log('Area: ' + square.area());
console.log('Perimeter: ' + square.perimeter());
console.log('Is Square?: ' + square.isSquare());
square.logArea();
