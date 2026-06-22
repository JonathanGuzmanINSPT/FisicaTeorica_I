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
      { slug: 'tp1-cinematica', titulo: 'Ejercicios TP1', tipo: 'ejercicios' },
      { slug: 'tp1-cinematica-soluciones', titulo: 'Soluciones TP1', tipo: 'soluciones' },
      { slug: 'ejercicio-10-solucion', titulo: 'Ej. 10 Solución', tipo: 'soluciones' },
      { slug: 'ejercicio-11-solucion', titulo: 'Ej. 11 Solución', tipo: 'soluciones' },
      { slug: 'ejercicio-12-solucion', titulo: 'Ej. 12 Solución', tipo: 'soluciones' },
      { slug: 'ejercicio-13-solucion', titulo: 'Ej. 13 Solución', tipo: 'soluciones' },
      { slug: 'ejercicio-14-solucion', titulo: 'Ej. 14 Solución', tipo: 'soluciones' },
      { slug: 'ejercicio-15-guia', titulo: 'Ej. 15 Guía', tipo: 'guia' },
      { slug: 'ejercicio-15-solucion', titulo: 'Ej. 15 Solución', tipo: 'soluciones' },
      { slug: 'ejercicio-16-solucion', titulo: 'Ej. 16 Solución', tipo: 'soluciones' },
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
      { slug: '01-leyes-newton-dcl', titulo: 'Leyes Newton y DCL', tipo: 'teoria' },
      { slug: '02-transformaciones-galileo', titulo: 'Transformaciones Galileo', tipo: 'teoria' },
      { slug: '03-sistemas-no-inerciales', titulo: 'Sistemas no inerciales', tipo: 'teoria' },
      { slug: '04-fuerzas-velocidad', titulo: 'Fzas. dependientes velocidad', tipo: 'teoria' },
      { slug: '05-fuerza-lorentz', titulo: 'Fuerza Lorentz', tipo: 'teoria' },
      { slug: '06-vinculo-despegue', titulo: 'Vínculo y despegue', tipo: 'teoria' },
      { slug: '07-mecanica-analitica', titulo: 'Mecánica analítica', tipo: 'teoria' },
      { slug: '08-masa-variable', titulo: 'Masa variable', tipo: 'teoria' },
      { slug: 'tp2-dinamica', titulo: 'Ejercicios TP2', tipo: 'ejercicios' },
      { slug: 'tp2-dinamica-soluciones', titulo: 'Soluciones TP2', tipo: 'soluciones' },
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
      { slug: '04-ejercicios-practicos', titulo: 'Ejercicios prácticos', tipo: 'ejercicios' },
      { slug: 'ejercicios-teoremas-conservacion', titulo: 'Ejercicios varios', tipo: 'ejercicios' },
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