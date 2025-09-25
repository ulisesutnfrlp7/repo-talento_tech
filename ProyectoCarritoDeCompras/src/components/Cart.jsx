// src/components/Cart.jsx

import { Card, Button } from 'react-bootstrap';

const Cart = ({ carrito, onVaciar }) => {
  const total = carrito.reduce((acc, item) => acc + Number(item.price), 0);
  // reduce() RECORRE EL ARRAY carrito Y SUMA LOS PRECIOS
  // Number(item.price) ASEGURA QUE EL PRECIO SEA NUMÉRICO (POR SI VIENE COMO STRING)
  return (
    <Card className="p-3 shadow-sm">
      <h4 className="mb-3">🛒 CARRITO</h4>
      {carrito.length === 0 ? (
        <p className="text-muted">El carrito está vacío... ¡Agregate algo!</p>
      ) : (
        <>
          <ul className="list-unstyled mb-0">
            {carrito.map((item, index) => (
              <li key={index} className="mb-2">
                <strong>{item.name}</strong> - ${item.price}
              </li>
            ))}
          </ul>
          <hr className="mt-2 mb-3"/>
          <h5 className="text-success">TOTAL: ${total}</h5>
          <div className="d-grid gap-2">
            <Button variant="primary" onClick={() => alert(`COMPRA CONFIRMADA POR UN TOTAL DE: $${total}`)}>
              Confirmar Compra
            </Button>
            <Button variant="danger" onClick={onVaciar}>
              Vaciar Carrito
            </Button>
          </div>
        </>
      )}
    </Card>
  );
};

export default Cart;