(function(){
    "use strict";

    document.addEventListener('DOMContentLoaded', function(){
        
        //VALIDACIÓN DE DATOS PERSONALES

        var nombres = document.getElementById('nombre');
        var correo = document.getElementById('correo');
        var celular = document.getElementById('telefono');
        var entradas = document.getElementById('entradas');

        nombres.addEventListener('blur',validar_campo);
        correo.addEventListener('blur',validar_campo);
        celular.addEventListener('blur',validar_campo);
        entradas.addEventListener('blur' , validar_campo);

        function validar_campo() {
            if (this.value == '') {
                this.style.border='1px solid red';
            }
            else{        
                this.style.border='1px solid #cccccc';
            }
        }

        //VALIDACION DE LA CANTIDAD DE ENTRADAS
        
        /* var pases = document.getElementById('entradas');
        var calcular = document.getElementById('contact-submit');

        calcular.addEventListener('click', calcular_montos);

       function calcular_montos(eve) {
            event.preventDefault();
            var cantidad = pases.value;
            var total = cantidad*15;
            var respuesta = confirm('Cantidad de entradas: ' + cantidad + '\nCosto por entrada: $15\n' + 'El total es: $' + total + "\n¿Deseas continuar?");

            if (respuesta == true) {
                true;
            }
            else{
                false;
            }
            
        }    */



    }); //DOM CONTENT LOADED
})();