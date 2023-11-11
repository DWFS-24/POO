console.log('hola mundo')

class Producto {

  constructor(nombre, precio, stock) {
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
  }

  vender(cantidad) {
    if( cantidad > 0 && cantidad <= this.stock ) {
      this.stock -= cantidad;
      console.log(`Se ha vendido ${cantidad} unidades de ${this.nombre}. Stock restante: ${this.stock}`);
    } else if( cantidad <= 0) {
      console.log('La cantidad a vender debe ser mayor que cero.');
    } else {
      console.log('No hay suficientes productos en stock para realizar la venta.');
    }
  }
}

const producto1 = new Producto('Laptop', 1500.50, 10)
const producto2 = new Producto('Caguama corona', 45, 20)

producto1.vender(0)
producto2.vender(15)
producto1.vender(5)

producto1.vender(8)

