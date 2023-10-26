import express from "express";

const PORT = 8080;

const users = [
  { firstName: "John", lastName: "Connor", age: 32, mail: "jconnor@gmail.com" },
  { firstName: "Sara", lastName: "Connor", age: 48, mail: "sconnor@gmail.com" },
  {
    firstName: "Elizabeth",
    lastName: "Swan",
    age: 25,
    mail: "eswan@gmail.com",
  },
];

//create an instance that reads the express server
const app = express();

//Endpoints
app.get("/hello", (req, res) => {
  res.send("Hello since Express!");
});

app.get("/welcome", (req, res) => {
  res.send('<h1 style="color:blue;">Bienvenida en azul!</h1>');
});
/* app.get('/user', (req, res) =>{
    const user = {
        firstName: "John",
        lastName: "Connor",
        age: 32,
        mail: "jconnor@gmail.com"
    }
    res.send(user)
}) */

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/userparams/:uid", (req, res) => {
  res.send(users[req.params.uid]);
});

app.get("/userquery/:uid", (req, res) => {
  res.send(users[req.query.uid]);
});

app.listen(PORT, () => {
  console.log(`Servidor express activo en puerto ${PORT}`);
});
