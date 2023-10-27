//npm init -y
// "type": "modules,
// npm install empress

import express from "express";
const PORT = 8080;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let phrase = "Frase inicial";

app.get("/api/phrase", (req, res) => {
  res.status(200).send({ phrase: phrase });
});

app.get("/api/words/:pos", (req, res) => {
  try {
    const pos = parseInt(req.params.pos);

    const wordsInPhrase = phrase.split(" ");
    if (isNaN(pos) || pos < 1 || pos > wordsInPhrase.length) {
      res.status(400).send({ err: "Indicador de posición no válido" });
    } else {
      res.status(200).send({ searched: wordsInPhrase[pos - 1] }); //devuelvo un objeto
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
});

app.post("/api/words", (req, res) => {
  try {
    if (!req.body.hasOwnProperty("word") || req.body.word === "") {
      res.status(400).send({
        err: 'El body debe contener un key con nombre "word", que indique la palabra a agregar',
      });
    } else {
      phrase = `${phrase} ${req.body.word}`;
      const wordsInPhrase = phrase.split(" ");
      res.status(200).send({ added: req.body.word, pos: wordsInPhrase.length });
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
});

app.put("/api/words/:pos", (req, res) => {
  //req.params posicion
  //req.body palabra nueva
  try {
    const pos = parseInt(req.params.pos);
    const wordsInPhrase = phrase.split(" ");

    if (
      isNaN(pos) ||
      pos < 1 ||
      pos > wordsInPhrase.length ||
      !req.body.hasOwnProperty("word") ||
      req.body.word === ""
    ) {
      res.status(400).send({
        err: 'El body debe contener un key con nombre "word", que indique la palabra a agregar',
      });
    } else {
      //actualizar array wordsInPhrase con nueva palabra y actualizar phrase
      /*const cosa updateada = wordsinpharase[pos]=req.body

previuous_word = wordsInPharse[pos - 1]

Return el objeto compuesto 

 */
      //retornar obj con resultado: res.status(200).send({updated:req.body.word, previous:word: })
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
});

app.delete("/api", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Servidor Express activo en puerto ${PORT}`);
});
