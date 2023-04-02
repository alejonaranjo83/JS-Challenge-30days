// En este desafío, debes crear una jerarquía de clases mediante el uso de la herencia.

// La clase base será Animal con las propiedades name, age y species y un método getInfo que devuelve un objeto con la información del animal.

// Luego, debes crear una clase Mammal que herede de Animal y tenga una propiedad adicional hasFur y un método getInfo que sobreescriba al del padre y incluya la información de hasFur.

// Finalmente, debes crear una clase Dog que herede de Mammal y tenga una propiedad adicional breed y un método getInfo que sobreescriba al del padre y incluya la información de breed, al igual que el método bark que devuelva el string "woof!".

// Ejemplo 1


// Input:
// const bird = new Animal("pepe", 1, "bird")
// bird.getInfo()

// Output:

// {
//   name: "pepe",
//   age: 1,
//   specie: "bird",
// }

// Ejemplo 2


// Input:
// const hippo = new Mammal("bartolo", 3, "hippo", false)
// hippo.getInfo()

// Output:

// {
//   name: "bartolo",
//   age: 3,
//   specie: "hippo",
//   hasFur: false,
// }

// Ejemplo 3


// Input:
// const dog = new Dog("fido", 4, "pastor aleman", true);
// dog.bark()

// Output:
// "woof!"


class Animal { //a class is created
    constructor(name, age, specie) { //the constructor will receive three arguments
        this.name = name;
        this.age = age;
        this.specie = specie;
    }

    getInfo() {//also, it has a method to return an object with the properties of the instance
        return {
            name: this.name,
            age: this.age,
            specie: this.specie
        }
    }
}

class Mammal extends Animal { //a new class will extend the properties from the previous class, and will add a new property
    constructor(name, age, specie, hasFur) {
        super(name, age, specie); //the constructor of the father class is called
        this.hasFur = hasFur;
    }
    
    getInfo() {
        return {
            // name: this.name,
            // age: this.age,
            // specie: this.specie,
            ...super.getInfo(), //use the spread operator to return the properties of the father object
            hasFur: this.hasFur //add this property in the new object
        }
    }
};

class Dog extends Mammal {
    constructor(name, age, breed, hasFur) { //a new property added to indicate the breed of a dog
        super(name, age, "dog", hasFur);
        this.breed = breed;
    }

    getInfo() {
        return {
            // name: this.name,
            // age: this.age,
            // specie: this.specie,
            // hasFur: this.hasFur,
            ...super.getInfo(),
            breed: this.breed
        };
    }

    bark() {//a new method is added
        return `woof!`;
    }
};




// Input 1:
// const bird = new Animal("pepe", 1, "bird")
// bird.getInfo()


// Input 2
// const hippo = new Mammal("bartolo", 3, "hippo", false)
// hippo.getInfo()


// Input 3

const dog = new Dog("fido", 4, "pastor aleman", true);
dog.bark()