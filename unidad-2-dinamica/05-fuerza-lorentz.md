# 5. Fuerza de Lorentz y Campos

## Introducción

La **fuerza de Lorentz** describe la fuerza que experimenta una partícula cargada en movimiento cuando se encuentra en presencia de campos eléctricos y magnéticos.

$$\boxed{\vec{F} = q\left(\vec{E} + \vec{v} \times \vec{B}\right)}$$

- $q$: carga eléctrica de la partícula (C)
- $\vec{E}$: campo eléctrico (N/C o V/m)
- $\vec{B}$: campo magnético (T = Tesla)
- $\vec{v}$: velocidad de la partícula (m/s)

---

## Diagrama — Fuerza de Lorentz

<div align="center">
<img src="assets/fuerzas-lorentz-esfera.svg" alt="Fuerza de Lorentz con campos E ⟂ B y trayectoria cicloide" width="95%"/>
</div>

*Figura 1: Panel derecho superior: partícula cargada en campos $\vec{E}$ (vertical, $+z$) y $\vec{B}$ (entrante, $-y$), mostrando la trayectoria cicloide resultante y los vectores de fuerza.*

---

## Componentes de la Fuerza de Lorentz

### Fuerza Eléctrica

$$\vec{F}_E = q\vec{E}$$

- **Independiente de la velocidad** de la partícula
- Siempre en la dirección del campo (para $q > 0$)
- Puede acelerar o frenar la partícula

### Fuerza Magnética

$$\vec{F}_B = q\,\vec{v} \times \vec{B}$$

- **Depende de la velocidad** (tanto módulo como dirección)
- **Siempre perpendicular** a $\vec{v}$ y a $\vec{B}$ (producto vectorial)
- **No realiza trabajo**: $W_B = \int \vec{F}_B \cdot d\vec{r} = 0$ porque $\vec{F}_B \perp \vec{v}$
- Solo **cambia la dirección** del movimiento (no la rapidez)

---

## Movimiento en Campos Cruzados ($\vec{E} \perp \vec{B}$)

### Planteamiento general (Ejercicio 11)

Una partícula de masa $m$ y carga $q$ se deja en libertad en el origen. Campos presentes:

- $\vec{E} = E\,\hat{k}$ (dirección $z$ positiva)
- $\vec{B} = -B\,\hat{j}$ (dirección $y$ negativa)

### Ecuación de movimiento

$$m\vec{a} = q(\vec{E} + \vec{v} \times \vec{B})$$

#### Producto vectorial $\vec{v} \times \vec{B}$

Con $\vec{v} = (v_x, v_y, v_z)$ y $\vec{B} = (0, -B, 0)$:

$$\vec{v} \times \vec{B} = \begin{vmatrix}
\hat{i} & \hat{j} & \hat{k} \\
v_x & v_y & v_z \\
0 & -B & 0
\end{vmatrix} = (v_y \cdot 0 - v_z(-B))\,\hat{i} + (v_z \cdot 0 - v_x \cdot 0)\,\hat{j} + (v_x(-B) - v_y \cdot 0)\,\hat{k}$$

$$\vec{v} \times \vec{B} = (v_z B)\,\hat{i} + (-v_x B)\,\hat{k}$$

#### Ecuaciones por componente

$$
\begin{cases}
m\dot{v}_x = q(v_z B) \\[4pt]
m\dot{v}_y = 0 \\[4pt]
m\dot{v}_z = qE - q(v_x B)
\end{cases}
$$

### Resolución del sistema

**Ecuación en $y$:** $\dot{v}_y = 0$, entonces $v_y = 0$ (no hay movimiento en $y$).

**Ecuaciones acopladas en $x$ y $z$:**

$$
\begin{aligned}
\dot{v}_x &= \frac{qB}{m}\,v_z \\[4pt]
\dot{v}_z &= \frac{qE}{m} - \frac{qB}{m}\,v_x
\end{aligned}
$$

Derivando la primera y usando la segunda:

