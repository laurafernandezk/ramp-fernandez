import { Item } from "../Item/Item";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const ItemList = ({ productos }) => {
  return (
    <Row>
      {productos.map((producto) => {
        return (
          <Col xxs={12} xs={12} md={6} lg={6} xl={6}>
            <Item key={producto.id} informacion={producto} />
         </Col>
        );
      })}
      </Row>
  
  );
};
