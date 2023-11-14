import { Router } from 'express';
import { io } from '../app.js';

const router = Router()
// Simula una lista de productos
let products = [
  { id: 1, title: 'Producto 1', description: 'Descripción del Producto 1', code: 'P001', price: 10.99, status: true, stock: 50, category: 'Electrónicos', thumbnails: ['image1.jpg', 'image2.jpg'] },
  { id: 2, title: 'Producto 2', description: 'Descripción del Producto 2', code: 'P002', price: 19.99, status: true, stock: 30, category: 'Ropa', thumbnails: ['image3.jpg', 'image4.jpg'] },
];

// Ruta raíz POST /api/products
router.post('/', async (req, res) => {
  try {
    const { title, description, code, price, stock, category, thumbnails } = req.body;

    // Validaciones de campos obligatorios
    if (!title || !description || !code || !price || !stock || !category) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios excepto thumbnails' });
    }

    // Genera un nuevo ID único para el producto
    const newProductId = generateUniqueId();

    // Crea un nuevo producto
    const newProduct = {
      id: newProductId,
      title,
      description,
      code,
      price: Number(price),
      status: true,
      stock: Number(stock),
      category,
      thumbnails: thumbnails || [],
    };

    // Agrega el nuevo producto a la lista 
    products.push(newProduct);

    // Emitir evento a través de Socket.IO para notificar a los clientes sobre el cambio
    io.emit('productsUpdated', { products });

    res.status(201).json({ message: 'Producto agregado correctamente', product: newProduct });
  } catch (error) {
    console.error('Error al agregar un nuevo producto:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Función para generar un ID único
function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

// Ruta DELETE /api/products/:pid
router.delete('/:pid', (req, res) => {
  const productId = req.params.pid;
  const index = products.findIndex(p => p.id == productId);

  if (index !== -1) {
    // Elimina el producto de la lista
    const deletedProduct = products.splice(index, 1)[0];

    // Emitir evento a través de Socket.IO para notificar a los clientes sobre el cambio
    io.emit('productsUpdated', { products });

    res.json({ message: `Producto con ID ${productId} eliminado`, product: deletedProduct });
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

// Ruta PUT /api/products/:pid
router.put('/:pid', (req, res) => {
  const productId = req.params.pid;
  const { title, description, code, price, stock, category, thumbnails } = req.body;

  const index = products.findIndex(p => p.id == productId);

  if (index !== -1) {
    // Actualiza los campos del producto
    products[index].title = title || products[index].title;
    products[index].description = description || products[index].description;
    products[index].code = code || products[index].code;
    products[index].price = price || products[index].price;
    products[index].stock = stock || products[index].stock;
    products[index].category = category || products[index].category;
    products[index].thumbnails = thumbnails || products[index].thumbnails;

    // Emitir evento a través de Socket.IO para notificar a los clientes sobre el cambio
    io.emit('productsUpdated', { products });

    res.json({ message: `Producto con ID ${productId} actualizado`, product: products[index] });
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});




export default router;