const formulario = document.getElementById('formulario-producto');
const inputs = document.querySelectorAll('#formulario-producto input');
const selects = document.querySelectorAll('#formulario-producto select');

const expresiones = {
    inputModelo: /^[0-9]{1,6}$/,
    inputProducto: /^.{4,40}$/,
    inputDetalle: /^.{10,100}$/,
    inputPeso: /^[0-9.]{1,6}$/,
    inputMaterial: /^.{1,15}$/,
    inputStock: /^[0-9]{1,6}$/
}

const campos = {
    inputProducto: false,
    inputModelo: false,
    inputProducto: false,
    inputDetalle: false,
    inputPeso: false,
    inputMaterial: false,
    inputStock: false
}

const validarCampo = (expresion, input, campo) => {
    // se cambio de la estructura condicional a la estructura ternario
    document.getElementById(`${campo}`).classList.add(//obtiene el elemento de HTML con el ID por la variable 'campo'
        expresion.test(input.value) ? 'is-valid' : 'is-invalid' //Se añade la clase determinada por la expresion ternaria, si es 'is-valid' es verdadera si es 'is- invalid' es falsa
      );
      document.getElementById(`${campo}`).classList.remove(//con 'remove' elimina uno o mas clases CSS del elemento
        expresion.test(input.value) ? 'is-invalid' : 'is-valid'
      );
      campos[campo] = expresion.test(input.value);//con esta linea, asigna el resultado de la evaluacion de la expresion
}

const validarFormulario = (e) => {
    switch(e.target.name) {
        case "inputProducto":
              validarCampo(expresiones.inputProducto,e.target,'inputProducto');
        break;
        case "inputModelo":
            validarCampo(expresiones.inputModelo,e.target,'inputModelo');
        break;
        case "inputProducto":
        validarCampo(expresiones.inputProducto,e.target,'inputProducto');
        break;
        case "inputDetalle":
            validarCampo(expresiones.inputDetalle,e.target,'inputDetalle');
        break;
        case "inputPeso":
            validarCampo(expresiones.inputPeso,e.target,'inputPeso');
        break;
        case "inputMaterial":
            validarCampo(expresiones.inputMaterial,e.target,'inputMaterial');
        break;
        case "inputStock":
            validarCampo(expresiones.inputStock,e.target,'inputStock');
        break; 
        case "inputTalla":
            //se cambio una sentencia condicional por un operador ternario 
            document.getElementById('inputTalla').classList.remove(//decide si la clase'is-invalid' o 'is-valid' se deben de quitar
                e.target.value !== '' ? 'is-invalid' : 'is-valid'
              );
              document.getElementById('inputTalla').classList.add(//decide si la clase'is-invalid' o 'is-valid' se deben de agregar
                e.target.value !== '' ? 'is-valid' : 'is-invalid'
              );
         break;  
         case "inputImagen":
            //se cambio una sentencia condicional por un operador ternario 
            document.getElementById('inputTalla').classList.remove(
                e.target.value !== '' ? 'is-invalid' : 'is-valid'
              );
              document.getElementById('inputTalla').classList.add(
                e.target.value !== '' ? 'is-valid' : 'is-invalid'
              );
         break; 
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario)
});

selects.forEach((select) => {
    console.log(select);
    select.addEventListener('blur' , validarFormulario);
});

//Funcion que se añadio para el evento de HTML 
function grabarEvento() {
    // Lógica que se ejecutará cuando se haga clic en el botón
    console.log("Botón Grabar clicado");
    // Puedes añadir más acciones según sea necesario
}

