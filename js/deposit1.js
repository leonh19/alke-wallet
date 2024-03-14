var resultado = 100000;
$("#resultado").text(resultado);

$(document).ready(function () {
  $("#deposit-form").submit(function (event) {
    event.preventDefault();

    var monto = parseFloat($("#monto").val());

    // Validación del monto
    if (monto === "" || isNaN(resultado)) {
      $(".error-message").text("Por favor, ingrese un monto válido");
      return;
    }
    if (monto <= 0) {
      $(".error-message").text("Por favor, ingrese un monto válido");
      return;
    }
    if (!isNaN(monto) && !isNaN(resultado) && monto > 0) {
      resultado = monto + resultado;
      $("#resultado").text(resultado);
    }

    // Mostrar mensaje de éxito
    $(".error-message").text("Depósito realizado exitosamente");

    // Redirigir al menú principal después de unos segundos
    setTimeout(function () {
      window.location.href = "menu.html";
    }, 2000);
  });
});
