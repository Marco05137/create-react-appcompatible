import React from 'react';

function App() {
  const recargar = async () => {
    try {
      const response = await fetch('https://mi-recarga-backend.onrender.com/api/recargar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          numero: '+5355424546',
          monto: 500,
        }),
      });

      const data = await response.json();
      alert(data.mensaje || 'Recarga enviada correctamente');
    } catch (error) {
      alert('Error al enviar la recarga');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Recargas a Cuba</h1>
      <button onClick={recargar}>Recargar 500 CUP a +53 55424546</button>
    </div>
  );
}

export default App;


