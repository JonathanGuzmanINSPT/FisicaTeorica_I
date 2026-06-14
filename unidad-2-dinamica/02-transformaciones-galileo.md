# 2. Transformaciones de Galileo

## Introducción

Las **transformaciones de Galileo** relacionan las coordenadas y velocidades de un punto material medidas desde dos sistemas de referencia que se mueven con velocidad relativa constante (sistemas inerciales).

Son la base de la **relatividad galileana**: las leyes de la mecánica son las mismas en todos los sistemas inerciales.

---

## Diagrama — Velocidad Relativa y Sistemas No Inerciales

<div align="center">
<img src="assets/transformaciones-sni.svg" alt="Diagrama: Transformaciones de Galileo, péndulo en vagón y centrifugadora" width="95%"/>
</div>

*Figura 1: Superior: trenes en sentidos opuestos con velocidad relativa. Inferior izquierda: péndulo en vagón acelerado. Inferior derecha: cuerpo en centrifugadora visto desde SRI y SNI.*

---

## Sistemas de Referencia Inerciales

Un **sistema de referencia inercial (SRI)** es aquel en el que se cumple la primera ley de Newton: un cuerpo libre de fuerzas mantiene su estado de reposo o movimiento rectilíneo uniforme.

**Propiedades:**
- Todos los SRI se mueven con **velocidad relativa constante** entre sí.
- No existe un SRI "absoluto".
- Cualquier sistema que se mueva con velocidad constante respecto a un SRI es también un SRI.
- Un sistema **acelerado** respecto a un SRI es **no inercial**.

---

## Transformaciones de Galileo

### Planteamiento

Sean dos sistemas de referencia $S$ y $S'$:
- $S$: sistema inercial "fijo" (ej: Tierra)
- $S'$: sistema inercial "móvil" (ej: tren), que se mueve con velocidad constante $\vec{V}$ respecto a $S$

En $t = 0$, los orígenes $O$ y $O'$ coinciden.

### Transformación de coordenadas

Un punto $P$ tiene coordenadas $\vec{r}$ en $S$ y $\vec{r}{\,'}$ en $S'$. La relación es:

$$\boxed{\vec{r} = \vec{r}{\,'} + \vec{V}t}$$

En componentes cartesianas (suponiendo $\vec{V} = V\,\hat{x}$):

$$
\begin{cases}
x = x' + Vt \\[4pt]
y = y' \\[4pt]
z = z' \\[4pt]
t = t'
\end{cases}
$$

> 💡 **Nota importante:** En mecánica clásica se asume que el tiempo es absoluto ($t = t'$). Esto cambia en relatividad especial.

### Transformación de velocidades

Derivando respecto al tiempo:

$$\boxed{\vec{v} = \vec{v}{\,'} + \vec{V}}$$

**Interpretación:** La velocidad de $P$ respecto a $S$ es la velocidad de $P$ respecto a $S'$ **más** la velocidad de $S'$ respecto a $S$.

### Transformación de aceleraciones

Derivando nuevamente, y como $\vec{V}$ es constante ($\dot{\vec{V}} = 0$):

$$\boxed{\vec{a} = \vec{a}{\,'}}$$

**Interpretación:** La aceleración es **invariante** ante transformaciones de Galileo. Esto implica que $\sum\vec{F} = m\vec{a}$ tiene la misma forma en todos los SRI.

---

## Principio de Relatividad de Galileo

> "Las leyes de la mecánica son las mismas en todos los sistemas de referencia inerciales."

**Consecuencias:**
- Ningún experimento mecánico realizado dentro de un sistema inercial puede detectar su velocidad absoluta.
- Solo se pueden medir **velocidades relativas** entre sistemas.
- El movimiento es relativo al sistema de referencia (no existe el "movimiento absoluto").

---

## Ejemplo Clásico — Trenes que se cruzan (Ejercicio 4)

**Situación:** Dos trenes viajan por vías paralelas en sentidos opuestos con velocidades de módulos $v_1 = 60$ km/h y $v_2 = 80$ km/h.

**Pregunta:** ¿Cuál es la velocidad de un tren respecto al otro?

**Resolución paso a paso:**

1. **Definir sistemas de referencia:**
   - $S$: sistema fijo a las vías (Tierra)
   - $S'$: sistema fijo al tren 1 ($V = v_1\hat{x}$)

2. **En $S$:** $\vec{v}_1 = +60\,\hat{x}$ km/h, $\vec{v}_2 = -80\,\hat{x}$ km/h

3. **Buscar $\vec{v}_{2/1}$** (velocidad del tren 2 respecto al tren 1):
   En $S'$, la velocidad del tren 2 es:
   $$\vec{v}_{2/1} = \vec{v}_2' = \vec{v}_2 - \vec{V} = -80\,\hat{x} - 60\,\hat{x} = -140\,\hat{x}\ \text{km/h}$$

**Interpretación:** Desde el tren 1, el tren 2 se acerca a $140$ km/h (suma de módulos porque van en sentido contrario).

---

## Velocidad Relativa en General

Para dos cuerpos $A$ y $B$ con velocidades $\vec{v}_A$ y $\vec{v}_B$ medidas desde el mismo sistema:

$$\boxed{\vec{v}_{B/A} = \vec{v}_B - \vec{v}_A}$$

**Casos particulares:**
- **Mismo sentido:** $|\vec{v}_{B/A}| = |v_B - v_A|$
- **Sentidos opuestos:** $|\vec{v}_{B/A}| = |v_B| + |v_A|$
- **Direcciones perpendiculares:** $|\vec{v}_{B/A}| = \sqrt{v_A^2 + v_B^2}$

---

## Composición de Movimientos

Cuando un cuerpo tiene movimiento compuesto (ej: un nadador en un río), podemos descomponerlo en:

- **Movimiento de arrastre:** el del medio móvil (agua, plataforma)
- **Movimiento relativo:** del cuerpo respecto al medio
- **Movimiento absoluto:** la suma (respecto a Tierra)

$$\vec{v}_{abs} = \vec{v}_{rel} + \vec{v}_{arr}$$

---

## Resumen de fórmulas

| Magnitud | Transformación | ¿Invariante? |
|---|---|---|
| Posición | $\vec{r} = \vec{r}{\,'} + \vec{V}t$ | ❌ |
| Velocidad | $\vec{v} = \vec{v}{\,'} + \vec{V}$ | ❌ |
| Aceleración | $\vec{a} = \vec{a}{\,'}$ | ✅ **Sí** |
| Fuerza | $\sum\vec{F} = \sum\vec{F}{\,'}$ | ✅ **Sí** |
| $\sum\vec{F} = m\vec{a}$ | Misma forma en ambos | ✅ **Sí** |

---

*Próximo tema: [Sistemas No Inerciales →](./03-sistemas-no-inerciales.md)*
