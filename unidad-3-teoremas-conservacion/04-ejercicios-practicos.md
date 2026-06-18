# Ejercicios de Nivel – Teoremas de Conservación (Mecánica Racional)

**INSPT – UTN** | **Física Teórica I** | **Prof. Carlos Dibarbora**

---

## 📋 Descripción

Estos ejercicios son de nivel **universitario avanzado** (Física Teórica I / Mecánica Racional). Requieren conocimientos de:
- Cálculo vectorial (rotacional, divergencia, teorema de Stokes)
- Ecuaciones diferenciales
- Mecánica analítica (Lagrange, Hamilton)
- Teoría de campos

**Bibliografía de referencia:**
- Goldstein – *Classical Mechanics*
- Landau & Lifshitz – *Mechanics*
- Marion & Thornton – *Classical Dynamics of Particles and Systems*

---

## 📊 Progreso General

| Bloque | Total | ✅ | 🔄 | % |
|---|---|---|---|---|
| Teorema Trabajo-Energía (Vectorial) | 3 | 0 | 0 | 0% |
| Conservación de Energía (Sistemas) | 3 | 0 | 0 | 0% |
| Fuerzas No Conservativas | 2 | 0 | 0 | 0% |
| Problemas Integradores | 2 | 0 | 0 | 0% |
| **Total** | **10** | **0** | **0** | **0%** |

---

<div style="display: flex; gap: 8px; margin: 12px 0; flex-wrap: wrap;">
  <span style="background: #e3f2fd; color: #1565c0; padding: 6px 14px; border-radius: 14px; font-size: 0.95em; font-weight: 600;">🔧 Teorema de Trabajo y Energía (Formulación Vectorial)</span>
</div>

## Ejercicio 1: Fuerza central con dependencia angular

Una partícula de masa $m$ se mueve bajo la acción de una fuerza central que depende tanto de la distancia como del ángulo:

$$\vec{F}(r, \theta) = -\frac{k}{r^2}\hat{r} + \frac{\alpha}{r^3}\hat{\theta}, \quad k, \alpha > 0$$

**a)** Verifica si esta fuerza es conservativa calculando $\nabla \times \vec{F}$ en coordenadas polares.

**b)** Si la fuerza fuera conservativa, encuentra el potencial $U(r, \theta)$. Si no lo es, explica por qué no se puede definir $U$.

**c)** Calcula el trabajo realizado cuando la partícula se mueve desde $(r_1, 0)$ hasta $(r_2, \pi/2)$ siguiendo una trayectoria recta en coordenadas cartesianas.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Fuerza central</span>
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Campo vectorial</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 50 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- En coordenadas polares: $\nabla \times \vec{F} = \frac{1}{r}\left[\frac{\partial}{\partial r}(r F_\theta) - \frac{\partial F_r}{\partial \theta}\right]\hat{z}$
- Si $\nabla \times \vec{F} \neq 0$ → NO es conservativa
- El trabajo es $W = \int_C \vec{F} \cdot d\vec{r}$ (depende de la trayectoria si no es conservativa)

**Solución paso a paso:**

**a) Verificación:**

$$F_r = -\frac{k}{r^2}, \quad F_\theta = \frac{\alpha}{r^3}$$

$$(\nabla \times \vec{F})_z = \frac{1}{r}\left[\frac{\partial}{\partial r}\left(r \cdot \frac{\alpha}{r^3}\right) - \frac{\partial}{\partial \theta}\left(-\frac{k}{r^2}\right)\right]$$

$$= \frac{1}{r}\left[\frac{\partial}{\partial r}\left(\frac{\alpha}{r^2}\right) - 0\right] = \frac{1}{r}\left[-\frac{2\alpha}{r^3}\right] = -\frac{2\alpha}{r^4} \neq 0$$

❌ **NO es conservativa** (el rotor no es cero).

**b)** Como $\nabla \times \vec{F} \neq 0$, **no** se puede definir un potencial $U$ (no es fuerza conservativa).

**c)** El trabajo depende de la trayectoria. En coordenadas cartesianas:
- $x$ desde $r_1$ hasta $0$
- $y$ desde $0$ hasta $r_2$

$$W = \int_C \vec{F} \cdot d\vec{r} = \text{(requiere parametrización de la trayectoria)}$$

✅ **Respuesta:** La fuerza NO es conservativa; no hay potencial $U$; el trabajo depende de la trayectoria.

---

