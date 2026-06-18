# Teorema de Trabajo y Energía (Mecánica Racional)

**INSPT – UTN** | **Física Teórica I** | **Prof. Carlos Dibarbora**

---

## 📚 Enfoque de Mecánica Analítica

En **física teórica**, el teorema de trabajo y energía se deriva rigurosamente desde la **2ª Ley de Newton** en su formulación más general, usando el **cálculo vectorial** y el concepto de **trabajo de una fuerza** a lo largo de una trayectoria.

---

## 1. Formulación Matemática General

### 1.1 Trabajo de una Fuerza

El **trabajo** realizado por una fuerza $\vec{F}$ sobre una partícula que se desplaza desde la posición $\vec{r}_i$ hasta $\vec{r}_f$ a lo largo de una trayectoria $C$ es:

$$W = \int_C \vec{F} \cdot d\vec{r} = \int_{t_i}^{t_f} \vec{F}(\vec{r}(t)) \cdot \vec{v}(t)\,dt$$

**Donde:**
- $\vec{F}$: Fuerza (vectorial, puede depender de $\vec{r}$, $\vec{v}$, o $t$)
- $d\vec{r} = \vec{v}\,dt$: Elemento de desplazamiento
- $\cdot$: Producto punto (solo la componente paralela realiza trabajo)

---

### 1.2 Derivación desde la 2ª Ley de Newton

Partimos de:

$$\vec{F} = m\frac{d\vec{v}}{dt}$$

Multiplicamos escalarmente por $\vec{v}$ a ambos lados:

$$\vec{F} \cdot \vec{v} = m\frac{d\vec{v}}{dt} \cdot \vec{v}$$

**Manipulación matemática:**

$$\frac{d}{dt}\left(\frac{1}{2}mv^2\right) = m\frac{d\vec{v}}{dt} \cdot \vec{v} = \vec{F} \cdot \vec{v}$$

Integrando respecto al tiempo desde $t_i$ hasta $t_f$:

$$\int_{t_i}^{t_f} \frac{d}{dt}\left(\frac{1}{2}mv^2\right) dt = \int_{t_i}^{t_f} \vec{F} \cdot \vec{v}\,dt$$

$$\Delta K = W$$

**Donde:**
- $K = \frac{1}{2}mv^2$: Energía cinética
- $W = \int_C \vec{F} \cdot d\vec{r}$: Trabajo de la fuerza

✅ **Teorema de Trabajo y Energía (forma rigurosa):**

$$\boxed{W_{neta} = \Delta K = K_f - K_i}$$

---

## 2. Interpretación Física Profunda

### 2.1 El Trabajo como Transferencia de Energía

El trabajo es la **única forma** de transferir energía cinética a/desde una partícula (en mecánica Newtoniana):

- $W > 0$: La fuerza aporta energía (aumenta $K$)
- $W < 0$: La fuerza extrae energía (disminuye $K$)
- $W = 0$: No hay cambio en la energía cinética

### 2.2 Fuerzas que NO realizan trabajo

Una fuerza **ortogonal** a la velocidad ($\vec{F} \perp \vec{v}$) no realiza trabajo:

$$\vec{F} \cdot \vec{v} = 0 \quad \Rightarrow \quad W = 0$$

**Ejemplo clásico:** La fuerza centrípeta en movimiento circular uniforme.

---

## 3. Generalización a Sistemas de Partículas

Para un sistema de $N$ partículas, el teorema se extiende:

$$W_{neta}^{total} = \Delta K_{total} = \sum_{i=1}^N \Delta K_i$$

**Donde:**
- $W_{neta}^{total} = \sum_i W_i$: Trabajo total (fuerzas internas + externas)
- $K_{total} = \sum_i K_i$: Energía cinética total del sistema

⚠️ **Nota:** En sistemas con fuerzas internas, el trabajo de las fuerzas de interacción mutua puede ser no nulo (ej: explosión, colisión).

---

## 4. Conexión con la Energía Potencial

Si la fuerza es **conservativa**, se puede definir una **energía potencial** $U(\vec{r})$ tal que:

