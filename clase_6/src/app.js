import express from "express";

const PORT = 8080;

const app = express();

//endpoint
app.get("/saludo", (req, res) => {
  res.send("Hola desde express");
});

app.get("/welcome", (req, res) => {
  res.send('<h1 style="color: blue;">Bienvenida en azul!</h1>');
});

app.get("/user", (req, res) => {
  const users = [
    {
      firstName: "Carlos",
      lastName: "Perren",
      age: 48,
      mail: "cperren@gmail.com",
    },

    { firstName: "Juan", lastName: "Perez", age: 30, mail: "jperez@gmail.com" },

    {
      firstName: "Carolina",
      lastName: "Perez",
      age: 28,
      mail: "cperez@gmail.com",
    },
  ];
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/user/:id", (req, res) => {
  res.send(users[req.params.id]);
});

app.listen(PORT, () => {
  console.log(`Servidor express activo en puerto ${PORT}`);
});
