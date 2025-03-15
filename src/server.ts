import express from "express"

const PORT = 3333

const app = express()

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))

app.get("/", (request, response) => {
  response.send("Hello World Express!")
})