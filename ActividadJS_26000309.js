let birth_month
let day_of_birth
birth_month = parseInt(prompt("Ingrese su mes de nacimiento (en número):"));
day_of_birth = parseInt(prompt("Ingrese su día de nacimiento (en número):"));

if ((birth_month == 3 && day_of_birth >= 21) || (birth_month == 4 && day_of_birth <= 19)) {
    alert("Tu signo zodiacal es Aries");
}
else if ((birth_month== 4 && day_of_birth >= 20) || (birth_month == 5 && day_of_birth <= 20)) {
    alert("Tu signo zodiacal es Tauro");
}
else if ((birth_month == 5 && day_of_birth >= 21) || (birth_month == 6 && day_of_birth <= 20)) {
    alert("Tu signo zodiacal es Géminis");
}
else if ((birth_month == 6 && day_of_birth >= 21) || (birth_month == 7 && day_of_birth <= 22)) {
    alert("Tu signo zodiacal es Cáncer");
}
else if ((birth_month == 7 && day_of_birth >= 23) || (birth_month == 8 && day_of_birth <= 22)) {
    alert("Tu signo zodiacal es Leo");
}   
else if ((birth_month == 8 && day_of_birth >= 23) || (birth_month == 9 && day_of_birth <= 22)) {
    alert("Tu signo zodiacal es Virgo");
}
else if ((birth_month == 9 && day_of_birth >= 23) || (birth_month == 10 && day_of_birth <= 22)) {
    alert("Tu signo zodiacal es Libra");
}
else if ((birth_month == 10 && day_of_birth >= 23) || (birth_month == 11 && day_of_birth <= 21)) {
    alert("Tu signo zodiacal es Escorpio");
}   
else if ((birth_month == 11 && day_of_birth >= 22) || (birth_month == 12 && day_of_birth <= 21)) {
    alert("Tu signo zodiacal es Sagitario");
}
else if ((birth_month == 12 && day_of_birth >= 22) || (birth_month == 1 && day_of_birth <= 19)) {
    alert("Tu signo zodiacal es Capricornio");
}
else if ((birth_month == 1 && day_of_birth >= 20) || (birth_month == 2 && day_of_birth <= 18)) {
    alert("Tu signo zodiacal es Acuario");
}
else if ((birth_month == 2 && day_of_birth >= 19) || (birth_month == 3 && day_of_birth <= 20)) {
    alert("Tu signo zodiacal es Piscis");
}
else {
    alert("Fecha de nacimiento inválida");
}

