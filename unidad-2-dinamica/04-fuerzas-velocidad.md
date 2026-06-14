# 4. Fuerzas Dependientes de la Velocidad

## Introducción

Cuando la fuerza resultante sobre una partícula **depende de su velocidad**, la ecuación de movimiento es una **ecuación diferencial ordinaria (EDO)** que debemos resolver para encontrar $v(t)$ y $x(t)$.

La forma general de la segunda ley de Newton en este caso es:

$$m\frac{dv}{dt} = F(v)$$

donde $F(v)$ es una función conocida de la velocidad.

---

## Diagrama — Fuerzas dependientes de la velocidad y otros sistemas

La siguiente figura ilustra los casos de fuerza resistente y su relación velocidad-tiempo, junto con otros sistemas importantes de la unidad.

<div align="center">
<img src="assets/fuerzas-lorentz-esfera.svg" alt="Fuerzas dependientes de velocidad, Lorentz y esfera lisa" width="95%"/>
</div>

*Figura 1: Panel izquierdo: partícula en medio resistivo con tabla de soluciones $v(t)$ y gráfico comparativo de decaimientos. Panel derecho superior: fuerza de Lorentz con campos $\vec{E} \perp \vec{B}$ y trayectoria cicloide. Panel derecho inferior: despegue de partícula sobre esfera lisa.*

---

## Método General de Resolución

### Paso 1: Escribir la segunda ley

$$m\frac{dv}{dt} = F(v)$$

### Paso 2: Separar variables

$$\frac{m}{F(v)}\,dv = dt$$

### Paso 3: Integrar