$$\vec{F} = -\nabla U$$

En este caso, el trabajo es:

$$W = \int_C \vec{F} \cdot d\vec{r} = -\int_C \nabla U \cdot d\vec{r} = -\Delta U$$

El teorema de trabajo-energía se convierte en el **teorema de conservación de la energía mecánica** (ver `02-conservacion-energia.md`).

---

## 🔑 Puntos Clave para Física Teórica

<div style="background: #e3f2fd; padding: 12px; border-left: 4px solid #1565c0; margin: 12px 0;">

**Diferencia con física introductoria:**
1. **Notación vectorial:** $\vec{F}$, $\vec{r}$, $\vec{v}$ (no escalares)
2. **Trayectoria general:** $C$ (no solo rectas ni fuerzas constantes)
3. **Derivación rigurosa:** Desde la 2ª Ley usando cálculo
4. **Generalización:** Sistemas de partículas, no solo una masa puntual

</div>

---

## 📐 Aplicación al Movimiento bajo Fuerzas Variables

### Ejemplo: Fuerza que depende de la posición

Si $\vec{F} = F(x)\hat{i}$ (fuerza unidimensional que depende de $x$):

$$W = \int_{x_i}^{x_f} F(x)\,dx$$

**Caso particular:** Resorte ($F = -kx$):

$$W = \int_{x_i}^{x_f} (-kx)\,dx = -\frac{1}{2}k(x_f^2 - x_i^2) = -\Delta U_e$$

---

## 💡 Nota Histórica

El teorema de trabajo-energía fue establecido rigurosamente por **Jean le Rond d'Alembert** y **Joseph-Louis Lagrange** en el siglo XVIII como parte del desarrollo de la **mecánica analítica**.

En el formalismo Lagrangiano, este teorema es una consecuencia directa de la **ecuación de Lagrange**:

$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = 0$$

Donde $L = T - V$ (Lagrangiano = energía cinética - potencial).

---

## 5. Aplicaciones en Mecánica Racional

### 5.1 Movimiento unidimensional con $F = F(x)$

Si la fuerza depende solo de la posición $x$, el teorema se convierte en una **ecuación diferencial de primer orden** en $v(x)$:

$$m\frac{dv}{dt} = F(x)$$

Multiplicando por $v = \frac{dx}{dt}$:

$$mv\frac{dv}{dx} = F(x)$$

Integrando:

$$\int_{v_i}^{v_f} mv\,dv = \int_{x_i}^{x_f} F(x)\,dx$$

$$\frac{1}{2}m(v_f^2 - v_i^2) = \int_{x_i}^{x_f} F(x)\,dx$$

✅ **Esto permite encontrar $v(x)$ sin resolver la ecuación de movimiento completa.**

---

### 5.2 Movimiento en 3D: Conservación del momento

Si la fuerza neta es cero ($\vec{F}_{neta} = 0$), entonces:

$$\frac{d\vec{p}}{dt} = 0 \quad \Rightarrow \quad \vec{p} = \text{constante}$$

**Donde $\vec{p} = m\vec{v}$ es el momento lineal.**

Esto es el **teorema de conservación del momento lineal**, que se deriva directamente de la 1ª Ley de Newton (o de la 2ª con $\vec{F} = 0$).

---

## 6. Ejercicios Resueltos (Nivel Física Teórica)

### Ejercicio 1: Fuerza central inversamente proporcional al cuadrado de la distancia

Una partícula de masa $m$ se mueve bajo la acción de una fuerza central:

$$\vec{F} = -\frac{k}{r^2}\hat{r}, \quad k > 0$$

Si la partícula se mueve desde $r_i$ hasta $r_f$ ($r_f > r_i$), calcula:
**a)** El trabajo realizado por la fuerza.
**b)** La velocidad final si la inicial es $v_i$.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Fuerza central</span>
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Gravedad/Electrostática</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 30 min</span>
</div>

- [ ] Sin empezar

**Solución paso a paso:**

**a) Trabajo:**

