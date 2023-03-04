// Playground 2 (Clase 7)

// En este desafío tendrás que calcular la propina que deben dejar los clientes de un restaurante en función de su consumo.

// Recibirás 2 parámetros:

// billAmount: El costo total de lo que hayan consumido.
// tipPercentage: El porcentaje de propina que deban dejar.
// Ambos valores serán de tipo Number.
// Los valores serán siempre positivos incluyendo el 0.
// deberá devolver el valor de la propina como un número.

function calculateTip(billAmount, tipPercentage) {
    // Tu código aquí 👈
    // Esta sln corre dentro de mi consola:
    if(billAmount >= 0 && tipPercentage >=0){
        tip = billAmount * tipPercentage / 100;
        return tip
    } else {
        console.log("it´s impossible to calculate tip");
    }
    
    // Esta sln es la q me dejó correr la plataforma de Platzi
    return tip = billAmount*(tipPercentage/100);
    
    
  }







// Tendrás inputs y outputs como los siguientes 👇

// Ejemplo 1:

Input: calculateTip(100, 10);
Output: 10;