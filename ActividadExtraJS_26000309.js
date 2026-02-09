let seguirJugando = true;

while (seguirJugando) {

    let numeroComputadora = Math.floor(Math.random() * 9) + 1;

    let numeroUsuario = Number(prompt("Ingrese un número entre 3 y 6"));

    while (numeroUsuario < 3 || numeroUsuario > 6) {
        numeroUsuario = Number(prompt("Número inválido. Ingrese un número entre 3 y 6"));
    }

    let eleccion = prompt("¿Tu número es mayor, menor o igual al de la computadora?");

    let resultadoCorrecto = false;

    if (numeroUsuario > numeroComputadora && eleccion === "mayor") {
        resultadoCorrecto = true;
    } else if (numeroUsuario < numeroComputadora && eleccion === "menor") {
        resultadoCorrecto = true;
    } else if (numeroUsuario === numeroComputadora && eleccion === "igual") {
        resultadoCorrecto = true;
    }

    if (resultadoCorrecto) {
        alert(
            "La computadora eligió " + numeroComputadora +
            ", usted eligió " + numeroUsuario +
            ". Su elección es correcta. ¡Ha adivinado!"
        );
    } else {
        alert(
            "La computadora eligió " + numeroComputadora +
            ", usted eligió " + numeroUsuario +
            ". Su elección es incorrecta."
        );
    }

    let respuesta = prompt("¿Desea jugar otra vez? SI / NO");

    if (respuesta !== "SI") {
        seguirJugando = false;
        alert("Gracias por jugar.\nNombre: José David Juárez Pérez\nCarnet: 26000309");
    }
}
