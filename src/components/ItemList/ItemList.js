import { Item } from "../Item/Item";
import { Link } from "react-router-dom";

export const ItemList = ({ productos }) => {
  return (
    <>
      {productos.map((producto) => {
        return (
          <Link key={producto.id} to={`/item/${producto.id}`}>
            <Item informacion={producto} />
          </Link>
        );
      })}
    </>
  );
};
