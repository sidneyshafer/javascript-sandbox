class Rectangle {
    constructor(name, width, height) {
        this.name = name;
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    static getClass() {
        return 'Rectangle';
    }
}

const rect = new Rectangle('Rect', 10, 10);
console.log(rect.area());
// console.log(rect.getClass());
console.log(Rectangle.getClass());