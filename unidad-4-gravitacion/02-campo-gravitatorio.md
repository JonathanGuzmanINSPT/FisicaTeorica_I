# Campo Gravitatorio y Potencial (Mecánica Racional)

**INSPT – UTN** | **Física Teórica I** | **Prof. Carlos Dibarbora**

---

## 📚 Campo Gravitatorio en la Superficie y alrededores

En **física teórica**, el campo gravitatorio no es constante, sino que **depende de la posición** $\vec{r}$.

---

## 1. Variación de $g$ con la altura

### 1.1 Aproximación cerca de la superficie

Para alturas $h \ll R_T$ (radio terrestre), podemos aproximar:

$$g(h) \approx g_0\left(1 - \frac{2h}{R_T}\right)$$

**Donde:**
- $g_0 = \frac{GM_T}{R_T^2}$: Aceleración en la superficie
- $R_T = 6.37 \times 10^6$ m: Radio terrestre
- $h$: Altura sobre la superficie

⚠️ **Nota:** Esta es una expansión en serie de Taylor de $\left(1 + \frac{h}{R_T}\right)^{-2}$.

---

### 1.2 Formulación exacta (sin aproximar)

Para cualquier altura $h$:

$$g(h) = g_0 \frac{R_T^2}{(R_T + h)^2} = \frac{GM_T}{(R_T + h)^2}$$

**Demostración:**

$$g(h) = \frac{GM_T}{r^2}, \quad r = R_T + h$$

✅ **Esto es válido para CUALQUIER altura** (incluso órbitas satelitales).

---

## 2. Campo en el Interior de una Esfera (Teorema de Gauss)

### 2.1 Densidad uniforme ($\rho = \text{constante}$)

Si la Tierra tuviera densidad uniforme, el campo **dentro** de ella ($r < R_T$) sería:

$$g(r) = g_0 \frac{r}{R_T}$$

**Propiedades:**
1. El campo es **lineal** con $r$ (como un oscilador armónico)
2. En el centro ($r = 0$): $g = 0$
3. En la superficie ($r = R_T$): $g = g_0$

**Demostración (Gauss):**

$$\oint \vec{g} \cdot d\vec{S} = -4\pi G M_{\text{int}}$$

Para una superficie Gaussiana esférica de radio $r$:

$$g(r) \cdot 4\pi r^2 = -4\pi G \left(\frac{4}{3}\pi r^3 \rho\right)$$

$$g(r) = -\frac{4}{3}\pi G \rho r = -\frac{GM_T}{R_T^3} r$$

✅ **Esto produce un MAS** (movimiento armónico simple) si caeas por un túnel.

---

### 2.2 Densidad variable $\rho(r)$

En la realidad, la Tierra **no tiene densidad uniforme**. Modelos típicos:

#### **Modelo 1: Densidad linealmente decreciente**
$$\rho(r) = \rho_0 - \alpha r, \quad \alpha = \frac{\rho_0 - \rho_{\text{superficie}}}{R_T}$$

**Masa interior:**
$$M(r) = \int_0^r 4\pi r'^2 \rho(r') dr'$$

**Campo:**
$$g(r) = -\frac{GM(r)}{r^2}$$

#### **Modelo 2: Modelo PREM (Reference Earth Model)**
- Núcleo interno: $\rho \approx 13$ g/cm³
- Manto: $\rho \approx 3-5$ g/cm³
- Corteza: $\rho \approx 2.7$ g/cm³

✅ **En el ejercicio 4 del TP3**, usamos un modelo lineal simplificado.

---

## 3. Aplicación: Túnel transoceánico (Ejercicio 5 del TP3)

### 3.1 Movimiento armónico simple (MAS)

Si $g(r) = -\frac{GM_T}{R_T^3} r$ (densidad uniforme), la ecuación de movimiento es:

$$\frac{d^2 r}{dt^2} = -\frac{GM_T}{R_T^3} r = -\omega^2 r$$

**Donde:** $\omega = \sqrt{\frac{GM_T}{R_T^3}}$ es la frecuencia angular.

**Solución:**
$$r(t) = A \cos(\omega t + \phi)$$

**Período:**
$$T = \frac{2\pi}{\omega} = 2\pi \sqrt{\frac{R_T^3}{GM_T}} = 2\pi \sqrt{\frac{R_T}{g_0}}$$

✅ **Para la Tierra:** $T \approx 84$ min (ida y vuelta: 42 min).

---

## 4. Ejercicios Resueltos (Nivel Física Teórica)

### Ejercicio 1: Campo en el interior de una esfera con $\rho(r) = \rho_0(1 - r/R)$

Una esfera de radio $R$ tiene densidad $\rho(r) = \rho_0\left(1 - \frac{r}{R}\right)$.

**a)** Calcula $g(r)$ para $r < R$.
**b)** Encuentra el valor máximo de $g(r)$ y en qué $r$ ocurre.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Campo gravitatorio</span>
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Densidad variable</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 40 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Integra masa interior: $M(r) = \int_0^r 4\pi r'^2 \rho(r') dr'$
- Usa Gauss: $g(r) = -\frac{GM(r)}{r^2}$
- Para el máximo: $\frac{dg}{dr} = 0$

**Solución paso a paso:**

**a) Masa interior:**

$$M(r) = \int_0^r 4\pi r'^2 \rho_0\left(1 - \frac{r'}{R}\right) dr'$$

