import React from 'react';

function App() {
  const realizarRecarga = async () => {
    try {
      const respuesta = await fetch(`${process.env.REACT_APP_API_URL}/api/recargas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          numero: '+5355424546',
          monto: 500
        })
      });

      const resultado = await respuesta.json();

      if (respuesta.ok) {
        alert('✅ Recarga realizada con éxito');
      } else {
        alert('❌ Error: ' + resultado.mensaje);
      }
    } catch (error) {
      alert('🚨 Error de conexión');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Recargar móvil</h1>
      <button onClick={realizarRecarga}>Recargar 500 CUP al +53 55424546</button>
    </div>
  );
}

export default App;
