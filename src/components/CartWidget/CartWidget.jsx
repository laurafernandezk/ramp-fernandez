import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidget = ({ icon }) => {
  const { getTotalProducts } = useContext(CartContext);

  return (
    <>
      <FontAwesomeIcon icon={icon} />
      <span>{getTotalProducts()}</span>
    </>
  );
};
