# Cinemática del Cuerpo Rígido (Mecánica Racional)

**INSPT – UTN** | **Física Teórica I** | **Prof. Carlos Dibarbora**

---

## 📚 Cinemática de Cuerpos Rígidos

En **física teórica**, un **cuerpo rígido** es un sistema donde la distancia entre cualquier par de puntos se mantiene constante.

**Condición de rigidez:**
$$|\vec{r}_{B/A}| = \text{constante} \quad \Rightarrow \quad \frac{d}{dt}|\vec{r}_{B/A}|^2 = 0$$

---

## 1. Ecuación Fundamental de Velocidades

### 1.1 Relación de Velocidades en un Cuerpo Rígido

Para cualquier par de puntos $A$ y $B$ en un cuerpo rígido:

$$\vec{v}_B = \vec{v}_A + \vec{\omega} \times \vec{r}_{B/A}$$

**Donde:**
- $\vec{v}_A, \vec{v}_B$: Velocidades de los puntos $A$ y $B$
- $\vec{\omega}$: Velocidad angular del cuerpo rígido
- $\vec{r}_{B/A}$: Vector posición de $B$ respecto a $A$

---

### 1.2 Demostración (Condición de Rigidez)

Derivando $\vec{r}_{B/A} \cdot \vec{r}_{B/A} = \text{cte}$:

$$2\vec{r}_{B/A} \cdot \vec{v}_{B/A} = 0$$

Esto implica que $\vec{v}_{B/A}$ es perpendicular a $\vec{r}_{B/A}$, por lo que:

$$\vec{v}_{B/A} = \vec{\omega} \times \vec{r}_{B/A}$$

✅ **Esta es la base de toda la cinemática del rígido.**

---

## 2. Movimiento Plano (2D)

### 2.1 Grados de Libertad

En movimiento plano, un cuerpo rígido tiene **3 grados de libertad**:
1. Posición $x$ del CM
2. Posición $y$ del CM  
3. Orientación $\theta$ (ángulo de rotación)

---

### 2.2 Eje Instantáneo de Rotación (EIR)

**Definición:** Punto (o eje) donde $\vec{v} = 0$ en un instante dado.

**Cálculo:**
1. Conocemos $\vec{v}_A$ y $\vec{\omega}$
2. El EIR está en la dirección perpendicular a $\vec{v}_A$
3. Distancia al EIR: $r_{\text{EIR}} = \frac{|\vec{v}_A|}{|\vec{\omega}|}$

**Importancia:** En un instante, el cuerpo rígido "rueda" alrededor del EIR.

---

### 2.3 Velocidad de un Punto Cualquiera

Si conocemos el EIR (punto $O$ donde $\vec{v}_O = 0$):

$$\vec{v}_P = \vec{\omega} \times \vec{r}_{P/O}$$

✅ **Todos los puntos giran alrededor del EIR en ese instante.**

---

## 3. Aplicaciones Comunes

### 3.1 Disco Rígido

Para un disco de radio $R$:
- Si conocemos $\vec{v}_A$ en un punto, podemos encontrar $\omega$
- El EIR está en la intersección de perpendiculares a las velocidades

**Ejemplo:** Si $v_A = \omega R$ (tangencial), entonces $\omega = v_A/R$.

---

### 3.2 Barra Rígida (Mecanismos)

Para una barra que conecta dos puntos $A$ y $B$:
- $v_{B,\text{paralela}} = v_{A,\text{paralela}}$ (componente a lo largo de la barra)
- $v_{B,\text{perpendicular}} = \omega \times L$ (componente perpendicular)

**Condición de rigidez:** La velocidad relativa debe ser perpendicular a la barra.

---

### 3.3 Rodadura sin Deslizamiento

Para un cuerpo que rueda sin deslizar:

$$v_{CM} = \omega R$$

**Condición de no deslizamiento:**
$$\vec{v}_{\text{contacto}} = 0$$

**Ejemplo:** Cilindro rodando sobre un plano horizontal.

---

## 4. Aceleración en Cuerpos Rígidos

### 4.1 Relación de Aceleraciones

$$\vec{a}_B = \vec{a}_A + \vec{\alpha} \times \vec{r}_{B/A} - \omega^2 \vec{r}_{B/A}$$

**Donde:**
- $\vec{\alpha} = \dot{\vec{\omega}}$: Aceleración angular
- $-\omega^2 \vec{r}_{B/A}$: Aceleración centrípeta

---

### 4.2 Caso de Rotación alrededor de un Eje Fijo

