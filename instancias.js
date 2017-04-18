"use strict;"

// creamos un constructor de objetos
function Fruta() {
  let nombre;
  this.setNombre = function(value) { nombre = value};
  this.getNombre = function() { return nombre};
  this.getNombrePlural = function() { return nombre + 's'};
  return {
    setNombre: this.setNombre,
    getNombre: this.getNombre
  }
}

// creamos objeto fruta
const fruta = new Fruta();

fruta.setNombre('Limon');

console.log(fruta, fruta.getNombre());