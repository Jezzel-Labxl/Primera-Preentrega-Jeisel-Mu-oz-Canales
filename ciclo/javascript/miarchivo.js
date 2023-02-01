Programa que me calcula el total a pagar de productos seleccionados

let producto = prompt("Ingrese el  Producto a Comprar");
while (producto != "Salir") {
  let precio = prompt("Ingrese el precio unitario del Producto: " + producto);

  let cantidad = prompt("Ingrese la Cantidad a comprar ");

  let total = precio * cantidad;

  alert("total a pagar: " + total);
  producto = prompt("Ingrese el  Producto a Comprar");
}
