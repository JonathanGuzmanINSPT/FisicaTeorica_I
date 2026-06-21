// Configuración de las unidades del curso
// Editá este archivo para actualizar estados, títulos o descripciones

export interface Unidad {
  id: string;
  numero: number;
  titulo: string;
  descripcion: string;
  estado: 'completado' | 'en-curso' | 'pendiente';
  icono: string;
  carpetas: string[];
  archivos: {
    slug: string;
    titulo: string;
    tipo: 'teoria' | 'ejercicios' | 'soluciones' | 'guia' | 'general';
  }[];
}

export const unidades: Unidad[] = [
  {
    id: 'unidad-1-cinematica',
    numero: 1,
    titulo: 'Cinemática de puntos materiales',
    descripcion: 'Posición, velocidad y aceleración. Movimiento rectilíneo y curvilíneo. Coordenadas polares.',
    estado: 'completado',
    icono: '📐',
    carpetas: ['unidad-1-cinematica'],
    archivos: [
      { slug: '01-posicion-velocidad-aceleracion', titulo: 'Teoría', tipo: 'teoria' },
      { slug: 'tp1-cinematica', titulo: 'Ejercicios', tipo: 'ejercicios' },
      { slug: 'tp1-cinematica-soluciones', titulo: 'Soluciones', tipo: 'soluciones' },
    ],
  },
  {
    id: 'unidad-2-dinamica',
    numero: 2,
    titulo: 'Leyes de Newton y Dinámica',
    descripcion: 'Leyes de Newton, DCL, sistemas no inerciales, fuerzas dependientes de velocidad, Lorentz, vínculo, Lagrange, masa variable.',
    estado: 'completado',
    icono: '⚡',
    carpetas: ['unidad-2-dinamica'],
    archivos: [
      { slug: '00-teoria-completa-dinamica', titulo: 'Teoría completa', tipo: 'teoria' },
      { slug: 'tp2-dinamica', titulo: 'Ejercicios', tipo: 'ejercicios' },
      { slug: 'tp2-dinamica-soluciones', titulo: 'Soluciones', tipo: 'soluciones' },
    ],
  },
  {
    id: 'unidad-3-teoremas-conservacion',
    numero: 3,
    titulo: 'Teoremas de Conservación',
    descripcion: 'Trabajo y energía, fuerzas conservativas, conservación de momento lineal y angular.',
    estado: 'completado',
    icono: '🔄',
    carpetas: ['unidad-3-teoremas-conservacion'],
    archivos: [
      { slug: '01-teorema-trabajo-energia', titulo: 'Teorema trabajo-energía', tipo: 'teoria' },
      { slug: '02-conservacion-energia', titulo: 'Conservación de energía', tipo: 'teoria' },
      { slug: '03-fuerzas-conservativas', titulo: 'Fuerzas conservativas', tipo: 'teoria' },
    ],
  },
  {
    id: 'unidad-4-gravitacion',
    numero: 4,
    titulo: 'Gravitación',
    descripcion: 'Ley de gravitación universal, campo gravitatorio, energía potencial gravitatoria, órbitas.',
    estado: 'en-curso',
    icono: '🌍',
    carpetas: ['unidad-4-gravitacion'],
    archivos: [],
  },
  {
    id: 'unidad-5-oscilaciones',
    numero: 5,
    titulo: 'Movimiento Oscilatorio',
    descripcion: 'MAS, péndulo simple, péndulo físico, oscilaciones amortiguadas y forzadas.',
    estado: 'pendiente',
    icono: '〰️',
    carpetas: ['unidad-5-oscilaciones'],
    archivos: [],
  },
  {
    id: 'unidad-6-sistemas-puntos-materiales-cinematica-rigida',
    numero: 6,
    titulo: 'Sistemas de Puntos y Cinemática del Rígido',
    descripcion: 'Centro de masa, momento de inercia, cinemática del cuerpo rígido.',
    estado: 'pendiente',
    icono: '⚙️',
    carpetas: ['unidad-6-sistemas-puntos-materiales-cinematica-rigida'],
    archivos: [],
  },
  {
    id: 'unidad-7-dinamica-rigida',
    numero: 7,
    titulo: 'Dinámica del Cuerpo Rígido',
    descripcion: 'Ecuaciones de movimiento del rígido, rodadura, giroscopios, movimiento relativo.',
    estado: 'pendiente',
    icono: '🌀',
    carpetas: ['unidad-7-dinamica-rigida'],
    archivos: [],
  },
];