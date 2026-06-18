# Momentos de Inercia y Tensor de Inercia (Mecánica Racional)

**INSPT – UTN** | **Física Teórica I** | **Prof. Carlos Dibarbora**

---

## 📚 Momento de Inercia

En **física teórica**, el **momento de inercia** $I$ cuantifica la resistencia de un cuerpo a cambios en su velocidad angular.

**Definición:**
$$I = \sum_i m_i r_i^2 \quad \text{(sistema discreto)}$$
$$I = \int r^2 dm \quad \text{(cuerpo continuo)}$$

**Donde $r$ es la distancia al eje de rotación.**

---

## 1. Teorema de Ejes Paralelos

### 1.1 Enunciado

El momento de inercia respecto a un eje cualquiera $I$ se relaciona con el momento baricéntrico $I_{\text{CM}}$:

$$I = I_{\text{CM}} + Md^2$$

**Donde:**
- $M$: Masa total del cuerpo
- $d$: Distancia entre el eje baricéntrico y el eje paralelo

---

### 1.2 Demostración

Para un eje paralelo al eje baricéntrico:
$$I = \int (\vec{r}_{\text{CM}} + \vec{d})^2 dm = I_{\text{CM}} + M|\vec{d}|^2$$

✅ **Esto simplifica mucho los cálculos.**

---

## 2. Momentos de Inercia Comunes

### 2.1 Barra Homogénea (Masa $M$, Longitud $L$)

**Respecto a un extremo:**
$$I = \frac{1}{3}ML^2$$

**Respecto al CM:**
$$I_{\text{CM}} = \frac{1}{12}ML^2$$

---

### 2.2 Disco Sólido (Masa $M$, Radio $R$)

**Respecto al eje central:**
$$I = \frac{1}{2}MR^2$$

---

### 2.3 Esfera Homogénea (Masa $M$, Radio $R$)

**Respecto a un eje que pasa por el centro:**
$$I = \frac{2}{5}MR^2$$

---

### 2.4 Cilindro Sólido (Masa $M$, Radio $R$)

**Respecto al eje central:**
$$I = \frac{1}{2}MR^2$$

**Respecto a un eje perpendicular que pasa por el CM:**
$$I = \frac{1}{12}M(3R^2 + h^2)$$

---

## 3. Tensor de Inercia

### 3.1 Definición (Matriz 3×3)

Para un cuerpo rígido, el **tensor de inercia** $\mathbf{I}$ relaciona el momento angular $\vec{L}$ con la velocidad angular $\vec{\omega}$:

$$\vec{L} = \mathbf{I} \vec{\omega}$$

**Matriz:**
$$\mathbf{I} = \begin{pmatrix}
I_{xx} & -I_{xy} & -I_{xz} \\
-I_{xy} & I_{yy} & -I_{yz} \\
-I_{xz} & -I_{yz} & I_{zz}
\end{pmatrix}$$

---

### 3.2 Componentes

**Momentos de inercia principales:**
$$I_{xx} = \int (y^2 + z^2) dm, \quad I_{yy} = \int (x^2 + z^2) dm, \quad I_{zz} = \int (x^2 + y^2) dm$$

**Productos de inercia:**
$$I_{xy} = \int xy dm, \quad I_{xz} = \int xz dm, \quad I_{yz} = \int yz dm$$

---

### 3.3 Significado Físico

- **$I_{xx}, I_{yy}, I_{zz}$:** Momentos de inercia respecto a los ejes coordenados
- **$I_{xy}, I_{xz}, I_{yz}$:** Productos de inercia (indican acoplamiento entre ejes)

**Si los productos de inercia son cero → ejes principales.**

---

## 4. Ejes Principales de Inercia

### 4.1 Definición

Los **ejes principales** son aquellos donde la matriz de inercia es diagonal:

$$\mathbf{I}_{\text{principal}} = \begin{pmatrix}
I_1 & 0 & 0 \\
0 & I_2 & 0 \\
0 & 0 & I_3
\end{pmatrix}$$

**Donde $I_1, I_2, I_3$ son los momentos principales.**

---

### 4.2 Cálculo de Ejes Principales

1. **Encontrar** los autovalores de $\mathbf{I}$ (resolviendo $\det(\mathbf{I} - \lambda \mathbf{I}_3) = 0$)
2. **Los autovalores** son $I_1, I_2, I_3$
3. **Los autovectores** dan las direcciones de los ejes principales

---

## 5. Energía Cinética en Cuerpos Rígidos

### 5.1 Expresión General

$$E_c = \frac{1}{2}M V_{\text{CM}}^2 + \frac{1}{2} \vec{\omega}^T \mathbf{I}_{\text{CM}} \vec{\omega}$$

**En ejes principales:**
$$E_c = \frac{1}{2}M V_{\text{CM}}^2 + \frac{1}{2}(I_1 \omega_1^2 + I_2 \omega_2^2 + I_3 \omega_3^2)$$

---

### 5.2 Importancia de los Ejes Principales

Si rotamos alrededor de un **eje principal**:
$$\vec{L} = I \vec{\omega} \quad \text{($\vec{L}$ y $\vec{\omega}$ son paralelos)}$$

