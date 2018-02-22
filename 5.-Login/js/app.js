// En este ejercicio deberas crear tu solción en ES5, asegurarte que funcione

// declara el prompt
/*var userText = prompt("Por favor ingrese su contraseña");

// escribe tu código aqui...
function user () {
  if (userText ==="laboratoria"){
    console.log("verdadero");
  }else{
    console.log("falso");
  }
}

user();*/



// comenta todo lo anterior y escribelo en ES6
let userText = prompt("Por favor ingrese su contraseña");

const user= () => {
   // escribe tu código aqui...
  if (userText === "laboratoria"){
    console.log("verdadero");
  }else{
    console.log("falso");
  }
}

user();

// }
