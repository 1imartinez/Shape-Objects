//Your code

let Rectangle = {
    length: 4,
    width: 10,

    perimeter: function(){
        let p = 2*this.length + 2*this.width;
        return p;
    },

    area: function(){
        let a = this.length * this.width;
        return a;
    }
}

let Square = {
    sideLength: 10,
    
    perimeter: function(){
        let p = 4*this.sideLength;
        return p;
    },

    area: function(){
        let a = this.length * 4;
        return a;
    }
}

let Circle = {
    radius: 8,
    circumference: function(){
        let c = 2*Math.PI*this.radius
        return c;
    },

    area: function(){
        let a = Math.PI*this.radius*this.radius
        return a;
    }
}

//Dont forget about box and sphere
let Box = {
    length: 12,
    width: 12,
    height: 12,
    volume: function(){
        let v = this.length*this.width*this.height
        return v;
    },

    surfaceArea: function(){
        let sA = 2*this.length*this.width + 2*this.length*this.height + 2*this.height*this.width
        return sA;
    }
}

let Sphere = {
    radius: 8,
    volume: function(){
        let v = 4/3*Math.PI*this.radius*this.radius*this.radius
        return v;
    },
    surfaceArea: function(){
        let sA = 4*Math.PI*this.radius*this.radius
        return sA;
    }
}




//------------------------------------------------
//copy paste test code when you finish under here
console.log(`------ Rectangle Stuff ------`);
console.log(`sides = ${Rectangle.length} by ${Rectangle.width}`);
console.log(`perimeter = ${Rectangle.perimeter()}`);
console.log(`area = ${Rectangle.area()}\n`);

console.log(`------ Square Stuff ------`);
console.log(`side length = ${Square.sideLength}`);
console.log(`perimeter = ${Square.perimeter()}`);
console.log(`area = ${Square.area()}\n`);

console.log(`------ Circle Stuff ------`);
console.log(`radius = ${Circle.radius}`);
console.log(`circumference = ${Circle.circumference()}`);
console.log(`area = ${Circle.area()}\n`);

console.log(`------ Box Stuff ------`);
console.log(`sides = ${Box.length} by ${Box.width} by ${Box.height}`);
console.log(`perimeter = ${Rectangle.surfaceArea()}`);
console.log(`area = ${Rectangle.volume()}\n`);

console.log(`------ Sphere Stuff ------`);
console.log(`radius = ${Sphere.radius}`);
console.log(`circumference = ${Sphere.surfaceArea()}`);
console.log(`area = ${Sphere.volume()}\n`);

}
//runs the test
test();
