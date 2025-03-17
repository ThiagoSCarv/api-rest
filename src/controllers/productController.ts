import { Request, Response } from "express";
import { AppError } from "../utils/appError";
import { z } from "zod";

class ProductsController {
  index(request: Request, response: Response) {
    const { page, limit } = request.query;

    response.send(`Página ${page} de ${limit}`);
  }

  create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z.string({ required_error: "Name is Required!" }),
      price: z.number({ required_error: "Price is Required!" }),
    });

    const { name, price } = bodySchema.parse(request.body);

    response.status(201).json({ name, price, user_id: request.user_id });
  }
}

export { ProductsController };
