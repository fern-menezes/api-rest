import express, { Request, Response, NextFunction } from "express"
import { routes } from "./routes/index"


const PORT = 3333
const app = express()

app.use(express.json())
app.use(routes)

app.use((error: any, request: Request, response: Response, next: NextFunction) => {
    response.status(500).json({ message: error.message})
})

app.listen(PORT, () => console.log(`Running port ${PORT}...`))