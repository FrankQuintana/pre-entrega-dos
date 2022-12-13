const productos = [
    {nombre: "azul", precio: 1500 },
    {nombre: "negro", precio: 1500 },
    {nombre: "rosa", precio: 1500 },
    {nombre: "amarillo", precio: 1500 },
    {nombre: "verde", precio: 1500 },
    {nombre: "bolsillo", precio: 2500 },
    {nombre: "geometrico", precio: 4500 },
    {nombre: "pastel", precio: 3500 },
];

let carro = [];

let add = prompt("Desea comprar nuestros cuadernos inteligentes?");
while (add != "si" && add != "no") {
    alert("Para continuar escriba si o no");
    add = prompt("Quieres comprar, si o no?");
}
if (add == "si") {
    alert("Genial, estos son nuestros productos");
    let misProductos = productos.map((producto) =>
    producto.nombre+" "+" $"+producto.precio);
    alert(misProductos.join(" - "));
}else if (add == "no") {
    alert("Suerte, hasta la proxima!");
}
while (add != "no") {
    let producto = prompt("Escribe el nombre del producto");
    let precio = 0;
    if (producto == "azul" || producto == "negro" || producto == "rosa" || producto == "amarillo" || producto == "verde" || producto == "bolsillo" || producto == "geometrico" || producto == "pastel") {
        switch (producto) {
            case "azul":
                precio = 1500;
                break;
            case "negro":
                precio = 1500;
                break;
            case "rosa":
                precio = 1500;
                break;
            case "amarillo":
                precio = 1500;
                break;
            case "verde":
                precio = 1500;
                break;
            case "bolsillo":
                precio = 2500;
                break;
            case "geometrico":
                precio = 4500;
                break;
            case "pastel":
                precio = 3500;
                break;
            default:
                break;
        }
        let cantidad = parseInt(prompt("Cuantas unidades quiere?"));

        carro.push({producto, cantidad, precio});
    }else {
        alert("No tenemos ese producto, ingrese de nuevo el nombre")
    }
    add = prompt("Buena eleccion!!! Quiere aprovechar y seguir comprando?");

    while (add === "no") {
        alert("Que disfrutes tus productos. Hasta la proxima!");
        carro.forEach((carroFinal) => {
            console.log(`producto: cuaderno ${carroFinal.producto}`)
            console.log(`cantidad: ${carroFinal.cantidad}`)
            console.log(`total por producto: ${carroFinal.cantidad * carroFinal.precio}`)
        });
    break;
    }
}

const total = carro.reduce((ca, el) => ca + el.precio * el.cantidad, 0);
console.log(`El valor final de su compra es: ${total}`)