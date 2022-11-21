import Boton from "./componentes/Boton";
import Input from "./componentes/Input";
import { useState } from "react";
import "./componentes/Input_style.css";
import "./componentes/Boton_style.css";
function App() {
  //los estados seteados en el componente padre, en este caso es el APP.js
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="App">
      <main className="d-flex flex-column align-items-center ">
        <Input
          user={user}
          setUser={setUser}
          password={password}
          setPassword={setPassword}
        />
        {password === "252525" ? <Boton /> : null}
      </main>
    </div>
  );
}

export default App;
