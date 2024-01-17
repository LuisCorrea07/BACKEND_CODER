import { Router } from "express";

const router = Router();

router.get("/getcookies", async (req, res) => {
  //res.send(req.cookies);
  try {
    res.status(200).send({ status: 'OK', data: req.cookies });
  } catch (err) {
    res.status(500).send({ status: "ERR", data: err.message });
  }
});

router.get("/setcookies", async (req, res) => {
  //res.cookie(nobre, payLoad(contenido), opciones)
  //maxAge= ms (milisegundos)
  try {
    res.cookie("CoderCookie", "Este es el contenido de la cookie", {
      maxAge: 30000});
    res.status(200).send({ status: "OK", data: "Cookie generada" });
  } catch (err) {
    res.status(500).send({ status: "ERR", data: err.message });
  }
});

router.get("/deletecookies", async (req, res) => {});

export default router;
