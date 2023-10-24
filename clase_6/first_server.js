import http from "http"

const app = htpp.createServer((req, res)=>{
    res.end("Mi primer hola mundo desde Backend")
})

app.listen(8080, ()=>{
    console.log("Primer backend activo en puerto 8080")
})