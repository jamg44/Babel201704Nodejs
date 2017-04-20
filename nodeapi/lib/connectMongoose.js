"use strict";

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const conn = mongoose.connection;

conn.on('err', err => {
  console.log('Error de conexion', err);
  process.exit(1);
});

conn.once('open', () => {
  console.log('Conectado a MongoDB.');
});

// Realizamos la conexión
mongoose.connect('mongodb://localhost/cursonode');

// No necesitamos exportar la conexión, ya que 
// Mongoose la gestiona por nosotros
