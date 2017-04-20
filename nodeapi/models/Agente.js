"use strict";

const mongoose = require('mongoose');

// Creamos un esquema
const agenteSchema = mongoose.Schema({
  name: String,
  age: {
    type: Number,
    index: true
  }
});

// creamos método estático en el modelo
// para recuperar lista de agentes con filtros
agenteSchema.statics.list = function(
  criterios, limit, skip, select, sort,
  callback) {
  const query = Agente.find(criterios);
  
  // añado limites
  query.limit(limit);
  query.skip(skip);
  query.select(select);
  query.sort(sort);
  
  // ejecuto la query
  query.exec(callback);
}

// Creamos el modelo de Agente
var Agente = mongoose.model('Agente', agenteSchema);

// para evitar la pluralización podemos definir el nombre de la 
// colección:
// mongoose.model('Agente', agenteSchema, 'nombreColeccion');

// No necesitamos exportar el modelo porque
// podemos recuperarlo donde queramos con
// mongoose.model('Agente')
