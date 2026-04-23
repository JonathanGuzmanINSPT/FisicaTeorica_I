# TP1 – Cinemática: Soluciones

**INSPT – UTN** | **Física Teórica I** | **Prof. Carlos Dibarbora**

---

## Ejercicio 9 — Función sinusoidal, integración trigonométrica

### Enunciado

La velocidad de una partícula es:

$$v(t) = v_0\left[1 - \sin\!\left(\frac{\pi t}{T}\right)\right]$$

La partícula parte desde el origen ($x_0 = 0$) con velocidad inicial $v_0$.

Determinar:

- **(a)** Posición y aceleración en $t = 3T$.
- **(b)** Velocidad promedio en el intervalo $[0,\, T]$.

---

### Paso 0 — Verificación de condición inicial

En $t = 0$:

$$v(0) = v_0\left[1 - \sin(0)\right] = v_0 \cdot 1 = v_0 \checkmark$$

Consistente con la condición dada.

---

### Parte (a) — Posición y aceleración en $t = 3T$

#### Posición: integrar la velocidad

La velocidad es la derivada de la posición respecto al tiempo, $v = \dot{x} = \dfrac{dx}{dt}$.

Separando los diferenciales:

$$dx = v\, dt$$

Integrando ambos lados — izquierdo desde $x_0 = 0$ hasta $x(t)$, derecho desde $0$ hasta $t$:

$$\int_0^{x(t)} dx = \int_0^t v(t')\, dt'$$

$$x(t) = \int_0^t v_0\left[1 - \sin\!\left(\frac{\pi t'}{T}\right)\right] dt'$$

Separamos en dos integrales:

$$x(t) = v_0 \left[\int_0^t dt' - \int_0^t \sin\!\left(\frac{\pi t'}{T}\right) dt'\right]$$

La primera es inmediata: $\displaystyle\int_0^t dt' = t'$.

La segunda requiere sustituir $u = \dfrac{\pi t'}{T}$, con $du = \dfrac{\pi}{T}\,dt'$, es decir $dt' = \dfrac{T}{\pi}\,du$:

$$\int \sin\!\left(\frac{\pi t'}{T}\right) dt' = \frac{T}{\pi}\int \sin(u)\, du = -\frac{T}{\pi}\cos(u) = -\frac{T}{\pi}\cos\!\left(\frac{\pi t'}{T}\right)$$

Combinando ambos resultados, la primitiva queda:

$$x(t) = v_0 \left[ t' + \frac{T}{\pi}\cos\!\left(\frac{\pi t'}{T}\right) \right]_0^t$$

$$x(t) = v_0 \left[ t + \frac{T}{\pi}\cos\!\left(\frac{\pi t}{T}\right) - \frac{T}{\pi}\cos(0) \right]$$

$$\boxed{x(t) = v_0 \left[ t + \frac{T}{\pi}\cos\!\left(\frac{\pi t}{T}\right) - \frac{T}{\pi} \right]}$$

**Evaluamos en $t = 3T$:**

$$x(3T) = v_0 \left[ 3T + \frac{T}{\pi}\cos(3\pi) - \frac{T}{\pi} \right]$$

Usando $\cos(3\pi) = -1$:

$$x(3T) = v_0 \left[ 3T + \frac{T}{\pi}(-1) - \frac{T}{\pi} \right] = v_0 \left[ 3T - \frac{2T}{\pi} \right]$$

$$\boxed{x(3T) = v_0 T\!\left(3 - \frac{2}{\pi}\right)}$$

---

#### Aceleración: derivar la velocidad

La aceleración es $a = \dot{v} = \dfrac{dv}{dt}$. Derivamos directamente:

$$a(t) = \dot{v} = \frac{dv}{dt} = v_0 \cdot \left[-\cos\!\left(\frac{\pi t}{T}\right) \cdot \frac{\pi}{T}\right]$$

$$\boxed{a(t) = -\frac{\pi v_0}{T}\cos\!\left(\frac{\pi t}{T}\right)}$$

**Evaluamos en $t = 3T$:**

$$a(3T) = -\frac{\pi v_0}{T}\cos(3\pi) = -\frac{\pi v_0}{T}(-1)$$

$$\boxed{a(3T) = \frac{\pi v_0}{T}}$$

> La aceleración es positiva en $t = 3T$, lo que indica que la partícula se está acelerando en ese instante.

---

### Parte (b) — Velocidad promedio en $[0, T]$

La velocidad promedio se define como:

$$\bar{v} = \frac{1}{T}\int_0^T v(t)\, dt = \frac{1}{T}\int_0^T v_0\left[1 - \sin\!\left(\frac{\pi t}{T}\right)\right] dt$$

Usando la primitiva ya calculada:

$$\bar{v} = \frac{v_0}{T}\left[ t + \frac{T}{\pi}\cos\!\left(\frac{\pi t}{T}\right) \right]_0^T$$

$$= \frac{v_0}{T}\left[\left(T + \frac{T}{\pi}\cos(\pi)\right) - \left(0 + \frac{T}{\pi}\cos(0)\right)\right]$$

$$= \frac{v_0}{T}\left[\left(T - \frac{T}{\pi}\right) - \frac{T}{\pi}\right]$$

$$= \frac{v_0}{T} \cdot T\!\left(1 - \frac{2}{\pi}\right)$$

$$\boxed{\bar{v} = v_0\!\left(1 - \frac{2}{\pi}\right) \approx 0{,}363\, v_0}$$

> Como $2/\pi \approx 0{,}637$, la velocidad promedio resulta menor que $v_0$, lo cual tiene sentido: la función sinusoidal reduce la velocidad durante parte del intervalo.

---

### Resumen de resultados

| Magnitud | Expresión general | Valor en $t = 3T$ o $[0,T]$ |
|---|---|---|
| $x(t)$ | $v_0\!\left[t + \frac{T}{\pi}\cos\!\left(\frac{\pi t}{T}\right) - \frac{T}{\pi}\right]$ | $x(3T) = v_0 T\!\left(3 - \frac{2}{\pi}\right)$ |
| $a(t)$ | $-\dfrac{\pi v_0}{T}\cos\!\left(\dfrac{\pi t}{T}\right)$ | $a(3T) = \dfrac{\pi v_0}{T}$ |
| $\bar{v}$ | — | $v_0\!\left(1 - \dfrac{2}{\pi}\right)$ |
