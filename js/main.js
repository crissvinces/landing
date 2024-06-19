document.addEventListener("DOMContentLoaded", (event) => {
  let myform = document.getElementById('form');

  myform.addEventListener('submit', (event) => {
      event.preventDefault();

      let nombre_valor = document.getElementById('nombre').value;
      let correo_valor = document.getElementById('correo').value;
      let interes_valor = document.getElementById('interes').value;

      if (nombre_valor.length === 0) {
          alert('Ingrese un nombre válido');
          return;
      }
      if (correo_valor.length === 0) {
          alert('Ingrese un correo válido');
          return;
      }
      if (interes_valor.length === 0) {
          alert('Seleccione un interés válido');
          return;
      }

      let resultDiv = document.getElementById('result');
      resultDiv.style.display = 'block';
      resultDiv.innerHTML = `<p>Nombre: ${nombre_valor}</p>
                             <p>Correo: ${correo_valor}</p>
                             <p>Interés: ${interes_valor}</p>`;
  });
});
