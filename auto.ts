export default class Auto {
    protected marca: string;
    protected modelo: string;
    protected año: number;
    protected estaPrendido: boolean;
    protected velocidadActual: number;
    protected patente: string;
    protected precio: number;

    public constructor(marca: string, modelo: string, año: number, patente: string, precio: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.precio = precio;
        this.estaPrendido = false;
        this.velocidadActual = 0;
        this.patente = patente;
    }

    public encenderApagar(): void {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else this.estaPrendido = true;
    }

    public acelerar(): void {
        console.log('Acelerando..' + this.patente);
        this.velocidadActual += 10;
    }

    public frenar(): void {
        console.log('Frenando..' + this.patente);
        this.velocidadActual -= 10;
    }

    public getVelocidadActual(): number {
        console.log('La velocidad actual de ' + this.patente + 'es: ' + this.velocidadActual);
        return this.velocidadActual
    }

    public getEstaPrendido(): boolean {
        return this.estaPrendido;
    }

    public getAño(): number {
        return this.año;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public getMarca(): string {
        return this.marca;
    }

    public getPatente(): string {
        return this.patente;
    }

    public getPrecio(): number {
        return this.precio;
    }
}