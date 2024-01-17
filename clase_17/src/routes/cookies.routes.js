import { Router } from "express";

const router = Router();

router.get("/getcookies", async (req, res) => {
  try {
    //res.send(req.cookies)
    res.status(200).send({ status: "OK", data: req.cookies });
  } catch (error) {
    res.status(500).send({ status: "ERR", data: error.message });
  }
});

router.get("/setcookie", async (req, res) => {
  try {
    //res.cookie(nombre, payload(contenido), opciones)
    //maxAge: ms (milisegundos)
    //Indico al navegador que almacene una cookie
    res.cookie("CoderCookie", "Contenido de la cookie", { maxAge: 30000 });
    res.status(200).send({ status: "OK", data: "Cookie generada" });
  } catch (error) {
    res.status(500).send({ status: "ERR", data: error.message });
  }
});

router.get("/deletecookie", async (req, res) => {
  try {
    res.clearCookie("coderCookie");
    res.status(200).send({ status: "OK", data: "Cookie eliminada" });
  } catch (error) {
    res.status(500).send({ status: "ERR", data: error.message });
  }
});

export default router;
