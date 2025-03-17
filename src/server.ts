import express from "express";
import { routes } from "./routes/index";
import { Request, Response, NextFunction } from "express";
import { AppError } from "./utils/appError";
import { ZodError } from "zod";

const PORT = 3333;

const app = express();

app.use(express.json());

app.use(routes);

app.use((error: any, request: Request, response: Response, _: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  if (error instanceof ZodError) {
    return response.status(400).json({
      message: "Validation Error!",
      issues: error.format(),
    });
  }

  response.status(500).json({ message: error.message });
});

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
