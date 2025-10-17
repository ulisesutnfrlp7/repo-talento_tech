// src/components/Cart.jsx

import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { CarritoContext } from "../context/CarritoContext";

const Cart = () => {
  const { carrito, vaciarCarrito, confirmarCompra, eliminarUnidadDelCarrito } = useContext(CarritoContext);
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
              <div className="d-flex justify-content-between align-items-center">
                <span>
                  <strong>{item.name}</strong> - ${item.price}
                </span>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => eliminarUnidadDelCarrito(index, item.id)}
                  style={{ border: "none" }}
                  title="ELIMINAR ESTE PRODUCTO"
                >
                  🗑️
                </Button>
              </div>
            </li>
            ))}
          </ul>
          <hr className="mt-2 mb-3" />
          <h5 className="text-success">TOTAL: ${total}</h5>
          <div className="d-grid gap-2">
            <Button
              variant="primary"
              onClick={() => {
                alert(`COMPRA CONFIRMADA POR UN TOTAL DE: $${total}`);
                confirmarCompra(); // NO RESTAURA STOCK
              }}
            >
              Confirmar Compra
            </Button>
            <Button
              variant="danger"
              onClick={() => {
                if (window.confirm("¿SEGURO QUE QUERÉS VACIAR EL CARRITO?")) {
                  vaciarCarrito(); // RESTAURA STOCK
                }
              }}
            >
              Vaciar Carrito
            </Button>
          </div>
        </>
      )}
    </Card>
  );
};

export default Cart;