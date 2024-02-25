// src/components/LoginScreen.jsx
import React from 'react';

const LoginScreen = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Iniciar Sesión</h2>

      <form className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Correo Electrónico"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Contraseña"
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Iniciar Sesión
        </button>
      </form>

      <div className="mt-4">
        <a href="/forgot-password" className="text-blue-500">
          ¿He olvidado la contraseña?
        </a>
      </div>
    </div>
  );
};

export default LoginScreen;