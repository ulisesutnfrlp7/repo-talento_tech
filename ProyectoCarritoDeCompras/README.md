# Proyecto Final (Pre-entrega) Curso REACT-JS Ulises Mateo Bucchino - Comisión 25235

# 🛒 Supermercado "Ahorrate El Mango"

Aplicación **Frontend en React** que simula un eCommerce de supermercado, con funcionalidades de carrito de compras, integración a una API externa, rutas protegidas/dinámicas y un diseño responsivo con **React Bootstrap**.  

Proyecto desarrollado para cumplir los **Requerimientos 1 al 4** de la consigna.

---

## 📋 CARACTERÍSTICAS PRINCIPALES

### ✅ Requerimiento 1: Carrito de Compras
- Listado de productos en un componente dedicado.
- Uso de **useState** y **Context API** para manejar el carrito.
- Botón de "Agregar al Carrito" en cada producto.
- Componente `Cart` para visualizar productos seleccionados y total.
- Layout principal de eCommerce (`EcommerceLayout`).

### ✅ Requerimiento 2: Conexión con API
- Fetch a API externa con **fetch + useEffect**.
- Manejo de estados: carga (`Spinner`), éxito y error (`Alert`).
- Uso de **useState** para almacenar productos.
- Diseño responsivo con Bootstrap.
- Carrito ampliado con opción de vaciar y confirmar compra.

### ✅ Requerimiento 3: Rutas
- Implementación con **react-router-dom**.
- Componentes de página: `Nosotros`, `Contacto`, `Login`, `ProductDetail`.
- Navegación entre secciones con `Link` en la **Navbar**.
- Consulta de producto por ID desde el layout.
- Manejo de estado de carga y errores en vistas.

### ✅ Requerimiento 4: Rutas Dinámicas y Protegidas
- Rutas dinámicas: `/productos/:id` con `useParams`.
- Rutas protegidas: acceso al Home (`/`) solo con login correcto.
- Implementación de login simple (usuario: `admin`, clave: `1234`).
- Navbar interactiva para moverse entre secciones.

---

## 🛠️ TECNOLOGÍAS USADAS
- [React](https://react.dev/) + Vite
- [React Router DOM](https://reactrouter.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- Context API de React
- JavaScript (ES6+)
- HTML5 + CSS3
- [MockAPI](https://mockapi.io/) como fuente de productos

---