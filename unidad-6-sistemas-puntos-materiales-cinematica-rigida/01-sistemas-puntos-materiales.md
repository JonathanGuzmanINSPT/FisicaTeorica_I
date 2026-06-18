# Sistemas de Puntos Materiales (Mecánica Racional)

**INSPT – UTN** | **Física Teórica I** | **Prof. Carlos Dibarbora**

---

## 📚 Introducción

En **física teórica**, un **sistema de puntos materiales** es un conjunto de partículas que interactúan entre sí. Los principios fundamentales son:

1. **Conservación de la cantidad de movimiento lineal** (si no hay fuerzas externas)
2. **Conservación de la energía mecánica** (si las fuerzas son conservativas)
3. **Teorema de la energía cinética** (trabajo de fuerzas internas y externas)

---

## 1. Cantidad de Movimiento Lineal

### 1.1 Definición

Para un sistema de $N$ partículas:

$$\vec{P} = \sum_{i=1}^N m_i \vec{v}_i = M \vec{V}_{CM}$$

**Donde:**
- $M = \sum m_i$: Masa total del sistema
- $\vec{V}_{CM}$: Velocidad del centro de masa

---

### 1.2 Teorema de la Cantidad de Movimiento

$$\frac{d\vec{P}}{dt} = \vec{F}_{\text{ext}}$$

**Interpretación:**
- Si $\vec{F}_{\text{ext}} = 0$ → $\vec{P}$ se conserva
- El CM se mueve como una partícula de masa $M$ bajo la fuerza externa neta

---

## 2. Colisiones

### 2.1 Clasificación

#### **Colisión Elástica:**
- Se conserva $\vec{P}$ y $E_c$
- Fuerzas conservativas durante la colisión
- Ejemplo: Colisión de bolas de billar

#### **Colisión Inelástica:**
- Se conserva $\vec{P}$, pero NO $E_c$
- Parte de la energía se disipa (calor, deformación)
- Ejemplo: Choque de furgones que quedan enganchados

#### **Colisión Totalmente Inelástica:**
- Los cuerpos se unen después del choque
- Pérdida máxima de $E_c$ (compatible con conservación de $\vec{P}$)

---

### 2.2 Ecuaciones de Conservación

Para una colisión entre dos cuerpos:

**Conservación de $\vec{P}$:**
$$m_1 \vec{v}_{1i} + m_2 \vec{v}_{2i} = m_1 \vec{v}_{1f} + m_2 \vec{v}_{2f}$$

**Conservación de $E_c$ (solo elástica):**
$$\frac{1}{2}m_1 v_{1i}^2 + \frac{1}{2}m_2 v_{2i}^2 = \frac{1}{2}m_1 v_{1f}^2 + \frac{1}{2}m_2 v_{2f}^2$$

---

### 2.3 Coeficiente de Restitución $e$

$$e = \frac{v_{2f} - v_{1f}}{v_{1i} - v_{2i}}$$

**Casos:**
- $e = 1$: Colisión elástica
- $0 < e < 1$: Colisión inelástica
- $e = 0$: Colisión totalmente inelástica

---

## 3. Sistemas de Referencia (Centro de Masa)

### 3.1 Velocidades en el Sistema CM

$$\vec{v}_i' = \vec{v}_i - \vec{V}_{CM}$$

**En el sistema CM:**
- $\vec{P}' = 0$ (el CM está en reposo)
- $E_c' = \frac{1}{2}\sum m_i v_i'^2$ (energía cinética relativa al CM)

---

### 3.2 Teorema de König

$$E_c = E_c' + \frac{1}{2}M V_{CM}^2$$

**Interpretación:** La energía cinética total es la suma de:
1. Energía cinética respecto al CM
2. Energía del movimiento del CM

---

## 4. Fuerza Media e Impulso

### 4.1 Impulso

$$\vec{I} = \int_{t_1}^{t_2} \vec{F}(t) dt = \Delta \vec{P}$$

**Interpretación:** El impulso es el cambio en la cantidad de movimiento.

---

### 4.2 Fuerza Media

