"use strict;"

// hacemos funcion asincrona
function escribeTras2Segundos( texto, callback) {
  setTimeout(function() {
    console.log('texto' + texto);
    callback();
  }, 2000);
}

// funcion ayudante para bucle en serie
function serie(arr, fn, callback) {
  if (arr.length == 0) {
    callback();
    return;
  }
  // quito el primer elemento del array y se lo paso a la funcion
  fn(arr.shift(), function() {
    serie(arr, fn, callback);
  });
}


serie([1,'hola',3,4,5], escribeTras2Segundos, function() {
  console.log('fin');
});

  // escribeTras2Segundos('texto' + i, function() {

  // });

