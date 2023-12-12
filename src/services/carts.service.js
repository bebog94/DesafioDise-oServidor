import { cartsManager } from "../dao/managers/cartsManager.js";

export const createCart= ()=>{
    const cart = cartsManager.createCart();
    return cart;
};

export const findCartById = (idC) =>{
    const cart = cartsManager.findCartById(idC);
    return cart;
}

export const addProductToCart = (idC,idP)=>{
    const cartNewProduct = cartsManager.addProductToCart(idC,idP);
    return cartNewProduct;
}

export const deleteProduct = (idC,idP) =>{
    const cartDeleteProduct = cartsManager.deleteProduct(idC,idP);
    return cartDeleteProduct;
}

export const updateCartProducts = (idC, productsArray) =>{
    const updatedCart = cartsManager.updateCartProducts(idC,productsArray)
    return updatedCart;
}

export const updateProductQuantity = (idC, idP, newQuantity) =>{
    const updatedCart = cartsManager.updateProductQuantity(idC,idP,newQuantity)
    return updatedCart;
}

export const clearCart = (idC) =>{
    const cartEmpty = cartsManager.clearCart(idC)
    return cartEmpty;
}
