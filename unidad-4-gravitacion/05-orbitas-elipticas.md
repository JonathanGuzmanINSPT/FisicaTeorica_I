# Órbitas Elípticas (Mecánica Racional)

**INSPT – UTN** | **Física Teórica I** | **Prof. Carlos Dibarbora**

---

## 📚 Movimiento en Fuerzas Centrales

En **física teórica**, el movimiento bajo una **fuerza central** $\vec{F}(r) = F(r)\hat{r}$ se analiza usando:
1. **Conservación del momento angular** (2ª Ley de Kepler)
2. **Conservación de la energía** (si $F$ es conservativa)
3. **Ecuación de la órbita** (derivada desde mecánica Lagrangiana)

---

## 1. Conservación del Momento Angular

### 1.1 Demostración (Fuerza central)

Para una fuerza central $\vec{F} = F(r)\hat{r}$:

$$\vec{\tau} = \vec{r} \times \vec{F} = \vec{r} \times F(r)\hat{r} = 0$$

Como $\vec{\tau} = \frac{d\vec{L}}{dt}$:

$$\frac{d\vec{L}}{dt} = 0 \quad \Rightarrow \quad \vec{L} = \text{constante}$$

**Consecuencias:**
- El movimiento está **confinado a un plano** (plano perpendicular a $\vec{L}$)
- Usamos coordenadas polares $(r, \theta)$ en el plano del movimiento

---

### 1.2 Componentes de la velocidad

En coordenadas polares:

$$\vec{v} = \dot{r}\hat{r} + r\dot{\theta}\hat{\theta}$$

**Donde:**
- $v_r = \dot{r}$: Componente radial
- $v_\perp = r\dot{\theta}$: Componente transversal (perpendicular)

**Momento angular:**
$$L = m r v_\perp = m r^2 \dot{\theta} = \text{constante}$$

✅ **Esto es la 2ª Ley de Kepler** (ley de las áreas).

---

## 2. Ecuación de la Órbita

### 2.1 Derivación desde el Lagrangiano

Para una fuerza conservativa $F(r) = -\frac{dV}{dr}$:

$$L = T - V = \frac{1}{2}m(\dot{r}^2 + r^2\dot{\theta}^2) - V(r)$$

**Coordenada cíclica:** $\theta$ (no aparece explícitamente en $L$)

**Momento generalizado:**
$$p_\theta = \frac{\partial L}{\partial \dot{\theta}} = m r^2 \dot{\theta} = L = \text{constante}$$

Sustituyendo en la **energía**:

$$E = \frac{1}{2}m\dot{r}^2 + \frac{L^2}{2mr^2} + V(r)$$

El término $\frac{L^2}{2mr^2}$ se denomina **potencial centrífugo efectivo**.

---

### 2.2 Ecuación en coordenadas $u = 1/r$

Definimos $u(\theta) = \frac{1}{r(\theta)}$.

Derivando respecto al tiempo:

$$\dot{r} = -\frac{L}{m} \frac{du}{d\theta}$$

Sustituyendo en $E = \frac{1}{2}m\dot{r}^2 + \frac{L^2}{2mr^2} + V(r)$:

$$\frac{d^2u}{d\theta^2} + u = -\frac{m}{L^2 u^2} F(1/u)$$

✅ **Esta es la ecuación de la órbita.**

---

## 3. Órbitas en Gravitación Universal ($F = -\frac{GMm}{r^2}$)

### 3.1 Solución de la ecuación de la órbita

Para $F(r) = -\frac{GMm}{r^2}$:

$$\frac{d^2u}{d\theta^2} + u = \frac{GMm^2}{L^2}$$

**Solución general:**

$$u(\theta) = \frac{GMm^2}{L^2} \left[1 + e\cos(\theta - \theta_0)\right]$$

O bien:

$$r(\theta) = \frac{\frac{L^2}{GMm^2}}{1 + e\cos(\theta - \theta_0)}$$

✅ **Esto es una cónica (elipse, parábola o hipérbola).**

---

### 3.2 Excentricidad $e$

$$e = \sqrt{1 + \frac{2EL^2}{G^2M^2m^3}}$$

**Casos:**
- $e = 0$: Circunferencia
- $0 < e < 1$: Elipse (órbita cerrada)
- $e = 1$: Parábola (trayectoria de escape)
- $e > 1$: Hipérbola (trayectoria hiperbólica)

---

## 4. Análisis Vectorial de Velocidades

### 4.1 Componentes $v_r$ y $v_\perp$

En cualquier punto de la órbita:

$$v_r = \dot{r} = \frac{dr}{dt}$$
$$v_\perp = r\dot{\theta} = \frac{L}{mr}$$

**Relación con la energía:**

$$E = \frac{1}{2}m(v_r^2 + v_\perp^2) - \frac{GMm}{r}$$

---

### 4.2 Puntos de retorno (aposides)

En los **aposides** (perihelio y afelio):

$$v_r = 0 \quad \Rightarrow \quad E = \frac{1}{2}mv_\perp^2 - \frac{GMm}{r}$$

Como $v_\perp = \frac{L}{mr}$:

$$E = \frac{L^2}{2mr^2} - \frac{GMm}{r}$$

