# Oscilaciones Amortiguadas (Mecánica Racional)

**INSPT – UTN** | **Física Teórica I** | **Prof. Carlos Dibarbora**

---

## 📚 Introducción al Amortiguamiento

En **física teórica**, el **amortiguamiento** representa la disipación de energía debido a fuerzas resistentes (fricción, viscosidad, etc.).

**Ecuación diferencial:**
$$m\ddot{x} + b\dot{x} + kx = 0$$

**Donde $b$ es la constante de amortiguamiento** (unidades: kg/s).

---

## 1. Clasificación de Amortiguamiento

### 1.1 Definición del parámetro $\beta$

Definimos:
$$\beta = \frac{b}{2m}$$

**Ecuación normalizada:**
$$\ddot{x} + 2\beta\dot{x} + \omega_0^2 x = 0$$

**Donde $\omega_0 = \sqrt{k/m}$ es la frecuencia natural sin amortiguar.**

---

### 1.2 Tres regímenes

#### **Caso 1: Subamortiguado ($ \beta < \omega_0 $)**
$$\omega_d = \sqrt{\omega_0^2 - \beta^2}$$
$$x(t) = A_0 e^{-\beta t} \cos(\omega_d t - \phi_0)$$

**Comportamiento:** Oscilaciones con amplitud decreciente.

---

#### **Caso 2: Críticamente amortiguado ($ \beta = \omega_0 $)**
$$x(t) = (A + Bt) e^{-\omega_0 t}$$

**Comportamiento:** Regresa al equilibrio en tiempo mínimo sin oscilar.

---

#### **Caso 3: Sobreamortiguado ($ \beta > \omega_0 $)**
$$\lambda_{1,2} = -\beta \pm \sqrt{\beta^2 - \omega_0^2}$$
$$x(t) = A e^{\lambda_1 t} + B e^{\lambda_2 t}$$

**Comportamiento:** Regresa lentamente al equilibrio sin oscilar.

---

## 2. Análisis Detallado (Caso Subamortiguado)

### 2.1 Decaimiento de la amplitud

$$A(t) = A_0 e^{-\beta t}$$

**Logaritmo decremental:**
$$\delta = \ln\left(\frac{A(t)}{A(t + T_d)}\right) = \beta T_d$$

**Donde $T_d = \frac{2\pi}{\omega_d}$ es el período amortiguado.**

---

### 2.2 Energía en el oscilador amortiguado

$$E(t) = \frac{1}{2}k A_0^2 e^{-2\beta t}$$

**Tasa de disipación:**
$$\frac{dE}{dt} = -b v^2(t)$$

✅ **La energía disminuye monótonamente.**

---

## 3. Amortiguamiento Crítico

### 3.1 Condición

$$b_c = 2\sqrt{km} = 2m\omega_0$$

**Significado físico:** Es el valor de $b$ que separa el comportamiento oscilatorio del no oscilatorio.

---

### 3.2 Tiempo de relajación

Para el caso crítico:
$$x(t) = (A + Bt) e^{-\omega_0 t}$$

**El sistema regresa al equilibrio en un tiempo del orden de $\tau = 1/\omega_0$.**

---

## 4. Factor de Calidad $Q$

### 4.1 Definición

$$Q = \frac{\omega_0}{2\beta} = \frac{\sqrt{km}}{b}$$

**Interpretación:**
- $Q \gg 1$: Amortiguamiento pequeño (oscilaciones persistentes)
- $Q \approx 1$: Amortiguamiento moderado
- $Q \ll 1$: Amortiguamiento fuerte

---

### 4.2 Ancho de banda (resonancia)

En oscilaciones forzadas (próxima sección):
$$\Delta \omega = \frac{\omega_0}{Q}$$

✅ **$Q$ mide la "agudeza" de la resonancia.**

---

## 5. Ejercicios Resueltos (Nivel Física Teórica)

