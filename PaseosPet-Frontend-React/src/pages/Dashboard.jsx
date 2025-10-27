import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API_URL from "../config";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [pets, setPets] = useState([]);

  // 🔹 Cargar perfil y mascotas del backend
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/login");

    fetch(`${API_URL}/api/auth/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch(() => navigate("/login"));

    // 🔹 Obtener mascotas
    fetch(`${API_URL}/api/pets`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setPets(data))
      .catch((err) => console.error("Error al cargar mascotas:", err));
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  if (!user)
    return (
      <div className="text-center mt-20 text-gray-600">Cargando perfil...</div>
    );

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-ppviolet">
          Bienvenido, {user.name} 🐾
        </h1>
        <button onClick={handleLogout} className="btn btn-outline">
          Cerrar sesión
        </button>
      </div>

      <p className="text-gray-700 mb-2">
        <strong>Correo:</strong> {user.email}
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-violet-50 p-4 rounded-xl shadow">
          <h2 className="font-semibold text-ppviolet mb-2">Mis Mascotas</h2>
          {pets.length === 0 ? (
            <p className="text-sm text-gray-600">No tienes mascotas aún.</p>
          ) : (
            <ul className="text-sm text-gray-700 list-disc ml-4">
              {pets.map((p) => (
                <li key={p.id}>
                  {p.nombre} ({p.raza})
                </li>
              ))}
            </ul>
          )}
          <button className="btn btn-primary mt-3">Agregar mascota</button>
        </div>

        <div className="bg-violet-50 p-4 rounded-xl shadow">
          <h2 className="font-semibold text-ppviolet mb-2">Mis paseos</h2>
          <p className="text-sm text-gray-600">
            Consulta los últimos paseos registrados.
          </p>
          <button className="btn btn-outline mt-3">Ver paseos</button>
        </div>
      </div>
    </div>
  );
}
