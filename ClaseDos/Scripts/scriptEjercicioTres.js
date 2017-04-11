window.onload= function()
{
    var parrafos = document.getElementsByTagName( 'p' );

    for( var i = 0; i < parrafos.length; i++ )
    {
        parrafos[ i ].innerHTML = "Parrafo Numero"+" "+(i+1) ;
    }

    var txtGuardado = document.getElementById("texto");
    txtGuardado.onblur = function(){
    txtGuardado.value = document.getElementById("textoDos").value;
    }

   var txtEnCambio = document.getElementById("textoTres");
    //txtEnCambio.onchange = function(){
   //     txtGuardado.value = txtEnCambio.value;
    //}
    txtEnCambio.onkeydown = function(){
        txtGuardado.value = txtEnCambio.value;
    }
    
}

