

// Funciones Básicas

function funaux (s:string):number{
  return 1;
}


function sumar( a:number, b:number ):number{
  return a + b;
}

let resultadoSuma = sumar( 2 ,3 );
let contar:( datos:string[] )=>number = function( heroes:string[] ):number{
  return heroes.length;
}
let superHeroes:string[] = ["Flash", "Arrow", "Superman", "Linterna Verde"];
let resultado = contar(superHeroes);

//Parametros por defecto
function llamarBatman( llamar:boolean = true ):void{
  if( llamar ){
    console.log("Batiseñal activada");
  }
}

llamarBatman();
//parametro completo seria?
llamarBatman(false);
// Rest?
function unirheroes( ...personas:string[] ):string{
  return personas.join(", ");
}
let nombresHeroes = unirheroes("Flash","Batman", "Linterna Verde", "Aquaman");


// Tipo funcion
function noHaceNada( numero:number, texto:string, booleano:boolean, arreglo:any[] ):number{
  return 1;
}

// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco:( numx:number, textx:string, booleanx:boolean, arreglox:any[] )=>number;
noHaceNadaTampoco = noHaceNada;
let salidaAux = noHaceNadaTampoco( 1, "A", true, ["A","B"]);
