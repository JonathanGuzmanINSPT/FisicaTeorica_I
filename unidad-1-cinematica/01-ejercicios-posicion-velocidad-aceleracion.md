# Ejercicios — Vectores Posición, Velocidad y Aceleración

**Unidad:** 1 · **Tema:** Sistemas de coordenadas y cinemática vectorial  
**Última revisión:** <!-- fecha -->  
**Estado general:** 🔴 Sin comenzar / 🟡 En progreso / 🟢 Dominado

---

## Cómo usar este archivo

Cada ejercicio tiene tres estados posibles:

| Símbolo | Significado |
|---|---|
| `- [ ]` | Sin hacer |
| `- [~]` | Intentado / con dudas — volver a revisar |
| `- [x]` | Dominado (pasó la rúbrica al final del archivo) |

Los comentarios `<!-- ... -->` indican concepto objetivo, dificultad y tiempo orientativo. Las soluciones están en un archivo separado `01-soluciones.md`.

---

## 📊 Progreso

| Bloque | Total | ✅ | 🔄 | % |
|---|---|---|---|---|
| Cartesianas | 3 | 0 | 0 | 0% |
| Polares 2D | 4 | 0 | 0 | 0% |
| Cilíndricas | 3 | 0 | 0 | 0% |
| Esféricas | 3 | 0 | 0 | 0% |
| Conversiones y elección | 3 | 0 | 0 | 0% |
| Escenarios físicos | 5 | 0 | 0 | 0% |
| **Total** | **21** | **0** | **0** | **0%** |

> Actualizá esta tabla manualmente al final de cada sesión.


---

## Bloque 1 — Coordenadas Cartesianas

<!-- Concepto: posición, velocidad y aceleración directas | Dificultad: ⭐ | Tiempo: 10 min -->
- [ ] **Ejercicio 1.** Un punto material se mueve según $x(t) = 2t^2 - 3t$, $y(t) = 4t - 1$, $z(t) = t^3$.  
  a) Calculá $\vec{v}(t)$ y $\vec{a}(t)$.  
  b) ¿En qué instante la componente $v_x$ se anula? ¿Qué vale $\vec{a}$ en ese instante?

<!-- Concepto: segunda derivada, propiedad $\vec{a} \propto -\vec{r}$ | Dificultad: ⭐ | Tiempo: 10 min -->
- [ ] **Ejercicio 2.** La posición de una partícula es $\vec{r}(t) = A\cos(\omega t)\,\hat{e_x} + B\sin(\omega t)\,\hat{e_y}$, con $A$, $B$, $\omega$ constantes positivas.  
  a) Calculá $\vec{v}(t)$ y $\vec{a}(t)$.  
  b) Demostrá que $\vec{a} = -\omega^2\,\vec{r}$.  
  c) ¿Qué trayectoria describe la partícula? ¿Cuándo es circular?

<!-- Concepto: motivación para el cambio de sistema | Dificultad: ⭐⭐ | Tiempo: 15 min -->
- [ ] **Ejercicio 3.** Una partícula describe $x(t) = R\cos(\omega t)$, $y(t) = R\sin(\omega t)$, con $R$ y $\omega$ constantes.  
  a) Calculá $\vec{a}(t)$ en cartesianas.  
  b) Expresá la misma posición en polares: ¿cuáles son $r(t)$ y $\phi(t)$?  
  c) Usá la fórmula de aceleración en polares para llegar al mismo resultado. ¿Qué sistema fue más directo?

---

## Bloque 2 — Coordenadas Polares 2D

<!-- Concepto: derivada temporal de versores — demostración desde definiciones | Dificultad: ⭐⭐⭐ | Tiempo: 20 min -->
- [ ] **Ejercicio 4.** A partir de $\hat{e_r} = \cos\phi\,\hat{e_x} + \sin\phi\,\hat{e_y}$ y $\hat{e_\phi} = -\sin\phi\,\hat{e_x} + \cos\phi\,\hat{e_y}$:  
  a) Demostrá que $\dot{\hat{e_r}} = \dot{\phi}\,\hat{e_\phi}$ y $\dot{\hat{e_\phi}} = -\dot{\phi}\,\hat{e_r}$.  
  b) Explicá con palabras por qué estos versores cambian aunque su módulo sea siempre 1.  
  c) ¿Qué ocurre con $\dot{\hat{e_r}}$ si el punto se mueve en línea recta que pasa por el origen?

