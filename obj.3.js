class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Line {
    constructor(pointA, pointB) {
        this.pointA = pointA;
        this.pointB = pointB;
    }

    getDistance() {
        let dx = this.pointA.x - this.pointB.x;
        let dy = this.pointA.y - this.pointB.y;

        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    }
}

class Triangle {
    constructor(point1, point2, point3) {
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
    }

    getPerimeter() {
        let line1 = new Line(this.point1, this.point2);
        let line2 = new Line(this.point1, this.point3);
        let line3 = new Line(this.point2, this.point3);

        return line1.getDistance() + line2.getDistance() + line3.getDistance();
    }
}

let point1 = new Point(0, 0);
let point2 = new Point(0, 1);
let point3 = new Point(1, 1);

// let line1 = new Line(point1, point2);
// let distanceOfLine1 = line1.getDistance()
// console.log({ distanceOfLine1 });

let triangle1 = new Triangle(point1, point2, point3);

let perimeterOfTriangle1 = triangle1.getPerimeter();
console.log({ perimeterOfTriangle1 });