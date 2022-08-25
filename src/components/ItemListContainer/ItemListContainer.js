import { ItemCount } from "../ItemCount/ItemCount"
import anillo1 from '../../assets/images/anillo1.jpg'
import anillo2 from '../../assets/images/anillo2.jpg'
export const ItemListContainer =()=>{
    return(<>
    <ItemCount producto= "Anillo Mar" initial={1} stock={15} imagen={anillo1} />
    <ItemCount producto= "Anillo Tierra" initial={1} stock={0} imagen={anillo2} />
    <ItemCount producto= "Anillo Mar" initial={1} stock={15} imagen={anillo1} />
    </>
    )
}