✅ **Esto permite encontrar $r_{\text{min}}$ y $r_{\text{máx}}$.**

---

## 5. Ejercicios Resueltos (Nivel Física Teórica)

### Ejercicio 1: Velocidades en una órbita elíptica (Ejercicio 13 del TP3)

Una nave tiene una órbita elíptica con:
- Perigeo: $r_p = R_T + 400$ km
- Apogeo: $r_a = R_T + 4000$ km

**a)** Calcula la razón $\frac{v_p}{v_a}$.
**b)** Encuentra $v_p$ y $v_a$ si $M_T = 5.97 \times 10^{24}$ kg.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🎯 Órbita elíptica</span>
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Conservación $L$</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 40 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Conservación de $L$: $r_p v_p = r_a v_a$
- Conservación de $E$: $\frac{1}{2}mv_p^2 - \frac{GMm}{r_p} = \frac{1}{2}mv_a^2 - \frac{GMm}{r_a}$

**Solución paso a paso:**

**a) Razón:**

$$L = m r_p v_p = m r_a v_a \quad \Rightarrow \quad \frac{v_p}{v_a} = \frac{r_a}{r_p}$$

Sustituyendo:
$$\frac{v_p}{v_a} = \frac{R_T + 4000}{R_T + 400} = \frac{6370 + 4000}{6370 + 400} = \frac{10370}{6770} \approx 1.53$$

✅ **Respuesta:** $\frac{v_p}{v_a} \approx 1.53$

**b) Velocidades:**

De $E = \frac{1}{2}mv_p^2 - \frac{GMm}{r_p} = \frac{1}{2}mv_a^2 - \frac{GMm}{r_a}$:

Sustituyendo $v_a = \frac{r_p}{r_a}v_p$:

$$\frac{1}{2}mv_p^2 - \frac{GMm}{r_p} = \frac{1}{2}m\left(\frac{r_p}{r_a}v_p\right)^2 - \frac{GMm}{r_a}$$

Resolviendo para $v_p$:

$$v_p = \sqrt{\frac{2GM}{r_p} \cdot \frac{r_a}{r_a + r_p}}$$

Sustituyendo valores:
$$v_p \approx 8430 \text{ m/s}, \quad v_a = \frac{r_p}{r_a}v_p \approx 5510 \text{ m/s}$$

✅ **Respuesta:** $v_p \approx 8430$ m/s, $v_a \approx 5510$ m/s.

---

### Ejercicio 2: Componentes $v_r$ y $v_\perp$ en una órbita dada (Ejercicio 14 del TP3)

Un satélite está en el punto $A$ ($r_A = 17700$ km) con velocidad $v_A = 5790$ m/s en una dirección que forma un ángulo $\alpha$ respecto a la horizontal.

**a)** Encuentra $v_r$ y $v_\perp$ en el punto $A$.
**b)** Si en el punto $B$ ($r_B = 27360$ km) se conoce $v_r$, calcula $v_\perp$ usando conservación.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🎯 Órbita elíptica</span>
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Análisis vectorial</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 45 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- $v_\perp = \frac{L}{mr}$ (conserva)
- $v_r = v \sin\alpha$ (componente radial)
- Usa conservación de $E$ para encontrar $v_r$ en $B$

**Solución (esbozo):**

**a) En punto $A$:**

$$v_{\perp A} = v_A \cos\alpha, \quad v_{rA} = v_A \sin\alpha$$

(Se necesita el ángulo $\alpha$ del diagrama).

**b) En punto $B$:**

Conservación de $L$:
$$L = m r_A v_{\perp A} = m r_B v_{\perp B} \quad \Rightarrow \quad v_{\perp B} = \frac{r_A}{r_B} v_{\perp A}$$

Conservación de $E$:
$$E = \frac{1}{2}m(v_{rB}^2 + v_{\perp B}^2) - \frac{GMm}{r_B}$$

Despejando $v_{rB}$:
$$v_{rB} = \sqrt{\frac{2}{m}(E - \frac{1}{2}mv_{\perp B}^2 + \frac{GMm}{r_B})$$

✅ **Respuesta:** Depende de $\alpha$ y $E$ (se necesitan valores numéricos).

---

## 6. Notas para el Estudiante de Física Teórica

1. **La conservación de $\vec{L}$ implica movimiento plano** (usar coordenadas polares)
2. **La ecuación de la órbita** $u(\theta)$ es fundamental para derivar las leyes de Kepler
3. **En órbitas elípticas**, $v_r$ es máxima en el perihelio y cero en los aposides
4. **El potencial centrífugo efectivo** $\frac{L^2}{2mr^2}$ "simula" una barrera repulsiva

---

## 🔗 Referencias Bibliográficas (Nivel Universitario)

1. **Goldstein** - *Classical Mechanics* (Cap. 3: The Central Force Problem)
2. **Landau & Lifshitz** - *Mechanics* (Vol. 1, Sec. 15: Motion in a Central Field)
3. **Marion & Thornton** - *Classical Dynamics* (Cap. 8: Central-Force Motion)
4. **Fitzpatrick** - *Celestial Mechanics* (Online Notes)

---

**¡Continúa con:** `README.md` (índice de la Unidad 4)