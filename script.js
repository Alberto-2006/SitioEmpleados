function generarQR() {
  var nombre = document.getElementById("nombre").value.trim();
  var nss = document.getElementById("nss").value.trim();
  var puesto = document.getElementById("puesto").value.trim();
  var departamento = document.getElementById("departamento").value.trim();

  if (!nombre || !nss || !puesto || !departamento) {
    alert("Por favor llena todos los campos.");
    return;
  }

  var datos = "Nombre: " + nombre + " | NSS: " + nss + " | Puesto: " + puesto + " | Departamento: " + departamento;

  var resultado = document.getElementById("qr-resultado");
  resultado.innerHTML = "<h3>Codigo QR generado:</h3>";

  new QRCode(resultado, {
    text: datos,
    width: 200,
    height: 200,
    colorDark: "#006847",
    colorLight: "#ffffff"
  });

  setTimeout(function() {
    var btnImprimir = document.createElement("button");
    btnImprimir.textContent = "🖨️ Imprimir QR";
    btnImprimir.style.marginTop = "20px";
    btnImprimir.style.padding = "10px 25px";
    btnImprimir.style.backgroundColor = "#006847";
    btnImprimir.style.color = "white";
    btnImprimir.style.border = "none";
    btnImprimir.style.borderRadius = "5px";
    btnImprimir.style.cursor = "pointer";
    btnImprimir.style.fontSize = "15px";

    btnImprimir.onclick = function() {
      var ventana = window.open("", "_blank");
      var qrImg = document.querySelector("#qr-resultado img");
      ventana.document.write(
        "<html><body style='text-align:center; font-family:Arial;'>" +
        "<h2 style='color:#006847'>IMSS - Credencial de Empleado</h2>" +
        "<p><b>Nombre:</b> " + nombre + "</p>" +
        "<p><b>NSS:</b> " + nss + "</p>" +
        "<p><b>Puesto:</b> " + puesto + "</p>" +
        "<p><b>Departamento:</b> " + departamento + "</p>" +
        "<img src='" + qrImg.src + "' style='width:200px;margin-top:20px'>" +
        "</body></html>"
      );
      ventana.document.close();
      ventana.print();
    };

    resultado.appendChild(btnImprimir);
  }, 500);
}