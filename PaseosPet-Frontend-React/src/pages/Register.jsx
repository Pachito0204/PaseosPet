import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API_URL from "../config";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [ok, setOk] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        setOk(true);
        setTimeout(() => navigate("/login"), 2000);
      } else {
        alert(data.error || "Error al registrar usuario");
      }
    } catch (error) {
      console.error(error);
      alert("Error al conectar con el servidor");
    }
  };

  return (
    <div className="max-w-md mx-auto card mt-10">
      <h2 className="text-2xl font-semibold text-ppviolet mb-2">
        Crear cuenta
      </h2>
      <form className="space-y-3" onSubmit={handleRegister}>
        <input
          className="w-full p-2 border rounded"
          placeholder="Nombre completo"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="w-full p-2 border rounded"
          placeholder="Correo"
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
          Registrarse
        </button>
      </form>
      {ok && (
        <p className="text-green-600 mt-2">✅ Registro exitoso, redirigiendo...</p>
      )}
      <p className="text-sm mt-3">
        ¿Ya tienes cuenta?{" "}
        <Link to="/login" className="text-ppviolet">
          Inicia sesión
        </Link>
      </p>
    </div>
  );
}
