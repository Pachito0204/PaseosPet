import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register(){
  const [ok] = useState(false)
  return (
    <div className="max-w-md mx-auto card mt-10">
      <h2 className="text-2xl font-semibold text-ppviolet mb-2">Crear cuenta</h2>
      <form className="space-y-3">
        <input className="w-full p-2 border rounded" placeholder="Nombre completo" />
        <input className="w-full p-2 border rounded" placeholder="Correo" />
        <input className="w-full p-2 border rounded" type="password" placeholder="Contraseña" />
        <button className="btn btn-primary w-full" type="button">Registrarse</button>
      </form>
      {ok && <p className="text-green-600 mt-2">Registro exitoso</p>}
      <p className="text-sm mt-3">¿Ya tienes cuenta? <Link to="/login" className="text-ppviolet">Inicia sesión</Link></p>
    </div>
  )
}
