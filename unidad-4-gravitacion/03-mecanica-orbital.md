# Mecánica Orbital (Mecánica Racional)

**INSPT – UTN** | **Física Teórica I** | **Prof. Carlos Dibarbora**

---

## 📚 Leyes de Kepler y Newton

Las **leyes de Kepler** (empíricas) se derivan de la **ley de gravitación universal** de Newton.

---

## 1. Primera Ley de Kepler (Ley de las Órbitas)

> **Todos los planetas se mueven en órbitas elípticas con el Sol en uno de los focos.**

### 1.1 Ecuación de la elipse en coordenadas polares

$$r(\theta) = \frac{a(1 - e^2)}{1 + e\cos\theta}$$

**Donde:**
- $a$: Semieje mayor
- $e$: Excentricidad ($0 \leq e < 1$ para elipse)
- $\theta$: Anomalía verdadera (ángulo desde el perihelio)

**Casos especiales:**
- $e = 0$: Circunferencia
- $e = 1$: Parábola (trayectoria de escape)
- $e > 1$: Hipérbola (trayectoria hiperbólica)

---

## 2. Segunda Ley de Kepler (Ley de las Áreas)

> **El radio vector que une el planeta con el Sol barre áreas iguales en tiempos iguales.**

### 2.1 Interpretación física: Conservación del momento angular

El **momento angular** $L$ se conserva en fuerzas centrales:

$$\vec{L} = \vec{r} \times \vec{p} = m (\vec{r} \times \vec{v}) = \text{constante}$$

**Rapidez areolar:**
$$\frac{dA}{dt} = \frac{1}{2} r^2 \dot{\theta} = \frac{L}{2m} = \text{constante}$$

✅ **Esto demuestra la 2ª Ley de Kepler.**

---

## 3. Tercera Ley de Kepler (Ley de los Períodos)

> **El cuadrado del período orbital es proporcional al cubo del semieje mayor.**

### 3.1 Derivación desde la Mecánica Newtoniana

Para una **órbita circular** de radio $r$:

$$F_g = \frac{GMm}{r^2} = m \frac{v^2}{r} = m \omega^2 r$$

Como $v = \frac{2\pi r}{T}$:

$$\frac{GM}{r^2} = \frac{4\pi^2 r}{T^2}$$

$$T^2 = \frac{4\pi^2}{GM} r^3$$

✅ **Para elipses:** $r$ se reemplaza por $a$ (semieje mayor).

### 3.2 Forma general (2º Ley de Newton)

$$\frac{T_1^2}{T_2^2} = \frac{a_1^3}{a_2^3}$$

**Aplicación al TP3 (Ejercicio 7):** Comparar Marte con la Tierra.

---

## 4. Mecánica de Órbitas Circulares

### 4.1 Velocidad orbital

Para una órbita circular de radio $r$:

$$v_{\text{orb}} = \sqrt{\frac{GM}{r}}$$

**Donde:**
- $M$: Masa del cuerpo central
- $r$: Radio de la órbita

---

### 4.2 Período orbital

$$T = \frac{2\pi r}{v} = 2\pi \sqrt{\frac{r^3}{GM}}$$

**Aplicación al TP3 (Ejercicio 8):** Órbita sincrónica (geostacionaria).

---

### 4.3 Energía total en órbita circular

$$E = K + U = \frac{1}{2}mv^2 - \frac{GMm}{r}$$

Sustituyendo $v^2 = \frac{GM}{r}$:

$$E = -\frac{GMm}{2r}$$

✅ **La energía es negativa** (sistema ligado).

---

## 5. Órbitas Sincrónicas (Geostacionarias)

### 5.1 Condición para sincronismo

Un satélite es **geostacionario** si:
1. Su período $T = 24$ h (mismo que la rotación terrestre)
2. Su órbita es **circular** en el **plano ecuatorial**

### 5.2 Cálculo del radio

De $T = 2\pi \sqrt{\frac{r^3}{GM_T}}$:

$$r_{\text{geo}} = \left(\frac{G M_T T^2}{4\pi^2}\right)^{1/3}$$

**Para la Tierra:**
- $T = 24 \times 3600 = 86400$ s
- $M_T = 5.97 \times 10^{24}$ kg
- $r_{\text{geo}} \approx 42,164$ km (desde el centro)
- **Altura sobre la superficie:** $h \approx 35,786$ km