Si rotamos alrededor de un **eje no principal**:
$$\vec{L} \neq I \vec{\omega} \quad \text{($\vec{L}$ y $\vec{\omega}$ no son paralelos)}$$

---

## 6. Ejercicios Resueltos (Nivel Física Teórica)

### Ejercicio 1: Momento de inercia de una barra (Ejercicio 21 del TP6)

Calcular el momento de inercia de una barra de longitud $L$ y masa $M$ respecto a:
a) Un extremo.
b) El centro de masa (CM).

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Barra</span>
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📐 I</span>
  <span style="background: #e3f2fd; color: #1565c0; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐ Fácil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 20 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- Usa $I = \int r^2 dm$ con $dm = \frac{M}{L} dr$
- Para (b), usá el teorema de ejes paralelos

**Solución paso a paso:**

**a) Respecto a un extremo:**

$$I = \int_0^L x^2 \frac{M}{L} dx = \frac{M}{L} \left[ \frac{x^3}{3} \right]_0^L = \frac{1}{3}ML^2$$

✅ **Respuesta (a):** $I = \frac{1}{3}ML^2$.

**b) Respecto al CM:**

El CM está en $x = L/2$. Usando ejes paralelos:
$$I_{\text{CM}} = I_{\text{extremo}} - M\left(\frac{L}{2}\right)^2 = \frac{1}{3}ML^2 - \frac{1}{4}ML^2 = \frac{1}{12}ML^2$$

✅ **Respuesta (b):** $I_{\text{CM}} = \frac{1}{12}ML^2$.

---

### Ejercicio 2: Matriz de inercia para un chapón cuadrado (Ejercicio 25 del TP6)

Calcular la matriz de inercia para un chapón cuadrado de lado $a$ y masa $M$ con vértices en $(0,0), (0,a), (a,0), (a,a)$. Obtener los ejes principales.

<div style="display: flex; gap: 8px; margin: 8px 0; flex-wrap: wrap;">
  <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">🔄 Chapón</span>
  <span style="background: #f3e5f5; color: #7b1fa2; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">📊 Matriz</span>
  <span style="background: #fce4ec; color: #c62828; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⭐⭐⭐ Difícil</span>
  <span style="background: #e7f3ff; color: #004085; padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: 500;">⏱️ 45 min</span>
</div>

- [ ] Sin empezar

**Pistas:**
- $I_{xx} = \int y^2 dm$, $I_{yy} = \int x^2 dm$, $I_{xy} = \int xy dm$
- $dm = \frac{M}{a^2} dx dy$
- Diagonalizar la matriz para encontrar ejes principales

**Solución (esbozo):**

**Cálculo de componentes:**

$$I_{xx} = \int_0^a \int_0^a y^2 \frac{M}{a^2} dx dy = \frac{M}{a^2} \int_0^a y^2 dy \int_0^a dx = \frac{M}{a^2} \cdot \frac{a^3}{3} \cdot a = \frac{1}{3}Ma^2$$

Similarmente:
$$I_{yy} = \frac{1}{3}Ma^2$$

$$I_{xy} = \int_0^a \int_0^a xy \frac{M}{a^2} dx dy = \frac{M}{a^2} \cdot \frac{a^2}{2} \cdot \frac{a^2}{2} = \frac{1}{4}Ma^2$$

**Matriz de inercia:**

$$\mathbf{I} = \begin{pmatrix}
\frac{1}{3}Ma^2 & -\frac{1}{4}Ma^2 & 0 \\
-\frac{1}{4}Ma^2 & \frac{1}{3}Ma^2 & 0 \\
0 & 0 & \frac{2}{3}Ma^2
\end{pmatrix}$$

**Ejes principales:**
- Eje $z$: Principal (productos de inercia en $z$ son cero)
- Ejes $x$ e $y$: No principales (hay producto $I_{xy}$)

Para diagonalizar, encontramos autovalores:
$$I_1 = \frac{1}{12}Ma^2, \quad I_2 = \frac{7}{12}Ma^2, \quad I_3 = \frac{2}{3}Ma^2$$

✅ **Respuesta:** Ejes principales en direcciones $(1,1,0)$, $(1,-1,0)$ y $(0,0,1)$.

---

## 7. Notas para el Estudiante de Física Teórica

1. **El tensor de inercia es simétrico** → siempre diagonalizable
2. **En ejes principales**, $\vec{L}$ y $\vec{\omega}$ son paralelos
3. **El teorema de ejes paralelos** es fundamental para cálculos
4. **Productos de inercia** indican acoplamiento entre ejes

---

## 🔗 Referencias Bibliográficas (Nivel Universitario)

1. **Goldstein** - *Classical Mechanics* (Cap. 4: The Motion of Rigid Bodies)
2. **Landau & Lifshitz** - *Mechanics* (Vol. 1, Sec. 32: The inertia tensor)
3. **Marion & Thornton** - *Classical Dynamics* (Cap. 11: Motion of Rigid Bodies)
4. **Hibbeler** - *Engineering Mechanics: Dynamics* (Cap. 17: Planar Kinetics of a Rigid Body)

---

**¡Continúa con:** `03-movimiento-giroscopico.md` (Movimiento giroscópico y precesión)