$$= 4\pi \rho_0 \left[\int_0^r r'^2 dr' - \frac{1}{R}\int_0^r r'^3 dr'\right]$$

$$= 4\pi \rho_0 \left[\frac{r^3}{3} - \frac{1}{R}\frac{r^4}{4}\right]$$

**Campo:**

$$g(r) = -\frac{GM(r)}{r^2} = -4\pi G \rho_0 \left(\frac{r}{3} - \frac{r^2}{4R}\right)$$

✅ **Respuesta:** $\displaystyle g(r) = -4\pi G \rho_0 \left(\frac{r}{3} - \frac{r^2}{4R}\right)$

**b) Máximo:**

$$\frac{dg}{dr} = -4\pi G \rho_0 \left(\frac{1}{3} - \frac{r}{2R}\right) = 0$$

$$\frac{r}{2R} = \frac{1}{3} \quad \Rightarrow \quad r_{\text{máx}} = \frac{2}{3}R$$

Sustituyendo:

$$g_{\text{máx}} = -4\pi G \rho_0 \left(\frac{2R/3}{3} - \frac{(2R/3)^2}{4R}\right)$$

$$= -4\pi G \rho_0 R \left(\frac{2}{9} - \frac{1}{9}\right) = -\frac{4}{9}\pi G \rho_0 R$$

✅ **Respuesta:** $r_{\text{máx}} = \frac{2}{3}R$, $\displaystyle g_{\text{máx}} = -\frac{4}{9}\pi G \rho_0 R$

---

### Ejercicio 2: Variación de $g$ con la latitud (Efecto de la rotación)

La Tierra rota con velocidad angular $\omega = \frac{2\pi}{24 \text{ h}}$. Esto afecta la **gravedad efectiva** $g_{\text{ef}}$ que medimos.

**a)** Demuestra que:
$$g_{\text{ef}}(\theta) = g_0 - \omega^2 R_T \cos^2\theta$$

**b)** ¿Cuál es la diferencia entre el polo ($\theta = 90°$) y el ecuador ($\theta = 0°$)?

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Campo efectivo</span>
  <span style="background: #fff3cd; color: #856404; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🌍 Rotación terrestre</span>
  <span style="background: #d1ecf1; color: #0c5460; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐ Media</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 25 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- La fuerza centrífuga es $F_c = m\omega^2 R_T \cos\theta$ (paralela a la superficie)
- La componente perpendicular a la superficie es $F_c \sin\theta = m\omega^2 R_T \cos^2\theta$
- Resta esta componente de $g_0$

**Solución (esbozo):**

En el ecuador ($\theta = 0$):
$$g_{\text{ef}} = g_0 - \omega^2 R_T$$

En el polo ($\theta = 90°$):
$$g_{\text{ef}} = g_0 \quad \text{(no hay fuerza centrífuga)}$$

✅ **Diferencia:** $\Delta g = \omega^2 R_T \approx 0.034$ m/s² (pequeña pero medible).

---

## 5. Conexión con el TP3 (Ejercicios 3-5)

### Ejercicio 3 del TP3: Altura para cambio del 1% en $g$

**Teoría necesaria:**
$$g(h) = g_0 \frac{R_T^2}{(R_T + h)^2}$$

Si $g(h) = 0.99 g_0$:
$$\frac{R_T^2}{(R_T + h)^2} = 0.99$$

$$(R_T + h)^2 = \frac{R_T^2}{0.99}$$

$$h = R_T\left(\frac{1}{\sqrt{0.99}} - 1\right) \approx 0.005 R_T \approx 32 \text{ km}$$

✅ **Respuesta:** $h \approx 32$ km (muy alto, casi la estratosfera).

---

### Ejercicio 4 del TP3: Planeta con densidad lineal

**Teoría necesaria:**
- $\rho(r) = \rho_0 - \frac{\rho_0 - \rho_{\text{superficie}}}{R} r$
- Integra masa interior $M(r)$
- Calcula $g(R) = \frac{GM(R)}{R^2}$

**Solución (esbozo):**
$$M_{\text{total}} = \int_0^R 4\pi r^2 \rho(r) dr$$

$$g(R) = \frac{GM_{\text{total}}}{R^2}$$

✅ **En el TP3:** $\rho_0 = 15 \times 10^3$ kg/m³, $\rho_{\text{superficie}} = 2 \times 10^3$ kg/m³.

---

## 6. Notas para el Estudiante de Física Teórica

1. **El campo $g(r)$ NO es constante** (depende de $r$)
2. **En el interior** ($r < R$): El campo depende de la **densidad** $\rho(r)$
3. **Teorema de Gauss:** Fundamental para problemas con simetría
4. **Unidades:** SI ($g$ en m/s², $G$ en N·m²/kg²)

---

## 🔗 Referencias Bibliográficas (Nivel Universitario)

1. **Goldstein** - *Classical Mechanics* (Cap. 3: The Central Force Problem)
2. **Landau & Lifshitz** - *Mechanics* (Vol. 1, Sec. 4: Central Forces)
3. **Marion & Thornton** - *Classical Dynamics* (Cap. 5: Gravitational Orbits)
4. **Stewart** - *Advanced General Physics* (Cap. 6: Gravity and Geophysics)

---

**¡Continúa con:** `03-mecanica-orbital.md` (3ª Ley de Kepler, órbitas circulares)