# Energía Gravitatoria y Velocidad de Escape (Mecánica Racional)

**INSPT – UTN** | **Física Teórica I** | **Prof. Carlos Dibarbora**

---

## 📚 Energía en Campos Gravitatorios

En **física teórica**, la energía mecánica en un campo gravitatorio no es simplemente $K + U$, sino que involucra el **potencial de Newton** y la **conservación del Hamiltoniano**.

---

## 1. Energía Potencial Gravitatoria

### 1.1 Potencial de Newton (para una masa puntual)

$$U(r) = -\frac{GMm}{r}$$

**Donde:**
- $G$: Constante gravitacional
- $M, m$: Masas (fuente y prueba)
- $r$: Distancia entre las masas

⚠️ **Nota:** $U(r) < 0$ porque definimos $U(\infty) = 0$ (el sistema gana energía al separar las masas).

---

### 1.2 Energía Total (Hamiltoniano)

$$E = T + U = \frac{1}{2}mv^2 - \frac{GMm}{r}$$

**Interpretación:**
- $E < 0$: Sistema **ligado** (órbita cerrada)
- $E = 0$: **Escape** (trayectoria parabólica)
- $E > 0$: **No ligado** (trayectoria hiperbólica)

---

## 2. Velocidad de Escape

### 2.1 Derivación desde conservación de energía

Para que un objeto **escape** del campo gravitatorio:

$$E \geq 0$$

$$\frac{1}{2}mv_{\text{esc}}^2 - \frac{GMm}{R} = 0$$

✅ **Fórmula de escape (desde la superficie):**

$$v_{\text{esc}} = \sqrt{\frac{2GM}{R}}$$

**Donde $R$ es el radio del cuerpo central.**

---

### 2.2 Escape desde la Tierra (Ejercicio 10 del TP3)

**Datos:**
- $M_T = 5.97 \times 10^{24}$ kg
- $R_T = 6.37 \times 10^6$ m

**Cálculo:**

$$v_{\text{esc, Tierra}} = \sqrt{\frac{2(6.67 \times 10^{-11})(5.97 \times 10^{24})}{6.37 \times 10^6}} \approx 11.2 \text{ km/s}$$

✅ **Respuesta:** $v_{\text{esc}} \approx 11.2$ km/s (Tierra)

---

### 2.3 Escape desde la superficie vs. altura $H$

Si lanzas desde una altura $H$ sobre la superficie:

$$v_{\text{esc}}(H) = \sqrt{\frac{2GM}{R + H}}$$

**Ejemplo:** Desde $H = 400$ km (órbita baja):

$$v_{\text{esc}} = \sqrt{\frac{2GM}{R_T + H}} \approx 10.9 \text{ km/s}$$

✅ **La velocidad de escape es menor a mayor altura.**

---

## 3. Trabajo en Campos Gravitatorios

### 3.1 Trabajo realizado por la fuerza gravitatoria

$$W = \int_{r_1}^{r_2} \vec{F}_g \cdot d\vec{r} = -\Delta U = U(r_1) - U(r_2)$$

**Para una masa $m$ moviéndose desde $r_1$ hasta $r_2$:**

$$W = GMm\left(\frac{1}{r_2} - \frac{1}{r_1}\right)$$

---

### 3.2 Trabajo para cambiar órbitas (Ejercicio 12 del TP3)

Para mover una nave de una órbita circular de radio $r_1$ a otra de radio $r_2$:

**Energía en órbita circular:**
$$E_{\text{circ}} = -\frac{GMm}{2r}$$

**Trabajo necesario:**
$$W = \Delta E = E_2 - E_1 = GMm\left(\frac{1}{2r_1} - \frac{1}{2r_2}\right)$$

✅ **Esto es lo que necesitas para el Ejercicio 12 (Marte).**

---

## 4. Aplicación: Escape del Sistema Solar (Ejercicio 11 del TP3)

### 4.1 Energía necesaria

Para escapar del **Sistema Solar** desde la Tierra:

$$E_{\text{total}} = \frac{1}{2}mv^2 - \frac{GM_T m}{R_T} - \frac{GM_S m}{d_{TS}} = 0$$

**Donde:**
- $M_T$: Masa de la Tierra
- $M_S$: Masa del Sol
- $d_{TS}$: Distancia Tierra-Sol ($\approx 1.5 \times 10^{11}$ m)

---

### 4.2 Velocidad relativa al centro de la Tierra

La condición de escape del sistema solar es:

$$E = \frac{1}{2}mv^2 - \frac{GM_T m}{R_T} - \frac{GM_S m}{d_{TS}} = 0$$

Despejando la velocidad:

$$v = \sqrt{v_{\text{esc,T}}^2 + v_{\text{esc,S}}^2}$$

donde:
- $v_{\text{esc,T}} = \sqrt{\frac{2GM_T}{R_T}}$ es la velocidad de escape de la Tierra
- $v_{\text{esc,S}} = \sqrt{\frac{2GM_S}{d_{TS}}}$ es la velocidad de escape del Sol desde la órbita terrestre

