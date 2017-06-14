class Motor
{
    tipo:string;
    potencia:number;

    constructor( tipoMotor:string, potenciaMotor:number )
    {
        this.tipo       = tipoMotor;
        this.potencia   = potenciaMotor;
    }
    
    public Encender( callback:(tipo:string, estado:boolean) => void ):void{
        window.setTimeout( () => { callback( this.tipo, true ); }, 3000 );
    }
    public Apagar( callback:(tipo:string, estado:boolean) => void ):void{
        window.setTimeout( () => { callback( this.tipo, false ); }, 3000 );
    }
}
function callback( tipo:string, estado:boolean ):void
{
    if(!estado)
    {
    console.log("Apagado");
    return;
    }
    console.log("Encendido");
}   
class Accesorio
{
    id:number;
    nombre:string;

    constructor( idAccesorio:number, nombreAccesorio:string )
    {
        this.id     = idAccesorio;
        this.nombre = nombreAccesorio;
    }
}


class Vehiculo
{
    private _precioBase :number;
    private _motor      :Motor;
    marca               :string;
    modelo              :string;

    private listaAccesorios:string;

    constructor( precioB:number, motor:Motor, marcaVehiculo:string, modeloVehiculo:string, listaAccesorios:string )
    {
        this._motor         = motor;
        this._precioBase    = precioB;
        this.marca          = marcaVehiculo;
        this.modelo         = modeloVehiculo;
        this.listaAccesorios = listaAccesorios;
    }

    get precioBase():number
    {
        if( this._precioBase )
        {
            return this._precioBase;
        }
        else
        {
            console.log("No tiene precio base");
            return 0;
        }
    }
    
    set precioBase( precio:number )
    {
        this.precioBase = precio;
    }

    get motor():Motor
    {
        return this._motor;
    }

    set motor( motor:Motor )
    {
        this._motor = motor;
    }

    public CalcularPrecioFinal( precioBase:number ):number
    {
        return ( precioBase + ( precioBase*0.08 ) );
    }

    public AgregarAccesorios( ...accesorios:Accesorio[] ):string
    {
        let salida:string
        accesorios.forEach(element => {
            salida+=element.id+" "+element.nombre;
        });
        return salida;
    }
}

class Camion extends Vehiculo
{
    largo:string;
    traccionCuadruple:boolean;

    constructor( largo:"Corto"|"Mediano"|"Largo", traccion:boolean, marca:string, modelo:string, motor:Motor, precioBase:number, accesorios:string )
    {
        super( precioBase, motor, marca, modelo, accesorios );
        this.largo = largo;
        this.traccionCuadruple = traccion;
    }
}

window.onload = function()
{
 let camion = new Camion("Largo", true, "Ford", "2015", new Motor( "Diesel", 500 ), 10000, "" );
 console.log( camion );
 let accesorioUno:Accesorio = new Accesorio( 1, "Espejo Delantero" );
 let accesorioDos:Accesorio = new Accesorio(2, "Llantas de acero Inox.");
 let arrayAccesorios : Accesorio[] = [accesorioUno, accesorioDos];
 console.info( camion.AgregarAccesorios( accesorioUno,accesorioDos ) ) ;
 camion.motor.Encender( callback );
 camion.motor.Apagar( callback );
};

