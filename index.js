// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return Math.PI * this.diameter
    }

    get area() {
        return Math.PI * (this.radius * this.radius)
    }


    set diameter(diameter) {
        this.radius = diameter / 2
    }

    set circumference(cir) {
        this.radius = cir / (Math.PI * 2)
    }

    set area(num) {
        this.radius = Math.sqrt(area / Math.PI)
    }
}