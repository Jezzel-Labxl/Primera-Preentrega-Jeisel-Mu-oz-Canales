//  Programa en el cual se ingrese una figura (Triángulo, cuadrado, círculo y rectángulo) y dependiendo que figura elija, se le pida base, altura o radio y calcular el área.

//

/* 
const pi = 3.1416;
let figuraGeometrica = prompt(
  "Escriba una figura: Triangulo, cuadrado, círculo o rectangulo       /  Escriba Salir para cerrar"
);
while (figuraGeometrica != "Salir") {
  switch (figuraGeometrica) {
    case "Triangulo":
    case "triangulo":
      let baseTriangulo = parseInt(prompt("Ingresa la base del triángulo "));

      let alturaTriangulo = parseInt(prompt("Ingresa la altura del triángulo"));

      let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

      alert("El área del triángulo es: " + areaTriangulo);
      break;

    case "Cuadrado":
    case "cuadrado":
      let baseCuadrado = parseInt(prompt("Ingresa el lado del cuadrado"));

      let areaCuadrado = baseCuadrado * baseCuadrado;
      alert("El área del cuadrado es: " + areaCuadrado);

      break;

    case "Circulo":
    case "circulo":
      let radioCirculo = parseInt(prompt("Ingresa el radio del circulo"));

      let areaCirculo = pi * (radioCirculo * radioCirculo);

      alert("El área del circulo es: " + areaCirculo);
      break;

    case "Rectangulo":
    case "rectangulo":
      let baseRectangulo = parseInt(prompt("Ingresa la base del rectángulo"));
      let alturaRectangulo = parseInt(
        prompt("Ingresa la altura del rectángulo")
      );
      let areaRectangulo = baseRectangulo * alturaRectangulo;
      alert("El área del rectángulo es: " + areaRectangulo);
      break;
  }

  figuraGeometrica = prompt(
    "Escriba una figura: Triangulo, cuadrado, círculo o rectangulo       /  Escriba Salir para cerrar"
  );
}
 */

/////////////////////////////////
///////////////////////////////

// programa que me indica los dias de la semana ingresando un numero del 1 al 7

let diaSemana = parseInt(
  prompt("Escriba un día de la semana del 1 al 7 //Escriba Salir para cerrar")
);

while (diaSemana != "Salir") {
  switch (diaSemana) {
    case 7:
      alert("Hoy es Domingo ");
      break;
    case 1:
      alert("Hoy es Lunes");
      break;
    case 2:
      alert("Hoy es Martes");
      break;
    case 3:
      alert("Hoy es Miercoles");
      break;
    case 4:
      alert("Hoy es Jueves");
      break;
    case 5:
      alert("Hoy es Viernes");
      break;
    case 6:
      alert("Hoy es Sabado");
      break;
    default:
      alert("Ingrese un dia de la semana");
  }
  diaSemana = prompt("Escriba un dia de la semana del 1 al 7");
}
