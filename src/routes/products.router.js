import { Router } from "express";
import { findAllProduct,findProductById,createOneProduct,deleteOneProdAll,updateProducts } from "../controllers/products.controllers.js";
const router = Router();


router.get("/", findAllProduct)
router.get("/:pid", findProductById)
router.post("/", createOneProduct)
router.delete("/:pid", deleteOneProdAll)
router.put("/:pid", updateProducts)


export default router;