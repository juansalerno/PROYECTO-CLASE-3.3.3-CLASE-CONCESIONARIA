import Auto from './auto';
import AutoCarreras from './autoCarreras';
import AutoElectrico from './autoElectrico';
import Concesionaria from './concesionaria';

// ALGUNAS PRUEBAS

let listado = new Concesionaria();

listado.buscarAutoPorPatente('fke649').acelerar();
listado.buscarAutoPorPatente('AA203HD')
listado.buscarAutoPorPatente('fke649').frenar();
listado.buscarAutoPorPatente('sss333')
listado.borrarAutoPorPatente('umz109');
let nuevoAuto = new AutoElectrico('Peugeot', '206', 2009, 'AAA333', 120000);
listado.reemplazarAutoPorPatente('EH453IH', nuevoAuto);

// IMPRIMIR SEGUN CLASE:

listado.listarAutosDeCarreras();
listado.listarAutosElectricos();
listado.listarAutosComunes();


