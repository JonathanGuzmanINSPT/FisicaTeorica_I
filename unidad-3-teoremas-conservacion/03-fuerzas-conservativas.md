# Fuerzas Conservativas y Campos de Fuerzas (Mecánica Racional)

**INSPT – UTN** | **Física Teórica I** | **Prof. Carlos Dibarbora**

---

## 📚 Análisis Vectorial de Campos de Fuerzas

En **física teórica**, una fuerza no es solo un vector, sino un **campo vectorial** $\vec{F}(\vec{r})$ definido en el espacio.

---

## 1. Definición Rigurosa de Fuerza Conservativa

### 1.1 Condición de Conservatividad

Un campo vectorial $\vec{F}(\vec{r})$ es **conservativo** si y solo si se cumple **cualquiera** de estas condiciones equivalentes:

1. **El trabajo a lo largo de cualquier trayectoria cerrada es cero:**
   $$\oint_C \vec{F} \cdot d\vec{r} = 0 \quad \forall C \text{ cerrada}$$

2. **El rotor (curl) del campo es idénticamente cero:**
   $$\nabla \times \vec{F} = 0 \quad \text{(campo irrotacional)}$$

3. **Existe una función potencial escalar $U(\vec{r})$ tal que:**
   $$\vec{F} = -\nabla U$$

4. **El trabajo entre dos puntos es independiente de la trayectoria:**
   $$\int_{C_1} \vec{F} \cdot d\vec{r} = \int_{C_2} \vec{F} \cdot d\vec{r} \quad \text{si } C_1 \text{ y } C_2 \text{ comparten extremos}$$

---

### 1.2 Demostración de la Equivalencia

**Teorema Fundamental (Teorema de Stokes):**

$$\oint_C \vec{F} \cdot d\vec{r} = \iint_S (\nabla \times \vec{F}) \cdot d\vec{S}$$

Si $\nabla \times \vec{F} = 0$ en una región simplemente conexa, entonces $\oint_C \vec{F} \cdot d\vec{r} = 0$ para cualquier $C$ cerrada en esa región.

✅ **Esto justifica el uso del rotor para verificar conservatividad.**

---

## 2. Condición en Coordenadas Cartesianas (3D)

Para $\vec{F} = F_x\hat{i} + F_y\hat{j} + F_z\hat{k}$:

$$\nabla \times \vec{F} = \begin{vmatrix}
\hat{i} & \hat{j} & \hat{k} \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
F_x & F_y & F_z
\end{vmatrix} = 0$$

**Esto implica las 3 ecuaciones:**

$$\frac{\partial F_z}{\partial y} = \frac{\partial F_y}{\partial z}, \quad \frac{\partial F_x}{\partial z} = \frac{\partial F_z}{\partial x}, \quad \frac{\partial F_y}{\partial x} = \frac{\partial F_x}{\partial y}$$

---

## 3. Ejemplos en Mecánica Clásica

### 3.1 Gravedad Cerca de la Superficie

$$\vec{F} = -mg\hat{k}$$

**Verificación:**
$$\nabla \times \vec{F} = \begin{vmatrix}
\hat{i} & \hat{j} & \hat{k} \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
0 & 0 & -mg
\end{vmatrix} = 0$$

✅ **Es conservativa.** El potencial es $U(x, y, z) = mgz$.

---

### 3.2 Fuerza Elástica (Ley de Hooke)

$$\vec{F} = -k(x\hat{i} + y\hat{j} + z\hat{k}) = -k\vec{r}$$

**Verificación:**
$$\nabla \times \vec{F} = -k \begin{vmatrix}
\hat{i} & \hat{j} & \hat{k} \\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
x & y & z
\end{vmatrix} = -k(0\hat{i} + 0\hat{j} + 0\hat{k}) = 0$$

✅ **Es conservativa.** El potencial es $U(\vec{r}) = \frac{1}{2}k(x^2 + y^2 + z^2) = \frac{1}{2}kr^2$.

---

### 3.3 Gravitación Universal (Potencial Newtoniano)

$$\vec{F} = -\frac{GMm}{r^2}\hat{r}, \quad \vec{r} = x\hat{i} + y\hat{j} + z\hat{k}, \quad r = \sqrt{x^2 + y^2 + z^2}$$

**Verificación (en coordenadas esféricas):**
$$\nabla \times \vec{F} = \frac{1}{r\sin\theta}\begin{vmatrix}
\hat{r} & r\hat{\theta} & r\sin\theta\hat{\phi} \\
\frac{\partial}{\partial r} & \frac{\partial}{\partial \theta} & \frac{\partial}{\partial \phi} \\
F_r & 0 & 0
\end{vmatrix} = 0$$

✅ **Es conservativa.** El potencial es $U(r) = -\frac{GMm}{r}$.

---

