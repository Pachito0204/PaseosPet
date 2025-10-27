import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API_URL from "../config";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/dashboard");
      } else {
        setError(data.error || "Credenciales incorrectas");
      }
    } catch (error) {
      console.error(error);
      setError("Error al conectar con el servidor");
    }
  };

  return (
    <div className="max-w-md mx-auto card mt-10">
      <h2 className="text-2xl font-semibold text-ppviolet mb-2">
        Iniciar sesión
      </h2>
      <form className="space-y-3" onSubmit={handleLogin}>
        <input
          className="w-full p-2 border rounded"
          placeholder="Correo electrónico"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 border rounded"
          type="password"
          placeholder="Contraseña"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button className="btn btn-primary w-full" type="submit">
          Ingresar
        </button>
      </form>

      {error && <p className="text-red-600 mt-2">{error}</p>}

      <p className="text-sm mt-3">
        ¿No tienes cuenta?{" "}
        <Link to="/register" className="text-ppviolet">
          Crea una
        </Link>
      </p>
    </div>
  );
}
