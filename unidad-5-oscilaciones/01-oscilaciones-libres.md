# Oscilaciones Libres (Mecánica Racional)

**INSPT – UTN** | **Física Teórica I** | **Prof. Carlos Dibarbora**

---

## 📚 Movimiento Armónico Simple (MAS)

En **física teórica**, el oscilador armónico es fundamental porque:
1. **Aproximación de pequeñas oscilaciones** cerca del equilibrio
2. **Solución exacta** de la ecuación diferencial lineal
3. **Base para sistemas complejos** (amortiguados, forzados, acoplados)

---

## 1. Ecuación Diferencial del MAS

### 1.1 Derivación desde la 2ª Ley de Newton

Para una fuerza restauradora lineal $F = -kx$:

$$m\ddot{x} = -kx$$

$$\ddot{x} + \omega_0^2 x = 0$$

**Donde $\omega_0 = \sqrt{k/m}$ es la frecuencia angular natural.**

---

### 1.2 Solución General

La ecuación es una **EDO lineal homogénea de 2º orden** con coeficientes constantes.

**Solución:**
$$x(t) = A\cos(\omega_0 t) + B\sin(\omega_0 t)$$

O bien, en forma alternativa:
$$x(t) = A_0\cos(\omega_0 t - \phi_0)$$

**Donde:**
- $A_0 = \sqrt{A^2 + B^2}$: Amplitud
- $\phi_0 = \arctan(B/A)$: Fase inicial
- $A$ y $B$ se determinan con **condiciones iniciales**

---

## 2. Análisis de la Solución

### 2.1 Velocidad y Aceleración

$$v(t) = \dot{x}(t) = -\omega_0 A_0\sin(\omega_0 t - \phi_0)$$
$$a(t) = \ddot{x}(t) = -\omega_0^2 A_0\cos(\omega_0 t - \phi_0)$$

**Valores máximos:**
- $v_{\text{max}} = \omega_0 A_0$
- $a_{\text{max}} = \omega_0^2 A_0$

---

### 2.2 Período y Frecuencia

$$T = \frac{2\pi}{\omega_0} = 2\pi\sqrt{\frac{m}{k}}$$
$$f = \frac{1}{T} = \frac{\omega_0}{2\pi} = \frac{1}{2\pi}\sqrt{\frac{k}{m}}$$

---

## 3. Energía en el MAS

### 3.1 Energía Cinética y Potencial

$$K(t) = \frac{1}{2}m v^2(t) = \frac{1}{2}m\omega_0^2 A_0^2\sin^2(\omega_0 t - \phi_0)$$
$$U(t) = \frac{1}{2}k x^2(t) = \frac{1}{2}k A_0^2\cos^2(\omega_0 t - \phi_0)$$

**Energía total (constante):**
$$E = K + U = \frac{1}{2}k A_0^2$$

✅ **La energía se conserva y oscila entre $K$ y $U$.**

---

### 3.2 Interpretación del Espacio de Fases

La trayectoria en el espacio $(x, v)$ es una **elipse**:

$$\frac{x^2}{A_0^2} + \frac{v^2}{\omega_0^2 A_0^2} = 1$$

**Esto es una órbita cerrada** (sistema conservativo).

---

## 4. Oscilaciones en Sistemas Físicos

### 4.1 Masa-Resorte Vertical

**Fuerza neta:**
$$F = -kx + mg$$

En equilibrio: $kx_{\text{eq}} = mg$ → $x_{\text{eq}} = mg/k$

**Movimiento alrededor del equilibrio:**
$$m\ddot{x}' = -kx' \quad \text{donde } x' = x - x_{\text{eq}}$$

✅ **El movimiento es MAS con la misma $\omega_0$.**

---

### 4.2 Péndulo Simple

Para pequeñas oscilaciones ($\theta \ll 1$):

$$\ddot{\theta} + \frac{g}{L}\theta = 0$$

**Frecuencia:**
$$\omega_0 = \sqrt{\frac{g}{L}}$$

---

### 4.3 Péndulo Físico

$$\ddot{\theta} + \frac{mgd}{I}\theta = 0$$

**Donde:**
- $I$: Momento de inercia respecto al pivote
- $d$: Distancia del pivote al centro de masa

**Frecuencia:**
$$\omega_0 = \sqrt{\frac{mgd}{I}}$$

---

## 5. Pequeñas Oscilaciones (Método General)

### 5.1 Expansión de Taylor del Potencial

Para un sistema con energía potencial $V(x)$:

