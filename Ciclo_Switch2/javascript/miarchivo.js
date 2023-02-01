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
