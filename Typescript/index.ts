// var poliza:number,cliente:string,importe:number,vencimiento:string,cuota:number,riesgo:string;

// poliza = 2544;
// cliente = "Salasevicius, Flavio";
// cuota = 1;
// vencimiento = "12/11/2021";
// importe = 2500.50;
// riesgo = "Volkswagen Gol 2018";

// console.log(riesgo)

let nombre: string;
let dni: number;
let poliza: number;
let venc: string;
let cuota: number;
let riesgo: string;
let tomador: Object;

nombre = "Salasevicius Flavio";
dni = 33189876;


const Cliente = {
    nombre: nombre,
    dni:dni
}


class Poliza  {
    
    constructor(
        public cliente: object,
        public poliza: number,
        public venc:   string,
        public cuota:  number,
        public riesgo: string,
    ){

    }

    public buscar = ()=>{
        let nroPoliza : number;
        nroPoliza = 2452;
        
        if(nroPoliza == this.poliza){
            console.log(cliente1)
        }
    }


}


let cliente1 = new Poliza(Cliente,2452,'13/11/2021',1,'Volkswagen Gol 2018');
let cliente2 = new Poliza(Cliente,2453,'13/12/2021',2,'Volkswagen Up 2018');
cliente1.buscar();
