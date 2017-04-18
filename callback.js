"use strict;"

function suma(a, b, callback) {
  setTimeout(function() {
    const resultado = a + b;
    callback(null, resultado);
  }, 2000);
}

suma(4, 7, function(err, res) {
  if (err) {
    
  }
  console.log(res);
});

console.log('fin');