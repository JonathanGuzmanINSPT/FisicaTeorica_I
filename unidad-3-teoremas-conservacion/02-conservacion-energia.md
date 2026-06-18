# Conservación de la Energía Mecánica (Mecánica Racional)

**INSPT – UTN** | **Física Teórica I** | **Prof. Carlos Dibarbora**

---

## 📚 Formulación desde Mecánica Analítica

En **física teórica**, la conservación de la energía mecánica no es un "concepto básico", sino una **consecuencia matemática** de la estructura de las ecuaciones de movimiento cuando el sistema tiene **simetría temporal**.

---

## 1. Condición Matemática de Conservación

### 1.1 Fuerzas Conservativas y Energía Potencial

Una fuerza $\vec{F}(\vec{r})$ es **conservativa** si y solo si existe una función escalar $U(\vec{r})$ tal que:

$$\vec{F} = -\nabla U$$

**Equivalentemente:**
1. $\nabla \times \vec{F} = 0$ (el rotor es cero → campo irrotacional)
2. $\oint_C \vec{F} \cdot d\vec{r} = 0$ para cualquier trayectoria cerrada $C$

---

### 1.2 Teorema de Conservación de la Energía

**Enunciado riguroso:**

> Si todas las fuerzas que actúan sobre un sistema son **conservativas** (derivables de un potencial $U$ que no depende explícitamente del tiempo), entonces la **energía mecánica total** $E = T + V$ se conserva:
> $$\frac{dE}{dt} = 0 \quad \Rightarrow \quad E = \text{constante}$$

**Demostración:**

Partimos de la 2ª Ley de Newton:

$$\vec{F} = m\frac{d\vec{v}}{dt}$$

Si $\vec{F}$ es conservativa: $\vec{F} = -\nabla V$.

Multiplicamos escalarmente por $\vec{v}$:

$$-\nabla V \cdot \vec{v} = m\frac{d\vec{v}}{dt} \cdot \vec{v}$$

**Manipulación:**

$$-\frac{dV}{dt} = \frac{d}{dt}\left(\frac{1}{2}mv^2\right)$$

Reordenando:

$$\frac{d}{dt}\left(\frac{1}{2}mv^2 + V\right) = 0$$

$$\frac{dE}{dt} = 0 \quad \Rightarrow \quad E = T + V = \text{constante}$$

✅ **La energía se conserva.**

---

## 2. Interpretación desde Mecánica Lagrangiana

En el formalismo de **Lagrange**, la conservación de la energía está ligada a la **simetría temporal**.

### 2.1 El Lagrangiano

$$L(q_i, \dot{q}_i, t) = T - V$$

**Donde:**
- $q_i$: Coordenadas generalizadas
- $\dot{q}_i$: Velocidades generalizadas
- $T$: Energía cinética
- $V$: Energía potencial

### 2.2 Teorema de Noether (Conservación de la Energía)

> Si el Lagrangiano **no depende explícitamente del tiempo** ($\frac{\partial L}{\partial t} = 0$), entonces la **energía generalizada** (Hamiltoniano) se conserva.

**Demostración:**

$$\frac{dL}{dt} = \sum_i \left(\frac{\partial L}{\partial q_i}\dot{q}_i + \frac{\partial L}{\partial \dot{q}_i}\ddot{q}_i\right) + \frac{\partial L}{\partial t}$$

Si $\frac{\partial L}{\partial t} = 0$ y usamos las ecuaciones de Lagrange:

$$\frac{d}{dt}\left(\sum_i \dot{q}_i \frac{\partial L}{\partial \dot{q}_i} - L\right) = 0$$

El término entre paréntesis es el **Hamiltoniano** $H$:

$$H = \sum_i \dot{q}_i p_i - L, \quad p_i = \frac{\partial L}{\partial \dot{q}_i}$$

✅ **$H$ se conserva** (si $L$ no depende explícitamente de $t$).

---

## 3. Energías Potenciales en Mecánica Clásica

### 3.1 Gravedad Cerca de la Superficie Terrestre

$$V(x, y, z) = mgz$$

- $g$: Aceleración de la gravedad
- $z$: Altura respecto a un nivel de referencia

**Fuerza:** $\vec{F} = -\nabla V = -mg\hat{k}$

---

### 3.2 Fuerza Elástica (Ley de Hooke)

$$V(x) = \frac{1}{2}kx^2$$

- $k$: Constante del resorte
- $x$: Deformación respecto al equilibrio

**Fuerza:** $F(x) = -\frac{dV}{dx} = -kx$

---

### 3.3 Gravitación Universal (Potencial Newtoniano)

$$V(r) = -\frac{GMm}{r}$$

- $G$: Constante gravitacional
- $M, m$: Masas
- $r$: Distancia entre las masas

**Fuerza:** $\vec{F} = -\nabla V = -\frac{GMm}{r^2}\hat{r}$

---

## 4. Aplicaciones en Mecánica Clásica

### 4.1 Problemas unidimensionales

Si $V = V(x)$ (potencial unidimensional), la conservación de la energía permite encontrar $v(x)$:

$$E = \frac{1}{2}mv^2 + V(x)$$

$$v(x) = \pm\sqrt{\frac{2}{m}(E - V(x))}$$

**Interpretación:**
- El movimiento está **confinado** a regiones donde $E \geq V(x)$
- Los puntos donde $E = V(x)$ se denominan **puntos de retorno** (turning points)

---