$$W = \int_{C} \vec{F} \cdot d\vec{r} = \int_{r_i}^{r_f} \left(-\frac{k}{r^2}\right) dr$$

$$W = k\left(\frac{1}{r_f} - \frac{1}{r_i}\right)$$

**b) Velocidad final:**

$$W = \Delta K = \frac{1}{2}m(v_f^2 - v_i^2)$$

$$\frac{1}{2}m(v_f^2 - v_i^2) = k\left(\frac{1}{r_f} - \frac{1}{r_i}\right)$$

$$v_f^2 = v_i^2 + \frac{2k}{m}\left(\frac{1}{r_f} - \frac{1}{r_i}\right)$$

✅ **Respuesta:** $W = k\left(\frac{1}{r_f} - \frac{1}{r_i}\right)$, $\displaystyle v_f = \sqrt{v_i^2 + \frac{2k}{m}\left(\frac{1}{r_f} - \frac{1}{r_i}\right)}$

---

### Ejercicio 2: Oscilador armónico

Una partícula de masa $m$ está sujeta a una fuerza recuperadora $F(x) = -kx$.

**a)** Demuestra que la energía total $E = \frac{1}{2}mv^2 + \frac{1}{2}kx^2$ se conserva.
**b)** Encuentra $v(x)$ en función de la energía total $E$.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Oscilador</span>
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 MAS</span>
  <span style="background: #d1ecf1; color: #0c5460; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐ Media</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 20 min</span>
</div>

- [ ] Sin empezar

**Solución paso a paso:**

**a) Conservación:**

La fuerza es conservativa: $F = -\frac{dU}{dx} = -kx$ → $U = \frac{1}{2}kx^2$.

Por el teorema de trabajo-energía:

$$W = \int_{x_i}^{x_f} (-kx)\,dx = -\left(\frac{1}{2}kx_f^2 - \frac{1}{2}kx_i^2\right) = -\Delta U$$

$$W = \Delta K \quad \Rightarrow \quad \Delta K + \Delta U = 0 \quad \Rightarrow \quad \Delta E = 0$$

✅ **La energía total $E = K + U$ se conserva.**

**b) $v(x)$:**

$$E = \frac{1}{2}mv^2 + \frac{1}{2}kx^2$$

$$v(x) = \pm\sqrt{\frac{2}{m}\left(E - \frac{1}{2}kx^2\right)}$$

✅ **Respuesta:** $\displaystyle v(x) = \pm\sqrt{\frac{2}{m}\left(E - \frac{1}{2}kx^2\right)}$

---

## 7. Generalización a Mecánica Lagrangiana

En el formalismo de Lagrange, el teorema de trabajo-energía es una consecuencia de la **ecuación de Lagrange**:

$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = Q_i$$

**Donde:**
- $L = T - V$: Lagrangiano
- $q_i$: Coordenadas generalizadas
- $Q_i$: Fuerzas generalizadas no conservativas

Si $Q_i = 0$ (solo fuerzas conservativas):

$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) = \frac{\partial L}{\partial q_i}$$

Esto lleva a la **conservación de la energía** si $L$ no depende explícitamente del tiempo.

---

## 📝 Notas para el Estudiante de Física Teórica

1. **El teorema es un caso particular** de la 2ª Ley de Newton integrada temporalmente.
2. **En mecánica Lagrangiana**, el teorema es fundamental para derivar las ecuaciones de movimiento.
3. **No confundir** trabajo ($W$) con energía ($K$, $U$): el trabajo es una **transferencia** de energía.
4. **En relatividad**, el teorema se modifica: $W = \Delta (\gamma mc^2)$.

---

## 🔗 Referencias Bibliográficas (Nivel Universitario)

1. **Goldstein** - *Classical Mechanics* (Cap. 1-2)
2. **Landau & Lifshitz** - *Mechanics* (Vol. 1)
3. **Marion & Thornton** - *Classical Dynamics of Particles and Systems*
4. **Fowles & Cassiday** - *Analytical Mechanics*

---

**¡Continúa con:** `02-conservacion-energia.md` (Conservación de la energía mecánica)
