class ProductManager {
  constructor() {
    this.products = [];
    this.nextId = 1;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    //validar que todos los campos sean obligatorios
    if (title || description || price || thumbnail || code || stock) {
      console.error("Todos los campos son obligatorios");
    }

    //validar que code no se repite
    if (this.products.some((product) => product.code === code)) {
      console.error("El código del producto ya existe");
      return;
    }

    const newProduct = {
      id: this.nextId, //asignar un ID
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
    };
    this.products.push(newProduct);
    console.log("Producto agregado: ", newProduct);

    //incrementar el contador de ID
    this.nextId++;
  }

  // mostrar el arreglo con los produtos creados
  getProducts() {
    return this.products;
  }

  //buscar un producto que coincida con el id
  getProductById() {
    const product = this.products.find((product) => product.id === this.nextId);
    return product;
  }
}

const manager = new ProductManager();
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
  console.log("producto encontrado: ", product);
} else {
  console.log("producto no encontrado");
}
