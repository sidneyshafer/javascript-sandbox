const rectangle = {
    name: 'Rectangle 1',
    width: 10,
    height: 10,
    area: function () {
        return this.width * this.height;
    }
};

const rectangle2 = {
    name: 'Rectangle 2',
    width: 30,
    height: 5,
    area: function () {
        return this.width * this.height;
    }
};


console.log(rectangle.name);
console.log(rectangle.area());