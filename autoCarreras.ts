import Auto from './auto';

export default class AutoCarreras extends Auto {
    private ploteado: boolean;

    public constructor (marca: string, modelo: string, año: number, patente: string, precio: number) {
        super(marca, modelo, año, patente, precio)
        this.ploteado = true;
    }

    public acelerar(): void {
        console.log('Acelerando..');
        this.velocidadActual += 50;
    }

    public frenar(): void {
        console.log('Frenando..');
        this.velocidadActual -= 50;
    }

    public plotearDesplotear(): void {
        if(this.ploteado)
            this.ploteado = false;
        else this.ploteado = true;
    }

    public getPloteado(): boolean {
        return this.ploteado;
    }
}