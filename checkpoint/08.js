const { LinkedList } = require("../DS");
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

8️⃣ ***** EJERCICIO 8 ***** - pacienteEnMayorEspera() 8️⃣

Para lograr agilizar el orden de atención de los pacientes necesitamos que construyas una función que nos
permita encontrar qué paciente es el que más tiempo a estado en espera. Esta función debe ser un método 
de nuestra lista enlazada.

Cada nodo (paciente) en su {value} tiene un objeto con dos propiedades: 
 - **nombre**: nombre del paciente.
 - **espera**: cantidad  de segundos (número) transcurridos desde el inicio del día.

📝 EJEMPLO 📝
(INPUT) ➡ Head ➡ ({nombre: "Franco", espera: 123})
                ➡ ({nombre: "Martin", espera: 5235}) 
                ➡ ({nombre: "Lucía", espera: 2344}) 
                ➡ ({nombre: "Marta", espera: 1423})

(OUTPUT) ➡ {nombre: "Martin", espera: 5235}

REQUISITOS:
🟢 Devolver al paciente que ha estado esperando más tiempo en la lista.
🟢 Devolver null si la lista está vacía.

*/

LinkedList.prototype.pacienteEnMayorEspera = function () {
  // Tu código aquí
  var current;
  current = this.head;
  if(this.head === null)
  return null;
  var esperaMaxima = this.head.value.espera;
  
  do{
    current = current.next;
    if(current.value.espera > esperaMaxima){
      esperaMaxima = current.value.espera;
    }
  }while(current.next !== null);
  
  current = this.head;
  do{
    current = current.next;
    if(current.value.espera === esperaMaxima){
      return current.value;
    }
  }while(current.next !== null);

};

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = LinkedList;
