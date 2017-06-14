
// Objetos
type auto = {
  carroceria:string,
  modelo:string,
  antibalas:boolean,
  pasajeros:number,
  disparar?:()=>void
};

let batimovil : auto ={//{carroceria:string, modelo:string, antibalas:boolean, pasajeros:number } = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

let bumblebee : {carroceria:string,modelo:string,antibalas:boolean,pasajeros:number,disparar?:()=>void} = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};


// Villanos debe de ser un arreglo de objetos personalizados
type objetosPersonalizados = {
nombre:string,
edad: number,
mutante: boolean
};
let villanos : objetosPersonalizados[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type Carlitos = {
poder:string,
estatura: number
};

let charles:Carlitos = {
  poder:"psiquico",
  estatura: 1.78
};
type tipoApocalipsis = {
lider: boolean,
miembros: string[]
};

let apocalipsis: tipoApocalipsis= {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)

let mystique: Carlitos | tipoApocalipsis;
mystique = charles;
mystique = apocalipsis;
