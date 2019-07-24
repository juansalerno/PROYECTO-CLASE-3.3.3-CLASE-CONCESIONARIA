import Auto from './auto';

export default class AutoElectrico extends Auto {
    private nivelBateria: number;

    public constructor (marca: string, modelo: string, año: number, patente: string, precio: number) {
        super(marca, modelo, año, patente, precio)
        this.nivelBateria = 100;
    }

    public acelerar(): void {
        console.log('Acelerando..');
        this.velocidadActual += 5;
    }

    public frenar(): void {
        console.log('Frenando..');
        this.velocidadActual -= 5;
    }

    public estacionarAutomatico(): void {
        console.log('Estacionando automaticamente..');
    }

    public cargarBateria(): void {
        this.nivelBateria += 15;
    }

    public usarBateria(): void {
        this.nivelBateria -= 15;
    }

    public getNivelBateria(): number {
        console.log('El nivel de bateria es: '+ this.nivelBateria);
        return this.nivelBateria;
    }
}