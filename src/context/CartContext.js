import { createContext } from "react";
import { useState } from "react";
import Swal from 'sweetalert2'

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
            newList[productIndex].totalPrice = newList[productIndex].quantity * newList[productIndex].price
            setProductCartList(newList)
            Swal.fire({
                icon: 'success',
                title: `${product.title} agregado al carrito`,
                showConfirmButton: false,
                timer: 2000,
              })
        }else{
        const newProduct = { ...product, quantity: quantity, totalPrice: quantity * product.price };
        const newList =[...productCartList, newProduct]
        setProductCartList(newList)
        Swal.fire({
            icon: 'success',
            title: `${product.title} agregado al carrito`,
            showConfirmButton: false,
            timer: 2000,
          })
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

    const getTotalPrice=()=>{
        const total = productCartList.reduce((acc, prod) => acc + prod.totalPrice, 0)
        console.log(total)
        return total 
    }
    const getTotalProducts =()=>{
        const total = productCartList.reduce((acc, prod) => acc + prod.quantity, 0)
        console.log(total)
        return total 
    }
    


   

    return(
        <CartContext.Provider value={{productCartList, addItem, removeItem, clear,isInCart, getTotalPrice, getTotalProducts}}>
                {children}
        </CartContext.Provider>
    )
    }