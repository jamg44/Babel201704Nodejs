"use strict";

// funcion que retorna una promesa
function sleep(ms) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      if (true) {
        reject(new Error('fatal de la muerte'));
        return;
      }
      resolve();
    }, ms);
  });
}


// consumimos la funcion que devuelve una promesa
const promesa = sleep(2000);

console.log(promesa);

promesa.then(() => {
  console.log('Promesa cumplida');
}).catch(err => {
  console.log('Error', err);
});
