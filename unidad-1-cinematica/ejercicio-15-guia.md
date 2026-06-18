# Ejercicio 15 — Guía de resolución

**INSPT – UTN** | **Física Teórica I** | **Prof. Carlos Dibarbora**  
**Bloque 4:** Análisis de Movimiento 2D  
**Dificultad:** ⭐⭐ Intermedio | **Tiempo estimado:** 15 min

---

## Enunciado

Indicar el tipo de movimiento que realiza un punto material si las componentes cilíndricas del vector velocidad son:

a) $V_z = 0$
b) $V_\rho = 0$ y las demás componentes son constantes
c) $V_\phi = 0$ y las demás componentes son constantes

---

## 🧭 Recordatorio: Coordenadas cilíndricas

En coordenadas cilíndricas $(\rho, \phi, z)$, el vector velocidad se expresa como:

$$\mathbf{v} = V_\rho\,\hat{\boldsymbol{\rho}} + V_\phi\,\hat{\boldsymbol{\phi}} + V_z\,\hat{\mathbf{k}}$$

donde:

- $V_\rho = \dot{\rho}$ — componente **radial**: qué tan rápido cambia la distancia al eje $z$
- $V_\phi = \rho\,\dot{\phi}$ — componente **acimutal**: qué tan rápido gira alrededor del eje $z$
- $V_z = \dot{z}$ — componente **vertical**: qué tan rápido sube o baja

Cada caso se resuelve preguntando: *¿qué coordenadas cambian con el tiempo y cuáles permanecen constantes?*

---

## a) $V_z = 0$

**Pista:** ¿Qué coordenada está variando? ¿Cuáles podrían estar variando?

> Piensa en qué significa que la velocidad vertical sea cero. ¿Significa eso que $z$ es constante? ¿Y las otras componentes ($V_\rho$, $V_\phi$) pueden ser distintas de cero?

**Preguntas guía:**

1. Si $V_z = 0$, ¿cómo es el movimiento en la dirección $z$?
2. ¿En qué tipo de superficie/movimiento se traduce esto? (plano, recta, 3D...)
3. ¿Hay restricción sobre $\rho$ y $\phi$ o pueden variar libremente?

---

## b) $V_\rho = 0$ y las demás componentes son constantes

**Pista:** Si $V_\rho = 0$, entonces $\dot{\rho} = 0$, o sea $\rho = \text{cte}$. Además nos dicen que $V_\phi$ y $V_z$ son constantes.

**Preguntas guía:**

1. Con $\rho$ constante y $V_\phi = \rho\,\dot{\phi}$ constante, ¿cómo es $\dot{\phi}$?
2. Con $V_z$ constante, ¿cómo es $\dot{z}$? ¿qué tipo de movimiento en $z$?
3. Describe la trayectoria combinando el movimiento en el plano $xy$ y en $z$.
4. ¿Reconoces esta combinación de movimientos? (pista: una curva 3D muy conocida...)

---

## c) $V_\phi = 0$ y las demás componentes son constantes

**Pista:** Si $V_\phi = 0$, entonces $\rho\,\dot{\phi} = 0$. Como $\rho > 0$ (salvo en el origen), esto implica $\dot{\phi} = 0$, o sea $\phi = \text{cte}$. Además $V_\rho$ y $V_z$ son constantes.

**Preguntas guía:**

1. Con $\phi$ constante, ¿en qué tipo de trayectoria en el plano $xy$ se traduce?
2. Con $V_\rho = \dot{\rho}$ constante, ¿cómo varía $\rho$ con el tiempo? (integra)
3. Con $V_z$ constante, ¿cómo varía $z$ con el tiempo?
4. Describe la trayectoria completa. ¿Qué forma tiene en 3D?

---

## 📝 Resumen para comparar

| Caso | Condición | $\rho$ | $\phi$ | $z$ | Tipo de movimiento |
|---|---|---|---|---|---|
| a) | $V_z = 0$ | ? | ? | **constante** | — |
| b) | $V_\rho = 0$, $V_\phi, V_z$ ctes | **constante** | $\dot{\phi}$ cte | $\dot{z}$ cte | — |
| c) | $V_\phi = 0$, $V_\rho, V_z$ ctes | varía linealmente | **constante** | $\dot{z}$ cte | — |

---

## 🔑 Solución (para verificar después de intentarlo)

<details>
<summary>Haz clic para revelar la solución completa</summary>

### a) $V_z = 0$

$V_z = \dot{z} = 0 \implies z = \text{constante}$.

El movimiento está **confinado a un plano horizontal** (paralelo al $xy$). Las componentes $V_\rho$ y $V_\phi$ pueden ser cualesquiera, por lo que la partícula puede moverse libremente en ese plano. Es un **movimiento plano** (2D).

### b) $V_\rho = 0$, $V_\phi$ y $V_z$ constantes

$V_\rho = \dot{\rho} = 0 \implies \rho = \text{constante}$.

$V_\phi = \rho\,\dot{\phi} = \text{cte} \implies \dot{\phi} = \text{cte}$ (movimiento circular uniforme en el plano $xy$).

$V_z = \dot{z} = \text{cte} \implies z = z_0 + V_z t$ (movimiento rectilíneo uniforme vertical).

Combinando: **movimiento helicoidal uniforme** (hélice de radio $\rho$ constante, avance vertical uniforme, giro uniforme).

### c) $V_\phi = 0$, $V_\rho$ y $V_z$ constantes

$V_\phi = \rho\,\dot{\phi} = 0 \implies \dot{\phi} = 0 \implies \phi = \text{constante}$.

$V_\rho = \dot{\rho} = \text{cte} \implies \rho = \rho_0 + V_\rho t$ (movimiento rectilíneo uniforme radial).

$V_z = \dot{z} = \text{cte} \implies z = z_0 + V_z t$.

En coordenadas cartesianas, con $\phi$ fijo, esto es un **movimiento rectilíneo uniforme** en una dirección oblicua: la partícula se aleja (o acerca) del eje $z$ en línea recta mientras sube (o baja) uniformemente. La trayectoria es una **recta en 3D**.

</details>

---

*Actualiza el estado del ejercicio en `tp1-cinematica.md` una vez que lo hayas resuelto.*