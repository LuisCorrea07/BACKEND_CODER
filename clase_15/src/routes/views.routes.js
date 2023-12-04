import { Router } from "express";
import { ProductController } from "../controllers/product.controller.mdb.js";

const router = Router();
const controller = new ProductController()



router.get("/products", async (req, res) => {
    const products = await ProductController.getProducts()
    
    res.render("products", {});
});
export default router;