$$\int_{v_0}^{v(t)} \frac{m}{F(v')}\,dv' = \int_0^t dt' = t$$

### Paso 4: Despejar $v(t)$

Si la integral se puede resolver analíticamente, obtenemos $v(t)$ de forma explícita o implícita.

### Paso 5: Encontrar $x(t)$

Una vez que tenemos $v(t)$, integramos:

$$x(t) = \int_0^t v(t')\,dt'$$

**Alternativa:** Podemos usar la regla de la cadena para obtener $v(x)$ directamente:

$$m\frac{dv}{dt} = m\frac{dv}{dx}\frac{dx}{dt} = mv\frac{dv}{dx} = F(v)$$

$$\int \frac{mv}{F(v)}\,dv = \int dx$$

---

## Caso 1: Fuerza Resistente $F = -kv$ (Lineal)

### Ecuación de movimiento

$$\sum F = -kv = m\dot{v}$$

### Velocidad $v(t)$

Separando variables:

$$\frac{dv}{v} = -\frac{k}{m}\,dt$$

Integrando:

$$\int_{v_0}^{v(t)} \frac{dv'}{v'} = -\frac{k}{m}\int_0^t dt'$$

$$\ln\frac{v(t)}{v_0} = -\frac{k}{m}t$$

$$\boxed{v(t) = v_0\,e^{-(k/m)t}}$$

### Posición $x(t)$

Integrando la velocidad:

$$x(t) = \int_0^t v(t')\,dt' = v_0\int_0^t e^{-(k/m)t'}\,dt'$$

$$\boxed{x(t) = \frac{mv_0}{k}\left(1 - e^{-(k/m)t}\right)}$$

### Velocidad $v(x)$

Usando la regla de la cadena:

$$mv\frac{dv}{dx} = -kv \quad\Longrightarrow\quad m\frac{dv}{dx} = -k$$

$$\int_{v_0}^{v} dv' = -\frac{k}{m}\int_0^x dx'$$

$$\boxed{v(x) = v_0 - \frac{k}{m}x}$$

**Interpretación:**
- La velocidad decae exponencialmente con el tiempo
- La partícula nunca se detiene completamente (en teoría)
- La posición tiende a un valor límite $x_{\infty} = mv_0/k$

---

## Caso 2: Fuerza Resistente $F = -kv^2$ (Cuadrática)

### Ecuación de movimiento (Ejercicio 8)

$$\sum F = -kv^2 = m\dot{v}$$

### Velocidad $v(t)$

Separando variables:

$$\frac{dv}{v^2} = -\frac{k}{m}\,dt$$

Integrando:

$$\int_{v_0}^{v(t)} \frac{dv'}{v'^2} = -\frac{k}{m}\int_0^t dt'$$

$$-\frac{1}{v}\Big|_{v_0}^{v(t)} = \left[-\frac{1}{v(t)} + \frac{1}{v_0}\right] = -\frac{k}{m}t$$

$$\boxed{v(t) = \frac{v_0}{1 + \frac{kv_0}{m}t}}$$

### Posición $x(t)$

Integrando:

$$x(t) = \int_0^t \frac{v_0}{1 + \frac{kv_0}{m}t'}\,dt'$$

$$\boxed{x(t) = \frac{m}{k}\ln\left(1 + \frac{kv_0}{m}t\right)}$$

### Velocidad $v(x)$

Usando la regla de la cadena:

$$mv\frac{dv}{dx} = -kv^2 \quad\Longrightarrow\quad m\frac{dv}{dx} = -kv$$

$$\int_{v_0}^{v} \frac{dv'}{v'} = -\frac{k}{m}\int_0^x dx'$$

$$\boxed{v(x) = v_0\,e^{-(k/m)x}}$$

**Interpretación:**
- La velocidad decae como $1/t$ (mucho más lento que el caso lineal)
- La posición crece **logarítmicamente** (sin límite, pero muy lentamente)
- Este es el modelo correcto para resistencia de fluidos a **altas velocidades** (turbulencia)

---

## Caso 3: Fuerza $F = -b\,e^{av}$ (Exponencial — Ejercicio 9)

### Ecuación de movimiento

$$\sum F = -b\,e^{av} = m\dot{v}$$

### Velocidad $v(t)$

Separando variables:

$$\frac{dv}{e^{av}} = -\frac{b}{m}\,dt$$

$$e^{-av}\,dv = -\frac{b}{m}\,dt$$

Integrando:

$$\int_{v_0}^{v(t)} e^{-av'}\,dv' = -\frac{b}{m}\int_0^t dt'$$

$$\left[-\frac{1}{a}e^{-av'}\right]_{v_0}^{v(t)} = -\frac{b}{m}t$$

$$-\frac{1}{a}\left(e^{-av(t)} - e^{-av_0}\right) = -\frac{b}{m}t$$

$$\frac{1}{a}\left(e^{-av(t)} - e^{-av_0}\right) = \frac{b}{m}t$$

$$\boxed{v(t) = -\frac{1}{a}\ln\left(e^{-av_0} - \frac{ab}{m}t\right)}$$

### Posición $x(t)$

$$x(t) = \int_0^t v(t')\,dt'$$

Esta integral requiere sustitución cuidadosa o integración numérica.

---

## Caso 4: Resistencia en Guía Circular (Ejercicio 10)

### Planteamiento

Una esfera de masa $m$ se mueve sobre una guía circular horizontal de radio $R$. La fuerza resistente tiene módulo proporcional a $v^2$.

En coordenadas polares ($r = R$, $\dot{r} = 0$, $\ddot{r} = 0$):

La componente tangencial (según $\hat{e}_\phi$) de la segunda ley:

$$m a_\phi = m(R\ddot{\phi} + 2\dot{r}\dot{\phi}) = mR\ddot{\phi} = -k v^2$$

Donde $v = R\dot{\phi}$ (velocidad tangencial).

$$mR\ddot{\phi} = -k(R\dot{\phi})^2 = -kR^2\dot{\phi}^2$$

Simplificando:

$$\ddot{\phi} = -\frac{kR}{m}\dot{\phi}^2$$

Si hacemos $\omega = \dot{\phi}$, la ecuación es:

$$\dot{\omega} = -\frac{kR}{m}\omega^2$$

Esta es la **misma EDO que el caso 2** ($\dot{\omega} \propto -\omega^2$). La solución es:

$$\boxed{\omega(t) = \frac{\omega_0}{1 + \frac{kR\omega_0}{m}t}}$$

$$v(t) = R\omega(t) = \frac{v_0}{1 + \frac{kv_0}{m}t}$$

---

## Resumen de Soluciones

| Fuerza | $v(t)$ | $x(t)$ | $v(x)$ |
|---|---|---|---|
| $F = -kv$ | $v_0 e^{-(k/m)t}$ | $\frac{mv_0}{k}(1 - e^{-(k/m)t})$ | $v_0 - \frac{k}{m}x$ |
| $F = -kv^2$ | $\frac{v_0}{1 + \frac{kv_0}{m}t}$ | $\frac{m}{k}\ln\left(1 + \frac{kv_0}{m}t\right)$ | $v_0 e^{-(k/m)x}$ |
| $F = -b e^{av}$ | $-\frac{1}{a}\ln\left(e^{-av_0} - \frac{ab}{m}t\right)$ | — | — |

---

## Estrategia General para Cualquier $F(v)$

1. **Identificar la fuerza** como función de la velocidad.
2. **Escribir $m\frac{dv}{dt} = F(v)$**.
3. **Separar variables**: $\frac{m}{F(v)}dv = dt$.
4. **Integrar** ambos lados con condiciones iniciales.
5. **Despejar $v(t)$** si es posible.
6. **Integrar $v(t)$** para $x(t)$.
7. Si se pide $v(x)$, usar $mv\frac{dv}{dx} = F(v)$.

---

*Próximo tema: [Fuerza de Lorentz →](./05-fuerza-lorentz.md)*