console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log("Funciones");
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
// Funciones
function add(a: number, b: number): number {
    return a + b;
}

const sum = add(4, 6);

//Función que rtegresa otra función
function createAdder(a: number): (number) => number {
    return function(b: number) {
        return b + a;
    };
}

const addFour = createAdder(4);// Retorna la función y se envia el primer parametro
console.log(addFour);
const fourPlus6 = addFour(6); //Asigno esa función a ona constante y se envia el segundo parametro
console.log(fourPlus6);

function fullName1(firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`;
}

function fullName2(firstName: string, lastName: string = 'Smith'): string {
    return `${firstName} ${lastName}`;
}

const persona1 = fullName1('Jaiden');
console.log(persona1);
const persona2 = fullName2('Agente');
console.log(persona2);
console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
