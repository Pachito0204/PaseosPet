export default function Dashboard(){
  return (
    <div className="grid md:grid-cols-3 gap-4 mt-6">
      <div className="card"><h3 className="font-semibold text-ppviolet mb-1">Paseos</h3><p>Agenda y lleva el historial de paseos.</p></div>
      <div className="card"><h3 className="font-semibold text-ppviolet mb-1">Salud & Seguro</h3><p>Consulta veterinaria y cobertura médica.</p></div>
      <div className="card"><h3 className="font-semibold text-ppviolet mb-1">Peluquería & Alimentos</h3><p>Servicios aliados para el bienestar.</p></div>
    </div>
  )
}
