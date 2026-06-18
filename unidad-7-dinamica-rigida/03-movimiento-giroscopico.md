# Movimiento Giroscópico (Mecánica Racional)

**INSPT – UTN** | **Física Teórica I** | **Prof. Carlos Dibarbora**

---

## 📚 Movimiento de un Cuerpo Rígido**

En **física teórica**, el movimiento más general de un cuerpo rígido tiene **6 grados de libertad**:
1. **3 traslacionales** (posición del CM)
2. **3 rotacionales** (orientación del cuerpo)

---

## 1. Ecuaciones de Euler**

### 1.1 En un sistema de referencia inercial

$$\left(\frac{d\vec{L}}{dt}\right)_{\text{inercial}} = \vec{\tau}_{\text{ext}}$$

**Problema:** $\vec{L}$ y $\vec{\omega}$ no son paralelos (excepto en ejes principales).

---

### 1.2 En un sistema que rota con el cuerpo (ejes principales)

Definimos $\vec{\omega} = (\omega_1, \omega_2, \omega_3)$ en ejes principales.

**Ecuaciones de Euler:**

$$\begin{align}
I_1 \dot{\omega}_1 - (I_2 - I_3)\omega_2\omega_3 &= \tau_1 \\
I_2 \dot{\omega}_2 - (I_3 - I_1)\omega_3\omega_1 &= \tau_2 \\
I_3 \dot{\omega}_3 - (I_1 - I_2)\omega_1\omega_2 &= \tau_3
\end{align}$$

**Donde $I_1, I_2, I_3$ son los momentos principales de inercia.**

---

## 2. Precesión Libre (Trompo Simétrico)

### 2.1 Cuerpo con simetría axial ($I_1 = I_2 \neq I_3$)

Para un trompo simétrico sin torques externos ($\vec{\tau} = 0$):

**Ecuación diferencial:**
$$\dot{\omega}_3 = 0 \quad \Rightarrow \quad \omega_3 = \text{constante}$$

$$\dot{\omega}_1 = \Omega \omega_2, \quad \dot{\omega}_2 = -\Omega \omega_1$$

**Donde $\Omega = \frac{I_3 - I_1}{I_1}\omega_3$ es la velocidad de precesión.**

---

### 2.2 Solución (Movimiento giroscópico)

$$\omega_1(t) = A\cos(\Omega t), \quad \omega_2(t) = A\sin(\Omega t)$$

**Interpretación:**
- El eje del cuerpo **precesa** alrededor del eje $\hat{e}_3$ con velocidad angular $\Omega$.
- Esto es la **precesión libre** (sin torques externos).

---

## 3. Giroscopio con Torque Externo (Precesión Forzada)

### 3.1 Ecuación fundamental

Para un giroscopio con un torque externo $\vec{\tau}$:

$$\vec{\tau} = \vec{\Omega}_p \times \vec{L}$$

**Donde:**
- $\vec{\Omega}_p$: Velocidad angular de precesión (lenta)
- $\vec{L} = I\vec{\omega}$: Momento angular del rotor (rápido)

---

### 3.2 Magnitud de la precesión

$$|\vec{\tau}| = |\vec{\Omega}_p| \cdot |\vec{L}| \sin\theta$$

**Para un giroscopio vertical:**
$$\Omega_p = \frac{Mgd}{I\omega}$$

**Donde:**
- $M$: Masa del rotor
- $g$: Aceleración gravitatoria
- $d$: Distancia del pivote al CM
- $I\omega$: Momento angular del rotor

---

## 4. Aplicaciones del Movimiento Giroscópico**

### 4.1 Estabilización (Giroscopio de control)

**Principio:** Un rotor girando resiste cambios en la dirección de $\vec{L}$.

**Aplicaciones:**
- Navegación inercial (aviones, barcos)
- Estabilización de satélites
- Giroscopios de motocicletas (preven vuelcos)

---

### 4.2 Precesión en sistemas rotantes

**Ejemplos:**
- **Trompo:** Precesa debido al torque de la gravedad
- **Tierra:** Precesión de los equinoccios (ciclo de ~26,000 años)
- **Moleculas:** Espectroscopía de microondas

---

## 5. Ejercicios Resueltos (Nivel Física Teórica)

### Ejercicio 1: Giroscopio precesando (Ejercicio 27 del TP6)

Un giroscopio precesa alrededor de un eje vertical. Describir qué sucede con su velocidad angular de precesión si se hacen los siguientes cambios:

a) Se duplica la velocidad angular del volante ($\omega$).
b) Se duplica el momento de inercia del volante ($I$).
c) Se duplica la masa total ($M$).
d) Se duplica la distancia del pivote al CM ($d$).
e) ¿Qué sucede si se duplican simultáneamente las cuatro variables?

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Giroscopio</span>
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Precesión</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 40 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Fórmula: $\Omega_p = \frac{Mgd}{I\omega}$
- Analizar cada caso: $\Omega_p \propto \frac{1}{\omega}$, $\Omega_p \propto \frac{1}{I}$, $\Omega_p \propto M$, $\Omega_p \propto d$

**Solución paso a paso:**

**a) $\omega \to 2\omega$:**
$$\Omega_p' = \frac{Mgd}{I(2\omega)} = \frac{1}{2}\Omega_p$$

✅ **Respuesta (a):** La velocidad de precesión se reduce a la mitad.

