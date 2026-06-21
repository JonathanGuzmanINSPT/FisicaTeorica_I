const fs = require('fs');
const path = require('path');

// Datos de unidades y sus archivos
const unidades = [
  {
    id: 'unidad-1-cinematica',
    num: 1,
    titulo: 'Cinemática de puntos materiales',
    archivos: [
      { slug: '01-posicion-velocidad-aceleracion', titulo: 'Teoría', tipo: 'teoria' },
      { slug: 'tp1-cinematica', titulo: 'Ejercicios', tipo: 'ejercicios' },
      { slug: 'tp1-cinematica-soluciones', titulo: 'Soluciones', tipo: 'soluciones' },
    ]
  },
  {
    id: 'unidad-2-dinamica',
    num: 2,
    titulo: 'Leyes de Newton y Dinámica',
    archivos: [
      { slug: '00-teoria-completa-dinamica', titulo: 'Teoría completa', tipo: 'teoria' },
      { slug: 'tp2-dinamica', titulo: 'Ejercicios', tipo: 'ejercicios' },
      { slug: 'tp2-dinamica-soluciones', titulo: 'Soluciones', tipo: 'soluciones' },
    ]
  },
  {
    id: 'unidad-3-teoremas-conservacion',
    num: 3,
    titulo: 'Teoremas de Conservación',
    archivos: [
      { slug: '01-teorema-trabajo-energia', titulo: 'Teorema trabajo-energía', tipo: 'teoria' },
      { slug: '02-conservacion-energia', titulo: 'Conservación de energía', tipo: 'teoria' },
      { slug: '03-fuerzas-conservativas', titulo: 'Fuerzas conservativas', tipo: 'teoria' },
    ]
  },
];

for (const u of unidades) {
  const dir = path.join(__dirname, 'src/pages', u.id);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  // index.astro
  const indexPath = path.join(dir, 'index.astro');
  if (!fs.existsSync(indexPath)) {
    const indexContent = `---
import BaseLayout from '../../layouts/BaseLayout.astro';
import { unidades } from '../../data/unidades';
---

<BaseLayout title="Unidad ${u.num} — Física Teórica I" noSidebar={false}>
  <div class="unidad-landing">
    <a href="/" class="back-link">← Volver al inicio</a>
    <h1>Unidad ${u.num}: ${u.titulo}</h1>
    <p class="desc">${u.descripcion || 'Contenido de la unidad.'}</p>
    
    <div class="files-grid">
      ${u.archivos.map(a => \`
      <a href="/${u.id}/\${a.slug}/" class="file-card" data-tipo="\${a.tipo}">
        <span class="file-icon">\${a.tipo === 'teoria' ? '📖' : a.tipo === 'ejercicios' ? '🏋️' : '🔑'}</span>
        <span class="file-title">\${a.titulo}</span>
        <span class="file-arrow">→</span>
      </a>\`).join('')}
    </div>
  </div>
</BaseLayout>

<style>
  .back-link { display: inline-block; margin-bottom: 1.5rem; color: var(--text-muted); text-decoration: none; font-size: 0.85rem; }
  .back-link:hover { color: var(--accent); }
  .unidad-landing h1 { font-size: 2rem; margin-bottom: 0.5rem; }
  .desc { color: var(--text-secondary); margin-bottom: 2rem; }
  .files-grid { display: grid; gap: 0.75rem; }
  .file-card { display: flex; align-items: center; gap: 0.75rem; padding: 1rem 1.25rem; background: var(--bg-secondary); border: 1px solid var(--border-primary); border-radius: var(--radius-md); text-decoration: none; color: var(--text-primary); transition: all 0.2s ease; }
  .file-card:hover { border-color: var(--border-accent); transform: translateX(4px); }
  .file-icon { font-size: 1.2rem; }
  .file-title { flex: 1; font-weight: 500; }
  .file-arrow { color: var(--text-muted); }
  .file-card[data-tipo="teoria"] { border-left: 3px solid var(--accent); }
  .file-card[data-tipo="ejercicios"] { border-left: 3px solid var(--green); }
  .file-card[data-tipo="soluciones"] { border-left: 3px solid var(--rose); }
</style>
`;
    fs.writeFileSync(indexPath, indexContent, 'utf8');
    console.log('✅ Creado: ' + indexPath);
  }

  // Páginas de archivos
  for (const a of u.archivos) {
    const pagePath = path.join(dir, a.slug + '.astro');
    if (!fs.existsSync(pagePath)) {
      const pageContent = `---
import UnidadLayout from '../../layouts/UnidadLayout.astro';
import { unidades } from '../../data/unidades';
---

<UnidadLayout title="${a.titulo} — Unidad ${u.num}" unidad={unidades[${u.num - 1}]} currentSlug="${a.slug}">
  <article class="prose">
    <h1>${a.titulo}</h1>
    <p>Contenido en migración. <a href="https://github.com/neonplus/fisica-teorica-i-2026/blob/main/${u.id}/${a.slug}.md" target="_blank">Ver markdown original en GitHub</a></p>
  </article>
</UnidadLayout>
`;
      fs.writeFileSync(pagePath, pageContent, 'utf8');
      console.log('✅ Creado: ' + pagePath);
    }
  }
}

console.log('\n🎉 ¡Todas las páginas fueron creadas!');
