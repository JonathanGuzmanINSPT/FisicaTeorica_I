# TP3 – Gravitación

**INSPT – UTN** | **Física Teórica I** | **Prof. Carlos Dibarbora**

---

## Cómo usar este archivo

Cada ejercicio tiene tres estados posibles:

| Símbolo | Significado |
|---|---|
| `- [ ]` | Sin hacer |
| `- [~]` | Intentado / con dudas — volver a revisar |
| `- [x]` | Dominado (resuelto correctamente) |

Los badges debajo de cada ejercicio indican concepto, dificultad y tiempo orientativo. **Actualiza la tabla de progreso al final de cada sesión.**

---

## 📊 Progreso General

| Bloque | Total | ✅ | 🔄 | % |
|---|---|---|---|---|
| Ley de Gravitación Universal | 3 | 0 | 0 | 0% |
| Campo Gravitatorio | 2 | 0 | 0 | 0% |
| Movimiento de Satélites | 3 | 0 | 0 | 0% |
| Energía y Trabajo | 2 | 0 | 0 | 0% |
| Órbitas Elípticas | 2 | 0 | 0 | 0% |
| Problemas Integradores | 2 | 0 | 0 | 0% |
| **Total** | **14** | **0** | **0** | **0%** |

---

<div style="display: flex; gap: 8px; margin: 12px 0; flex-wrap: wrap;">
  <span style="background: #e3f2fd; color: #1565c0; padding: 6px 14px; border-radius: 14px; font-size: 0.95em; font-weight: 600;">🌍 Ley de Gravitación Universal</span>
</div>

## 1. Calcular la atracción gravitatoria entre la Tierra y a) la Luna; b) el Sol; c) obtener el cociente entre esas dos fuerzas. ¿De qué manera afectan estas fuerzas el movimiento de la Tierra?

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🌍 Ley de Gravitación</span>
  <span style="background: #fff3e0; color: #e65100; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Fuerzas gravitatorias</span>
  <span style="background: #d1ecf1; color: #0c5460; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐ Media</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 20 min</span>
</div>

- [ ] Sin empezar

**Datos:**
- Masa Tierra: $M_T = 5.97 \times 10^{24}$ kg
- Masa Luna: $M_L = 7.35 \times 10^{22}$ kg
- Masa Sol: $M_S = 1.99 \times 10^{30}$ kg
- Distancia Tierra-Luna: $r_{TL} = 3.84 \times 10^8$ m
- Distancia Tierra-Sol: $r_{TS} = 1.50 \times 10^{11}$ m
- Constante gravitacional: $G = 6.67 \times 10^{-11}$ N·m²/kg²

**Pistas:**
- Usa la ley de gravitación universal: $F = G \frac{m_1 m_2}{r^2}$
- Compara las fuerzas para entender cuál domina

---

## 2. Comparar las fuerzas que el Sol y la Luna ejercen sobre un cuerpo de masa m que se halla en la superficie terrestre. ¿Se puede concluir que el peso de un cuerpo varía al rotar la Tierra?

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🌍 Ley de Gravitación</span>
  <span style="background: #fff3e0; color: #e65100; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Análisis comparativo</span>
  <span style="background: #d1ecf1; color: #0c5460; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐ Media</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 15 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Calcula la fuerza del Sol y de la Luna sobre un objeto en la Tierra
- Considera que la posición relativa cambia con la rotación terrestre
- El peso es la fuerza neta hacia el centro de la Tierra

---

## 3. a) ¿A qué altura debería uno subir sobre la superficie de la Tierra para que la aceleración de la gravedad cambie en un 1%? b) ¿A qué profundidad debería uno penetrar para notar el mismo cambio?

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Campo Gravitatorio</span>
  <span style="background: #fff3e0; color: #e65100; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 g vs altura/profundidad</span>
  <span style="background: #d1ecf1; color: #0c5460; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐ Media</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 20 min</span>
</div>

- [ ] Sin empezar

**Datos:**
- Radio terrestre: $R_T = 6.37 \times 10^6$ m
- Aceleración superficial: $g_0 = 9.81$ m/s²

