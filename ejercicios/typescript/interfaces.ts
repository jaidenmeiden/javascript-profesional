console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("Interfaces");
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// Interfaces
enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
}

interface Rectangulo {
    ancho: number;
    alto: number;
    color?: Color;
}

let rect1: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Rojo,
};
let rect2: Rectangulo = {
    ancho: 4,
    alto: 6
};

function area(r: Rectangulo): number {
    return r.alto * r.ancho;
}

const areaRect = area(rect1);
console.log(areaRect);

rect1.toString = function() {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
};
rect2.toString = function() {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
};

console.log(rect1.toString());
console.log(rect2.toString());
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
