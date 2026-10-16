# Práctica de la Semana: Proyecto React + Vite + Tailwind CSS

Proyecto inicial desarrollado para la materia **Programación Web (U2_3)** en la UAGRM, donde se configuró un entorno moderno con React y Vite, se crearon los primeros componentes modulares y se versionó el código en GitHub.

---

## 🚀 Tecnologías Utilizadas

- **[React](https://react.dev/)**: Biblioteca para interfaces de usuario.
- **[Vite](https://vite.dev/)**: Entorno de desarrollo rápido y empaquetador.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework de estilos utilitarios.
- **[Node.js](https://nodejs.org/)**: Entorno de ejecución en JavaScript.
- **Git / GitHub**: Control de versiones y repositorio remoto.

---

## 📂 Estructura del Proyecto

```text
Proyecto_U2_3/
├── public/
│   └── favicon.svg      # Ícono de la pestaña
├── src/
│   ├── components/      # Componentes personalizados de React
│   │   └── Saludo.jsx   # Componente reutilizable de saludo
│   ├── App.jsx          # Componente principal (h1 + Saludo)
│   ├── index.css        # Importación de Tailwind CSS
│   └── main.jsx         # Punto de montaje del DOM
├── index.html           # Plantilla base HTML
├── package.json         # Dependencias y scripts del proyecto
├── vite.config.js       # Configuración de Vite y plugins
└── README.md
```

---

## ▶️ Cómo ejecutarlo

```bash
npm install      # instala las dependencias
npm run dev      # servidor de desarrollo (abre la dirección local que muestra la terminal)
npm run build    # genera la versión de producción en /dist
npm run lint     # revisa el código con ESLint
```
