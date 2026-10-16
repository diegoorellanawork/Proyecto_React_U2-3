export function Saludo({ nombre = 'Critoweb' }) {
  return (
    <p className="text-gray-300">
      ¡Bienvenido a {nombre}!
    </p>
  )
}
