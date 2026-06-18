# Ejercicios – Teoremas de Conservación (Mecánica Racional)

**INSPT – UTN** | **Física Teórica I** | **Prof. Carlos Dibarbora**

---

## 📋 Instrucciones

Estos ejercicios son de nivel **universitario avanzado** (Física Teórica I / Mecánica Racional). Cubren:
- Teorema de trabajo y energía (formulación vectorial)
- Conservación de la energía mecánica (sistemas conservativos)
- Fuerzas conservativas y no conservativas (análisis de campos)
- Aplicaciones a problemas clásicos (oscilladores, órbitas, colisiones)

**Cómo usar este archivo:**
- Cada ejercicio tiene tres estados: `- [ ]` (sin hacer), `- [~]` (en progreso), `- [x]` (completado)
- Los badges indican: concepto, dificultad, tiempo estimado
- **Actualiza tu progreso** al final de cada sesión

---

## 📊 Progreso General

| Bloque | Total | ✅ | 🔄 | % |
|---|---|---|---|---|
| Teorema Trabajo-Energía | 3 | 0 | 0 | 0% |
| Conservación de Energía | 4 | 0 | 0 | 0% |
| Fuerzas No Conservativas | 2 | 0 | 0 | 0% |
| Problemas Integradores | 3 | 0 | 0 | 0% |
| **Total** | **12** | **0** | **0** | **0%** |

---

## 📝 Ejercicios Propuestos

### Ejercicio 1: Fuerza central inversamente proporcional al cuadrado

Una partícula de masa $m$ se mueve bajo la acción de una fuerza central del tipo:

$$\vec{F} = -\frac{k}{r^2}\hat{r}, \quad k > 0$$

**a)** Demuestra que el trabajo realizado por la fuerza cuando la partícula se mueve desde $r_1$ hasta $r_2$ es:

$$W = k\left(\frac{1}{r_2} - \frac{1}{r_1}\right)$$

**b)** Usa el teorema trabajo-energía para encontrar la velocidad $v(r)$ en función del radio, dado que la velocidad inicial en $r_1$ es $v_1$.

**c)** ¿Qué condición debe cumplirse para que el movimiento sea circular? Encuentra la relación entre $v$ y $r$ para una órbita circular.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Fuerza central</span>
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Gravedad/Electrostática</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 45 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- El trabajo es $W = \int_{r_1}^{r_2} F(r)\,dr$ (considera la componente radial)
- Usa $W_{neta} = \Delta K = \frac{1}{2}m(v_2^2 - v_1^2)$
- Para órbita circular: $F = \frac{mv^2}{r}$ (fuerza centrípeta)

---

- [ ] Sin empezar

**Pistas:**
- Usa $W_{neta} = \Delta K$
- El trabajo es $W = F \cdot d$
- Verifica con cinemática

---

## 2. Una partícula de masa $m$ parte del reposo y es acelerada por una fuerza neta constante $F$ que actúa a lo largo de una distancia $d$.

**a)** Muestra que la velocidad final es $v_f = \sqrt{\frac{2Fd}{m}}$

**b)** Si la masa se duplica pero la fuerza y distancia se mantienen, ¿qué le ocurre a la velocidad final?

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔧 Trabajo-Energía</span>
  <span style="background: #fff3cd; color: #856404; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Derivación</span>
  <span style="background: #d1ecf1; color: #0c5460; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐ Media</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 15 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Parte del reposo: $K_i = 0$
- $W_{neta} = F \cdot d$
- Iguala $W = \Delta K$

---

## 3. Un automóvil de $1500$ kg viaja a $20$ m/s (72 km/h). El conductor aplica los frenos y el coche se detiene después de recorrer $40$ m.

**a)** ¿Cuál es la magnitud de la fuerza de fricción promedio?

**b)** ¿Qué porcentaje de la energía cinética inicial se disipa como calor?

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔧 Trabajo-Energía</span>
  <span style="background: #f8d7da; color: #721c24; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔥 Fricción</span>
  <span style="background: #d1ecf1; color: #0c5460; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐ Media</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 15 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Toda la energía cinética se disipa (frenado completo)
- $W_f = -f_k \cdot d = \Delta K$
- El porcentaje disipado es 100% si se detiene

---