## Ejercicio 2: Oscilador acoplado (2 grados de libertad)

Un sistema de dos masas $m_1$ y $m_2$ conectadas por resortes de constantes $k_1$, $k_2$ y $k_3$ se mueve en una dimensión. Las posiciones de equilibrio son $x_1 = 0$ y $x_2 = 0$.

**a)** Escribe el Lagrangiano del sistema $L = T - V$.

**b)** Obtén las ecuaciones de movimiento usando las ecuaciones de Lagrange.

**c)** Demuestra que la energía total $E = T + V$ se conserva (si no hay fricción).

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Sistemas acoplados</span>
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Mecánica Lagrangiana</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 60 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- $T = \frac{1}{2}m_1\dot{x}_1^2 + \frac{1}{2}m_2\dot{x}_2^2$
- $V = \frac{1}{2}k_1 x_1^2 + \frac{1}{2}k_2(x_2 - x_1)^2 + \frac{1}{2}k_3 x_2^2$
- Usa $\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{x}_i}\right) - \frac{\partial L}{\partial x_i} = 0$

---

<div style="display: flex; gap: 8px; margin: 12px 0; flex-wrap: wrap;">
  <span style="background: #d4edda; color: #155724; padding: 6px 14px; border-radius: 14px; font-size: 0.95em; font-weight: 600;">♻️ Conservación de Energía (Sistemas)</span>
</div>

## Ejercicio 3: Movimiento en un potencial $V(x) = \alpha x^2 + \beta x$

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

**Pistas:**
- En los puntos de retorno: $v = 0$ → $E = V(x)$
- La velocidad es máxima donde $\frac{dv}{dx} = 0$ → $V'(x) = 0$

**Solución paso a paso:**

**a) Puntos de retorno:**

$$E = \alpha x^2 + \beta x$$

$$\alpha x^2 + \beta x - E = 0$$

$$x_{\pm} = \frac{-\beta \pm \sqrt{\beta^2 + 4\alpha E}}{2\alpha}$$

✅ **Respuesta:** $x_{\pm} = \frac{-\beta \pm \sqrt{\beta^2 + 4\alpha E}}{2\alpha}$

**b) Velocidad máxima:**

$$V'(x) = 2\alpha x + \beta = 0$$

$$x_{v_{máx}} = -\frac{\beta}{2\alpha}$$

$$v_{máx} = \sqrt{\frac{2}{m}(E - V(x_{v_{máx}})}$$

✅ **Respuesta:** $x_{v_{máx}} = -\frac{\beta}{2\alpha}$, $\displaystyle v_{máx} = \sqrt{\frac{2}{m}\left(E + \frac{\beta^2}{4\alpha}\right)}$

---

## Ejercicio 4: Órbitas cerradas en potenciales centrales (Teorema de Bertrand)

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

<div style="display: flex; gap: 8px; margin: 12px 0; flex-wrap: wrap;">
  <span style="background: #f8d7da; color: #721c24; padding: 6px 14px; border-radius: 14px; font-size: 0.95em; font-weight: 600;">🔥 Fuerzas No Conservativas</span>
</div>

## Ejercicio 5: Verificación de conservatividad en 3D

Dado el campo de fuerzas:

$$\vec{F} = (2xy + z^2)\hat{i} + (x^2 + 2y)\hat{j} + (2xz)\hat{k}$$

**a)** Verifica si es conservativo.
**b)** Si lo es, encuentra el potencial $U(x, y, z)$.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #f8d7da; color: #721c24; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Campo vectorial</span>
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Rotor</span>
  <span style="background: #d1ecf1; color: #0c5460; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐ Media</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 25 min</span>
</div>

- [ ] Sin empezar

**Solución paso a paso:**

**a) Verificación:**

Calculamos $\nabla \times \vec{F}$:

$$\nabla \times \vec{F} = \begin{vmatrix}
\hat{i} & \hat{j} & \hat{k} \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
F_x & F_y & F_z
\end{vmatrix}$$

Componente $x$: $\frac{\partial F_z}{\partial y} - \frac{\partial F_y}{\partial z} = \frac{\partial (2xz)}{\partial y} - \frac{\partial (x^2 + 2y)}{\partial z} = 0 - 0 = 0$

Componente $y$: $\frac{\partial F_x}{\partial z} - \frac{\partial F_z}{\partial x} = \frac{\partial (2xy + z^2)}{\partial z} - \frac{\partial (2xz)}{\partial x} = 2z - 2z = 0$

