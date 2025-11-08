//3) Mediante un formulario, se deberá capturar Usuario y contraseña y persistir los datos en localstorage

import { useState } from "react";

function App() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mensaje, setMensaje] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault(); 

    // Guarda los datos en localStorage
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("contraseña", contraseña);

    // Muestra el mensaje de confirmación
    setMensaje("Datos guardados correctamente");

    // Limpia los campos
    setUsuario("");
    setContraseña("");
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f2f2f2",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "#6633cc", marginBottom: "20px" }}>
        Formulario de usuario
      </h1>

      <form
        onSubmit={manejarEnvio}
        style={{
          backgroundColor: "white",
          padding: "20px 30px",
          borderRadius: "10px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          width: "300px",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <label>Usuario:</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Contraseña:</label>
          <input
            type="password"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#6633cc",
            color: "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "6px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Guardar datos
        </button>
      </form>

      {mensaje && (
        <p style={{ marginTop: "20px", color: "green", fontWeight: "bold" }}>
          {mensaje}
        </p>
      )}
    </div>
  );
}

export default App;
