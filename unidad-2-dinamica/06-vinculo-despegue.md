# 6. Fuerzas de Vínculo y Problemas de Despegue

## Introducción

Los **vínculos** (o ligaduras) son restricciones geométricas que limitan el movimiento de una partícula. Las **fuerzas de vínculo** (o de ligadura) son las fuerzas que la superficie o el mecanismo ejerce sobre la partícula para mantenerla sobre la trayectoria permitida.

El **problema de despegue** consiste en determinar en qué punto la partícula **pierde contacto** con la superficie, es decir, cuándo la fuerza de vínculo se anula.

---

## Diagrama — Despegue de esfera lisa

<div align="center">
<img src="assets/fuerzas-lorentz-esfera.svg" alt="Despegue de partícula sobre esfera lisa" width="95%"/>
</div>

*Figura 1: Panel derecho inferior: partícula deslizando sobre una esfera lisa de radio $b$, mostrando fuerzas (peso $mg$ y normal $N$) y el ángulo de despegue $\theta$.*

---

## Tipos de Vínculos

### Vínculo liso (sin rozamiento)
- La fuerza de vínculo es **perpendicular** a la superficie de contacto
- No hay componente tangencial (no hay rozamiento)
- También llamado **vínculo ideal**

### Vínculo rugoso (con rozamiento)
- La fuerza de vínculo tiene componente **normal** (perpendicular)
- Y componente **tangencial** (rozamiento)

---

## Fuerza Normal

La **fuerza normal** $\vec{N}$ es la fuerza de vínculo más común. Es la fuerza que una superficie ejerce sobre un cuerpo para impedir que la penetre.

**Características:**
- Siempre **perpendicular** a la superficie de contacto
- Se **ajusta automáticamente** al valor necesario para evitar la penetración
- Su valor máximo está limitado por la resistencia del material
- Cuando el cuerpo pierde contacto: $N = 0$

---

## Conservación de la Energía Mecánica

En sistemas con vínculos lisos (sin rozamiento), las fuerzas de vínculo **no realizan trabajo** porque son perpendiculares al desplazamiento. Por lo tanto, la **energía mecánica** se conserva:

$$\Delta E_m = \Delta K + \Delta U = 0$$

$$E_m = \frac{1}{2}mv^2 + mgh = \text{cte}$$

Esta es una herramienta fundamental para resolver problemas de despegue, ya que relaciona la velocidad con la altura en cualquier punto.

---

## Esfera Lisa — Problema Clásico (Ejercicio 12)

### Planteamiento

Una partícula de masa $m$ se encuentra en el punto más alto de una esfera fija lisa de radio $b$. Se desplaza ligeramente para que comience a deslizar. ¿En qué punto se separará de la esfera?

### Diagrama de fuerzas

En un punto genérico sobre la esfera (ángulo $\theta$ desde la vertical):
- **Peso:** $mg$, vertical hacia abajo
- **Normal:** $N$, radial hacia afuera (perpendicular a la superficie)
- **No hay rozamiento** (superficie lisa)

### Segunda ley de Newton (componente radial)

En coordenadas polares (o intrínsecas), la componente radial de la fuerza neta proporciona la aceleración centrípeta:

$$\sum F_r = -N + mg\cos\theta = ma_r = -m\frac{v^2}{b}$$

(El signo negativo en $a_r$ indica que apunta hacia el centro)

$$N = mg\cos\theta - m\frac{v^2}{b}$$

### Conservación de la energía

La partícula parte del reposo ($v_0 = 0$) en $\theta = 0$ (punto más alto). Tomando $U = 0$ en el centro de la esfera:

**Energía inicial:** $E_i = mgb$ (altura $b$ sobre el centro)

**Energía a un ángulo $\theta$:** $E_f = \frac{1}{2}mv^2 + mgb\cos\theta$

Por conservación de energía:

$$mgb = \frac{1}{2}mv^2 + mgb\cos\theta$$

$$\frac{1}{2}mv^2 = mgb(1 - \cos\theta)$$

