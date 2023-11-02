import { Router } from "express";

const router = Router();

const users = [
  {
    firstName: "Juan",lastName: "Pérez",age: 30,email: "juan@example.com",phone: "123-456-7890"},

  {
    firstName: "María",lastName: "Gómez",age: 25,email: "maria@example.com",phone: "987-654-3210"},

  {
    firstName: "Luis",

    lastName: "Martínez",

    age: 35,

    email: "luis@example.com",

    phone: "555-123-4567",
  },

  {
    firstName: "Ana",

    lastName: "Rodríguez",

    age: 28,

    email: "ana@example.com",

    phone: "444-789-1234",
  },

  {
    firstName: "Carlos",

    lastName: "López",

    age: 40,

    email: "carlos@example.com",

    phone: "777-888-9999",
  },
];

router.get("/", (req, res) => {
  const random = Math.floor(Math.random() * users.length);
  res.render('index',users[random]);
});

export default router;
