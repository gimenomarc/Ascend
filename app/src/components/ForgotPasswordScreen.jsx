// src/components/ForgotPasswordScreen.jsx
import React, { useState } from 'react';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes agregar la lógica para enviar el correo y mostrar el mensaje
    // Podrías hacer una llamada a la API para manejar esto

    // Ejemplo simple:
    setMessage(
      'Si su correo se encuentra en nuestra base de datos, recibirá un correo electrónico para cambiar la contraseña.'
    );
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Recuperar Contraseña</h2>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Correo Electrónico"
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Recuperar Contraseña
        </button>
      </form>

      {message && (
        <div className="mt-4 text-green-500">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default ForgotPasswordScreen;