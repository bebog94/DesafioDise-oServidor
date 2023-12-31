//import { createCart, findCartById, addProductToCart, deleteProduct, updateCartProducts, updateProductQuantity, clearCart } from "../services/carts.service.js";
import { cartsService } from "../repository/index.js";

export const newCart = async (req, res) => {
    try {
        const cart = await cartsService.createCart();
        res.json({ cart });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const findCartId = async (req, res) => {
    const { idCart } = req.params;
    try {
        const cart = await cartsService.findCartById(idCart);
        if (!cart) {
            res.status(404).json({ message: "Cart not found" });
        } else {
            res.json({ cart });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const addP = async (req, res) => {
    const { idCart, idProduct } = req.params;
    try {
        const cart = await cartsService.addProductToCart(idCart, idProduct);
        res.json({ cart });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteP = async (req, res) => {
    const { idCart, idProduct } = req.params;
    try {
        const updatedCart = await cartsService.deleteProduct(idCart, idProduct);
        res.status(200).json({ message: "Product deleted", cart: updatedCart });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
export const updateCartP = async(req,res) =>{
    const { idCart } = req.params;
    const { products } = req.body;
  
    try {
      const updatedCart = await cartsService.updateCartProducts(idCart, products);
      res.status(200).json({ message: "Cart updated", cart: updatedCart });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}
export const updatePQuantity = async (req,res)=>{
    const { idCart, idProduct } = req.params;
    const { quantity } = req.body;
  
    try {
      const updatedCart = await cartsService.updateProductQuantity(
        idCart,
        idProduct,
        quantity
      );
      res.status(200).json({ message: "Product quantity updated", cart: updatedCart });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}
export const emptyCart = async (req,res)=>{
    const { idCart } = req.params;
    try {
      const updatedCart = await cartsService.clearCart(idCart);
      res.status(200).json({ message: "All products removed from the cart", cart: updatedCart });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}
export const thePurchase = async (req, res) => {    
    try {
        const {cid} = req.params              
        const response = await cartsService.purchase(cid);       
        res.status(200).json({ response });
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
}
