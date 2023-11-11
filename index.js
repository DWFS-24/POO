console.log('hola mundo')

// Definimos Clase Animal
class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  comer() {
    console.log(`${this.nombre} está comiendo.`)
  }
  
  dormir() {
    console.log(`${this.nombre} está durmiendo.`)
  }
}
// Definicion de clase Perro que hereda de Animal 
class Perro extends Animal {
  constructor (nombre, edad, raza) {
    super(nombre, edad)
    this.raza = raza
  }

  ladrar() {
    console.log(`${this.nombre} (${this.raza}) está ladrando: ¡Guau, guau!`);
  }
}

//Crear instancias de clase

const animalGenerico = new Animal('Criatura', 5);
const miPerro = new Perro('buddy', 3, 'Labrador');


console.log(animalGenerico)

animalGenerico.comer()
animalGenerico.dormir()

miPerro.comer() // hereda de animal
miPerro.dormir() // hereda de animal
miPerro.ladrar() // metodo propio
