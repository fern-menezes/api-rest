import express from "express"
import { myMiddleware } from "./middlewares/my-middleware"

const PORT = 3333
const app = express()
app.use(express.json())

//middleware global, para todas as rotas
//app.use(myMiddleware)

app.get("/products", (request, response) => {
    // /products?page=1&limit=10 | parametros nomeados, quan página e limite de páginas(opcionais)
    const { name, price } = request.query
     //response.send(`Pagina ${ page } de ${ limit }`)

     response.status(201).json({ name, price })
})

app.post("/products", myMiddleware, (request, response) =>{
    const { name, price } = request.body
    //response.send(`Produto ${name} custa $ ${price}`)

    response.status(201).json({ name, price })

})

app.listen(PORT, () => console.log(`Running port ${PORT}...`))