

  $(document).ready(function() {
    $("#sendmoney-form").submit(function(event) {
        event.preventDefault();

        var destinatario = parseFloat ($("#destinatario").val());
        var monto = parseFloat ($("#monto").val());

        // Validación de la información
        if (destinatario === "" || monto === "" || isNaN(monto)) {
            $(".error-message").text("Por favor, complete todos los campos");
            return;
        }

        if (monto <= 0){
          $(".error-message").text("Por favor, ingrese un monto válido");
          return;
        }
        // Simulación de envío de dinero (reemplazar con API real)
        var saldoActual = parseFloat($("#saldo-cuenta").text());
        if (monto > saldoActual) {
            $(".error-message").text("Saldo insuficiente");
            return;
        }

        // Mostrar mensaje de confirmación
        $(".error-message").text("Transferencia realizada exitosamente");

        // Redirigir al menú principal después de unos segundos
        setTimeout(function() {
            window.location.href = "menu.html";
        }, 2000);
    });
});



