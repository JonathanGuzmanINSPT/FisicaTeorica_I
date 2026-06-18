# Ecuaciones de la Dinámica del Rígido (Mecánica Racional)

**INSPT – UTN** | **Física Teórica I** | **Prof. Carlos Dibarbora**

---

## 📚 Ecuación Fundamental de la Dinámica

En **física teórica**, la dinámica del cuerpo rígido se basa en:

1. **Ecuación del movimiento del CM** (como si toda la masa estuviera allí)
2. **Ecuación de rotación** respecto al CM (o a un eje fijo)

---

## 1. Ecuación del Movimiento del Centro de Masa

### 1.1 Fuerzas Externas y CM

$$\sum \vec{F}_{\text{ext}} = M \vec{a}_{\text{CM}}$$

**Interpretación:** El CM se mueve como una partícula de masa $M$ bajo la fuerza externa neta.

---

### 1.2 Teorema de la Energía Cinética (König)

$$E_c = \frac{1}{2}M V_{\text{CM}}^2 + \frac{1}{2}\sum m_i v_i'^2$$

**Donde:**
- Primer término: Energía del movimiento del CM
- Segundo término: Energía cinética relativa al CM

Para rotación alrededor del CM:
$$E_c = \frac{1}{2}M V_{\text{CM}}^2 + \frac{1}{2}I_{\text{CM}} \omega^2$$

---

## 2. Ecuación de Rotación (Torque y Momento Angular)

### 2.1 Definición de Torque ($\vec{\tau}$)

$$\vec{\tau} = \vec{r} \times \vec{F}$$

**Torque neto respecto a un punto $O$:**
$$\vec{\tau}_O = \sum \vec{r}_i \times \vec{F}_i$$

---

### 2.2 Momento Angular ($\vec{L}$)

Para una partícula:
$$\vec{L} = \vec{r} \times \vec{p}$$

Para un sistema de partículas:
$$\vec{L}_O = \sum \vec{r}_i \times m_i \vec{v}_i$$

Para un cuerpo rígido rotando alrededor de un eje fijo:
$$\vec{L} = I \vec{\omega}$$

**Donde $I$ es el momento de inercia respecto al eje.**

---

### 2.3 Ecuación Diferencial de Rotación

$$\vec{\tau}_O = \frac{d\vec{L}_O}{dt}$$

**Para eje fijo (magnitud escalar):**
$$\tau = I \alpha$$

**Donde $\alpha = \dot{\omega}$ es la aceleración angular.**

---

## 3. Trabajo y Energía en Cuerpos Rígidos

### 3.1 Trabajo de una Fuerza

$$W = \int \vec{F} \cdot d\vec{r}_{\text{CM}} + \int \vec{\tau} \cdot d\vec{\theta}$$

**Primer término:** Trabajo de la fuerza neta sobre el CM  
**Segundo término:** Trabajo de los torques (rotación)

---

### 3.2 Teorema de las Fuerzas Vivas

$$\Delta E_c = W_{\text{no cons.}} + W_{\text{cons.}}$$

**Para fuerzas conservativas:**
$$\Delta E_c + \Delta U = 0 \quad \Rightarrow \quad E_{\text{mec}} = \text{cte}$$

---

## 4. Aplicaciones Comunes

### 4.1 Rotación alrededor de un Eje Fijo

**Ecuaciones:**
1. $\sum F_x = M a_{\text{CM},x}$
2. $\sum F_y = M a_{\text{CM},y}$
3. $\sum \tau_O = I_O \alpha$

**Ejemplo:** Polea con masa, disco rodando.

---

### 4.2 Rodadura sin Deslizamiento

**Condición cinemática:**
$$a_{\text{CM}} = \alpha R$$

**Condición de no deslizamiento:**
$$f \leq \mu_e N$$

**Ejemplo:** Disco, esfera, cilindro rodando por un plano inclinado.

---

### 4.3 Sistemas con Poleas y Cuerdas

**Relación de aceleraciones:**
- Cuerda inextensible → misma magnitud de aceleración
- Polea con masa → considerar momento de inercia

**Ejemplo:** Máquina de Atwood con polea de masa $M$.

---

## 5. Ejercicios Resueltos (Nivel Física Teórica)

### Ejercicio 1: Piedra de amolar (Ejercicio 1 del TP6)

Una piedra de amolar de 60 kg tiene $I = 2.7$ kg·m². Se presiona con una fuerza normal de 50 N. El coeficiente cinético es $\mu_c = 0.6$ y hay un torque de fricción en el eje de 5 N·m.

a) ¿Fuerza tangencial necesaria para llevarla de 0 a 120 rpm en 9 s?
b) ¿Fuerza para mantenerla a velocidad constante?

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Torque</span>
  <span style="background: #fff9c4; color: #f57f17; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🛠️ Fricción</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 40 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- $\alpha = \frac{\Delta \omega}{\Delta t} = \frac{120 \times \frac{2\pi}{60}}{9}$
