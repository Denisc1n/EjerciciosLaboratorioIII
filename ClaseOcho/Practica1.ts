// Tipos
let batman:string= "Bruce";
let superman:string = "Clark";

let existe:boolean = false;

// Tuplas
let parejaHeroes:[string, string] = [batman,superman];
let villano:[string, number, boolean] = ["Lex Lutor",5,true];

// Arreglos
var aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
enum Fuerza{
    Acuaman   = 0,
    Batman    = 1,
    Flash     = 5,
    Superman  = 100
}
let fuerzaFlash   :Fuerza     = Fuerza.Flash;
let fuerzaSuperman:Fuerza     = Fuerza.Superman;
let fuerzaBatman  :Fuerza     = Fuerza.Batman;
let fuerzaAcuaman :Fuerza     = Fuerza.Acuaman;

// Retorno de funciones
function activar_batiseñal():string{
  return "activada";
}

function pedir_ayuda():void{
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
let poder:any         = 100;
let largoDelPoder = (<string>poder).length
console.log( largoDelPoder );
