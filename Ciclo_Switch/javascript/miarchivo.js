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
