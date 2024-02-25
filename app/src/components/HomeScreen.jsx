// src/components/HomeScreen.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to ASCEND</h2>
      <p className="text-gray-600">Voy a mostrarte contenido que va a volarte la cabeza.</p>

      <div className="mt-8">
        <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
          Iniciar Sesión
        </Link>
        <Link to="/register" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Registrarse
        </Link>
      </div>
    </div>
  );
};

export default HomeScreen;
