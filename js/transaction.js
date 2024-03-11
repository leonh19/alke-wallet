$(document).ready(function() {
    // Simular la obtención de transacciones recientes (reemplazar con API real)
    var transacciones = [
        {
            "fecha": "2024-03-01",
            "tipo": "deposito",
            "monto": 1000.50,
            "descripcion": "Propia"
        },
        {
            "fecha": "2024-02-28",
            "tipo": "envio",
            "monto": 500.00,
            "descripcion": "Juan Perez"
        },
        {
            "fecha": "2024-02-25",
            "tipo": "deposito",
            "monto": 200.00, 
            "descripcion": "Propia"
        }
    ]

    // Mostrar las transacciones en la tabla
    mostrarTransacciones(transacciones);
})

function mostrarTransacciones(transacciones) {
    // Crea una tabla HTML
    var tabla = "<table id='transacciones'>";
    tabla += "<thead>";
    tabla += "<tr>";
    tabla += "<th>Fecha</th>";
    tabla += "<th>Tipo</th>";
    tabla += "<th>Monto</th>";
    tabla += "<th>Descripcion</th>"
    tabla += "</tr>";
    tabla += "</thead>";
    tabla += "<tbody>";
  
    //agrega una fila para cada transacción
    for (var i = 0; i < transacciones.length; i++) {
      tabla += "<tr>";
      tabla += "<td>" + transacciones[i].fecha + "</td>";
      tabla += "<td>" + transacciones[i].tipo + "</td>";
      tabla += "<td>" + transacciones[i].monto + "</td>";
      tabla += "<td>" + transacciones[i].descripcion + "</td>";
      tabla += "</tr>";
    }
  
    tabla += "</tbody>";
    tabla += "</table>";
  
    // Inserta la tabla en el HTML
    $("#transacciones").html(tabla);
  }

    // Filtrar las transacciones por tipo, fecha de inicio y fecha fin
    $("#filter-form").submit(function(event) {
        event.preventDefault();

        var tipo = $("#tipo-transaccion").val();
        var fechaInicio = $("#fecha-inicio").val();
        var fechaFin = $("#fecha-fin").val();

        var transaccionesFiltradas = transacciones.filter(function(transaccion) {
            var fechaTransaccion = new Date(transaccion.fecha);
        });
    });
