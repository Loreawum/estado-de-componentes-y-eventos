import React from "react";
//aqui se reciben los valores de los estados como parametros de la función Input.jsx
function Input({ user, setUser, password, setPassword }) {
  return (
    <div className="d-flex ">
      <div id="contenedor_input" className="bg-light p-3 border">
        <input
          class="form-control form-control-lg my-2"
          type="text"
          name="user"
          placeholder="Usuario"
          onChange={(e) => setUser(e.target.value)}
          value={user}
        />
        <input
          class="form-control form-control-lg my-2"
          type="password"
          name="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
    </div>
  );
}

export default Input;
