
function pidoDatos(){
    var dato = prompt('Ingrese Mombre', 'Ingrese');
    alert( dato );
}

var numero = 0;
function pidoNumero(){
    var datoNumerico = parseInt( prompt('Ingrese numero') );
    var datoNumericoDos = parseInt( prompt('Ingrese otro numero') );

    if( !isNaN( datoNumerico ) && !isNaN( datoNumericoDos ) ){
    alert( datoNumerico + datoNumericoDos );
    confirm("son numeros");
    }

}

function alerta(){
        window.alert("alerta desde script en archivo aparte");
    }
function segundaAlerta(){
    console.log('alerta desde script en consola.');
}
function tercerAlerta(){
    document.write('alerta en ventana<br>hola');
}

function traeValor(){
var nombre = document.getElementById('textoAIngresar').value;
var txtNombre = "";
alert( nombre );
}



function formarNombre()
{
    var nombre      = document.getElementById( "txtNombre"   ).value;
    var apellido    = document.getElementById( "txtApellido" ).value;
    var ubicacion   = document.getElementById( "completo" );
    ubicacion.value = nombre + ' ' + apellido;
}