1. **Encuentra puntos de equilibrio:** $V'(x_0) = 0$
2. **Expansión cerca de $x_0$:**
   $$V(x) \approx V(x_0) + \frac{1}{2}V''(x_0)(x - x_0)^2$$
3. **Frecuencia:**
   $$\omega_0 = \sqrt{\frac{V''(x_0)}{m}}$$

---

### 5.2 Ejemplo: Partícula en un pozo de potencial

Si $V(x) = \frac{1}{2}kx^2 + \frac{1}{3}\alpha x^3 + \cdots$

Para pequeñas oscilaciones, ignoramos términos no lineales → **MAS**.

---

## 6. Ejercicios Resueltos (Nivel Física Teórica)

### Ejercicio 1: Masa-resorte con condiciones iniciales (Ejercicio 1 del TP4)

Un cuerpo de 1 kg se cuelga de un resorte de $k = 100$ N/m. Se aparta 20 cm y se suelta desde el reposo.

**a)** Escribir la ecuación horaria.
**b)** Determinar la velocidad máxima.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 MAS</span>
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Ecuación</span>
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐ Fácil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 15 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- $\omega_0 = \sqrt{k/m} = 10$ rad/s
- $x(0) = 0.20$ m, $v(0) = 0$ → $x(t) = 0.20\cos(10t)$

**Solución paso a paso:**

**a) Ecuación horaria:**

$$\omega_0 = \sqrt{\frac{k}{m}} = \sqrt{\frac{100}{1}} = 10 \text{ rad/s}$$

Condiciones iniciales: $x(0) = 0.20$ m, $v(0) = 0$

$$x(t) = A_0\cos(\omega_0 t - \phi_0)$$

En $t = 0$: $x(0) = A_0\cos(-\phi_0) = 0.20$
$v(0) = \omega_0 A_0\sin(-\phi_0) = 0$ → $\phi_0 = 0$

✅ **Ecuación:** $x(t) = 0.20\cos(10t)$ m

**b) Velocidad máxima:**

$$v_{\text{max}} = \omega_0 A_0 = 10 \times 0.20 = 2.0 \text{ m/s}$$

✅ **Respuesta:** $v_{\text{max}} = 2.0$ m/s.

---

### Ejercicio 2: Análisis de una función sinusoidal (Ejercicio 2 del TP4)

$x(t) = 4\sin(3\pi t + \pi)$ (en metros).

**a)** Frecuencia y período.
**b)** Desplazamiento en $t = 0.25$ s.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 MAS</span>
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📊 Análisis</span>
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐ Fácil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 10 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Compara con $x(t) = A\sin(\omega t + \phi)$
- $\omega = 3\pi$ rad/s → $f = \omega/(2\pi)$, $T = 1/f$

**Solución:**

**a) Frecuencia y período:**

$$\omega = 3\pi \text{ rad/s}$$
$$f = \frac{\omega}{2\pi} = \frac{3\pi}{2\pi} = 1.5 \text{ Hz}$$
$$T = \frac{1}{f} = \frac{2}{3} \approx 0.667 \text{ s}$$

✅ **Respuesta:** $f = 1.5$ Hz, $T \approx 0.667$ s.

**b) Desplazamiento en $t = 0.25$ s:**

$$x(0.25) = 4\sin\left(3\pi(0.25) + \pi\right) = 4\sin\left(\frac{3\pi}{4} + \pi\right)$$
$$= 4\sin\left(\frac{7\pi}{4}\right) = 4\left(-\frac{\sqrt{2}}{2}\right) \approx -2.83 \text{ m}$$

✅ **Respuesta:** $x(0.25) \approx -2.83$ m.

---

## 7. Notas para el Estudiante de Física Teórica

1. **El MAS es una aproximación lineal** válida solo para pequeñas oscilaciones
2. **La frecuencia $\omega_0$ es una propiedad del sistema** (no depende de amplitud)
3. **Energía total constante** → Sistema conservativo
4. **Espacio de fases:** Órbitas cerradas (elipses)

---

## 🔗 Referencias Bibliográficas (Nivel Universitario)

1. **Goldstein** - *Classical Mechanics* (Cap. 5: The Harmonic Oscillator)
2. **Landau & Lifshitz** - *Mechanics* (Vol. 1, Sec. 21: Small Oscillations)
3. **Marion & Thornton** - *Classical Dynamics* (Cap. 3: Oscillations)
4. **Fitzpatrick** - *Oscillations and Waves* (Online Notes)

---

**¡Continúa con:** `02-oscilaciones-amortiguadas.md` (Amortiguamiento)