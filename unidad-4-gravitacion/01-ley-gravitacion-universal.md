# Ley de Gravitación Universal (Mecánica Racional)

**INSPT – UTN** | **Física Teórica I** | **Prof. Carlos Dibarbora**

---

## 📚 Formulación Vectorial

En **física teórica**, la ley de gravitación universal no es solo una fórmula escalar, sino un **campo vectorial** $\vec{g}(\vec{r})$ que describe la aceleración gravitatoria en cada punto del espacio.

---

## 1. Ley de Gravitación Universal (Forma Vectorial)

### 1.1 Fuerza entre dos masas puntuales

La fuerza gravitatoria entre dos masas puntuales $m_1$ y $m_2$ es:

$$\vec{F}_{12} = -G \frac{m_1 m_2}{r^2} \hat{r}_{12}$$

**Donde:**
- $G = 6.674 \times 10^{-11}$ N·m²/kg² (constante gravitacional)
- $\vec{r}_{12} = \vec{r}_2 - \vec{r}_1$: vector de $m_1$ hacia $m_2$
- $\hat{r}_{12} = \frac{\vec{r}_{12}}{r_{12}}$: vector unitario
- El signo **negativo** indica que es una fuerza **atractiva**

**En coordenadas cartesianas:**

$$\vec{F}_{12} = -G \frac{m_1 m_2}{(x_{12}^2 + y_{12}^2 + z_{12}^2)^{3/2}} (x_{12}\hat{i} + y_{12}\hat{j} + z_{12}\hat{k})$$

---

### 1.2 Campo Gravitatorio

El **campo gravitatorio** $\vec{g}(\vec{r})$ es la aceleración que experimentaría una masa de prueba $m$ en el punto $\vec{r}$:

$$\vec{g}(\vec{r}) = \frac{\vec{F}}{m} = -G \frac{M}{r^2} \hat{r}$$

**Donde $M$ es la masa que genera el campo.**

**Propiedades:**
1. Es un **campo vectorial** definido en todo el espacio
2. Es **central** (apunta hacia el origen)
3. Es **conservativo** ( $\nabla \times \vec{g} = 0$)

---

## 2. Potencial Gravitatorio

### 2.1 Definición

Como $\vec{g}$ es conservativo, se puede definir un **potencial escalar** $\Phi(\vec{r})$ tal que:

$$\vec{g}(\vec{r}) = -\nabla \Phi(\vec{r})$$

Para una masa puntual $M$:

$$\Phi(r) = -\frac{GM}{r}$$

**Energía potencial gravitatoria:**
$$U(r) = m\Phi(r) = -\frac{GMm}{r}$$

⚠️ **Nota:** El potencial es **negativo** porque la fuerza es atractiva (se define $U(\infty) = 0$).

---

### 2.2 Ecuación de Poisson

El potencial gravitatorio cumple la **ecuación de Poisson**:

$$\nabla^2 \Phi = 4\pi G \rho$$

**Donde:**
- $\rho(\vec{r})$: densidad de masa
- $\nabla^2 = \frac{\partial^2}{\partial x^2} + \frac{\partial^2}{\partial y^2} + \frac{\partial^2}{\partial z^2}$: operador Laplaciano

**En vacío ($\rho = 0$):** Ecuación de Laplace $\nabla^2 \Phi = 0$.

---

## 3. Teorema de Gauss para Gravitación

### 3.1 Formulación Integral

El flujo del campo gravitatorio a través de una superficie cerrada $S$ es:

$$\oint_S \vec{g} \cdot d\vec{S} = -4\pi G M_{\text{int}}$$

**Donde $M_{\text{int}}$ es la masa encerrada dentro de $S$.**

---

### 3.2 Aplicación: Campo dentro y fuera de una esfera uniforme

#### **Caso 1: Fuera de la esfera ($r > R$)**

Por simetría esférica, el campo es radial y depende solo de $r$:

$$g(r) = -\frac{GM}{r^2}, \quad r > R$$

#### **Caso 2: Dentro de la esfera ($r < R$)**

Si la densidad es uniforme $\rho = \frac{3M}{4\pi R^3}$:

$$g(r) = -\frac{GM}{R^3} r, \quad r < R$$

✅ **El campo es lineal con $r$ en el interior** (como un oscilador armónico).

---

## 4. Derivación desde la 2ª Ley de Newton

Partimos de:

$$\vec{F} = m\vec{g}(\vec{r}) = m\frac{d\vec{v}}{dt}$$

Para un sistema de $N$ partículas, la ecuación se extiende:

$$\frac{d^2\vec{r}_i}{dt^2} = -G \sum_{j \neq i} \frac{m_j (\vec{r}_i - \vec{r}_j)}{|\vec{r}_i - \vec{r}_j|^3}$$

