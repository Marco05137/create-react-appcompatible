import React from 'react';

function App() {
  const recargar = () => {
    fetch('https://mi-recarga-backend.onrender.com/api/recargar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        numero: '+5355424546',
        monto: 500
      })
    })
    .then(res => res.json())
    .then(data => alert('✅ Recarga completada'))
    .catch(err => alert('❌ Error en la recarga'));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Recarga directa a Cuba</h2>
      <p>Recargar 500 CUP al número +53 55424546</p>
      <button onClick={recargar} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Recargar 500 CUP
      </button>
    </div>
  );
}

export default App;


