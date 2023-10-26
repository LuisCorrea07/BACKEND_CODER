//npm init -y
// "type": "modules,
// npm install empress

import express from "express"
const PORT = 8080

const app = express()

app.use(express.urlencoded({ extended: true }))
app.get('/', async (req, res) => {
    res.status(200).send("Hola mundo desde Express")
})

app.listen(PORT, () => {
    console.log(`Servidor Express activo en puerto ${PORT}`)
})