✅ **Esto es lo que necesitas para el Ejercicio 8 del TP3.**

---

## 6. Estación Espacial Internacional (EEI)

### 6.1 Datos del problema (TP3, Ejercicio 9)

- Revoluciones: $15.65$ rev/día
- Período: $T = \frac{24 \text{ h}}{15.65} \approx 5530$ s

### 6.2 Cálculo de la altura

De $T = 2\pi \sqrt{\frac{r^3}{GM_T}}$:

$$r = \left(\frac{G M_T T^2}{4\pi^2}\right)^{1/3}$$

Sustituyendo:
$$r \approx 6,740 \text{ km (desde el centro)}$$

**Altura sobre la superficie:**
$$h = r - R_T = 6740 - 6370 = 370 \text{ km}$$

✅ **Coincide con la respuesta del TP3.**

---

## 7. Ejercicios Resueltos (Nivel Física Teórica)

### Ejercicio 1: Demostración de la 3ª Ley de Kepler

**Enunciado:** Demuestra que para órbitas elípticas, $\frac{T^2}{a^3} = \text{constante}$ (independiente del planeta).

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #fff9c4; color: #f57f17; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🛰️ Kepler</span>
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Derivación</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 40 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Usa la ecuación de la órbita elíptica
- Relaciona el área de la elipse con el período
- Usa conservación del momento angular

**Solución (esbozo):**

1. **Área de la elipse:** $A = \pi a b$ (donde $b = a\sqrt{1 - e^2}$)

2. **Rapidez areolar:** $\frac{dA}{dt} = \frac{L}{2m}$

3. **Período:** $T = \frac{A}{dA/dt} = \frac{2\pi a b}{L/m}$

4. Sustituyendo $L$ de la ecuación de la órbita... se llega a:
   $$T^2 = \frac{4\pi^2}{GM} a^3$$

✅ **La constante es $\frac{4\pi^2}{GM}$ (misma para todos los planetas).**

---

### Ejercicio 2: Satélite en órbita baja (LEO)

Un satélite de masa $m$ se mueve en una órbita circular a una altura $h = 400$ km sobre la Tierra.

**a)** Calcula su velocidad orbital.
**b)** Si se quiere pasar a una órbita de $h = 800$ km, ¿qué cambio en velocidad se necesita?

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #fff9c4; color: #f57f17; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🛰️ Órbita circular</span>
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Cambio de órbita</span>
  <span style="background: #d1ecf1; color: #0c5460; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐ Media</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 25 min</span>
</div>

- [ ] Sin empezar

**Solución paso a paso:**

**a) Velocidad orbital:**

$$v_1 = \sqrt{\frac{GM_T}{r_1}} = \sqrt{\frac{GM_T}{R_T + h_1}}$$

Sustituyendo:
$$v_1 \approx 7670 \text{ m/s}$$

**b) Nueva órbita:**

$$v_2 = \sqrt{\frac{GM_T}{r_2}} = \sqrt{\frac{GM_T}{R_T + h_2}}$$

$$v_2 \approx 7450 \text{ m/s}$$

✅ **Respuesta:** $v_1 \approx 7670$ m/s; $v_2 \approx 7450$ m/s (hay que **frenar** para subir).

---

## 8. Notas para el Estudiante de Física Teórica

1. **Las leyes de Kepler son empíricas**; Newton las derivó teóricamente
2. **En mecánica analítica**, las órbitas se derivan de la **ecuación de Lagrange** para fuerzas centrales
3. **Órbitas cerradas** solo ocurren para $V(r) \propto r^{-1}$ (Kepler) o $V(r) \propto r^2$ (oscilador armónico)
4. **Precesión del perihelio:** En relatividad general, las órbitas **no son cerradas** (Mercurio)

---

## 🔗 Referencias Bibliográficas (Nivel Universitario)

1. **Goldstein** - *Classical Mechanics* (Cap. 3: The Central Force Problem)
2. **Landau & Lifshitz** - *Mechanics* (Vol. 1, Sec. 15: Motion in a Central Field)
3. **Marion & Thornton** - *Classical Dynamics* (Cap. 8: Central-Force Motion)
4. **Stewart** - *Advanced General Physics* (Cap. 7: Orbital Mechanics)

---

**¡Continúa con:** `04-energia-gravitatoria.md` (Energía potencial, escape)
