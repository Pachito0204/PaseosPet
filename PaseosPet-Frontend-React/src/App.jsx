import { Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'

export default function App(){
  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="PaseosPet" className="w-8 h-8"/>
            <span className="text-ppviolet font-bold text-xl">PaseosPet</span>
          </Link>
          <div className="space-x-3">
            <Link to="/login" className="btn btn-outline">Ingresar</Link>
            <Link to="/register" className="btn btn-primary">Crear cuenta</Link>
          </div>
        </div>
      </nav>
      <div className="max-w-6xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  )
}

function Home(){
  return (
    <div className="grid md:grid-cols-2 gap-6 items-center mt-10">
      <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="card">
        <h1 className="text-3xl font-bold text-ppviolet mb-2">Una aventura segura y feliz</h1>
        <p>Gestiona paseos, salud, peluquería, alimentos y más en un solo lugar.</p>
        <div className="mt-4 flex gap-3">
          <Link to="/register" className="btn btn-primary">Comenzar</Link>
          <Link to="/login" className="btn btn-outline">Ya tengo cuenta</Link>
        </div>
      </motion.div>
      <motion.img initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} transition={{delay:0.1}} src="/hero.png" alt="Mascota feliz" className="w-full rounded-2xl shadow"/>
    </div>
  )
}
