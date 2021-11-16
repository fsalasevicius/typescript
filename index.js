// var poliza:number,cliente:string,importe:number,vencimiento:string,cuota:number,riesgo:string;
// poliza = 2544;
// cliente = "Salasevicius, Flavio";
// cuota = 1;
// vencimiento = "12/11/2021";
// importe = 2500.50;
// riesgo = "Volkswagen Gol 2018";
// console.log(riesgo)
var nombre;
var dni;
var poliza;
var venc;
var cuota;
var riesgo;
var tomador;
nombre = "Salasevicius Flavio";
dni = 33189876;
var Cliente = {
    nombre: nombre,
    dni: dni
};
var Poliza = /** @class */ (function () {
    function Poliza(cliente, poliza, venc, cuota, riesgo) {
        this.cliente = cliente;
        this.poliza = poliza;
        this.venc = venc;
        this.cuota = cuota;
        this.riesgo = riesgo;
        this.buscar = function () {
            console.log("dsad");
        };
        var cliente1 = new Poliza(Cliente, 2452, '13/11/2021', 1, 'Volkswagen Gol 2018');
        var cliente2 = new Poliza(Cliente, 2453, '23/11/2021', 2, 'Ford Focus 2020');
        cliente1.buscar();
    }
    return Poliza;
}());
