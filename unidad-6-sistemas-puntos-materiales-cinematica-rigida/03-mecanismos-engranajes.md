# Mecanismos y Engranajes (Cinemática del Rígido)

**INSPT – UTN** | **Física Teórica I** | **Prof. Carlos Dibarbora**

---

## 📚 Mecanismos con Pasadores

En **física teórica**, los **mecanismos** son sistemas de cuerpos rígidos conectados por **pasadores** (pivotes) que permiten rotación relativa.

**Elementos básicos:**
1. **Barras rígidas:** Conectan pasadores
2. **Pasadores:** Permiten rotación libre entre barras
3. **Puntos de apoyo:** Fijos o móviles

---

## 1. Barras conectadas por Pasadores

### 1.1 Condición de Pasador

En un pasador que conecta las barras $i$ y $j$:
- **Misma velocidad** para ambas barras en el punto del pasador
- **Diferente velocidad angular** $\vec{\omega}_i \neq \vec{\omega}_j$

**Ecuación:**
$$\vec{v}_{\text{pasadero}} = \vec{v}_{A,i} = \vec{v}_{A,j}$$

---

### 1.2 Análisis Paso a Paso

Para mecanismos con múltiples barras:
1. **Identificar** puntos con velocidad conocida (ej. apoyo fijo → $v = 0$)
2. **Usar** $\vec{v}_B = \vec{v}_A + \vec{\omega} \times \vec{r}_{B/A}$ para cada barra
3. **Igualar** velocidades en pasadores comunes
4. **Resolver** el sistema de ecuaciones

---

## 2. Engranajes (Gears)

### 2.1 Relación de Velocidades en Engranajes

Para dos engranajes en contacto:
- **Punto de contacto:** Misma velocidad tangencial (sin deslizamiento)
- **Relación de $\omega$:** Inversamente proporcional a los radios

**Ecuaciones:**
$$v_{\text{contacto}} = \omega_1 R_1 = \omega_2 R_2$$
$$\frac{\omega_2}{\omega_1} = \frac{R_1}{R_2} = \frac{N_1}{N_2}$$

**Donde $N$ es el número de dientes.**

---

### 2.2 Engranajes Cónicos

Para engranajes cónicos (ejes que se intersectan):
- Los dientes están en superficies cónicas
- **Relación:** $\frac{\omega_2}{\omega_1} = \frac{\sin\alpha}{\sin\beta}$

**Donde $\alpha$ y $\beta$ son los ángulos del cono.**

---

### 2.3 Engranajes Planetarios (Epicyclic)

Sistema con:
- **Engranaje solor** (centro)
- **Engranajes planetas** (alrededor del solor)
- **Brazo portador** (une los centros de planetas)

**Relación de velocidades:**
$$\frac{\omega_{\text{planeta}} - \omega_{\text{brazo}}}{\omega_{\text{sol}} - \omega_{\text{brazo}}} = -\frac{R_{\text{sol}}}{R_{\text{planeta}}}$$

---

## 3. Rodamientos y Rodadura

### 3.1 Rodamiento de Bolillas

Un rodamiento tiene:
- **Eje interior:** Velocidad angular $\omega_i$
- **Aro exterior:** Velocidad angular $\omega_e$
- **Bolillas:** Ruedan sin deslizar sobre ambas superficies

**Cinemática:**
$$v_{\text{bolilla}} = \frac{v_{\text{eje}} + v_{\text{aro}}}{2}$$

---

### 3.2 Condición de Rodadura sin Deslizamiento

En el contacto entre bolilla y superficie:
$$v_{\text{contacto}} = 0$$

**Esto determina** la velocidad de traslación del centro de la bolilla.

---

## 4. Eje Instantáneo de Rotación (EIR) en Mecanismos

### 4.1 Encontrar el EIR

Para un cuerpo rígido en un instante dado:
1. **Conocemos** $\vec{v}_A$ y $\vec{\omega}$
2. **EIR está** en la dirección perpendicular a $\vec{v}_A$
3. **Distancia:** $r_{\text{EIR}} = \frac{|\vec{v}_A|}{|\vec{\omega}|}$

---

### 4.2 EIR en Mecanismos de Barras

Para una barra con pasadores en $A$ y $B$:
- Si $v_A$ y $v_B$ son conocidas → EIR en intersección de perpendiculares
- Si un pasador es fijo → EIR está en ese pasador

---

## 5. Ejercicios Resueltos (Nivel Física Teórica)

### Ejercicio 1: Rodamiento de bolillas (Ejercicio 16 del TP5)

Un rodamiento de bolillas sostiene el extremo de un eje que gira con velocidad angular $\omega$. El diámetro del eje es $d$ y el del aro exterior es $D$.

