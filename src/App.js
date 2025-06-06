import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [msg, setMsg] = useState('Cargando aplicación...');

  useEffect(() => {
    fetch('https://mi-recarga-backend.onrender.com') // URL fija por ahora
      .then(res => res.text()) // ← si devuelve texto plano
      .then(data => setMsg(data))
      .catch(() => setMsg('Error al conectar con el backend'));
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      {msg}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
