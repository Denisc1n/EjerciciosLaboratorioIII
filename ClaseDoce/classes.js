class Motor {
    constructor(tipoMotor, potenciaMotor) {
        this.tipo = tipoMotor;
        this.potencia = potenciaMotor;
    }
    Encender(callback) {
        window.setTimeout(() => { callback(this.tipo, true); }, 3000);
    }
    Apagar(callback) {
        window.setTimeout(() => { callback(this.tipo, false); }, 3000);
    }
}
function callback(tipo, estado) {
    if (!estado) {
        console.log("Apagado");
        return;
    }
    console.log("Encendido");
}
class Accesorio {
    constructor(idAccesorio, nombreAccesorio) {
        this.id = idAccesorio;
        this.nombre = nombreAccesorio;
    }
}
class Vehiculo {
    constructor(precioB, motor, marcaVehiculo, modeloVehiculo, listaAccesorios) {
        this._motor = motor;
        this._precioBase = precioB;
        this.marca = marcaVehiculo;
        this.modelo = modeloVehiculo;
        this.listaAccesorios = listaAccesorios;
    }
    get precioBase() {
        if (this._precioBase) {
            return this._precioBase;
        }
        else {
            console.log("No tiene precio base");
            return 0;
        }
    }
    set precioBase(precio) {
        this.precioBase = precio;
    }
    get motor() {
        return this._motor;
    }
    set motor(motor) {
        this._motor = motor;
    }
    CalcularPrecioFinal(precioBase) {
        return (precioBase + (precioBase * 0.08));
    }
    AgregarAccesorios(...accesorios) {
        let salida;
        salida = " ";
        accesorios.forEach(element => {
            salida += element.id + " " + element.nombre + " ";
        });
        return salida;
    }
}
class Camion extends Vehiculo {
    constructor(largo, traccion, marca, modelo, motor, precioBase, accesorios) {
        super(precioBase, motor, marca, modelo, accesorios);
        this.largo = largo;
        this.traccionCuadruple = traccion;
    }
}
window.onload = function () {
    let camion = new Camion("Largo", true, "Ford", "2015", new Motor("Diesel", 500), 10000, "");
    console.log(camion);
    let accesorioUno = new Accesorio(1, "Espejo Delantero");
    let accesorioDos = new Accesorio(2, "Llantas de acero Inox.");
    let arrayAccesorios = [accesorioUno, accesorioDos];
    console.info(camion.AgregarAccesorios(accesorioUno, accesorioDos));
    camion.motor.Encender(callback);
    camion.motor.Apagar(callback);
};
