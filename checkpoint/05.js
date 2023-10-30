/* 5️⃣ ***** EJERCICIO 5 ***** - ordenarInstrumentos 5️⃣

Antes de cada cirujía el médico necesita tener una lista con todos los instrumentos quirúrjicos. Te pedimos que
crees una función que nos ayude a ordenar estos instrumentos. La función recibirá un arreglo de instrumentos.
Tendrás que crear un algoritmo de ordenamiento que permita ordenar todos los instrumentos de forma alfabética
y ascendente. Es decir, de la A a la Z.

📝 EJEMPLO 📝
(INPUT) ➡ ['bisturí', 'espéculos', 'abrebocas', 'diapasones']
(OUTPUT) ➡ ['abrebocas', 'bisturí', 'diapasones', 'espéculos']

REQUISITOS
🟢 Si lo que se recibe por parámetro no es un arreglo la función debe devolver un string que diga: "Debe recibir un array de strings".
🟢 En caso de recibir un array vacío, la función debe retornar "El array no debe estar vacio".
⛔️ No puedes utilizar el método SORT.
*/

function ordenarInstrumentos(instrumentos) {
  // Tu código aquí:
  var array = instrumentos;

  if(array.length === 0)
    return 'El array no debe estar vacio';
  if(!Array.isArray(array))
    return 'Debe recibir un array de strings';

  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length - i - 1; j++){
      if(array[j] > array[j+1]){
        let aux = array[j];
        array[j] = array[j+1];
        array[j+1] = aux;
      }
    }
  }
  return array;
}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  ordenarInstrumentos,
};
