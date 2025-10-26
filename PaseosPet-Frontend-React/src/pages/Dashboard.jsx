import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  if (!user) {
    return <div className="text-center mt-20 text-gray-600">Cargando perfil...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow">
      <h1 className="text-3xl font-bold text-ppviolet mb-4">
        Bienvenido, {user.name} 🐾
      </h1>
      <p className="text-gray-700 mb-2">
        <strong>Correo:</strong> {user.email}
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-violet-50 p-4 rounded-xl shadow">
          <h2 className="font-semibold text-ppviolet mb-2">Mascotas</h2>
          <p className="text-sm text-gray-600">Agrega tus mascotas para llevar su historial de paseos y salud.</p>
          <button className="btn btn-primary mt-3">Agregar mascota</button>
        </div>

        <div className="bg-violet-50 p-4 rounded-xl shadow">
          <h2 className="font-semibold text-ppviolet mb-2">Mis paseos</h2>
          <p className="text-sm text-gray-600">Consulta los últimos paseos registrados y su recorrido.</p>
          <button className="btn btn-outline mt-3">Ver paseos</button>
        </div>
      </div>
    </div>
  );
}
