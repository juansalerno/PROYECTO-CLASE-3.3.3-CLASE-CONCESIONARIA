"use strict";
exports.__esModule = true;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, año, patente, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.precio = precio;
        this.estaPrendido = false;
        this.velocidadActual = 0;
        this.patente = patente;
    }
    Auto.prototype.encenderApagar = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    Auto.prototype.acelerar = function () {
        console.log('Acelerando..' + this.patente);
        this.velocidadActual += 10;
    };
    Auto.prototype.frenar = function () {
        console.log('Frenando..' + this.patente);
        this.velocidadActual -= 10;
    };
    Auto.prototype.getVelocidadActual = function () {
        console.log('La velocidad actual de ' + this.patente + 'es: ' + this.velocidadActual);
        return this.velocidadActual;
    };
    Auto.prototype.getEstaPrendido = function () {
        return this.estaPrendido;
    };
    Auto.prototype.getAño = function () {
        return this.año;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    Auto.prototype.getPrecio = function () {
        return this.precio;
    };
    return Auto;
}());
exports["default"] = Auto;