<!-- Concepto: espiral — todos los términos de $\vec{a}$ activos | Dificultad: ⭐⭐⭐ | Tiempo: 25 min -->
- [ ] **Ejercicio 5.** Una partícula describe una espiral logarítmica: $r(t) = r_0\,e^{\alpha t}$, $\phi(t) = \omega t$.  
  a) Calculá $\vec{v}(t)$ y $\vec{a}(t)$ en polares.  
  b) Identificá en $\vec{a}$: el término centrípeto, el tangencial y los dos que acoplan $\dot{r}$ con $\dot{\phi}$.  
  c) ¿Para qué valor de $\alpha$ el movimiento se reduce a circular uniforme?

<!-- Concepto: MCU en polares, verificación | Dificultad: ⭐ | Tiempo: 10 min -->
- [ ] **Ejercicio 6.** Un punto se mueve en un círculo de radio $R$ con $\dot{\phi} = \omega = \text{cte}$.  
  a) Usando las fórmulas en polares, demostrá que $\vec{v} = R\omega\,\hat{e_\phi}$ y $\vec{a} = -R\omega^2\,\hat{e_r}$.  
  b) Verificá que el módulo de $\vec{a}$ coincide con $v^2/R$.

<!-- Concepto: razonamiento inverso — de $\vec{a}$ a condiciones cinemáticas | Dificultad: ⭐⭐⭐ | Tiempo: 20 min -->
- [ ] **Ejercicio 7.** Un punto tiene $\vec{a} = -k\,\hat{e_r}$ (atracción central pura, $k > 0$) y $r(t) = R$ constante.  
  a) Imponiendo consistencia con las fórmulas de $a_r$ y $a_\phi$, determiná $\dot{\phi}(t)$ y $\ddot{\phi}(t)$.  
  b) ¿Qué tipo de movimiento es? ¿Podría tener $\dot{r} \neq 0$?

---

## Bloque 3 — Coordenadas Cilíndricas

<!-- Concepto: hélice, extensión natural de polares al 3D | Dificultad: ⭐⭐ | Tiempo: 15 min -->
- [ ] **Ejercicio 8.** Un punto describe una hélice: $\rho = R$, $\phi(t) = \omega t$, $z(t) = v_0 t$, con $R$, $\omega$, $v_0$ constantes.  
  a) Calculá $\vec{r}(t)$, $\vec{v}(t)$ y $\vec{a}(t)$ en cilíndricas.  
  b) ¿El módulo de $\vec{v}$ es constante?  
  c) ¿En qué se diferencia $\vec{a}$ del movimiento circular plano?

<!-- Concepto: origen de los términos "extra" — vínculo geométrico | Dificultad: ⭐⭐⭐ | Tiempo: 30 min -->
- [ ] **Ejercicio 9.** En cilíndricas $(\rho, \phi, z)$:  
  a) Escribí $\dot{\hat{e_\rho}}$ y $\dot{\hat{e_\phi}}$ por analogía con el resultado polar. ¿Por qué $\dot{\hat{e_z}} = 0$?  
  b) Mostrá que aparece el término $-\rho\dot{\phi}^2\,\hat{e_\rho}$ en la aceleración y explicá su origen físico.  
  c) ¿Por qué en cartesianas **no aparecen** estos términos "extra"? Conectá la respuesta con la geometría de los versores.

<!-- Concepto: cálculo en cilíndricas con variación en $\rho$ y $z$ | Dificultad: ⭐⭐ | Tiempo: 15 min -->
- [ ] **Ejercicio 10.** La posición en cilíndricas es $\rho(t) = e^{-\alpha t}$, $\phi(t) = \beta t$, $z(t) = \gamma t^2$, con $\alpha, \beta, \gamma > 0$.  
  a) Calculá $\vec{v}(t)$ y $\vec{a}(t)$.  
  b) Identificá qué términos son centrípetos y cuáles de Coriolis.

---

## Bloque 4 — Coordenadas Esféricas

<!-- Concepto: derivación completa de $\vec{v}$ y $\vec{a}$ en esféricas | Dificultad: ⭐⭐⭐ | Tiempo: 30 min -->
- [ ] **Ejercicio 11.** Dado que los versores esféricos satisfacen:
$$\dot{\hat{e_r}} = \dot{\theta}\,\hat{e_\theta} + \dot{\phi}\sin\theta\,\hat{e_\phi}, \quad \dot{\hat{e_\theta}} = -\dot{\theta}\,\hat{e_r} + \dot{\phi}\cos\theta\,\hat{e_\phi}, \quad \dot{\hat{e_\phi}} = -\dot{\phi}\sin\theta\,\hat{e_r} - \dot{\phi}\cos\theta\,\hat{e_\theta}$$  
  a) Partiendo de $\vec{r} = r\,\hat{e_r}$, derivá para obtener $\vec{v}(t)$.  
  b) Derivá $\vec{v}$ para obtener las tres componentes de $\vec{a}$. Dejá el desarrollo intermedio visible.  
  c) Verificá que para $\theta = \pi/2$ y $\dot{\theta} = 0$ las fórmulas se reducen a las de polares.

