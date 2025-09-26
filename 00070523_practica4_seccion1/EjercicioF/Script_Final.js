function mostrarRecordatorio() {
  const dia = document.getElementById("dia").value.trim().toLowerCase();
  const mensaje = document.getElementById("mensaje").value;
  let act = "";
  switch (dia) {
    case "lunes":
      act = "Atender un cliente específico";
      break;
    case "martes":
      act = "Visitar una agencia fuera de la ciudad";
      break;
    case "miercoles":
      act = "Llevar a tu hija al ballet";
      break;
    case "jueves":
      act = "Priorizar entregas de desarrollo";
      break;
    case "viernes":
      act = "Atender problemas de manera remota";
      break;
    case "sábado":
    case "sabado":
      act = "Hacer lo que tu esposa quiera";
      break;
    case "domingo":
      act = "Descansar";
      break;
    default:
      act = "Día no válido, intenta nuevamente.";
  }

  document.getElementById("resultado").innerHTML = 
    `<strong>Hoy es ${dia.charAt(0).toUpperCase() + dia.slice(1)}</strong><br>
     Actividad: ${act}<br>
     Mensaje propio: ${mensaje}`;
}