import { Router } from "express";
import { newCart, findCartId, addP, deleteP, updateCartP, updatePQuantity, emptyCart } from "../controllers/carts.controllers.js";

const router = Router();

router.post("/",newCart)
router.get("/:idCart", findCartId)
router.post("/:idCart/products/:idProduct", addP)
router.delete("/:idCart/products/:idProduct",deleteP)
router.put("/:idCart", updateCartP )
router.put("/:idCart/products/:idProduct",updatePQuantity)
router.delete("/:idCart", emptyCart)

export default router;