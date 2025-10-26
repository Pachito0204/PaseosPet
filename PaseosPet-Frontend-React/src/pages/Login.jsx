import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import api from '../lib/api'

export default function Login(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const navigate = useNavigate()

  const submit = async (e)=>{
    e.preventDefault()
    setError('')
    try{
      const data = await api.login(email,password)
      localStorage.setItem('token', data.token)
      navigate('/dashboard')
    }catch(err){
      setError('Correo o contraseña incorrectos')
    }
  }

  return (
    <div className="max-w-md mx-auto card mt-10">
      <h2 className="text-2xl font-semibold text-ppviolet mb-2">Iniciar sesión</h2>
      <form onSubmit={submit} className="space-y-3">
        <input className="w-full p-2 border rounded" placeholder="Correo" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full p-2 border rounded" type="password" placeholder="Contraseña" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="btn btn-primary w-full">Entrar</button>
      </form>
      {error && <p className="text-red-600 mt-2">{error}</p>}
      <p className="text-sm mt-3">¿No tienes cuenta? <Link to="/register" className="text-ppviolet">Regístrate</Link></p>
    </div>
  )
}
