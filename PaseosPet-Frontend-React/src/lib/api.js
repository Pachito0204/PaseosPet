const API = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'
export async function login(email, password){
  const res = await fetch(`${API}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  if(!res.ok) throw new Error('Login inválido')
  return res.json()
}
export default { login }