<!-- Concepto: cálculo numérico en esféricas | Dificultad: ⭐⭐ | Tiempo: 15 min -->
- [ ] **Ejercicio 12.** En $t_0$: $r = 5\,\text{m}$, $\theta = \pi/3$, $\phi = \pi/6$, con $\dot{r} = 2\,\text{m/s}$, $\dot{\theta} = 0.5\,\text{rad/s}$, $\dot{\phi} = 1\,\text{rad/s}$, y todas las segundas derivadas nulas.  
  a) Calculá las tres componentes de $\vec{v}$ en esféricas.  
  b) Calculá las tres componentes de $\vec{a}$.  
  c) ¿Cuál componente de $\vec{v}$ representa el alejamiento radial?

<!-- Concepto: trampa clásica θ = cte ≠ a_θ = 0 | Dificultad: ⭐⭐⭐ | Tiempo: 20 min -->
- [ ] **Ejercicio 13.** Una partícula se mueve sobre la esfera $r = R$ con $\theta = \pi/4$ constante y $\dot{\phi} = \omega$.  
  a) Calculá $\vec{v}(t)$. ¿Cuántas componentes son no nulas?  
  b) Calculá $\vec{a}(t)$. ¿Qué componentes son no nulas?  
  c) Explicá físicamente por qué $a_\theta \neq 0$ aunque $\dot{\theta} = 0$.  
  > **Atención:** $\theta = \text{cte}$ **no implica** $a_\theta = 0$.

---

## Bloque 5 — Conversiones y elección del sistema

<!-- Concepto: independencia física del sistema — verificación explícita | Dificultad: ⭐⭐⭐ | Tiempo: 30 min -->
- [ ] **Ejercicio 14.** Movimiento circular uniforme de radio $R$ y velocidad angular $\omega$ en el plano $xy$.  
  a) Calculá $\vec{v}$ y $\vec{a}$ en cartesianas.  
  b) Calculá $\vec{v}$ y $\vec{a}$ en polares.  
  c) Mostrá que los vectores son idénticos en ambos sistemas. *(La física no depende del sistema elegido.)*

<!-- Concepto: conversión de componentes de velocidad entre sistemas | Dificultad: ⭐⭐ | Tiempo: 20 min -->
- [ ] **Ejercicio 15.** La velocidad de una partícula en cartesianas es $\vec{v} = 3\,\hat{e_x} - 4\,\hat{e_y}$ m/s. La partícula está en $x = 3\,\text{m}$, $y = 4\,\text{m}$.  
  a) Calculá $r$, $\phi$, $\hat{e_r}$ y $\hat{e_\phi}$ en ese punto.  
  b) Expresá $\vec{v}$ en componentes polares $(v_r, v_\phi)$.

<!-- Concepto: metacognición — criterio de elección de sistema | Dificultad: ⭐⭐ | Tiempo: 20 min -->
- [ ] **Ejercicio 16.** Para cada trayectoria, elegí el sistema más conveniente, justificá la elección, y escribí la forma de $\vec{r}(t)$ en ese sistema (sin calcular $\vec{v}$ ni $\vec{a}$):  
  a) Caída libre vertical desde altura $h$.  
  b) Espiral de Arquímedes $r = k\phi$, con $\phi(t) = \omega t$.  
  c) Movimiento sobre la superficie de un cilindro de radio $R$ con $z(t)$ variable.  
  d) Satélite en órbita elíptica alrededor de la Tierra.

---

## Bloque 6 — Escenarios físicos

<!-- Concepto: MCU en polares, reducción de complejidad, verificación entre sistemas | Dificultad: ⭐⭐ | Tiempo: 20 min -->
- [ ] **Ejercicio 17 — Satélite en órbita circular.** Un satélite orbita la Tierra a altura constante $h$. El radio orbital es $R = R_T + h$ y la velocidad angular $\omega$ es constante.  
  a) Escribí $\vec{r}(t)$ en coordenadas polares y en cartesianas.  
  b) Calculá $\vec{v}$ en ambos sistemas y comparalos.  
  c) Calculá $\vec{a}$ en polares. ¿Hacia dónde apunta? ¿Qué nombre recibe?  
  > ¿Por qué coordenadas polares simplifican drásticamente este problema?

