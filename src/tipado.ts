var laboratorio: string = "gory";
console.log(laboratorio);

var laboratorio = "Xian";
console.log(laboratorio);

// no se puede ingresar datos de otro tipo en una misma variale
// var laboratorio = 50;

const ejemplo: boolean = true;


//Tipados Inferidos

var ejemplo2 = 34;
let ejemplo3 = {};

//var ejemplo2 = true;

// nombre de variables iguales 
//funcion anonima autoejecutada
(() => {
    let productName = " Telefono";
    let productPrice = 499.99;

    productName = "licuadora"
    productName.toLowerCase();

    console.log(productName);

    productPrice = 300;
    productPrice.toFixed();
    console.log(productPrice);
}
)();