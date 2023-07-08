import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useNavigate } from "react-router";

function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    try {
      const result = axios.post("API URL", { login, password });
      localStorage.setItem("token", result.data.token);
      navigate("/pets");
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <>
      <form action="">
        <input
          type="text"
          name="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Entrar</button>
      </form>
    </>
  );
}

export default App;
