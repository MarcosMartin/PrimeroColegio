import Vocales from './activities/lenguaje/Vocales.jsx'
import Consonantes from './activities/lenguaje/Consonantes.jsx'
import Silabas from './activities/lenguaje/Silabas.jsx'
import Lectura from './activities/lenguaje/Lectura.jsx'

import Contar from './activities/matematicas/Contar.jsx'
import Suma from './activities/matematicas/Suma.jsx'
import Resta from './activities/matematicas/Resta.jsx'
import Geometria from './activities/matematicas/Geometria.jsx'
import Problemas from './activities/matematicas/Problemas.jsx'

import Cuerpo from './activities/socialnatural/Cuerpo.jsx'
import Animales from './activities/socialnatural/Animales.jsx'
import Plantas from './activities/socialnatural/Plantas.jsx'
import Estaciones from './activities/socialnatural/Estaciones.jsx'

export const SUBJECTS = {
  lenguaje: {
    id: 'lenguaje',
    name: 'Lenguaje',
    icon: '📚',
    description: 'Letras, sílabas y palabras',
    theme: 'blue',
    bgGradient: 'from-blue-400 to-blue-600',
    bgLight: '#EFF6FF',
    primary: '#3B82F6',
    activities: [
      { id: 'vocales',     name: 'Las Vocales',          icon: '🔤', component: Vocales },
      { id: 'consonantes', name: 'Las Consonantes',       icon: '🔡', component: Consonantes },
      { id: 'silabas',     name: 'Las Sílabas',           icon: '🗣️', component: Silabas },
      { id: 'lectura',     name: 'Lectura y Comprensión', icon: '📖', component: Lectura },
    ],
  },
  matematicas: {
    id: 'matematicas',
    name: 'Matemáticas',
    icon: '🔢',
    description: 'Números, sumas y figuras',
    theme: 'orange',
    bgGradient: 'from-orange-400 to-orange-600',
    bgLight: '#FFF7ED',
    primary: '#F97316',
    activities: [
      { id: 'contar',    name: 'Contar',          icon: '🧮', component: Contar },
      { id: 'suma',      name: 'La Suma',          icon: '➕', component: Suma },
      { id: 'resta',     name: 'La Resta',         icon: '➖', component: Resta },
      { id: 'geometria', name: 'Las Figuras',      icon: '🔷', component: Geometria },
      { id: 'problemas', name: 'Problemas',        icon: '🧩', component: Problemas },
    ],
  },
  socialnatural: {
    id: 'socialnatural',
    name: 'Social y Natural',
    icon: '🌍',
    description: 'El cuerpo, animales y el mundo',
    theme: 'green',
    bgGradient: 'from-green-400 to-green-600',
    bgLight: '#F0FDF4',
    primary: '#22C55E',
    activities: [
      { id: 'cuerpo',    name: 'El Cuerpo Humano', icon: '🧍', component: Cuerpo },
      { id: 'animales',  name: 'Los Animales',     icon: '🐾', component: Animales },
      { id: 'plantas',   name: 'Las Plantas',      icon: '🌱', component: Plantas },
      { id: 'estaciones',name: 'Las Estaciones',   icon: '🌤️', component: Estaciones },
    ],
  },
}
