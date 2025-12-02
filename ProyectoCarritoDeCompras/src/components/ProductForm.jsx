// src/components/ProductForm.jsx
import React, { useState, useEffect, useContext } from 'react';
import { Form, Button, Alert, Container, Card } from 'react-bootstrap';
import { ProductosContext } from '../context/ProductosContext';

const ProductForm = ({ productoEditando, onGuardar, onCancelar }) => {
  const { agregarProductoAPI, editarProductoAPI } = useContext(ProductosContext);
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    image: ''
  });
  
  const [errors, setErrors] = useState({});
  const [mensaje, setMensaje] = useState({ tipo: '', texto: '' });
  const [cargando, setCargando] = useState(false);

  // Cargar datos cuando se recibe un producto para editar
  useEffect(() => {
    if (productoEditando) {
      setFormData({
        name: productoEditando.name || '',
        description: productoEditando.description || '',
        price: productoEditando.price || '',
        stock: productoEditando.stock || '',
        image: productoEditando.image || ''
      });
    } else {
      setFormData({
        name: '',
        description: '',
        price: '',
        stock: '',
        image: ''
      });
    }
  }, [productoEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Limpiar error al escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    let newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'La descripción es obligatoria';
    } else if (formData.description.length < 10) {
      newErrors.description = 'La descripción debe tener al menos 10 caracteres';
    }
    
    if (!formData.price) {
      newErrors.price = 'El precio es obligatorio';
    } else if (isNaN(formData.price) || Number(formData.price) <= 0) {
      newErrors.price = 'El precio debe ser un número mayor a 0';
    }
    
    if (!formData.stock) {
      newErrors.stock = 'El stock es obligatorio';
    } else if (isNaN(formData.stock) || Number(formData.stock) < 0) {
      newErrors.stock = 'El stock debe ser un número mayor o igual a 0';
    }
    
    if (!formData.image.trim()) {
      newErrors.image = 'La URL de la imagen es obligatoria';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setMensaje({ tipo: 'danger', texto: 'Uuuh, casi, la pu! Corregite esos errores antes de continuar :)' });
      return;
    }
    
    setCargando(true);
    setMensaje({ tipo: '', texto: '' });
    
    try {
      if (productoEditando) {
        // Modo edición
        await editarProductoAPI(productoEditando.id, formData);
        setMensaje({ tipo: 'success', texto: 'Producto actualizado correctamente' });
      } else {
        // Modo creación
        await agregarProductoAPI(formData);
        setMensaje({ tipo: 'success', texto: 'Producto agregado correctamente' });
      }
      
      // Limpiar formulario después de éxito
      setFormData({
        name: '',
        description: '',
        price: '',
        stock: '',
        image: ''
      });
      
      // Notificar al componente padre
      if (onGuardar) onGuardar();
    } catch (error) {
      setMensaje({ 
        tipo: 'danger', 
        texto: `Error: ${error.message || 'No se pudo guardar el producto'}` 
      });
    } finally {
      setCargando(false);
    }
  };

  const handleCancelar = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      stock: '',
      image: ''
    });
    setErrors({});
    setMensaje({ tipo: '', texto: '' });
    if (onCancelar) onCancelar();
  };

  return (
    <Container className="py-4">
      <Card className="p-4 shadow-sm">
        <h4 className="mb-3 text-black">
          {productoEditando ? '✏️ EDITAR PRODUCTO' : '➕ AGREGAR NUEVO PRODUCTO'}
        </h4>
        
        {mensaje.texto && (
          <Alert variant={mensaje.tipo}>
            {mensaje.texto}
          </Alert>
        )}
        
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label className="fw-bold text-black">Nombre del Producto *</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              isInvalid={!!errors.name}
              placeholder="Ingrese el nombre del producto"
            />
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescripcion">
            <Form.Label className="fw-bold text-black">Descripción *</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={formData.description}
              onChange={handleChange}
              isInvalid={!!errors.description}
              placeholder="Ingrese una descripción (mínimo 10 caracteres)"
            />
            <Form.Control.Feedback type="invalid">
              {errors.description}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label className="fw-bold text-black">Precio *</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              isInvalid={!!errors.price}
              placeholder="0.00"
              step="0.01"
            />
            <Form.Control.Feedback type="invalid">
              {errors.price}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formStock">
            <Form.Label className="fw-bold text-black">Stock *</Form.Label>
            <Form.Control
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              isInvalid={!!errors.stock}
              placeholder="Cantidad en stock"
            />
            <Form.Control.Feedback type="invalid">
              {errors.stock}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label className="fw-bold text-black">URL de la Imagen *</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              isInvalid={!!errors.image}
              placeholder="https://ejemplo.com/imagen.jpg"
            />
            <Form.Control.Feedback type="invalid">
              {errors.image}
            </Form.Control.Feedback>
          </Form.Group>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <Button 
              variant="secondary" 
              type="button" 
              onClick={handleCancelar}
              disabled={cargando}
            >
              Cancelar
            </Button>
            <Button 
              variant={productoEditando ? "warning" : "primary"} 
              type="submit" 
              disabled={cargando}
            >
              {cargando ? 'Procesando...' : (productoEditando ? 'Actualizar Producto' : 'Agregar Producto')}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default ProductForm;