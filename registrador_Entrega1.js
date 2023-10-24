const fs = require("fs");

class ProductManager {
  constructor(path) {
    this.products = [];
    this.nextId = 1;
    this.path = path;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    
    // Validar que todos los campos fueron ingresados
    if (title && description && price && thumbnail && code && stock) {
      console.log("Campos ingresados correctamente");
    } else {
       console.log("Todos los campos son obligatorios");
    }

    // Validar que el codigo de producto es unico
    if (this.products.some((product) => product.code === code)) {
      console.log("El código del producto ya existe");
      return;
    }

    const newProduct = {
      id: this.nextId,
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
    };
    this.products.push(newProduct);
    console.log("Producto agregado: ", newProduct);
    this.nextId++;
  }

  // Mostrar la lista de productos
  getProducts() {
    return this.products;
  }

  // Buscar producto por ID
  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    return product;
  }
}

const manager = new ProductManager('D:\Luis\Documents\GitHub\BACKEND_CODER\Registrador');
 manager.addProduct(
  "producto1",
  "Fideos semolados",
  5.3,
  "imagen1.jpg",
  569856,
  10
);
manager.addProduct(
  "producto2",
  "Arroz integral",
  3.99,
  "imagen2.jpg",
  123456,
  15
); 

const productsList = manager.getProducts();
console.log(productsList);

const productFind = manager.getProductById(1);
if (productFind) {
  console.log("Producto encontrado: ", productFind);
} else {
  console.log("Producto no encontrado");
}