### 4.2 Movimiento en Potencial Central

Para un potencial central $V(r)$ (solo depende de la distancia al origen):

$$E = \frac{1}{2}m(\dot{r}^2 + r^2\dot{\theta}^2) + V(r)$$

Usando la **conservación del momento angular** $L = mr^2\dot{\theta}$:

$$E = \frac{1}{2}m\dot{r}^2 + \frac{L^2}{2mr^2} + V(r)$$

El término $\frac{L^2}{2mr^2}$ se denomina **potencial centrífugo efectivo**.

---

## 5. Ejercicios Resueltos (Nivel Física Teórica)

### Ejercicio 1: Movimiento en un potencial $V(x) = \alpha x^2 + \beta x$

Una partícula de masa $m$ se mueve en un potencial unidimensional:

$$V(x) = \alpha x^2 + \beta x, \quad \alpha, \beta > 0$$

Si la energía total es $E$, encuentra:
**a)** Los puntos de retorno.
**b)** La velocidad máxima y en qué posición ocurre.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #d4edda; color: #155724; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Potencial 1D</span>
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Puntos de retorno</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 35 min</span>
</div>

- [ ] Sin empezar

**Solución paso a paso:**

**a) Puntos de retorno:**

En los puntos de retorno, $v = 0$ → $E = V(x)$:

$$E = \alpha x^2 + \beta x$$

$$\alpha x^2 + \beta x - E = 0$$

$$x_{\pm} = \frac{-\beta \pm \sqrt{\beta^2 + 4\alpha E}}{2\alpha}$$

✅ **Respuesta:** $x_{\pm} = \frac{-\beta \pm \sqrt{\beta^2 + 4\alpha E}}{2\alpha}$

**b) Velocidad máxima:**

La velocidad es máxima donde $\frac{dv}{dx} = 0$ → $\frac{d}{dx}(E - V(x)) = 0$ → $V'(x) = 0$:

$$V'(x) = 2\alpha x + \beta = 0$$

$$x_{v_{máx}} = -\frac{\beta}{2\alpha}$$

La velocidad máxima es:

$$v_{máx} = \sqrt{\frac{2}{m}(E - V(x_{v_{máx}})}$$

✅ **Respuesta:** $x_{v_{máx}} = -\frac{\beta}{2\alpha}$, $\displaystyle v_{máx} = \sqrt{\frac{2}{m}\left(E + \frac{\beta^2}{4\alpha}\right)}$

---

### Ejercicio 2: Órbitas cerradas en potenciales centrales

Demuestra que para un potencial central $V(r) = kr^n$, las órbitas son **cerradas** (el punto regresa a su posición inicial) solo si $n = 1$ (oscilador armónico) o $n = -2$ (gravitacional/electrostático).

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #d4edda; color: #155724; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Potencial central</span>
  <span style="background: #fff3cd; color: #856404; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Teorema de Bertrand</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 45 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Usa la ecuación de la órbita: $\frac{d^2u}{d\theta^2} + u = -\frac{m}{L^2}\frac{d}{du}V(1/u)$
- Analiza la precesión del perihelio
- El teorema de Bertrand establece que solo hay dos potenciales con órbitas cerradas para **todas** las condiciones iniciales

**Solución (esbozo):**

La ecuación de la órbita es:

$$\frac{d^2u}{d\theta^2} + u = -\frac{m}{L^2u^2}F(1/u)$$

Para $F(r) = -k r^n$ → $V(r) = \frac{k}{n+1}r^{n+1}$ (si $n \neq -1$):

Sustituyendo y linealizando alrededor de una órbita circular, se encuentra que la precesión por órbita es:

$$\Delta\theta = 2\pi\left(1 - \sqrt{1 + n}\right)$$

Para que la órbita sea cerrada, $\Delta\theta$ debe ser un múltiplo racional de $2\pi$.

✅ **Esto solo ocurre para $n = 1$ y $n = -2$.**

---

## 6. Conexión con la Mecánica Hamiltoniana

En el formalismo Hamiltoniano, la conservación de la energía es trivial:

$$H(p, q) = T + V = E = \text{constante}$$

**Ecuaciones de Hamilton:**

$$\dot{q}_i = \frac{\partial H}{\partial p_i}, \quad \dot{p}_i = -\frac{\partial H}{\partial q_i}$$

Si $H$ no depende explícitamente del tiempo: $\frac{dH}{dt} = 0$.

---

## 📝 Notas para el Estudiante de Física Teórica

1. **La conservación de la energía es una consecuencia de la simetría temporal** (Teorema de Noether).
2. **No confundir** $H$ (Hamiltoniano) con $E$ (energía mecánica): en sistemas con coordenadas móviles, $H \neq E$.
3. **En relatividad**, la conservación de la energía se extiende a $E = \gamma mc^2$.
4. **En mecánica cuántica**, la conservación de la energía está ligada al operador Hamiltoniano y la ecuación de Schrödinger.

---

## 🔗 Referencias Bibliográficas

1. **Goldstein** - *Classical Mechanics* (Cap. 2: Conservation Laws)
2. **Landau & Lifshitz** - *Mechanics* (Vol. 1, Sec. 7)
3. **Arnold** - *Mathematical Methods of Classical Mechanics*
4. **Scheck** - *Mechanics* (Sec. 2.5: Energy Conservation)

---

**¡Continúa con:** `03-fuerzas-conservativas.md` (Análisis vectorial de campos de fuerzas)
