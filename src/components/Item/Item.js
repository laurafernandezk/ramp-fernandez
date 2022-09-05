import './Item.css'
export const Item= ({informacion})=>{

    return(
        <div className='caja'key={informacion.id}>
            <h2>{informacion.title}</h2>
            <div className='imagen'><img src={informacion.pictureUrl} alt=""/></div>
            <p>Descripción: {informacion.description}</p>
            <p>Código del producto: {informacion.id}</p>
           <p> Precio: $ {informacion.price}</p>
        </div>
    )
}