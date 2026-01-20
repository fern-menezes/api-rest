import { Router } from "express"
import { myMiddleware } from "../middlewares/my-middleware"

export const productsRoutes = Router()

productsRoutes.get("/", (request, response) => {
    // /products?page=1&limit=10 | parametros nomeados, quan página e limite de páginas(opcionais)
    const { name, price } = request.query
     //response.send(`Pagina ${ page } de ${ limit }`)

     response.status(201).json({ name, price })
})

productsRoutes.post("/", myMiddleware, (request, response) =>{
    const { name, price } = request.body
    //response.send(`Produto ${name} custa $ ${price}`)

    response.status(201).json({ name, price, user_id: request.user_id })

})