**Cálculo numérico:**
- Tierra: $v_{\text{esc,T}} = \sqrt{\frac{2(6.67\times10^{-11})(5.97\times10^{24})}{6.37\times10^6}} \approx 11.2$ km/s
- Sol (desde $d_{TS}$): $v_{\text{esc,S}} = \sqrt{\frac{2(6.67\times10^{-11})(1.99\times10^{30})}{1.5\times10^{11}}} \approx 42.1$ km/s
- Velocidad total: $v = \sqrt{(11.2)^2 + (42.1)^2} \approx \sqrt{125.4 + 1772.4} \approx \sqrt{1897.8} \approx 43.6$ km/s

✅ **Respuesta (parte a):** $v \approx 43.6$ km/s (escape del sistema solar desde la Tierra)

---

### 4.3 Efecto de la rotación terrestre (parte b y c)

La Tierra rota con velocidad ecuatorial:

$$v_{\text{rot}} = \omega R_T \cos\phi$$

**Donde $\phi$ es la latitud.**

- **Florida ($\phi = 28.5^\circ$):** $v_{\text{rot}} \approx 0.41$ km/s
- **Guyana Francesa ($\phi = 5.15^\circ$):** $v_{\text{rot}} \approx 0.47$ km/s

✅ **Lanzar desde el ecuador aprovecha más la rotación.**

---

## 5. Ejercicios Resueltos (Nivel Física Teórica)

### Ejercicio 1: Velocidad de escape desde un planeta con densidad variable

Un planeta tiene densidad $\rho(r) = \rho_0(1 - r/R)$. Calcula $v_{\text{esc}}$ desde su superficie.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⚡ Energía</span>
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Densidad variable</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 40 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Integra la masa total $M = \int_0^R 4\pi r^2 \rho(r)\,dr$
- Usa $v_{\text{esc}} = \sqrt{2GM/R}$
- El resultado depende de $\rho_0$ y $R$

**Solución (esbozo):**

$$M = 4\pi \rho_0 \int_0^R (r^2 - r^3/R)\,dr = 4\pi \rho_0 \left(\frac{R^3}{3} - \frac{R^3}{4}\right) = \frac{\pi \rho_0 R^3}{3}$$

$$v_{\text{esc}} = \sqrt{\frac{2G}{R} \cdot \frac{\pi \rho_0 R^3}{3}} = R\sqrt{\frac{2\pi G \rho_0}{3}}$$

✅ **Respuesta:** $\displaystyle v_{\text{esc}} = R\sqrt{\frac{2\pi G \rho_0}{3}}$

---

### Ejercicio 2: Trabajo para transferencia de órbitas (Hohmann)

Calcula el **trabajo** necesario para mover una nave de una órbita circular de radio $r_1$ a otra de radio $r_2$ mediante una **órbita de transferencia de Hohmann**.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⚡ Trabajo</span>
  <span style="background: #fff9c4; color: #f57f17; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🛰️ Hohmann</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 45 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- La órbita de transferencia es una **elipse** con $a = (r_1 + r_2)/2$
- Cambio de velocidad en perigeo y apogeo: $\Delta v_1$ y $\Delta v_2$
- Trabajo = cambio en energía mecánica: $W = \Delta E$

**Solución (esbozo):**

En órbita circular $r_1$: $v_1 = \sqrt{GM/r_1}$

En elipse (perigeo $r_1$): $v_{p} = \sqrt{GM(2/r_1 - 1/a)}$

$$\Delta v_1 = v_p - v_1 = \sqrt{\frac{GM}{r_1}}\left(\sqrt{2 - \frac{r_1}{a}} - 1\right)$$

Trabajo total: $W = \frac{1}{2}m(\Delta v_1^2 + \Delta v_2^2)$

✅ **Esto es lo que necesitas para el Ejercicio 12 (TP3).**

---

## 6. Notas para el Estudiante de Física Teórica

1. **La energía potencial $U(r)$ es negativa** porque el cero está en $r = \infty$
2. **Escape** ocurre cuando $E \geq 0$ (trayectoria no ligada)
3. **En órbitas elípticas**, la energía se conserva pero $v$ y $r$ varían
4. **Transferencia de órbitas** requiere **dos impulsos** (Hohmann)

---

## 🔗 Referencias Bibliográficas (Nivel Universitario)

1. **Goldstein** - *Classical Mechanics* (Cap. 3: The Central Force Problem)
2. **Landau & Lifshitz** - *Mechanics* (Vol. 1, Sec. 15: Motion in a Central Field)
3. **Marion & Thornton** - *Classical Dynamics* (Cap. 8: Central-Force Motion)
4. **Szebehely** - *Theory of Orbits* (Cap. 4: Escape and Capture)

---

**¡Continúa con:** `05-orbitas-elipticas.md` (Conservación de $L$ y $E$, órbitas elípticas)