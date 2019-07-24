"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var auto_1 = require("./auto");
var AutoElectrico = /** @class */ (function (_super) {
    __extends(AutoElectrico, _super);
    function AutoElectrico(marca, modelo, año, patente, precio) {
        var _this = _super.call(this, marca, modelo, año, patente, precio) || this;
        _this.nivelBateria = 100;
        return _this;
    }
    AutoElectrico.prototype.acelerar = function () {
        console.log('Acelerando..');
        this.velocidadActual += 5;
    };
    AutoElectrico.prototype.frenar = function () {
        console.log('Frenando..');
        this.velocidadActual -= 5;
    };
    AutoElectrico.prototype.estacionarAutomatico = function () {
        console.log('Estacionando automaticamente..');
    };
    AutoElectrico.prototype.cargarBateria = function () {
        this.nivelBateria += 15;
    };
    AutoElectrico.prototype.usarBateria = function () {
        this.nivelBateria -= 15;
    };
    AutoElectrico.prototype.getNivelBateria = function () {
        console.log('El nivel de bateria es: ' + this.nivelBateria);
        return this.nivelBateria;
    };
    return AutoElectrico;
}(auto_1["default"]));
exports["default"] = AutoElectrico;