- $\tau_{\text{total}} = I\alpha = \tau_{\text{aplicado}} - \tau_{\text{fricción}}$
- $F_{\text{tang}} = \frac{\tau_{\text{aplicado}}}{r}$

**Solución paso a paso:**

**a) Aceleración angular:**

$$\omega_f = 120 \text{ rpm} = 120 \times \frac{2\pi}{60} = 4\pi \text{ rad/s}$$

$$\alpha = \frac{\omega_f - \omega_0}{t} = \frac{4\pi - 0}{9} \approx 1.396 \text{ rad/s}^2$$

**Torque total necesario:**

$$\tau_{\text{total}} = I\alpha = 2.7 \times 1.396 \approx 3.77 \text{ N·m}$$

**Torque de fricción:**

- Fricción en el borde: $f = \mu_c N = 0.6 \times 50 = 30$ N
- Torque de fricción: $\tau_{\text{borde}} = f \times R = 30 \times 0.3 = 9$ N·m
- Torque en ejes: $\tau_{\text{eje}} = 5$ N·m
- **Total fricción:** $\tau_{\text{fric}} = 9 + 5 = 14$ N·m

**Torque aplicado:**

$$\tau_{\text{aplicado}} = \tau_{\text{total}} + \tau_{\text{fric}} = 3.77 + 14 = 17.77 \text{ N·m}$$

**Fuerza tangencial:**

$$F_t = \frac{\tau_{\text{aplicado}}}{r_{\text{manivela}}} = \frac{17.77}{0.5} \approx 35.54 \text{ N}$$

✅ **Respuesta (a):** $F_t \approx 35.54$ N.

**b) Velocidad constante ($\alpha = 0$):**

$$\tau_{\text{aplicado}} = \tau_{\text{fric}} = 14 \text{ N·m}$$

$$F_t = \frac{14}{0.5} = 28 \text{ N}$$

✅ **Respuesta (b):** $F_t = 28$ N.

---

### Ejercicio 2: Máquina de Atwood (Ejercicio 2 del TP6)

En una máquina de Atwood, calcular la aceleración de los bloques y las fuerzas en la cuerda si esta no resbala sobre la polea (masa $M$, radio $R$).

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Atwood</span>
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Polea</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 30 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Momento de inercia de polea: $I = \frac{1}{2}MR^2$
- Ecuaciones: $m_1g - T_1 = m_1a$, $T_2 - m_2g = m_2a$, $\tau = I\alpha = (T_1 - T_2)R$
- Condición: $a = \alpha R$

**Solución (esbozo):**

1. **Ecuaciones para los bloques:**
   $$m_1g - T_1 = m_1a \quad \text{(bloque 1)}$$
   $$T_2 - m_2g = m_2a \quad \text{(bloque 2)}$$

2. **Ecuación para la polea:**
   $$\tau = I\alpha = (T_1 - T_2)R$$
   $$\frac{1}{2}MR^2 \cdot \frac{a}{R} = (T_1 - T_2)R$$
   $$\frac{1}{2}Ma = T_1 - T_2$$

3. **Sumar ecuaciones:**
   $$m_1g - m_2g = (m_1 + m_2)a + \frac{1}{2}Ma$$

4. **Despejar $a$:**
   $$a = \frac{(m_1 - m_2)g}{m_1 + m_2 + \frac{M}{2}}$$

✅ **Respuesta:** $a = \frac{(m_1 - m_2)g}{m_1 + m_2 + M/2}$

---

## 6. Notas para el Estudiante de Física Teórica

1. **La ecuación $\vec{\tau} = I\vec{\alpha}$ solo es válida si el eje es fijo o pasa por el CM**
2. **En rodadura sin deslizamiento**, la fricción no disipa energía (hace trabajo de rotación)
3. **Siempre usar** $\sum \tau = I\alpha$ para problemas con torques
4. **Conservación de $L$** si $\tau_{\text{ext}} = 0$

---

## 🔗 Referencias Bibliográficas (Nivel Universitario)

1. **Goldstein** - *Classical Mechanics* (Cap. 4-5: Rigid Body Dynamics)
2. **Landau & Lifshitz** - *Mechanics* (Vol. 1, Sec. 24-32: Motion of Rigid Bodies)
3. **Marion & Thornton** - *Classical Dynamics* (Cap. 11-12: Rigid Body Motion)
4. **Hibbeler** - *Engineering Mechanics: Dynamics* (Cap. 17-18: Planar Kinetics of a Rigid Body)

---

**¡Continúa con:** `02-momentos-inercia-tensor.md` (Momentos de inercia y tensor)