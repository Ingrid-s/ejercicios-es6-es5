// 3 variables llamadas igual para hacer 3 pruebas (usa una variable y las otras 2 comentalas)

                                // ES5

// declara las variables ES5

//var array = [2, 4, 6];
 //var array = [-3, 2, -8, 12, 5];
// var array = [1, 2, 3, 4, 5];


// declaración de la funcion

/*function square (array) {
  // escribe tu código aqui...
  var squareOp = array.map (function(element){
    if (element >0) {
      return  element * element;
    } else {
      return element;
    }
  })
  console.log(squareOp);
  return squareOp
}

square(array);*/


                      //  ES6

// Ahora comenta todo el codigo de arriba y escribelo en ES6


//const array = [2, 4, 6];
 const array = [-3, 2, -8, 12, 5];
// const array = [1, 2, 3, 4, 5];

const square = array => {
  const squareOp = array.map (element =>{
    if (element >0) {
      return element * element;
    }else{
     return element;

    }
  })
console.log(squareOp);
  return squareOp
}

square(array);










// ejecuta la funcion