$$\vec{F}_{\text{med}} = \frac{\Delta \vec{P}}{\Delta t} = \frac{m(\vec{v}_f - \vec{v}_i)}{\Delta t}$$

**Aplicación:** Colisiones con tiempo de contacto corto (golf, rebote).

---

## 5. Ejercicios Resueltos (Nivel Física Teórica)

### Ejercicio 1: Colisión de granada (Ejercicio 1 del TP5)

Una granada que se desplaza a 10 m/s estalla dividiéndose en dos partes. La mayor tiene el 60% de la masa original y su velocidad aumenta a 25 m/s. Hallar la velocidad de la otra parte.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Colisión</span>
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Momento</span>
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐ Fácil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 15 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Conservación de $\vec{P}$: $m\vec{v}_0 = 0.6m\vec{v}_1 + 0.4m\vec{v}_2$
- Resolver para $\vec{v}_2$

**Solución paso a paso:**

En dirección $x$ (asumiendo movimiento unidimensional):

$$mv_0 = 0.6mv_1 + 0.4mv_2$$

Dividiendo por $m$:

$$10 = 0.6(25) + 0.4v_2$$

$$10 = 15 + 0.4v_2 \quad \Rightarrow \quad v_2 = \frac{10 - 15}{0.4} = -12.5 \text{ m/s}$$

✅ **Respuesta:** $v_2 = -12.5$ m/s (hacia atrás).

---

### Ejercicio 2: Proyectil que explota (Ejercicio 2 del TP5)

Un proyectil se dispara a 500 m/s con un ángulo de 60°. Explota en dos fragmentos de igual masa a los 50 s. Uno cae verticalmente. ¿A qué distancia cae el otro fragmento?

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Colisión</span>
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🎯 Proyectil</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 40 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Encontrar posición del CM en $t = 50$ s
- Después de la explosión, el CM sigue la trayectoria original
- Si un fragmento cae verticalmente, el otro debe compensar para que el CM caiga en la posición original

**Solución (esbozo):**

1. **Posición del CM en $t = 50$ s:**
   - $x_{CM} = (v_0 \cos\theta) t = (500 \cos 60°)(50) = 12500$ m
   - $y_{CM} = (v_0 \sin\theta) t - \frac{1}{2}gt^2 = (500 \sin 60°)(50) - \frac{1}{2}(9.8)(50)^2 \approx 21650 - 12250 = 9400$ m

2. **Después de la explosión:**
   - Fragmento 1: $v_{1x} = 0$ (cae verticalmente)
   - Conservación de $P_x$: $mv_{CM} = \frac{m}{2}(0) + \frac{m}{2}v_{2x}$
   - $v_{2x} = 2v_{CM} = 2(500 \cos 60°) = 500$ m/s

3. **Tiempo de caída desde $y = 9400$ m:**
   - Resolver $y = y_0 + v_{0y}t - \frac{1}{2}gt^2$ (ecuación cuadrática)

4. **Distancia horizontal:** $x_2 = x_{CM} + v_{2x} t_{\text{caída}}$

✅ **Respuesta:** $x_2 \approx 30800$ m (como en el enunciado).

---

## 6. Notas para el Estudiante de Física Teórica

1. **El CM se mueve como una partícula aislada** (aunque el sistema se desintegre)
2. **En colisiones elásticas**, la energía cinética relativa al CM se conserva
3. **El impulso** es útil para colisiones con tiempos cortos
4. **Siempre usar conservación de $\vec{P}$** como primera ecuación

---

## 🔗 Referencias Bibliográficas (Nivel Universitario)

1. **Goldstein** - *Classical Mechanics* (Cap. 1: Systems of Particles)
2. **Landau & Lifshitz** - *Mechanics* (Vol. 1, Sec. 7: Collision of Particles)
3. **Marion & Thornton** - *Classical Dynamics* (Cap. 9: Collisions)
4. **Hibbeler** - *Engineering Mechanics: Dynamics* (Cap. 15: Kinetics of a Particle)

---

**¡Continúa con:** `02-cinematica-rigido-plano.md` (Cinemática de cuerpo rígido)