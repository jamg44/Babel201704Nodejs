"use strict";

const basicAuth = require('basic-auth');

// Este módulo exporta una función que recibe usuario y password
module.exports = (usuario, password) => {

  // la función devuelve un middleware de autenticación
  return (req, res, next) => {
    // pedimos a basicAuth que intente sacar credenciales
    const user = basicAuth(req);
    if (!user || user.name !== usuario || user.pass !== password) {
      // si no tengo credenciales, respuesta con cabecera pidiendolas
      res.set('WWW-authenticate', 'Basic realm=Authorization Required');
      res.send(401);
      return;
    }
    next();
  };

};

