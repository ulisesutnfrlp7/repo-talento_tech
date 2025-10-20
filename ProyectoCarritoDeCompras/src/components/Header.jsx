// src/components/Header.jsx

import React, { useContext } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className='bg-success text-white py-4 shadow-sm'>
      <Container>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <div className="d-flex align-items-center">
            <img
              src="/favicon.png"
              alt="Logo"
              style={{ width: '40px', height: '40px', marginRight: '12px' }}
            />
            <h1 className="mb-0">
              Supermercado "Ahorrate El Mango"
            </h1>
          </div>

          {user && (
            <Button variant="danger" size="lg" onClick={handleLogout}>
              🔓 Cerrar Sesión
            </Button>
          )}
        </div>

        <p className='lead'>
          Desde 2015 haciéndole bien al barrio.
        </p>
      </Container>
    </header>
  );
};

export default Header;