### Ejercicio 1: Determinar el régimen de amortiguamiento (Ejercicio 13 del TP4)

Un cuerpo de 0.4 kg se mueve en el extremo de un resorte de $k = 300$ N/m, con fuerza amortiguadora $F = -9$ kg/s $\cdot v$.

**a)** ¿Cuál es la frecuencia de oscilación?
**b)** ¿Para qué valor de $b$ el amortiguamiento será crítico?

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Amortiguado</span>
  <span style="background: #fff9c4; color: #f57f17; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Régimen</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 30 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- $\beta = b/(2m) = 9/(2 \times 0.4) = 11.25$ s⁻¹
- $\omega_0 = \sqrt{k/m} = \sqrt{300/0.4} \approx 27.39$ rad/s
- Como $\beta < \omega_0$ → subamortiguado

**Solución paso a paso:**

**a) Frecuencia amortiguada:**

$$\omega_d = \sqrt{\omega_0^2 - \beta^2} = \sqrt{27.39^2 - 11.25^2} \approx \sqrt{750 - 126.6} \approx \sqrt{623.4} \approx 24.97 \text{ rad/s}$$

$$f_d = \frac{\omega_d}{2\pi} \approx \frac{24.97}{2\pi} \approx 3.97 \text{ Hz}$$

✅ **Respuesta (a):** $f_d \approx 3.97$ Hz.

**b) Amortiguamiento crítico:**

$$b_c = 2\sqrt{km} = 2\sqrt{300 \times 0.4} = 2\sqrt{120} \approx 2 \times 10.95 \approx 21.9 \text{ kg/s}$$

✅ **Respuesta (b):** $b_c \approx 21.9$ kg/s.

---

### Ejercicio 2: Constante de amortiguamiento desde decaimiento (Ejercicio 14 del TP4)

Un cuerpo de 0.2 kg en un resorte de $k = 400$ N/m tiene amplitud inicial $A_0 = 0.3$ m. La amplitud disminuye a 0.1 m en 5 segundos.

**Calcular $b$.**

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Amortiguado</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⚡ Decaimiento</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 35 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- $A(t) = A_0 e^{-\beta t}$
- $\frac{A(t)}{A_0} = e^{-\beta t}$ → $-\beta t = \ln(A(t)/A_0)$

**Solución:**

$$\frac{A(5)}{A_0} = \frac{0.1}{0.3} = \frac{1}{3}$$

$$e^{-5\beta} = \frac{1}{3} \quad \Rightarrow \quad -5\beta = \ln(1/3) = -\ln 3$$

$$\beta = \frac{\ln 3}{5} \approx \frac{1.0986}{5} \approx 0.2197 \text{ s}^{-1}$$

$$b = 2m\beta = 2 \times 0.2 \times 0.2197 \approx 0.0879 \text{ kg/s}$$

✅ **Respuesta:** $b \approx 0.0879$ kg/s.

---

## 6. Notas para el Estudiante de Física Teórica

1. **El amortiguamiento disipa energía** → $E(t)$ decrece monótonamente
2. **Régimen subamortiguado:** Oscila con frecuencia $\omega_d < \omega_0$
3. **Amortiguamiento crítico:** Mínimo tiempo de relajación sin oscilar
4. **Factor de calidad $Q$:** Importante para resonancia (próxima sección)

---

## 🔗 Referencias Bibliográficas (Nivel Universitario)

1. **Goldstein** - *Classical Mechanics* (Cap. 5: The Damped Harmonic Oscillator)
2. **Landau & Lifshitz** - *Mechanics* (Vol. 1, Sec. 22: Damped Oscillations)
3. **Marion & Thornton** - *Classical Dynamics* (Cap. 3: Damped Oscillations)
4. **Fitzpatrick** - *Oscillations and Waves* (Cap. 3: Damped Oscillations)

---

**¡Continúa con:** `03-oscilaciones-forzadas.md` (Oscilaciones forzadas y resonancia)