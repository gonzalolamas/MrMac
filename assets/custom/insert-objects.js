// Tarea con una lista desordenada

function envio(nombre, precio, bebida, aderezos) {
    this.Nombre = nombre;
    this.Precio = precio;
    this.Bebida = bebida;
    this.Aderezos = aderezos;
}

let carne = new envio("Hamburguesa de carne", "$450", "Fanta", "Ketchup");
let pollo = new envio("Hamburguesa de pollo", "$350", "Jugo", "Mayonesa");
let ensalada = new envio("Ensalada clasica", "$300", "Agua", "Vinagreta");

let pedidos = [carne,pollo,ensalada];

for(envio of pedidos){
    console.log(envio)
}

let crearLista = function() {
    let ul = document.getElementsByClassName("list-group-item")[0];
    for(envio of pedidos) {
        let li = document.createElement("li")
        li.appendChild(document.createTextNode(`${envio.Nombre} ${envio.Precio} ${envio.Bebida} ${envio.Aderezos}`))
        ul.appendChild(li)
    }
}



