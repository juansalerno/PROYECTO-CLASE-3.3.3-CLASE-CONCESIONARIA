"use strict";
exports.__esModule = true;
var auto_1 = require("./auto");
var autoCarreras_1 = require("./autoCarreras");
var autoElectrico_1 = require("./autoElectrico");
var fs = require("fs");
var Concesionaria = /** @class */ (function () {
    function Concesionaria() {
        this.baseDatos = this.getArregloDesdeArchivo('./listaAutos.txt', '\r\n', ',');
    }
    Concesionaria.prototype.getArregloDesdeArchivo = function (rutaArchivo, separador1, separador2) {
        var texto = fs.readFileSync(rutaArchivo, 'utf8');
        var arregloTexto = texto.split(separador1);
        arregloTexto.splice(0, 1);
        var arregloAutos = new Array(arregloTexto.length);
        for (var i = 0; i < arregloTexto.length; i++) {
            var linea = arregloTexto[i].split(separador2);
            switch (linea[0].trim()) {
                case '1': {
                    arregloAutos[i] = new auto_1["default"](linea[1].trim(), linea[2].trim(), parseInt(linea[3].trim()), linea[4].trim(), parseInt(linea[5].trim()));
                    break;
                }
                case '2': {
                    arregloAutos[i] = new autoCarreras_1["default"](linea[1].trim(), linea[2].trim(), parseInt(linea[3].trim()), linea[4].trim(), parseInt(linea[5].trim()));
                    break;
                }
                case '3': {
                    arregloAutos[i] = new autoElectrico_1["default"](linea[1].trim(), linea[2].trim(), parseInt(linea[3].trim()), linea[4].trim(), parseInt(linea[5].trim()));
                    break;
                }
                default: null;
            }
        }
        return arregloAutos;
    };
    Concesionaria.prototype.imprimirListadoCompleto = function () {
        console.log(this);
    };
    Concesionaria.prototype.buscarAutoPorPatente = function (patente) {
        for (var i = 0; i < this.baseDatos.length; i++) {
            if (patente.toLowerCase() == this.baseDatos[i].getPatente().toLowerCase()) {
                return this.baseDatos[i];
            }
        }
        console.log('No se han encontrado resultados.');
        return null;
    };
    Concesionaria.prototype.buscarIndicePorPatente = function (patente) {
        for (var i = 0; i < this.baseDatos.length; i++) {
            if (patente.toLowerCase() == this.baseDatos[i].getPatente().toLowerCase()) {
                return i;
            }
        }
        return null;
    };
    Concesionaria.prototype.borrarAutoPorPatente = function (patente) {
        var indice = this.buscarIndicePorPatente(patente);
        this.baseDatos.splice(indice, 1);
        console.log('Se ha eliminado el vehiculo');
    };
    Concesionaria.prototype.reemplazarAutoPorPatente = function (patente, auto) {
        var indice = this.buscarIndicePorPatente(patente);
        if (indice != null) {
            this.baseDatos.splice(indice, 1, auto);
            console.log('Información actualizada');
        }
        else
            console.log('No se ha encontrado la patente buscada');
    };
    Concesionaria.prototype.listarAutosElectricos = function () {
        for (var i = 0; i < this.baseDatos.length; i++) {
            if (this.baseDatos[i] instanceof autoElectrico_1["default"]) {
                console.log(this.baseDatos[i]);
            }
        }
    };
    Concesionaria.prototype.listarAutosDeCarreras = function () {
        for (var i = 0; i < this.baseDatos.length; i++) {
            if (this.baseDatos[i] instanceof autoCarreras_1["default"]) {
                console.log(this.baseDatos[i]);
            }
        }
    };
    return Concesionaria;
}());
exports["default"] = Concesionaria;