**b) $I \to 2I$:**
$$\Omega_p' = \frac{Mgd}{(2I)\omega} = \frac{1}{2}\Omega_p$$

✅ **Respuesta (b):** La velocidad de precesión se reduce a la mitad.

**c) $M \to 2M$:**
$$\Omega_p' = \frac{(2M)gd}{I\omega} = 2\Omega_p$$

✅ **Respuesta (c):** La velocidad de precesión se duplica.

**d) $d \to 2d$:**
$$\Omega_p' = \frac{Mg(2d)}{I\omega} = 2\Omega_p$$

✅ **Respuesta (d):** La velocidad de precesión se duplica.

**e) Todas las variables duplicadas:**
$$\Omega_p' = \frac{(2M)g(2d)}{(2I)(2\omega)} = \frac{4Mgd}{4I\omega} = \Omega_p$$

✅ **Respuesta (e):** La velocidad de precesión **no cambia**.

---

### Ejercicio 2: Giroscopio estabilizador de un barco (Ejercicio 28 del TP6)

El giroscopio estabilizador de un barco es un disco sólido de 50,000 kg de masa, con un radio de 2 m que gira sobre un eje vertical con una velocidad angular de 600 rpm. Calcular el momento de torsión necesario para hacer que el eje precese a razón de un grado por segundo.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Giroscopio</span>
  <span style="background: #fff9c4; color: #f57f17; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🛠️ Torque</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 35 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- $\tau = \Omega_p \times L$
- $L = I\omega = \frac{1}{2}MR^2 \omega$
- $\Omega_p = 1^\circ/\text{s} = \frac{\pi}{180}$ rad/s

**Solución paso a paso:**

**1. Momento angular del disco:**

$$I = \frac{1}{2}MR^2 = \frac{1}{2}(50,000)(2)^2 = 100,000 \text{ kg·m}^2$$

$$\omega = 600 \text{ rpm} = 600 \times \frac{2\pi}{60} = 20\pi \text{ rad/s}$$

$$L = I\omega = 100,000 \times 20\pi \approx 6.28 \times 10^6 \text{ kg·m}^2/\text{s}$$

**2. Velocidad de precesión:**

$$\Omega_p = 1^\circ/\text{s} = \frac{\pi}{180} \text{ rad/s} \approx 0.01745 \text{ rad/s}$$

**3. Torque necesario:**

$$\tau = \Omega_p \cdot L = (0.01745)(6.28 \times 10^6) \approx 1.096 \times 10^5 \text{ N·m}$$

✅ **Respuesta:** $\tau \approx 1.1 \times 10^5$ N·m.

---

### Ejercicio 3: Disco precesando (Ejercicio 29 del TP6)

El centro de un disco homogéneo de masa $m = 0.1$ kg y radio $r = 5$ cm es mantenido a una distancia $R = 10$ cm del eje vertical $z$ mediante una varilla de masa despreciable. El disco se encuentra girando alrededor del eje horizontal $y$ (dirección de la varilla) con velocidad angular $\omega = 100$ rad/s y en ningún momento toma contacto con el piso. Halle la velocidad angular $\Omega$ de precesión del disco en torno al eje $z$.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Precesión</span>
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Disco</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 45 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Torque debido al peso: $\tau = mgR$
- Momento angular del disco: $L = I\omega = \frac{1}{2}mr^2 \omega$
- $\Omega = \frac{mgR}{I\omega}$

**Solución paso a paso:**

**1. Torque del peso:**

$$\tau = mgR = (0.1)(9.8)(0.10) = 0.098 \text{ N·m}$$

**2. Momento angular del disco:**

$$I = \frac{1}{2}mr^2 = \frac{1}{2}(0.1)(0.05)^2 = 1.25 \times 10^{-4} \text{ kg·m}^2$$

$$L = I\omega = (1.25 \times 10^{-4})(100) = 1.25 \times 10^{-2} \text{ kg·m}^2/\text{s}$$

**3. Velocidad de precesión:**

$$\Omega = \frac{\tau}{L} = \frac{0.098}{1.25 \times 10^{-2}} \approx 7.84 \text{ rad/s}$$

✅ **Respuesta:** $\Omega \approx 7.84$ rad/s.

---

## 6. Notas para el Estudiante de Física Teórica

1. **La precesión ocurre cuando $\vec{\tau} \perp \vec{L}$** (torque perpendicular al momento angular)
2. **En ejes principales**, $\vec{L}$ y $\vec{\omega}$ son paralelos
3. **Giroscopios:** Resisten cambios en la dirección de $\vec{L}$ (estabilización)
4. **Precesión libre:** Ocurre incluso sin torques externos (cuerpos asimétricos)

---

## 🔗 Referencias Bibliográficas (Nivel Universitario)

1. **Goldstein** - *Classical Mechanics* (Cap. 5: The Rigid Body Equations of Motion)
2. **Landau & Lifshitz** - *Mechanics* (Vol. 1, Sec. 33: The asymmetrical top)
3. **Marion & Thornton** - *Classical Dynamics* (Cap. 11: Motion of Rigid Bodies)
4. **Hibbeler** - *Engineering Mechanics: Dynamics* (Cap. 20: Three-Dimensional Kinetics)

---

**¡Continúa con:** `README.md` (índice de la Unidad 7)