<div style="display: flex; gap: 8px; margin: 12px 0; flex-wrap: wrap;">
  <span style="background: #d4edda; color: #155724; padding: 6px 14px; border-radius: 14px; font-size: 0.95em; font-weight: 600;">♻️ Conservación de Energía</span>
</div>

## 4. Un bloque de $m = 3$ kg se suelta desde el reposo en la parte superior de un plano inclinado sin fricción de $h = 4$ m de altura.

**a)** ¿Cuál es su velocidad al llegar al fondo?

**b)** Si la inclinación fuera más pronunciada (misma altura), ¿cambiaría la velocidad final? Explica.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #d4edda; color: #155724; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">♻️ Conservación</span>
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Plano inclinado</span>
  <span style="background: #d1ecf1; color: #0c5460; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐ Fácil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 10 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- En la cima: $K_i = 0$, $U_i = mgh$
- En el fondo: $K_f = \frac{1}{2}mv^2$, $U_f = 0$
- La velocidad es **independiente de la masa** y de la inclinación (solo depende de $h$)

---

## 5. Un resorte de constante $k = 300$ N/m se comprime $0.15$ m. Un bloque de $m = 0.8$ kg se coloca contra el resorte y se suelta.

**a)** ¿Cuál es la velocidad máxima del bloque sobre la superficie horizontal sin fricción?

**b)** ¿A qué distancia del equilibrio la velocidad es $\frac{1}{2}v_{máx}$?

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #d4edda; color: #155724; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">♻️ Conservación</span>
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Resortes</span>
  <span style="background: #d1ecf1; color: #0c5460; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐ Media</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 15 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Energía inicial: toda en el resorte ($U_e = \frac{1}{2}kx^2$)
- Velocidad máxima en $x = 0$ (toda la energía es cinética)
- Usa conservación: $U_{e,inicial} = K_{máxima}$

---

## 6. Un péndulo simple de longitud $L = 2$ m y masa $m = 0.5$ kg se suelta desde un ángulo $\theta = 30^\circ$ respecto a la vertical.

**a)** ¿Cuál es la velocidad en el punto más bajo?

**b)** ¿Cuál es la tensión en la cuerda en el punto más bajo?

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #d4edda; color: #155724; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">♻️ Conservación</span>
  <span style="background: #fff3cd; color: #856404; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Péndulo</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 25 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Altura inicial: $h = L(1 - \cos\theta)$
- Conserva energía: $mgh = \frac{1}{2}mv^2$
- En el punto más bajo: $T - mg = \frac{mv^2}{L}$ (2ª Ley de Newton)

---

## 7. Un objeto de $m = 2$ kg se lanza verticalmente hacia arriba con $v_0 = 15$ m/s desde el nivel del suelo.

**a)** ¿Qué altura máxima alcanza? (desprecia resistencia del aire)

**b)** Si se tiene en cuenta la resistencia del aire (fuerza proporcional a $v^2$), ¿la altura máxima sería mayor, menor o igual? Explica sin resolver.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #d4edda; color: #155724; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">♻️ Conservación</span>
  <span style="background: #f8d7da; color: #721c24; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🌊 Tiro vertical</span>
  <span style="background: #d1ecf1; color: #0c5460; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐ Media</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 15 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- En altura máxima: $v = 0$
- Conserva energía: $\frac{1}{2}mv_0^2 = mgh_{máx}$
- Con resistencia: hay fuerza no conservativa (disipa energía)

---

<div style="display: flex; gap: 8px; margin: 12px 0; flex-wrap: wrap;">
  <span style="background: #f8d7da; color: #721c24; padding: 6px 14px; border-radius: 14px; font-size: 0.95em; font-weight: 600;">🔥 Fuerzas No Conservativas</span>
</div>

## 8. Un bloque de $m = 4$ kg se desliza $8$ m sobre una superficie horizontal con coeficiente de fricción $\mu_k = 0.3$. La velocidad inicial es $v_i = 6$ m/s.

**a)** ¿Cuál es la velocidad final?

**b)** ¿Cuánta energía se disipó como calor?

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #f8d7da; color: #721c24; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔥 No conservativa</span>
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔧 Fricción</span>
  <span style="background: #d1ecf1; color: #0c5460; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐ Media</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 20 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Fuerza de fricción: $f_k = \mu_k mg$
- Trabajo de fricción: $W_f = -f_k \cdot d$
- Usa: $K_i + W_f = K_f$