**Pistas:**
- Para altura: $g(h) = g_0 \frac{R_T^2}{(R_T + h)^2}$
- Para profundidad (si la densidad es constante): $g(d) = g_0 (1 - \frac{d}{R_T})$

---

<div style="display: flex; gap: 8px; margin: 12px 0; flex-wrap: wrap;">
  <span style="background: #e8f5e9; color: #2e7d32; padding: 6px 14px; border-radius: 14px; font-size: 0.95em; font-weight: 600;">📐 Campo Gravitatorio</span>
</div>

## 4. Los planetas no son uniformes en su interior. Normalmente son más densos en el centro y su densidad se reduce hacia la superficie. Modele un planeta esféricamente simétrico con el mismo radio que la tierra, suponiendo que su densidad disminuye linealmente al aumentar la distancia al centro. Sea la densidad en el centro de $15 \times 10^3$ kg/m³ y en la superficie de $2 \times 10^3$ kg/m³, determine la aceleración debida a la gravedad en la superficie de ese planeta.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Campo Gravitatorio</span>
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📊 Densidad variable</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 30 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- La densidad varía linealmente: $\rho(r) = \rho_0 - kr$
- Usa la ley de Gauss gravitacional o integra directamente
- Solo la masa interior a r contribuye al campo

---

## 5. Suponiendo un modelo sencillo donde la densidad de la tierra es constante, si se realizara un túnel que atravesara la Tierra desde un polo al otro y se arroja un objeto por él, ¿Cuánto tardaría en llegar desde un polo al otro?

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Campo Gravitatorio</span>
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🌊 Movimiento armónico</span>
  <span style="background: #d1ecf1; color: #0c5460; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐ Media</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 25 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Dentro de una esfera de densidad uniforme, el campo es lineal: $g(r) = g_0 \frac{r}{R_T}$
- Esto produce un MAS (movimiento armónico simple)
- El período es $T = 2\pi \sqrt{\frac{R_T}{g_0}}$

---

<div style="display: flex; gap: 8px; margin: 12px 0; flex-wrap: wrap;">
  <span style="background: #fff9c4; color: #f57f17; padding: 6px 14px; border-radius: 14px; font-size: 0.95em; font-weight: 600;">🛰️ Movimiento de Satélites</span>
</div>

## 6. La estrella enana blanca Sirio B tiene una masa aproximadamente igual a la del Sol ($m = 1.99 \times 10^{30}$ kg) y su radio es 0,02 radio solar ($R = 6.96 \times 10^8$ m). Determinar: a) ¿Cuál es el valor de g en la superficie de Sirio B? b) ¿Cuál es la densidad de Sirio B?

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #fff9c4; color: #f57f17; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🛰️ Satélites</span>
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐ Estrellas enanas</span>
  <span style="background: #d1ecf1; color: #0c5460; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐ Media</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 15 min</span>
</div>

- [ ] Sin empezar

**Respuestas:** a) $g = 685000$ m/s²; b) $\rho = 174$ kg/cm³

**Pistas:**
- Usa $g = \frac{GM}{R^2}$ para la aceleración superficial
- La densidad es $\rho = \frac{M}{\frac{4}{3}\pi R^3}$

---

## 7. Si el período de Marte alrededor del Sol es de 687 días, hallar la distancia media entre Marte y el Sol.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #fff9c4; color: #f57f17; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🛰️ Satélites</span>
  <span style="background: #fff3e0; color: #e65100; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 3ª Ley de Kepler</span>
  <span style="background: #d1ecf1; color: #0c5460; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐ Fácil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 10 min</span>
</div>

- [ ] Sin empezar

**Respuesta:** $2.3 \times 10^8$ km

**Pistas:**
- Usa la 3ª Ley de Kepler: $\frac{T^2}{a^3} = \text{constante}$
- Compara con la Tierra: $T_T = 365$ días, $a_T = 1.50 \times 10^{11}$ m

---

