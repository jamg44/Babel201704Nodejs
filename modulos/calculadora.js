"use strict";

console.log('Inicializo la calculadora...');

exports.suma = function(a, b) {
  return a + b;
}

exports.resta = function(a, b) {
  return a - b;
}

// exports es un alias y no debemos asignarlo
// exports = suma;