**Esto es un sistema de $3N$ ecuaciones diferenciales acopladas** (problema de los $N$ cuerpos).

---

## 5. Límites de la Teoría de Newton

### 5.1 Potencial Post-Newtoniano

Para sistemas con velocidades cercanas a $c$ (velocidad de la luz), la gravitación Newtoniana falla. La teoría de **Relatividad General** (Einstein) reemplaza $\Phi$ por el **tensor métrico** $g_{\mu\nu}$.

**Aproximación post-Newtoniana (PN):**
$$\Phi_{\text{PN}} = \Phi_{\text{Newton}} + \frac{1}{c^2}\left(\frac{v^2}{2} + \Phi\right)^2 + \cdots$$

---

## 6. Ejercicios Resueltos (Nivel Física Teórica)

### Ejercicio 1: Campo gravitatorio de una lámina infinita

Una lámina infinita tiene densidad superficial $\sigma$ (kg/m²). Calcula $\vec{g}(\vec{r})$ a una distancia $z$ de la lámina.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Campo gravitatorio</span>
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Simetría</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 40 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Usa el teorema de Gauss con una superficie cilíndrica
- Por simetría, $\vec{g}$ es perpendicular a la lámina
- $g(z) = -2\pi G \sigma \cdot \text{sgn}(z)$

**Solución paso a paso:**

1. Elegimos una superficie Gaussiana: **cilindro** de altura $2z$ y base $A$.

2. El flujo es:
   $$\oint \vec{g} \cdot d\vec{S} = g(z) \cdot 2A$$
   (Solo las tapas del cilindro contribuyen; el campo es paralelo a las paredes laterales).

3. Masa encerrada: $M_{\text{int}} = \sigma A$.

4. Aplicamos Gauss:
   $$g(z) \cdot 2A = -4\pi G (\sigma A)$$
   $$g(z) = -2\pi G \sigma$$

5. **Dirección:** El campo apunta hacia la lámina:
   $$\vec{g}(z) = -2\pi G \sigma \cdot \text{sgn}(z) \hat{k}$$

✅ **Respuesta:** $\vec{g}(z) = -2\pi G \sigma \cdot \text{sgn}(z) \hat{k}$ (el campo es **constante** e independiente de $z$).

---

### Ejercicio 2: Potencial de una distribución esférica con densidad variable

Una esfera de radio $R$ tiene densidad $\rho(r) = \rho_0 \left(1 - \frac{r}{R}\right)$. Calcula $\Phi(r)$ para $r < R$ y $r > R$.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Potencial</span>
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Densidad variable</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 50 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Usa la ecuación de Poisson: $\nabla^2 \Phi = 4\pi G \rho$
- En coordenadas esféricas: $\frac{1}{r^2}\frac{d}{dr}\left(r^2 \frac{d\Phi}{dr}\right) = 4\pi G \rho(r)$
- Integra masa interior: $M(r) = \int_0^r 4\pi r'^2 \rho(r') dr'$

**Solución (esbozo):**

1. **Masa interior:**
   $$M(r) = \int_0^r 4\pi r'^2 \rho_0 \left(1 - \frac{r'}{R}\right) dr' = 4\pi \rho_0 \left(\frac{r^3}{3} - \frac{r^4}{4R}\right)$$

2. **Campo (usando Gauss):**
   $$g(r) = -\frac{GM(r)}{r^2} = -4\pi G \rho_0 \left(\frac{r}{3} - \frac{r^2}{4R}\right)$$

3. **Potencial (integra $g = -\frac{d\Phi}{dr}$):**
   - Para $r < R$: Integra desde $0$ hasta $r$
   - Para $r > R$: $\Phi(r) = -\frac{GM}{r}$ (con $M = M(R)$)

✅ **Respuesta:** (Requiere integración detallada; ver Goldstein Cap. 3).

---

## 7. Notas para el Estudiante de Física Teórica

1. **El campo $\vec{g}$ es un campo vectorial** (no solo una "fuerza")
2. **El potencial $\Phi$ es la herramienta fundamental** para resolver problemas con simetría
3. **El teorema de Gauss** simplifica cálculos con simetría esférica, cilíndrica o planar
4. **En relatividad**, $\Phi$ es reemplazado por $g_{\mu\nu}$ (tensor métrico)

---

## 🔗 Referencias Bibliográficas (Nivel Universitario)

1. **Goldstein** - *Classical Mechanics* (Cap. 3: The Central Force Problem)
2. **Landau & Lifshitz** - *Mechanics* (Vol. 1, Sec. 4: Central Forces)
3. **Marion & Thornton** - *Classical Dynamics* (Cap. 5: Gravitational Orbits)
4. **Misner, Thorne & Wheeler** - *Gravitation* (Relatividad General)

---

**¡Continúa con:** `02-campo-gravitatorio.md` (Campo g, variación con altura, densidad variable)