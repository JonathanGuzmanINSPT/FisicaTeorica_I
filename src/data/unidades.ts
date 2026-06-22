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
    archivos: [
      { slug: '01-ley-gravitacion-universal', titulo: 'Ley de Gravitación Universal', tipo: 'teoria' },
      { slug: '02-campo-gravitatorio', titulo: 'Campo Gravitatorio', tipo: 'teoria' },
      { slug: '03-mecanica-orbital', titulo: 'Mecánica Orbital', tipo: 'teoria' },
      { slug: '04-energia-gravitatoria', titulo: 'Energía Gravitatoria', tipo: 'teoria' },
      { slug: '05-orbitas-elipticas', titulo: 'Órbitas Elípticas', tipo: 'teoria' },
      { slug: 'tp3-gravitacion', titulo: 'TP3 Ejercicios', tipo: 'ejercicios' },
    ],
  },
  {
    id: 'unidad-5-oscilaciones',
    numero: 5,
    titulo: 'Movimiento Oscilatorio',
    descripcion: 'MAS, péndulo simple, péndulo físico, oscilaciones amortiguadas y forzadas.',
    estado: 'en-curso',
    icono: '〰️',
    carpetas: ['unidad-5-oscilaciones'],
    archivos: [
      { slug: '01-oscilaciones-libres', titulo: 'Oscilaciones Libres', tipo: 'teoria' },
      { slug: '02-oscilaciones-amortiguadas', titulo: 'Oscilaciones Amortiguadas', tipo: 'teoria' },
      { slug: '03-oscilaciones-forzadas', titulo: 'Oscilaciones Forzadas', tipo: 'teoria' },
      { slug: 'tp4-oscilaciones', titulo: 'TP4 Ejercicios', tipo: 'ejercicios' },
    ],
  },
  {
    id: 'unidad-6-sistemas-puntos-materiales-cinematica-rigida',
    numero: 6,
    titulo: 'Sistemas de Puntos y Cinemática del Rígido',
    descripcion: 'Centro de masa, momento de inercia, cinemática del cuerpo rígido.',
    estado: 'en-curso',
    icono: '⚙️',
    carpetas: ['unidad-6-sistemas-puntos-materiales-cinematica-rigida'],
    archivos: [
      { slug: '01-sistemas-puntos-materiales', titulo: 'Sistemas de Puntos Materiales', tipo: 'teoria' },
      { slug: '02-cinematica-rigido-plano', titulo: 'Cinemática del Rígido Plano', tipo: 'teoria' },
      { slug: '03-mecanismos-engranajes', titulo: 'Mecanismos y Engranajes', tipo: 'teoria' },
      { slug: 'ejercicio-1-solucion', titulo: 'Ej. 1 Solución', tipo: 'soluciones' },
      { slug: 'tp5-sistemas-cinematica-rigida', titulo: 'TP5 Ejercicios', tipo: 'ejercicios' },
    ],
  },
  {
    id: 'unidad-7-dinamica-rigida',
    numero: 7,
    titulo: 'Dinámica del Cuerpo Rígido',
    descripcion: 'Ecuaciones de movimiento del rígido, rodadura, giroscopios, movimiento relativo.',
    estado: 'en-curso',
    icono: '🌀',
    carpetas: ['unidad-7-dinamica-rigida'],
    archivos: [
      { slug: '01-ecuaciones-dinamica-rigida', titulo: 'Ecuaciones de Dinámica Rígida', tipo: 'teoria' },
      { slug: '02-momentos-inercia-tensor', titulo: 'Momentos de Inercia y Tensor', tipo: 'teoria' },
      { slug: '03-movimiento-giroscopico', titulo: 'Movimiento Giroscópico', tipo: 'teoria' },
      { slug: 'teorema-koenig', titulo: 'Teorema de König', tipo: 'teoria' },
      { slug: 'ejercicio-19-solucion', titulo: 'Ej. 19 Solución', tipo: 'soluciones' },
      { slug: 'ejercicio-25-solucion', titulo: 'Ej. 25 Solución', tipo: 'soluciones' },
      { slug: 'ejercicio-26-solucion', titulo: 'Ej. 26 Solución', tipo: 'soluciones' },
      { slug: 'tp6-dinamica-rigida', titulo: 'TP6 Ejercicios', tipo: 'ejercicios' },
    ],
  },
];