$$\ddot{v}_x = \frac{qB}{m}\,\dot{v}_z = \frac{qB}{m}\left(\frac{qE}{m} - \frac{qB}{m}v_x\right)$$

$$\ddot{v}_x + \left(\frac{qB}{m}\right)^2 v_x = \frac{q^2BE}{m^2}$$

Esta es la EDO de un **oscilador armónico forzado** con frecuencia:

$$\omega_c = \frac{|q|B}{m} \quad\text{(frecuencia ciclotrón)}$$

La solución general para $v_x(t)$ es:

$$v_x(t) = \frac{E}{B}\left(1 - \cos\omega_c t\right)$$

(usando condiciones iniciales: $v_x(0) = 0$)

Para $v_z(t)$:

$$v_z(t) = \frac{E}{B}\sin\omega_c t$$

### Trayectoria

Integrando las velocidades para obtener la posición (con $x(0) = z(0) = 0$):

$$
\begin{aligned}
x(t) &= \frac{E}{B}\left(t - \frac{1}{\omega_c}\sin\omega_c t\right) \\[4pt]
z(t) &= \frac{E}{B\omega_c}\left(1 - \cos\omega_c t\right) \\[4pt]
y(t) &= 0
\end{aligned}
$$

### Interpretación

La trayectoria es una **cicloide**: la partícula avanza en la dirección $x$ mientras oscila en $z$ (dirección del campo eléctrico). Este es el principio detrás del **espectrómetro de masas** y otros dispositivos.

La velocidad de deriva en la dirección $x$ (promedio) es:

$$v_{deriva} = \frac{E}{B}$$

---

## Movimiento en Campo Magnético Uniforme ($\vec{E} = 0$)

Si solo hay campo magnético, la partícula describe un **movimiento circular uniforme** (o helicoidal si tiene componente de velocidad paralela a $\vec{B}$).

### Radio de la trayectoria

Igualando la fuerza magnética con la fuerza centrípeta:

$$qvB = \frac{mv^2}{R}$$

$$\boxed{R = \frac{mv}{qB}}$$

### Frecuencia ciclotrón

$$\boxed{\omega_c = \frac{qB}{m}}$$

### Período

$$\boxed{T = \frac{2\pi}{\omega_c} = \frac{2\pi m}{qB}}$$

> 💡 **Importante:** El período **no depende** de la velocidad de la partícula. Partículas más rápidas recorren círculos más grandes en el mismo tiempo.

---

## Fuerza de Lorentz en Diferentes Configuraciones

| Configuración | Tipo de movimiento | Ecuación de trayectoria |
|---|---|---|
| Solo $\vec{B}$ uniforme | MCU en plano $\perp \vec{B}$ | $R = mv/qB$ |
| $\vec{E} \parallel \vec{B}$ | Movimiento helicoidal con aceleración longitudinal | Combinación de MCU + MRUV |
| $\vec{E} \perp \vec{B}$ | Cicloide o trocoide | $x = \frac{E}{B}t - \frac{E}{B\omega_c}\sin\omega_c t$, $z = \frac{E}{B\omega_c}(1 - \cos\omega_c t)$ |
| Solo $\vec{E}$ uniforme | MRUV en dirección de $\vec{E}$ | $\vec{a} = q\vec{E}/m$ |

---

## Ejemplo Numérico

Un electrón ($q = -1{,}6 \times 10^{-19}$ C, $m = 9{,}11 \times 10^{-31}$ kg) con $v = 10^6$ m/s entra en un campo $B = 0{,}1$ T.

**Radio:** $R = \frac{mv}{qB} = \frac{9{,}11 \times 10^{-31} \cdot 10^6}{1{,}6 \times 10^{-19} \cdot 0{,}1} \approx 5{,}7 \times 10^{-5}$ m

**Frecuencia:** $\omega_c = \frac{qB}{m} = \frac{1{,}6 \times 10^{-19} \cdot 0{,}1}{9{,}11 \times 10^{-31}} \approx 1{,}76 \times 10^{10}$ rad/s

---

*Próximo tema: [Fuerzas de Vínculo y Despegue →](./06-vinculo-despegue.md)*