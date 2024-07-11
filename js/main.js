document.addEventListener("DOMContentLoaded", (event) => {
  let myform = document.getElementById('formulario2');

  myform.addEventListener('submit', (event) => {
      event.preventDefault();

      if (nombre_form.length === 0) {
        alert("Nombre requerido")
        nombre_form.focus()
        return;
    }
    if (correo_form.length === 0) {
        alert("Nombre requerido")
        correo_form.focus()
        return;
    }
    if (interes_form.length === 0) {
        alert("Nombre requerido")
        interes_form.focus()
        return;
    }
  });
});
