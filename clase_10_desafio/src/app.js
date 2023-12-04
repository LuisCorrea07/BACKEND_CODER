// src/app.mjs
import express from "express";
import exphbs from "express-handlebars";
import http from "http";
import { Server } from "socket.io";
import path from "path";
import productsRouter from "./routes/products.routes.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = 8080;

// Configuración de Handlebars
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Middleware para parsear el cuerpo de las peticiones como JSON
app.use(express.json());

app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

// Simula una lista de productos (reemplázalo con tu lógica de base de datos)
let products = [
  // ... (tu lista de productos)
];

// Ruta raíz
app.get("/", (req, res) => {
  res.render("home", { products });
});

// Ruta raíz POST /api/products
app.post("/api/products", async (req, res) => {
  try {
    // ... (tu lógica para agregar un nuevo producto)
  } catch (error) {
    console.error("Error al agregar un nuevo producto:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// Configuración de Socket.IO
io.on("connection", (socket) => {
  console.log("Usuario conectado");

  // Manejar evento de agregar producto
  socket.on("addProduct", (productData) => {
    try {
        const { title, description, code, price, stock, category, thumbnails } = productData;

        // Validaciones de campos obligatorios
        if (!title || !description || !code || !price || !stock || !category) {
          // Emitir un evento de error o manejar la validación
          socket.emit("addProductError", {
            error: "Todos los campos son obligatorios excepto thumbnails",
          });
          return;
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
  
        // Agrega el nuevo producto a la lista (simulando la base de datos)
        products.push(newProduct);
  
        // Emitir evento a través de Socket.IO para notificar a los clientes sobre el cambio
        io.emit("productsUpdated", { products });
  
      } catch (error) {
        console.error("Error al agregar un nuevo producto:", error);
        // Emitir un evento de error general si ocurre un error inesperado
        socket.emit("addProductError", {
          error: "Error al agregar un nuevo producto",
        });
      }
    });
  

  socket.on("disconnect", () => {
    console.log("Usuario desconectado");
  });
});

// Inicia el servidor
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