Si el cuerpo gira alrededor de un eje fijo:
- $\vec{a}_t = \vec{\alpha} \times \vec{r}$ (tangencial)
- $\vec{a}_n = -\omega^2 \vec{r}$ (normal, centrípeta)

---

## 5. Ejercicios Resueltos (Nivel Física Teórica)

### Ejercicio 1: Compatibilidad de velocidades en disco rígido (Ejercicio 12 del TP5)

Para un disco de radio $R = 10$ cm, se dan $v_1 = 10$ cm/s y $v_2 = 2$ cm/s en puntos específicos.

**a)** ¿Son compatibles con movimiento rígido?
**b)** Si lo son, encontrar $\omega$ y la posición del EIR.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Disco</span>
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 EIR</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 40 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Verificar si $\vec{v}_B - \vec{v}_A$ es perpendicular a $\vec{r}_{B/A}$
- Si lo es, $\omega = \frac{|\vec{v}_B - \vec{v}_A|}{|\vec{r}_{B/A}|}$
- El EIR está donde $\vec{v} = 0$

**Solución (esbozo):**

**a) Verificación:**
$$\vec{v}_B - \vec{v}_A = \vec{\omega} \times \vec{r}_{B/A}$$

Si el producto vectorial es consistente, entonces es compatible.

**b) Cálculo de $\omega$:**
$$\omega = \frac{v_1}{r_1} = \frac{10}{10} = 1 \text{ rad/s}$$

**Posición del EIR:**
- Perpendicular a $\vec{v}_1$ en el punto 1
- Distancia: $r_{\text{EIR}} = \frac{v_1}{\omega} = 10$ cm

✅ **Respuesta:** Es compatible, $\omega = 1$ rad/s, EIR a 10 cm del centro.

---

### Ejercicio 2: Lámina rectangular rígida (Ejercicio 13 del TP5)

Una lámina de lados $a = 3$ cm, $b = 4$ cm gira con $f = 30$ rpm. El punto $A$ tiene $v_A = 10$ cm/s perpendicular a la diagonal $AB$.

**a)** Hallar $\vec{v}_B$.
**b)** Posición del EIR.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Lámina</span>
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Velocidades</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 45 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- $\omega = 2\pi f = 2\pi(30/60) = \pi$ rad/s
- $\vec{v}_B = \vec{v}_A + \vec{\omega} \times \vec{r}_{B/A}$
- El EIR está en la intersección de perpendiculares a $\vec{v}_A$ y $\vec{v}_B$

**Solución (esbozo):**

**a) $\vec{v}_B$:**

$$\vec{v}_B = \vec{v}_A + \omega \hat{k} \times \vec{r}_{B/A}$$

Donde $\vec{r}_{B/A} = (a, b) = (3, 4)$ cm.

Calculando:
$$v_{Bx} = v_{Ax} - \omega b = 0 - \pi(4) \approx -12.57 \text{ cm/s}$$
$$v_{By} = v_{Ay} + \omega a = 10 + \pi(3) \approx 10 + 9.42 = 19.42 \text{ cm/s}$$

✅ **Respuesta (a):** $\vec{v}_B \approx (-12.57, 19.42)$ cm/s.

**b) EIR:**

Encontrar punto donde $\vec{v} = 0$:
$$\vec{v}_P = \vec{v}_A + \vec{\omega} \times \vec{r}_{P/A} = 0$$

Resolviendo: $x_{\text{EIR}} \approx 3.18$ cm desde $A$ sobre $AB$.

---

## 6. Notas para el Estudiante de Física Teórica

1. **La ecuación $\vec{v}_B = \vec{v}_A + \vec{\omega} \times \vec{r}_{B/A}$ es fundamental**
2. **El EIR cambia con el tiempo** (excepto en rotación alrededor de eje fijo)
3. **En rodadura sin deslizamiento**, el punto de contacto es el EIR instantáneo
4. **Siempre verificar compatibilidad** antes de asumir movimiento rígido

---

## 🔗 Referencias Bibliográficas (Nivel Universitario)

1. **Goldstein** - *Classical Mechanics* (Cap. 4: The Motion of Rigid Bodies)
2. **Landau & Lifshitz** - *Mechanics* (Vol. 1, Sec. 23: The motion of a rigid body)
3. **Marion & Thornton** - *Classical Dynamics* (Cap. 11: Motion of Rigid Bodies)
4. **Hibbeler** - *Engineering Mechanics: Dynamics* (Cap. 16: Planar Kinematics of a Rigid Body)

---

**¡Continúa con:** `03-mecanismos-engranajes.md` (Mecanismos con pasadores y engranajes)