---

## 9. Un esquiador de $m = 70$ kg parte del reposo en la cima de una pista de $h = 50$ m de altura. Llega al fondo con $v = 25$ m/s.

**a)** ¿Cuánta energía se perdió por fricción?

**b)** Si la pista tiene $L = 200$ m de longitud, ¿cuál es la fuerza de fricción promedio?

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #f8d7da; color: #721c24; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔥 No conservativa</span>
  <span style="background: #fff3cd; color: #856404; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⛷️ Esquí</span>
  <span style="background: #d1ecf1; color: #0c5460; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐ Media</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 20 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Energía inicial: $E_i = mgh$
- Energía final: $E_f = \frac{1}{2}mv^2$
- Pérdida: $\Delta E = E_i - E_f = W_f$ (trabajo de fricción)
- $W_f = -f_k \cdot L$

---

<div style="display: flex; gap: 8px; margin: 12px 0; flex-wrap: wrap;">
  <span style="background: #fff3cd; color: #856404; padding: 6px 14px; border-radius: 14px; font-size: 0.95em; font-weight: 600;">🔧 Problemas Integradores</span>
</div>

## 10. Un bloque de $m = 1.5$ kg se suelta desde el reposo en un plano inclinado con ángulo $\theta = 37^\circ$ respecto a la horizontal. El coeficiente de fricción cinética es $\mu_k = 0.2$. La longitud del plano es $L = 5$ m.

**a)** Dibuja el diagrama de cuerpo libre.

**b)** ¿Cuál es la velocidad al llegar al fondo?

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #fff3cd; color: #856404; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔧 Integrador</span>
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 Plano inclinado + fricción</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 30 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Componentes de peso: $mg\sin\theta$ (paralela), $mg\cos\theta$ (normal)
- Fricción: $f_k = \mu_k N = \mu_k mg\cos\theta$
- Trabajo neto: $W_{neta} = (mg\sin\theta - f_k)L = \Delta K$

---

## 11. Un resorte de $k = 500$ N/m se comprime $0.2$ m. Un bloque de $m = 1$ kg se coloca contra el resorte al pie de un plano inclinado sin fricción de ángulo $\theta = 30^\circ$.

**a)** ¿Qué altura máxima alcanza el bloque sobre el plano inclinado?

**b)** Si hubiera fricción ($\mu_k = 0.15$), ¿la altura sería mayor, menor o igual? Explica.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #fff3cd; color: #856404; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔧 Integrador</span>
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Resorte + plano</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 30 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Energía inicial: en el resorte ($U_e = \frac{1}{2}kx^2$)
- Energía final: gravitatoria ($U_g = mgh$)
- Altura sobre el plano: $h = d\sin\theta$ (donde $d$ es distancia recorrida)

---

## 12. Un automóvil de $m = 1200$ kg viaja a $v = 20$ m/s por una carretera horizontal. De repente, el conductor ve un obstáculo y frena con fuerza constante, deteniéndose después de $d = 50$ m.

**a)** ¿Cuál es la magnitud de la fuerza de frenado?

**b)** Si el mismo automóvil viaja a $40$ m/s (el doble de velocidad), ¿cuánta distancia necesita para detenerse?

**c)** ¿Por qué es peligroso duplicar la velocidad?

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #fff3cd; color: #856404; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔧 Integrador</span>
  <span style="background: #f8d7da; color: #721c24; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🚗 Frenado</span>
  <span style="background: #d1ecf1; color: #0c5460; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐ Media</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 20 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Trabajo de frenado: $W = -F \cdot d = \Delta K = 0 - \frac{1}{2}mv^2$
- La distancia es proporcional al **cuadrado** de la velocidad: $d \propto v^2$

---

## 📊 Registro de Progreso

| Fecha | Bloque trabajado | Ejercicios completados | Tiempo total | Notas |
|---|---|---|---|---|
|  |  |  |  |  |

---

## 💡 Consejos para el Estudio

- **Teorema trabajo-energía:** Úsalo cuando no te den el tiempo ni la aceleración
- **Conservación:** Revisa siempre si hay fricción (si la hay, $E_m$ NO se conserva)
- **Fricción:** El trabajo siempre es negativo (disipa energía)
- **Plano inclinado:** Recuerda que $h = L\sin\theta$

---

**¡Buena suerte con el TP2! 🚀**
