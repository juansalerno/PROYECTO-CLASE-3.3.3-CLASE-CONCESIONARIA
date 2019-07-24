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
var AutoCarreras = /** @class */ (function (_super) {
    __extends(AutoCarreras, _super);
    function AutoCarreras(marca, modelo, año, patente, precio) {
        var _this = _super.call(this, marca, modelo, año, patente, precio) || this;
        _this.ploteado = true;
        return _this;
    }
    AutoCarreras.prototype.acelerar = function () {
        console.log('Acelerando..');
        this.velocidadActual += 50;
    };
    AutoCarreras.prototype.frenar = function () {
        console.log('Frenando..');
        this.velocidadActual -= 50;
    };
    AutoCarreras.prototype.plotearDesplotear = function () {
        if (this.ploteado)
            this.ploteado = false;
        else
            this.ploteado = true;
    };
    AutoCarreras.prototype.getPloteado = function () {
        return this.ploteado;
    };
    return AutoCarreras;
}(auto_1["default"]));
exports["default"] = AutoCarreras;
