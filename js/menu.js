function mensajeDeposito() {
  alert("Redirigiendo a Depositos");
}

function mensajeEnviar() {
  alert("Redirigiendo a Enviar Dinero");
}

function mensajeTransacciones() {
  alert("Redirigiendo a Ultimas Transacciones");
}

$(document).ready(function () {
  // Simular la obtención del saldo actual (reemplazar con API real)
  var saldoActual = 10000;
  $("#saldo-cuenta").text("$" + saldoActual.toFixed(2));
});