<!-- Concepto: cilíndricas, simetría de eje, aceleración puramente radial | Dificultad: ⭐⭐⭐ | Tiempo: 25 min -->
- [ ] **Ejercicio 18 — Auto en rampa helicoidal.** Un auto sube una rampa con $\dot{z} = v_0$, $\rho = R$ y $\dot{\phi} = \Omega$, todas constantes.  
  a) Calculá $\vec{r}(t)$, $\vec{v}(t)$ y $\vec{a}(t)$ en cilíndricas.  
  b) ¿El módulo de $\vec{v}$ es constante?  
  c) Mostrá que $\vec{a}$ es puramente radial y calculá su magnitud.  
  > ¿Por qué cilíndricas son la elección natural para movimientos con simetría de eje?

<!-- Concepto: aceleración de Coriolis explícita, movimiento relativo | Dificultad: ⭐⭐⭐ | Tiempo: 25 min -->
- [ ] **Ejercicio 19 — Insecto sobre disco giratorio.** Un insecto camina en línea recta a velocidad $u$ constante sobre un disco que gira con $\Omega$ constante. En polares: $r(t) = ut$, $\phi(t) = \Omega t$.  
  a) Calculá $\vec{v}(t)$ y $\vec{a}(t)$ en polares.  
  b) Identificá el término centrípeto $(-r\dot{\phi}^2)$ y el de Coriolis $(2\dot{r}\dot{\phi})$.  
  c) ¿Qué ocurre con la aceleración de Coriolis si el insecto se detiene ($\dot{r} = 0$)?  
  > Este problema tiene la misma estructura que la deflexión de vientos en la atmósfera terrestre.

<!-- Concepto: esféricas con datos numéricos, componente radial | Dificultad: ⭐⭐ | Tiempo: 20 min -->
- [ ] **Ejercicio 20 — Radar que rastrea un avión.** Un radar en el origen registra en $t_0$: $r = 10\,\text{km}$, $\theta = \pi/4$, $\phi = \pi/3$, con $\dot{r} = 200\,\text{m/s}$, $\dot{\theta} = 0.01\,\text{rad/s}$, $\dot{\phi} = 0.02\,\text{rad/s}$, y segundas derivadas nulas.  
  a) Calculá las tres componentes de $\vec{v}$ en esféricas.  
  b) Calculá $|\vec{v}|$.  
  c) ¿Cuál componente representa el alejamiento radial del avión?  
  > ¿En qué caso especial ($\theta = \pi/2$) las coordenadas esféricas se reducen a polares?

<!-- Concepto: trampa ȧ_θ ≠ 0 aunque θ = cte, interpretación física de restricción | Dificultad: ⭐⭐⭐ | Tiempo: 25 min -->
- [ ] **Ejercicio 21 — Péndulo cónico.** Un péndulo de longitud $\ell$ forma un ángulo constante $\theta_0$ con la vertical y la masa gira con $\dot{\phi} = \omega = \text{cte}$.  
  a) Escribí $\vec{r}$ en esféricas. ¿Qué condiciones impone $r = \ell = \text{cte}$ y $\theta = \theta_0 = \text{cte}$?  
  b) Calculá $\vec{v}(t)$. ¿Qué componentes son nulas?  
  c) Calculá $\vec{a}(t)$ y verificá que $a_\theta \neq 0$ aunque $\dot{\theta} = 0$. Interpretá el resultado.  
  > **Trampa clásica:** $\theta = \text{cte}$ **no implica** $a_\theta = 0$.

---

## 🎯 Rúbrica de Autoevaluación

Antes de marcar un ejercicio como `[x]` (dominado), respondé estas preguntas:

- [ ] ¿Puedo explicar *por qué* usé este sistema de coordenadas y no otro?
- [ ] ¿Entiendo el significado físico de cada término en la expresión de $\vec{a}$?
- [ ] ¿Podría resolver un ejercicio análogo con datos distintos sin consultar las notas teóricas?
- [ ] ¿Reconocería este patrón si aparece en un examen sin contexto previo?

> Si respondés **NO** a cualquiera → marcá el ejercicio como `[~]` (revisado, no dominado aún).

---

*Volver a las notas: [Vectores Posición, Velocidad y Aceleración →](./01-posicion-velocidad-aceleracion.md)*  
*Próximo tema: [Componentes intrínsecas y radio de curvatura →](./02-componentes-intrinsecas.md)*
