import './ItemCount.css'
import { useState } from "react"
export const ItemCount= ({producto, initial, stock,imagen})=>{
    const [contador, setContador]= useState(stock>0?initial:0)
    
    const addCount =()=>{
       contador<stock && setContador(contador + 1)
    }

    const subCount =()=>{
        contador> 0 && setContador(contador - 1)
    }

    const agregar =()=>{
       stock>0?alert(`Productos agregados al carrito: ${contador}`):alert(`No hay stock disponible`)
    }

    return(
        <div className='caja'>
            <h2>{producto}</h2>
            <div className='imagen'><img src={imagen} /></div>
            <div className='boton'>
            <button onClick={addCount}>+</button>
            <span>  {contador}  </span>
            <button onClick={subCount}>-</button>
            <br/>
            <button onClick={agregar}className='botonAgregar'>Agregar al carrito</button>
            </div>
        </div>
    )
}