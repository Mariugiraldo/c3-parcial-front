import Card from "./Card";
import React, { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    nombre: "",
    preferencia: "",
  });

  const [show, setShow] = useState(false);
  const [err, setErr] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.nombre.length >= 3 && user.preferencia.length > 6) {
      setShow(true);
      setErr(false);
    } else {
      setShow(false);
      setErr(true);
    }
  };
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>Nombre </label>
          <input
            type="text"
            value={user.nombre}
            onChange={(e) => setUser({ ...user, nombre: e.target.value })}
          />
          <label>Preferencias</label>
          <input
            type="text"
            value={user.preferencia}
            onChange={(e) => setUser({ ...user, preferencia: e.target.value })}
          />

          <button type="submit">Enviar</button>
        </form>
        {err ? "Por favor chequea que la información sea correcta" : null}
        {show && <Card nombre={user.nombre} preferencia={user.preferencia} />}
      </div>
    );
  };

export default App;
