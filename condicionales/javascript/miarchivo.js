let calificacion = parseInt(
  prompt("Ingrese la calificación que obtuvo del 0 al 20")
);

if (calificacion >= 0 && calificacion <= 10) {
  alert("Su nota es: " + calificacion + "  Usted esta Desaprobado");
  alert("Esfuerzate mas en la Proxima¡ TU Puedes¡ :) ");
} else if (calificacion >= 11 && calificacion <= 17) {
  alert("Su nota es: " + calificacion + "  Usted esta Aprobado");
  alert("Felicidades , vas por buen Camino :) ");
} else if (calificacion >= 18 && calificacion <= 20) {
  alert("Su nota es: " + calificacion + "  Usted esta Aprobado");
  alert("Muchas Felicidades¡¡Sigue asi ;) ");
} else {
  alert("ERROR Ingrese una nota valida del 0 al 20 ");
}