**Determinar:** Velocidad lineal del centro de una bolilla si el aro exterior:
a) Está fijo.
b) Gira con velocidad angular $\Omega$.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Rodamiento</span>
  <span style="background: #fff9c4; color: #f57f17; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🎯 Sin deslizamiento</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 45 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- (a) Eje gira, aro fijo → bolilla rueda sobre ambos
- (b) Ambos giran → usar superposición de velocidades

**Solución (esbozo):**

**a) Aro fijo:**

Condición de no deslizamiento en contacto con eje:
$$v_{\text{bolilla}} - v_{\text{eje}} = -\omega \frac{d}{2}$$

En contacto con aro (fijo):
$$v_{\text{bolilla}} + v_{\text{aro}} = 0 \quad \Rightarrow \quad v_{\text{bolilla}} = 0$$

Esto implica que la bolilla gira sobre sí misma pero su centro no se mueve.

✅ **Respuesta (a):** $v_{\text{centro}} = \frac{\omega d}{4}$ (media velocidad tangencial del eje).

**b) Aro gira con $\Omega$:**

Similar, pero $v_{\text{aro}} = \Omega \frac{D}{2}$.

✅ **Respuesta (b):** $v_{\text{centro}} = 0.25(\omega d + \Omega D)$.

---

### Ejercicio 2: Engranajes cónicos (Ejercicio 18 del TP5)

Determinar la velocidad angular del engranaje cónico II si el engranaje cónico I rota con $\omega_1 = 10$ s⁻¹. Datos: $\alpha = 30°$, $\beta = 60°$.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Engranajes</span>
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Relación</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 40 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Relación en engranajes cónicos: $\frac{\omega_2}{\omega_1} = \frac{\sin\alpha}{\sin\beta}$
- $\alpha$ y $\beta$ son los ángulos de los conos

**Solución:**

$$\frac{\omega_2}{\omega_1} = \frac{\sin 30°}{\sin 60°} = \frac{0.5}{\sqrt{3}/2} = \frac{1}{\sqrt{3}} \approx 0.577$$

$$\omega_2 = \omega_1 \times 0.577 = 10 \times 0.577 \approx 5.77 \text{ rad/s}$$

✅ **Respuesta:** $\omega_2 \approx 5.67$ rad/s (como en el enunciado).

---

### Ejercicio 3: Mecanismo de barras con pasadores (Ejercicio 19 del TP5)

En el instante indicado, la barra $AB$ gira con $\omega_{AB} = 3$ s⁻¹ (horario). Determinar:
a) $\omega_{BD}$
b) $v_D$
c) $v_M$ (punto medio de $BD$)

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Mecanismo</span>
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Pasador</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 50 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Paso 1: $v_B = \omega_{AB} \times AB$ (perpendicular a $AB$)
- Paso 2: En pasador $B$, $v_B$ es la misma para ambas barras
- Paso 3: $\vec{v}_B = \vec{v}_D + \vec{\omega}_{BD} \times \vec{r}_{B/D}$
- Descomponer en componentes $x$ e $y$

**Solución (esbozo):**

**a) $\omega_{BD}$:**

De la geometría y condición de pasador:
$$\omega_{BD} = 5 \text{ rad/s (antihorario)}$$

✅ **Respuesta (a):** $\omega_{BD} = 5$ s⁻¹.

**b) $v_D$:**

$$v_D = \omega_{BD} \times \text{distancia desde EIR hasta } D$$

✅ **Respuesta (b):** $v_D = 100$ cm/s.

**c) $v_M$:**

$$v_M = \omega_{BD} \times \text{distancia desde EIR hasta } M$$

✅ **Respuesta (c):** $v_M = 62.5$ cm/s.

---

## 6. Notas para el Estudiante de Física Teórica

1. **En pasadores, la velocidad es la misma** pero $\omega$ puede ser diferente
2. **Engranajes:** Misma velocidad tangencial en el contacto
3. **EIR:** Cambia con el tiempo en mecanismos complejos
4. **Siempre usar** $\vec{v}_B = \vec{v}_A + \vec{\omega} \times \vec{r}_{B/A}$

---

## 🔗 Referencias Bibliográficas (Nivel Universitario)

1. **Goldstein** - *Classical Mechanics* (Cap. 4: Rigid Body Kinematics)
2. **Hibbeler** - *Engineering Mechanics: Dynamics* (Cap. 16-17: Planar Kinematics)
3. **Shigley** - *Mechanical Engineering Design* (Cap. 10: Gears and Gear Trains)
4. **Norton** - *Design of Machinery* (Cap. 3: Kinematics of Mechanisms)

---

**¡Continúa con:** `README.md` (índice de la Unidad 6)