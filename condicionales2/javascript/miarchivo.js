let saludo = prompt(
  "Deseas crear una cuenta?" +
    "Escriba Si para continuar o SALIR para cancelar "
);
if (saludo === "SI" || saludo === "si" || saludo === "Si") {
  datos = prompt(" GENIAL :)  Ingrese su Nombre y apellido");
  usuario = prompt("Ingrese un nombre de Usuario");

  if (datos == "") {
    alert(" Por favor ingresa tus Datos");
  } else {
    contraseña = prompt(
      " A Solo un paso:  " +
        datos +
        "  Para tener tu cuenta  " +
        " INGRESA UNA CONTRASEÑA "
    );
    if (contraseña == "") {
      alert("Error , no ingresó una contraseña");
    } else {
      verificaionContraseña = prompt(" Ingrese Nuevamente la Contraseña ");
      if (contraseña !== verificaionContraseña) {
        alert(" ERROR Las contraseñas no coinciden");
      } else {
        alert(
          "FELICIDADES¡¡¡ Tu Cuenta a sido creada " + "Bienvenido " + datos
        );
        informacion = prompt(
          datos +
            "Deseas conocer tu informacion de tu perfil?" +
            " Escriba SI para continuar o SALIR para cancelar"
        );
        if (
          informacion === "SI" ||
          informacion === "si" ||
          informacion === "Si"
        ) {
          alert(
            "Tu informacion es :" +
              " Nombres y Apellidos : " +
              datos +
              " , " +
              " Nombre Usuario: " +
              usuario +
              " , " +
              " Contraseña: " +
              contraseña
          );
        } else {
          alert("OK");
        }
      }
    }
  }
} else {
  alert("Lo entendemos Vuelva Pronto :,)");
}