## 8. Calcular el radio de una órbita para un satélite sincrónico con la Tierra.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #fff9c4; color: #f57f17; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🛰️ Satélites</span>
  <span style="background: #fff3e0; color: #e65100; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Órbita geostacionaria</span>
  <span style="background: #d1ecf1; color: #0c5460; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐ Media</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 20 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Un satélite sincrónico tiene el mismo período que la rotación terrestre: $T = 24$ h
- Iguala la fuerza gravitatoria con la fuerza centrípeta: $\frac{GMm}{r^2} = m\omega^2 r$

---

<div style="display: flex; gap: 8px; margin: 12px 0; flex-wrap: wrap;">
  <span style="background: #fce4ec; color: #c62828; padding: 6px 14px; border-radius: 14px; font-size: 0.95em; font-weight: 600;">⚡ Energía y Trabajo</span>
</div>

## 9. La estación espacial internacional efectúa 15,65 revoluciones por día en su órbita alrededor de la tierra. Suponiendo una órbita circular, ¿qué tan alto con respecto a la superficie terrestre debe estar dicho satélite?

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⚡ Energía</span>
  <span style="background: #fff9c4; color: #f57f17; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🛰️ Órbita circular</span>
  <span style="background: #d1ecf1; color: #0c5460; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐ Media</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 15 min</span>
</div>

- [ ] Sin empezar

**Respuesta:** 370 km

**Pistas:**
- Calcula el período: $T = \frac{24 \text{ h}}{15.65}$
- Usa la misma ecuación que el problema anterior

---

## 10. Un objeto se lanza verticalmente desde la superficie terrestre con una velocidad inicial $v_0$. Despreciando la resistencia del aire calcular: a) su velocidad a una altura H sobre la superficie terrestre; b) la mínima velocidad de lanzamiento para que el objeto nunca regrese.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⚡ Energía</span>
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🚀 Velocidad de escape</span>
  <span style="background: #d1ecf1; color: #0c5460; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐ Media</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 20 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Usa conservación de energía: $E_m = K + U = \text{constante}$
- La energía potencial gravitatoria es $U = -\frac{GMm}{r}$
- Para escape: $E_m \geq 0$

---

<div style="display: flex; gap: 8px; margin: 12px 0; flex-wrap: wrap;">
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 6px 14px; border-radius: 14px; font-size: 0.95em; font-weight: 600;">🎯 Órbitas Elípticas</span>
</div>

## 11. Se va a lanzar una nave de la superficie terrestre de modo que escape del sistema solar. a) Calcule la rapidez relativa al centro de la tierra con que se debe lanzar la nave. Tenga en cuenta los efectos gravitacionales de la tierra y el sol, e incluya los efectos de la rapidez orbital de la tierra, pero desprecie la resistencia del aire. b) La rotación terrestre puede ayudar a esta nave a alcanzar la rapidez de escape. Calcule la rapidez que la nave debe tener relativa a la superficie terrestre si se lanza de Florida (ver imagen). Los movimientos rotacional y orbital de la tierra tienen la misma dirección. Las instalaciones de lanzamiento de Florida están 28.5° al norte del ecuador. c) La agencia espacial europea (ESA) usa instalaciones de lanzamiento en la Guyana Francesa (inmediatamente al norte de Brasil) 5,15° al norte del ecuador. ¿Qué rapidez relativa a la superficie terrestre necesitaría adquirir una nave para escapar del sistema solar si se lanza desde Guyana?

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🎯 Órbitas</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🚀 Escape del sistema solar</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 40 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- La energía necesaria es $E = \frac{1}{2}mv^2 - \frac{GM_T m}{R_T} - \frac{GM_S m}{r_{TS}} = 0$
- Considera la velocidad orbital de la Tierra: $v_{orb} = \sqrt{\frac{GM_S}{r_{TS}}}$
- La rotación terrestre aporta $v_{rot} = \omega R_T \cos(\text{latitud})$

---

## 12. Una nave de 5000 kg está en órbita circular 2000 km arriba de la superficie de Marte. ¿Cuánto trabajo deben efectuar sus motores para llevarla a una órbita circular 4000 km arriba de la superficie?

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🎯 Órbitas</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⚡ Trabajo y energía</span>
  <span style="background: #d1ecf1; color: #0c5460; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐ Media</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 25 min</span>
