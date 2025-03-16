import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";
import { ProductsController } from "../controllers/productController";

const productsRoutes = Router();
const productController = new ProductsController()

productsRoutes.get("/", productController.index);

productsRoutes.post("/", myMiddleware, productController.create);

export { productsRoutes };
