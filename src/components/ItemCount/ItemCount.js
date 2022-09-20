import './ItemCount.css'
import { useState } from "react"
import { Link } from 'react-router-dom'
export const ItemCount= ({initial, stock, onAdd,eventOnAdd})=>{
    const [contador, setContador]= useState(initial)
    
    const addCount =()=>{
       contador<stock && setContador(contador + 1)
    }

    const subCount =()=>{
        contador> 0 && setContador(contador - 1)
    }

    return(
            <div className='boton'>
                <p>Stock disponible: {stock}</p>
                {
                <>
            <button onClick={addCount}>+</button>
            <span>  {contador}  </span>
            <button onClick={subCount}>-</button>
            <br/>
            <button onClick={()=>{onAdd(contador)}}className='botonAgregar'>Agregar al carrito</button>
            </>
}
            <>
             {eventOnAdd&&
                
            <Link to= '/cart'> 
            <button className='botonAgregar'>Finalizar Compra</button>
            </Link>
}
            </>
             
            </div>
    )
}