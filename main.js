"use strict";
exports.__esModule = true;
var autoElectrico_1 = require("./autoElectrico");
var concesionaria_1 = require("./concesionaria");
// ALGUNAS PRUEBAS
var listado = new concesionaria_1["default"]();
listado.buscarAutoPorPatente('fke649').acelerar();
listado.buscarAutoPorPatente('AA203HD');
listado.buscarAutoPorPatente('fke649').frenar();
listado.buscarAutoPorPatente('sss333');
listado.borrarAutoPorPatente('umz109');
var nuevoAuto = new autoElectrico_1["default"]('Peugeot', '206', 2009, 'AAA333', 120000);
listado.reemplazarAutoPorPatente('EH453IH', nuevoAuto);
// IMPRIMIR SEGUN CLASE:
listado.listarAutosDeCarreras();
console.log(' ');
listado.listarAutosElectricos();
