import { createContext } from "react";

import { useState } from "react";

export const CartContext = createContext()

export const CartProvider =({children})=>{
    const [productCartList, setProductCartList] = useState([])
   
    const isInCart =(idProduct)=>{
        const productExist = productCartList.some(producto=>producto.id===idProduct) 
        return productExist
        }

    const addItem=(product,quantity)=>{
        const newList =[...productCartList]
        if(isInCart(product.id)){
            const productIndex =productCartList.findIndex(elemento=>elemento.id ===product.id)
            newList[productIndex].quantity += quantity
            setProductCartList(newList)
        }else{
        const newProduct = { ...product, quantity: quantity };
        const newList =[...productCartList, newProduct]
        setProductCartList(newList)
        console.log("carrito de compras", productCartList)
    }
    }
    const removeItem =(idProduct)=> {
        const arrayRemove = [...productCartList]
        const arrayResultado = arrayRemove.filter(prod=>prod.id !== idProduct)
        setProductCartList(arrayResultado)
    }

    const clear =()=>{
        setProductCartList([])
    }

   

    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem, clear,isInCart}}>
                {children}
        </CartContext.Provider>
    )
}