Componente $z$: $\frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y} = \frac{\partial (x^2 + 2y)}{\partial x} - \frac{\partial (2xy + z^2)}{\partial y} = 2x - 2x = 0$

✅ **$\nabla \times \vec{F} = 0$ → El campo ES conservativo.**

**b) Potencial $U(x, y, z)$:**

$$F_x = -\frac{\partial U}{\partial x} = 2xy + z^2 \quad \Rightarrow \quad U = -x^2y - xz^2 + f(y, z)$$

$$F_y = -\frac{\partial U}{\partial y} = x^2 + 2y \quad \Rightarrow \quad \frac{\partial U}{\partial y} = -x^2 - 2y$$

Sustituyendo $U$ de arriba:

$$\frac{\partial}{\partial y}(-x^2y - xz^2 + f(y, z)) = -x^2 + \frac{\partial f}{\partial y} = -x^2 - 2y$$

$$\frac{\partial f}{\partial y} = -2y \quad \Rightarrow \quad f(y, z) = -y^2 + g(z)$$

Entonces: $U = -x^2y - xz^2 - y^2 + g(z)$

$$F_z = -\frac{\partial U}{\partial z} = 2xz \quad \Rightarrow \quad \frac{\partial U}{\partial z} = -2xz$$

$$\frac{\partial}{\partial z}(-x^2y - xz^2 - y^2 + g(z)) = -2xz + g'(z) = -2xz$$

$$g'(z) = 0 \quad \Rightarrow \quad g(z) = C \text{ (constante)}$$

✅ **Respuesta:** $U(x, y, z) = -x^2y - xz^2 - y^2 + C$ (se puede tomar $C = 0$)

---

## Ejercicio 6: Trabajo de fricción en trayectoria curva

Un bloque de masa $m$ se desliza desde $(0, 0)$ hasta $(L, 0)$ siguiendo dos trayectorias:
1. **Recta:** $y = 0$
2. **Curva:** $y = h\sin(\pi x/L)$

Si el coeficiente de fricción es $\mu_k$, ¿cuál trayectoria disipa más energía?

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #f8d7da; color: #721c24; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔥 Fricción</span>
  <span style="background: #fff3cd; color: #856404; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Trayectoria</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 35 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- El trabajo de la fricción es $W_f = -\mu_k mg \cdot \text{longitud de la trayectoria}$
- La longitud de la curva $y(x)$ es $L_{curva} = \int_0^L \sqrt{1 + (dy/dx)^2} \, dx$
- Compara $L_{recta} = L$ vs $L_{curva}$

**Solución (esbozo):**

Para la curva $y = h\sin(\pi x/L)$:

$$\frac{dy}{dx} = \frac{\pi h}{L}\cos\left(\frac{\pi x}{L}\right)$$

$$L_{curva} = \int_0^L \sqrt{1 + \left(\frac{\pi h}{L}\right)^2 \cos^2\left(\frac{\pi x}{L}\right)} \, dx$$

Esta integral no tiene solución elemental, pero **siempre** $L_{curva} > L$ (la curva es más larga que la recta).

✅ **Respuesta:** La trayectoria curva disipa **más** energía porque la distancia recorrida es mayor.

---

## 📊 Registro de Progreso

| Fecha | Bloque trabajado | Ejercicios completados | Tiempo total | Notas |
|---|---|---|---|---|
|  |  |  |  |  |

---

## 💡 Consejos para el Estudio

- **Teorema trabajo-energía:** Úsalo cuando no te den el tiempo ni la aceleración
- **Conservación:** Revisa siempre si hay fricción (si la hay, $E_m$ NO se conserva)
- **Fricción:** El trabajo siempre es negativo (disipa energía)
- **Campos vectoriales:** El rotor ($\nabla \times \vec{F}$) es la herramienta fundamental para verificar conservatividad

---

## 🔗 Recursos Adicionales

- 📄 [Apunte general del curso](../../Apunte_xournal_Fisica_Teorica_2026.pdf)
- 📄 [Goldstein - Classical Mechanics (Cap. 1-2)](https://www.amazon.com/Classical-Mechanics-Herbert-Goldstein/dp/0201657023)
- 🌐 [Simulación PhET - Fuerzas y energía](https://phet.colorado.edu/es/simulation/work-energy)

---

**¡Buena suerte con los ejercicios! 🚀**