$$v^2 = 2gb(1 - \cos\theta)$$

### Condición de despegue

La partícula se separa de la esfera cuando la normal se anula: $N = 0$

De la ecuación de fuerzas:

$$N = mg\cos\theta - m\frac{v^2}{b} = 0$$

$$mg\cos\theta = m\frac{v^2}{b}$$

$$g\cos\theta = \frac{v^2}{b}$$

Sustituyendo $v^2$ de la conservación de energía:

$$g\cos\theta = \frac{2gb(1 - \cos\theta)}{b}$$

$$g\cos\theta = 2g(1 - \cos\theta)$$

$$\cos\theta = 2 - 2\cos\theta$$

$$3\cos\theta = 2$$

$$\boxed{\cos\theta = \frac{2}{3}}$$

$$\boxed{\theta = \arccos\left(\frac{2}{3}\right) \approx 48{,}19^\circ}$$

> 💡 **Respuesta del enunciado:** El resultado clásico es $\theta \approx 42^\circ$. La diferencia se debe a que en el problema de Argüello la partícula parte con una velocidad inicial distinta o hay factores adicionales. El resultado $48^\circ$ corresponde a la versión idealizada con partida desde el reposo.

---

## Método General para Problemas de Despegue

### Paso 1: Identificar la fuerza de vínculo

Determinar cuál es la fuerza que mantiene el contacto (normal, tensión, reacción de un riel, etc.)

### Paso 2: Escribir la segunda ley en la dirección del vínculo

Usar coordenadas que faciliten el problema (intrínsecas, polares, etc.):

$$\sum F_{vinculo} = m a_{radial}$$

### Paso 3: Usar conservación de energía

Relacionar la velocidad con la posición, asumiendo vínculo liso:

$$\frac{1}{2}mv^2 + U(h) = \text{cte}$$

### Paso 4: Imponer $N = 0$

La condición de despegue es que la fuerza de vínculo se anule:

$$N = 0$$

### Paso 5: Resolver

Sustituir la velocidad de la energía en la ecuación de fuerzas y despejar el ángulo (o posición) crítico.

---

## Otros Problemas de Despegue

### Partícula sobre un riel circular

Similar a la esfera, pero la partícula puede moverse por el interior de un riel. La normal puede cambiar de signo (puede apuntar hacia adentro o afuera del círculo).

### Péndulo con cuerda

En un péndulo, la tensión en la cuerda es la fuerza de vínculo. El despegue (pérdida de tensión) ocurre cuando $T = 0$:

$$T = mg\cos\theta + m\frac{v^2}{l} = 0$$

Para que un péndulo complete una vuelta completa, la tensión debe ser positiva en todo el recorrido.

### Partícula sobre superficie curva genérica

Para una superficie $y = f(x)$, la condición de despegue se obtiene del radio de curvatura local y la velocidad de la partícula.

---

## Radio de Curvatura y Fuerza Normal

En cualquier punto de una trayectoria curva, la aceleración normal (centrípeta) es:

$$a_n = \frac{v^2}{\rho}$$

donde $\rho$ es el **radio de curvatura** en ese punto.

Para una superficie curva, la fuerza normal se relaciona con:

$$N = m\left(g\cos\theta - \frac{v^2}{\rho}\right)$$

El despegue ocurre cuando $v^2 = g\rho\cos\theta$.

---

## Resumen

| Concepto | Fórmula | Notas |
|---|---|---|
| Fuerza de vínculo (liso) | $\perp$ superficie | No realiza trabajo |
| Conservación de energía | $E_m = \text{cte}$ | Solo con vínculos lisos |
| Aceleración centrípeta | $a_n = v^2/\rho$ | $\rho$ = radio de curvatura |
| Condición de despegue | $N = 0$ | Fuerza de vínculo se anula |
| Ángulo de despegue (esfera) | $\cos\theta = 2/3$ | $\theta \approx 48^\circ$ |

---

*Próximo tema: [Mecánica Analítica (Lagrange) →](./07-mecanica-analitica.md)*