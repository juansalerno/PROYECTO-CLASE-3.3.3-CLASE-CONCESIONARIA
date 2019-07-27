import Auto from './auto';
import AutoCarreras from './autoCarreras';
import AutoElectrico from './autoElectrico';
import * as fs from 'fs';

export default class Concesionaria {
    private baseDatos: Auto[];

    public constructor() {
        this.baseDatos = this.getArregloDesdeArchivo('./listaAutos.txt', '\r\n', ',');
    }

    private getArregloDesdeArchivo(rutaArchivo, separador1, separador2): Auto[] {
        let texto = fs.readFileSync(rutaArchivo, 'utf8');
        let arregloTexto: string[] = texto.split(separador1);
        arregloTexto.splice(0, 1);
        let arregloAutos: Auto[] = new Array(arregloTexto.length);
        for (let i = 0; i < arregloTexto.length; i++) {
            let linea: string[] = arregloTexto[i].split(separador2);
            switch (linea[0].trim()) {
                case '1': {
                    arregloAutos[i] = new Auto(linea[1].trim(), linea[2].trim(), parseInt(linea[3].trim()), linea[4].trim(), parseInt(linea[5].trim()));
                    break;
                }
                case '2': {
                    arregloAutos[i] = new AutoCarreras(linea[1].trim(), linea[2].trim(), parseInt(linea[3].trim()), linea[4].trim(), parseInt(linea[5].trim()));
                    break;
                }
                case '3': {
                    arregloAutos[i] = new AutoElectrico(linea[1].trim(), linea[2].trim(), parseInt(linea[3].trim()), linea[4].trim(), parseInt(linea[5].trim()));
                    break;
                }
                default: null;
            }
        }
        return arregloAutos;
    }

    public imprimirListadoCompleto(): void {
        console.log(this);

    }

    public buscarAutoPorPatente(patente: string): Auto {
        for (let i = 0; i < this.baseDatos.length; i++) {
            if (patente.toLowerCase() == this.baseDatos[i].getPatente().toLowerCase()) {
                return this.baseDatos[i];
            }
        }
        console.log('No se han encontrado resultados.');
        return null;
    }

    private buscarIndicePorPatente(patente: string): number {
        for (let i = 0; i < this.baseDatos.length; i++) {
            if (patente.toLowerCase() == this.baseDatos[i].getPatente().toLowerCase()) {
                return i
            }
        }
        return null;
    }

    public borrarAutoPorPatente(patente: string): void {
        let indice = this.buscarIndicePorPatente(patente);
        this.baseDatos.splice(indice, 1);
        console.log('Se ha eliminado el vehiculo');
        
    }

    public reemplazarAutoPorPatente(patente: string, auto: Auto): void {
        let indice = this.buscarIndicePorPatente(patente);
        if (indice != null) {
            this.baseDatos.splice(indice, 1, auto);
            console.log('Información actualizada');
        }
        else console.log('No se ha encontrado la patente buscada');
    }

    public listarAutosElectricos(): void {
        for (let i = 0; i < this.baseDatos.length; i++) {
            if (this.baseDatos[i] instanceof AutoElectrico) {
                console.log(this.baseDatos[i]);
            }
        }
    }

    public listarAutosDeCarreras(): void {
        for (let i = 0; i < this.baseDatos.length; i++) {
            if (this.baseDatos[i] instanceof AutoCarreras) {
                console.log(this.baseDatos[i]);
            }
        }
    }

}

