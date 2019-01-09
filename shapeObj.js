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
        let a = Math.PI*this.radius^2 
        return a;
    }
}

//Dont forget about box and sphere
let Box = {
    length: 12,
    width: 12,
    height: 12,
    
}




//------------------------------------------------
//copy paste test code when you finish under here
