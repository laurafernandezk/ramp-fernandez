import {Item} from '../Item/Item'
import { productos } from '../../data/data'
import { useEffect, useState } from 'react'

export const ItemList =()=>{
    const [prod, setProd]= useState([]); 
    const obtenerProductos =()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(productos)
            }, 2000);
           
           
        })
    }
    useEffect(()=>{
        const funcionAsincrona = async ()=>{
            try {const listadoProductos = await obtenerProductos()
                setProd(listadoProductos);
                console.log (listadoProductos);
            } catch (error) {
                console.log("Error")
            }  
        }
        funcionAsincrona()
    }, [])
    
    return(<>
                
               { prod.map((producto)=>{
                return(<Item informacion={producto}/>)
               })}
                
    
    
    </>)
}