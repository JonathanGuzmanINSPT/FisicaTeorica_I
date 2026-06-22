#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PAGES = path.join(ROOT, 'src', 'pages');

const TEMPLATE = (slug, mdRel) => `---
import BaseLayout from '../../layouts/BaseLayout.astro';
import Content from '${mdRel}';
---

<BaseLayout title="${slug} - Fisica Teorica I">
  <article class="markdown-body">
    <Content />
  </article>
</BaseLayout>

<style is:global>
  .markdown-body {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
    line-height: 1.8;
    color: var(--text-primary);
  }
  .markdown-body h1 { font-size: 2rem; margin: 2rem 0 1rem; color: var(--accent); border-bottom: 1px solid var(--border-primary); padding-bottom: 0.5rem; }
  .markdown-body h2 { font-size: 1.5rem; margin: 2rem 0 0.75rem; color: var(--accent); }
  .markdown-body h3 { font-size: 1.25rem; margin: 1.5rem 0 0.5rem; }
  .markdown-body p { margin-bottom: 1rem; }
  .markdown-body ul, .markdown-body ol { margin: 0.5rem 0 1rem 1.5rem; }
  .markdown-body li { margin-bottom: 0.3rem; }
  .markdown-body code { background: var(--bg-tertiary); padding: 0.15rem 0.4rem; border-radius: 4px; font-size: 0.9em; font-family: monospace; }
  .markdown-body pre { background: var(--bg-tertiary); padding: 1rem; border-radius: 8px; overflow-x: auto; margin: 1rem 0; border: 1px solid var(--border-primary); }
  .markdown-body pre code { background: none; padding: 0; }
  .markdown-body img { max-width: 100%; border-radius: 8px; margin: 1rem 0; }
  .markdown-body blockquote { border-left: 3px solid var(--accent); padding: 0.5rem 1rem; margin: 1rem 0; background: var(--bg-secondary); border-radius: 0 8px 8px 0; }
  .markdown-body table { width: 100%; border-collapse: collapse; margin: 1rem 0; }
  .markdown-body th, .markdown-body td { padding: 0.5rem; border: 1px solid var(--border-primary); text-align: left; }
  .markdown-body th { background: var(--bg-tertiary); font-weight: 600; }
</style>
`;

const files = [
  // Unidad 1
  ['unidad-1-cinematica', '01-posicion-velocidad-aceleracion', '../../../unidad-1-cinematica/01-posicion-velocidad-aceleracion.md'],
  ['unidad-1-cinematica', 'tp1-cinematica', '../../../unidad-1-cinematica/tp1-cinematica.md'],
  ['unidad-1-cinematica', 'tp1-cinematica-soluciones', '../../../unidad-1-cinematica/tp1-cinematica-soluciones.md'],
  ['unidad-1-cinematica', 'ejercicio-10-solucion', '../../../unidad-1-cinematica/ejercicio-10-solucion.md'],
  ['unidad-1-cinematica', 'ejercicio-11-solucion', '../../../unidad-1-cinematica/ejercicio-11-solucion.md'],
  ['unidad-1-cinematica', 'ejercicio-12-solucion', '../../../unidad-1-cinematica/ejercicio-12-solucion.md'],
  ['unidad-1-cinematica', 'ejercicio-13-solucion', '../../../unidad-1-cinematica/ejercicio-13-solucion.md'],
  ['unidad-1-cinematica', 'ejercicio-14-solucion', '../../../unidad-1-cinematica/ejercicio-14-solucion.md'],
  ['unidad-1-cinematica', 'ejercicio-15-guia', '../../../unidad-1-cinematica/ejercicio-15-guia.md'],
  ['unidad-1-cinematica', 'ejercicio-15-solucion', '../../../unidad-1-cinematica/ejercicio-15-solucion.md'],
  ['unidad-1-cinematica', 'ejercicio-16-solucion', '../../../unidad-1-cinematica/ejercicio-16-solucion.md'],
  // Unidad 2
  ['unidad-2-dinamica', '00-teoria-completa-dinamica', '../../../unidad-2-dinamica/00-teoria-completa-dinamica.md'],
  ['unidad-2-dinamica', '01-leyes-newton-dcl', '../../../unidad-2-dinamica/01-leyes-newton-dcl.md'],
  ['unidad-2-dinamica', '02-transformaciones-galileo', '../../../unidad-2-dinamica/02-transformaciones-galileo.md'],
  ['unidad-2-dinamica', '03-sistemas-no-inerciales', '../../../unidad-2-dinamica/03-sistemas-no-inerciales.md'],
  ['unidad-2-dinamica', '04-fuerzas-velocidad', '../../../unidad-2-dinamica/04-fuerzas-velocidad.md'],
  ['unidad-2-dinamica', '05-fuerza-lorentz', '../../../unidad-2-dinamica/05-fuerza-lorentz.md'],
  ['unidad-2-dinamica', '06-vinculo-despegue', '../../../unidad-2-dinamica/06-vinculo-despegue.md'],
  ['unidad-2-dinamica', '07-mecanica-analitica', '../../../unidad-2-dinamica/07-mecanica-analitica.md'],
  ['unidad-2-dinamica', '08-masa-variable', '../../../unidad-2-dinamica/08-masa-variable.md'],
  ['unidad-2-dinamica', 'tp2-dinamica', '../../../unidad-2-dinamica/tp2-dinamica.md'],
  ['unidad-2-dinamica', 'tp2-dinamica-soluciones', '../../../unidad-2-dinamica/tp2-dinamica-soluciones.md'],
  // Unidad 3
  ['unidad-3-teoremas-conservacion', '01-teorema-trabajo-energia', '../../../unidad-3-teoremas-conservacion/01-teorema-trabajo-energia.md'],
  ['unidad-3-teoremas-conservacion', '02-conservacion-energia', '../../../unidad-3-teoremas-conservacion/02-conservacion-energia.md'],
  ['unidad-3-teoremas-conservacion', '03-fuerzas-conservativas', '../../../unidad-3-teoremas-conservacion/03-fuerzas-conservativas.md'],
  ['unidad-3-teoremas-conservacion', '04-ejercicios-practicos', '../../../unidad-3-teoremas-conservacion/04-ejercicios-practicos.md'],
  ['unidad-3-teoremas-conservacion', 'ejercicios-teoremas-conservacion', '../../../unidad-3-teoremas-conservacion/ejercicios-teoremas-conservacion.md'],
];

let ok = 0, missing = 0;
for (const [unidad, slug, mdRel] of files) {
  const mdPath = path.join(ROOT, mdRel.replace(/^\.\.\/\.\.\/\.\.\//, ''));
  const exists = fs.existsSync(mdPath);
  
  const dir = path.join(PAGES, unidad);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  const astroPath = path.join(dir, slug + '.astro');
  const content = TEMPLATE(slug, mdRel);
  fs.writeFileSync(astroPath, content);
  
  if (exists) { ok++; } else { missing++; }
  console.log(`${exists ? 'OK' : '--'} ${unidad}/${slug}.astro${exists ? '' : ' (md not found!)'}`);
}

console.log(`\nDone: ${ok} pages with markdown, ${missing} without markdown`);