## 4. Fuerzas No Conservativas y Disipativas

### 4.1 Definición

Una fuerza es **no conservativa** si **no** cumple alguna de las condiciones de la Sección 1.1.

**Ejemplos clásicos:**
1. **Fricción cinética:** $\vec{f}_k = -\mu_k N \hat{v}$ (opuesta a $\vec{v}$)
2. **Resistencia del aire:** $\vec{F}_d = -\frac{1}{2}\rho C_d A v \vec{v}$ (proporcional a $v^2$)
3. **Fuerzas dependientes de la velocidad:** $\vec{F}(\vec{r}, \vec{v}, t)$

---

### 4.2 Fuerzas de Fricción (Análisis Microscópico)

La fricción cinética **no** es conservativa porque:
1. **Disipa energía** (transforma energía mecánica en calor)
2. **El trabajo depende de la trayectoria** (no es estado, sino proceso)
3. **No se puede definir un potencial $U$** (el trabajo no es igual al menos el gradiente de algo)

**Trabajo de la fricción:**
$$W_f = -\int_C \mu_k N \, dl < 0$$
(Note: depende de la **longitud de la trayectoria** $dl$, no solo de los extremos)

---

## 5. Formulación Lagrangiana con Fuerzas No Conservativas

En el formalismo de Lagrange, las fuerzas no conservativas se introducen como **fuerzas generalizadas** $Q_i$:

$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = Q_i$$

**Donde:**
- $Q_i = \sum_j \vec{F}_j^{nc} \cdot \frac{\partial \vec{r}_j}{\partial q_i}$ (fuerzas no conservativas proyectadas)
- Si $Q_i = 0$: se conserva la energía (sistema conservativo)

---

### 5.1 Ejemplo: Fricción en Coordenadas Cartesianas

Para un bloque de masa $m$ con fricción cinética en el plano $xy$:

$$Q_x = -\mu_k mg \frac{\dot{x}}{v}, \quad Q_y = -\mu_k mg \frac{\dot{y}}{v}, \quad v = \sqrt{\dot{x}^2 + \dot{y}^2}$$

Las ecuaciones de Lagrange son:
$$m\ddot{x} = -\mu_k mg \frac{\dot{x}}{v}, \quad m\ddot{y} = -\mu_k mg \frac{\dot{y}}{v}$$

---

## 6. Teorema de Trabajo-Energía (Fuerzas No Conservativas)

Si hay fuerzas no conservativas, el teorema se modifica:

$$W_{neta} = W_{cons} + W_{nc} = \Delta K$$

Como $W_{cons} = -\Delta U$:

$$K_i + U_i + W_{nc} = K_f + U_f$$

**Donde $W_{nc} = \int_C \vec{F}_{nc} \cdot d\vec{r}$ es el trabajo de las fuerzas no conservativas.**

---

### 6.1 Disipación de Energía

Si $W_{nc} < 0$ (fuerzas disipativas como fricción):

$$E_f = E_i + W_{nc} < E_i$$

La energía mecánica **disminuye** (se disipa como calor, sonido, deformación).

---

## 7. Ejercicios Resueltos (Nivel Física Teórica)

### Ejercicio 1: Verificación de Conservatividad en 3D

Dado el campo de fuerzas:
$$\vec{F} = (2xy + z^2)\hat{i} + (x^2 + 2y)\hat{j} + (2xz)\hat{k}$$

**a)** Verifica si es conservativo.
**b)** Si lo es, encuentra el potencial $U(x, y, z)$.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Campo vectorial</span>
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

### Ejercicio 2: Trabajo de Fricción en Trayectoria Curva

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

## 8. Notas para el Estudiante de Física Teórica

1. **El rotor ($\nabla \times \vec{F}$) es la herramienta fundamental** para verificar conservatividad.
2. **En espacios simplemente conexos**, $\nabla \times \vec{F} = 0$ implica que $\vec{F} = -\nabla U$.
3. **Las fuerzas no conservativas** requieren el concepto de **fuerzas generalizadas** $Q_i$ en Lagrange.
4. **La fricción** es un fenómeno **no conservativo** porque disipa energía (aumenta la entropía del sistema).

---

## 🔗 Referencias Bibliográficas (Nivel Universitario)

1. **Goldstein** - *Classical Mechanics* (Cap. 1: Survey of the Elementary Principles)
2. **Landau & Lifshitz** - *Mechanics* (Vol. 1, Sec. 5: The Lagrangian for a Free Particle)
3. **Marion & Thornton** - *Classical Dynamics* (Cap. 2: Newtonian Mechanics)
4. **Fowles & Cassiday** - *Analytical Mechanics* (Cap. 7: Nonconservative Forces)

---

**¡Continúa con el TP2 (parte de energía):** `tp2-energia.md` (en construcción)
