import { Request, Response } from "express"
import { AppError } from "../utils/AppError";
import { z } from "zod"


class ProductsController {
    /**
     * index - GET para listar vários registros.
     * show - GET para exibir um registro especifico.
     * create - POST para criar um registro.
     * update - PUT para atualizar um registro.
     * remove - DELETE para |um registro
     */

    index(request: Request, response: Response) {
        const { page, limit } = request.query
        response.status(201).json({ page, limit })
    }
    create(request: Request, response: Response) {
        const bodySchema = z.object({
            name: z.string().min(1, { message: "informe o nome do produto" }).trim(),
            price: z.number().positive({ message: "informe um número válido"}).nullish(), // campo opcional
        });
        const { name, price } = bodySchema.parse(request.body)

        /** 
        if(!name){
            throw new AppError("Informe o nome do produto!", 400);
        }
        if(!price){
            throw new AppError("Informe o preço do produto!", 400);
        }
        */
        //throw new Error("Erro ao criar produto");
        //throw new AppError("Erro ao criar produto");

        response.status(201).json({ name, price, user_id: request.user_id })
    }
}
export { ProductsController }
