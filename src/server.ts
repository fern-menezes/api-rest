import express from "express"

const PORT = 3333
const app = express()

app.get("/products", (request, response) => {
    // /products?page=1&limit=10 | parametros nomeados, quan página e limite de páginas(opcionais)
    const { page, limit} = request.query
     response.send(`Pagina ${ page } de ${ limit }`)
})

app.listen(PORT, () => console.log(`Running port ${PORT}...`))