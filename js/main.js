let loaded = ( eventLoaded ) => {

    let myform = document.getElementById('form');
  
    myform.addEventListener('submit', ( eventSubmit ) => { 
      eventSubmit.preventDefault();
      let nombre_valor= nombre.value;
      let correo_valor=correo.value;
      let interes_valor=interes.value;
      if( nombre_valor.length == 0 ) {
      
        nombre_valor.focus()
  
        alert('Ingrese un texto válido')
  
        return;
      }
      if( correo_valor.length == 0 ) {
      
        correo_valor.focus()
  
        alert('Ingrese un texto válido')
  
        return;
      }
      if( interes_valor.length == 0 ) {
      
        interes_valor.focus()
  
        alert('Ingrese un texto válido')
  
        return;
      }
  
  
  
      debugger;
  
    })
  
  
  window.addEventListener("DOMContentLoaded", loaded);}
