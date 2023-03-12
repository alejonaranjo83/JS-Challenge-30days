// En este desafío, debes crear una función que encuentre el palíndromo más largo en una lista de palabras.

// Recibirás un único parámetro: un array de palabras. Si no hay ningún palíndromo en la lista, la función debe devolver null. Si hay más de un palíndromo con la misma longitud máxima, debes devolver el primer palíndromo encontrado en la lista.

// Un palíndromo es una palabra que se puede leer de la misma manera tanto hacia adelante como hacia atrás.

// Ejemplo 1:

// Input: findLargestPalindrome(["racecar", "level", "world", "hello"])

// Output: "racecar"

// Ejemplo 2:

// Input: findLargestPalindrome(["Platzi", "javascript", "html", "css"])

// Output: null


function findLargestPalindrome(words) {
    let pals = []; //array that will receive the palindroms, in case there are some
    let largerPalLength = 0; //counter for the amount of characters in the biggest palindrom

    function reversing(str){ //function for reversing words
        let splitString = str.split(""); //each string needs to be converted into an array
        let reverseArray = splitString.reverse(); //the array will be rearranged from back to front
        let joinArray = reverseArray.join(""); //the elements of the array will be joined into a single one
        return joinArray;
    }

    for (let i = 0; i < words.length; i++) { //cicle to check if there are palindroms
        let reversed = reversing(words[i]); //each word will be rearranged and store it into a variable
        if (words[i] === reversed) { //if there´s a palindrom, then...
            let wordLength = words[i].length; //create a variable to store the length of the word in order to compare with the larger palindrom
            // console.log(`esta es la longitud de la palabra: ${largerPalLength}`);

            if (wordLength > largerPalLength) { //if the length of the word is bigger than the previous palindrom, then...
                pals.unshift(words[i]); //load that palindrome into the first position of the array that will be used give the answer
                largerPalLength = wordLength; //update the counter of the amount of characters
            } else {
                pals.push(words[i]); // if has the same or less characters, load at the end of the array
            }
        }
    }

    if (pals.length > 0) { //if there were palindroms identified...
        // let firstPal = pals[0]; //the bigger palindrom
        // console.log(pals[0]);
        // console.log(`This are the palindroms that were identified within the array: ${pals}`);
        // console.table(pals); //by this way I can see the values of an array inside a table
        return pals[0];
    } else {
        // console.log('No palindroms at all');
        return null;
    }    
}

findLargestPalindrome(["racecar", "rearaer", "wearioiraew", "level", "world", "hello"])

findLargestPalindrome(["racecar", "level", "world", "hello"])

findLargestPalindrome(["Platzi", "javascript", "html", "css"])
