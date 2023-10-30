const { BinarySearchTree } = require("../DS");
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️

🔟 ***** EJERCICIO 10 ***** - agregarEmpleado() 🔟

Dentro de nuestro hospital tenemos un árbol binario que nos permite tener registrado a todos nuestros empleados.
Este mes necesitamos ordenar este árbol a partir de los años de antiguedad del empleado. Para esto crea un
nuevo método que agregue a los empleados de un arreglo a partir de este dato.
  - Los empleados con menor cantidad de años de antiguedad van a la izquierda.
  - Los empleados con más cantidad años de antiguedad van a la derecha.

📝 EJEMPLO 📝
[{ nombre: maría, años: 7 }, { nombre: Pedro, años: 5 }, { nombre: maría, años: 9 }]

(INPUT) ➡ { nombre: Juan, años: 8 }

(OUTPUT) ➡ 
                María
                /     \
              Pedro    Luis
                      /
                    Juan
// ACLARACION si los años de antiguedad son menor debe ir a la izquierda y si es mayor o igual a la derecha.
REQUISITOS
🟢 En caso de querer insertar un empleado que ya se encuentra en el árbol, debe retornar el
string: "No se puede agregar el mismo empleado".
🟢 En caso de insertar el empleado correctamente si los años de antiguedad son menor debe ir a la izquierda y si es mayor o igual a la derecha.
🟢 Debe retornar el nuevo nodo que ha sido insertado.
*/

BinarySearchTree.prototype.agregarEmpleado = function (empleado) {
  if(!this.value){
    this.value=empleado;
    return this;
  }
  
  if(empleado.años === this.value.años && empleado.nombre === this.value.nombre){
    return "No se puede agregar el mismo empleado"
  }
  if(empleado.años < this.value.años){
    if(!this.left){
      this.left=new BinarySearchTree(empleado)
      return this.left
    } else{
      return this.left.agregarEmpleado(empleado)
    }
  }

  if(empleado.años>= this.value.años){
    if(!this.right){
      this.right=new BinarySearchTree(empleado)
      return this.right
    }else{
      return this.right.agregarEmpleado(empleado)
    }
  }
};

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  BinarySearchTree,
};