</div>

- [ ] Sin empezar

**Respuesta:** $5.3 \times 10^9$ J

**Datos:**
- Masa de Marte: $M_M = 6.42 \times 10^{23}$ kg
- Radio de Marte: $R_M = 3.40 \times 10^6$ m

**Pistas:**
- El trabajo es el cambio en energía mecánica: $W = \Delta E = E_2 - E_1$
- Para una órbita circular: $E = -\frac{GMm}{2r}$

---

<div style="display: flex; gap: 8px; margin: 12px 0; flex-wrap: wrap;">
  <span style="background: #fff3e0; color: #e65100; padding: 6px 14px; border-radius: 14px; font-size: 0.95em; font-weight: 600;">🔧 Problemas Integradores</span>
</div>

## 13. Considere una nave en órbita elíptica alrededor de la tierra. En el punto bajo o perigeo de su órbita, la nave está 400 km arriba de la superficie de la tierra. En el apogeo está a 4000 km de la superficie. a) Calcule el periodo de la nave en esa órbita. b) Usando la conservación de L, calcule la razón entre la rapidez de la nave en el perigeo y la rapidez de la nave en el apogeo. c) Usando la conservación de la energía, determine la rapidez de la nave en perigeo y apogeo. d) Se desea que la nave escape totalmente de la tierra. Si sus cohetes se encienden en el perigeo, ¿Cuánto tendrá que aumentarse la rapidez para lograrlo? ¿Qué ocurre si los cohetes se disparan en el apogeo? ¿Qué punto de la órbita se puede usar con mayor eficiencia?

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #fff3e0; color: #e65100; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔧 Integrador</span>
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🎯 Órbita elíptica</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 45 min</span>
</div>

- [ ] Sin empezar

**Respuestas:** a) 7910 s; b) 1.53; c) $v_p = 8430$ m/s, $v_a = 5510$ m/s; d) En perigeo: 2410 m/s, en apogeo: 3250 m/s

**Pistas:**
- El semieje mayor es $a = \frac{r_p + r_a}{2}$
- Usa las leyes de Kepler y conservación de momento angular y energía
- Para escape, necesitas $v_{esc} = \sqrt{\frac{2GM}{r}}$ en ese punto

---

## 14. Un satélite está en A a una distancia de 17700 km del centro de la tierra y recibe una velocidad inicial de 5790 m/s en la dirección indicada en el gráfico. Al describir una trayectoria elíptica determina las componentes radial y transversal de su velocidad cuando se halla en el punto B a una distancia de 27360 km del centro de la tierra.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #fff3e0; color: #e65100; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔧 Integrador</span>
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🎯 Cinemática orbital</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 40 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Conserva momento angular: $L = m r v_\perp = \text{constante}$
- Conserva energía: $E = \frac{1}{2}m(v_r^2 + v_\perp^2) - \frac{GMm}{r} = \text{constante}$
- En el punto A, conocemos $r_A$, $v_A$ y su dirección (necesitas el ángulo del gráfico)

---

## 📊 Registro de Progreso

| Fecha | Bloque trabajado | Ejercicios completados | Tiempo total | Notas |
|---|---|---|---|---|
|  |  |  |  |  |

---

## 💡 Consejos para el estudio

- **Ley de gravitación**: Recuerda que la fuerza es siempre atractiva y sigue la inversa del cuadrado de la distancia
- **Campo gravitatorio**: Dentro de una esfera uniforme, solo la masa interior contribuye
- **Satélites**: La velocidad orbital es $v = \sqrt{\frac{GM}{r}}$, el período $T = 2\pi \sqrt{\frac{r^3}{GM}}$
- **Conservación**: El momento angular ($L = mrv_\perp$) y la energía mecánica se conservan en órbitas
- **Escape**: La velocidad de escape es $v_{esc} = \sqrt{\frac{2GM}{r}}$

---

**¡Buena suerte con el TP3! 🚀**
