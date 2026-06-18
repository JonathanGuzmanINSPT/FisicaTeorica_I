# Unidad 7: Dinámica del Rígido

**INSPT – UTN** | **Física Teórica I** | **Prof. Carlos Dibarbora**

---

## 📚 Introducción

Esta unidad cubre la **dinámica de cuerpos rígidos** en **mecánica racional**, aplicando:

1. **Ecuaciones de torques y momento angular** (rotación alrededor de ejes fijos)
2. **Momentos de inercia y tensor de inercia** (distribución de masa, ejes principales)
3. **Movimiento giroscópico** (precesión libre y forzada)

**Aplicaciones:** Ingeniería mecánica, diseño de maquinaria, navegación inercial, espectroscopía.

---

## 🎯 Objetivos de Aprendizaje

Al finalizar esta unidad, el estudiante debe poder:

### **Dinámica del Rígido:**
- [ ] Aplicar $\vec{\tau} = I\vec{\alpha}$ para rotación alrededor de un eje fijo
- [ ] Usar el teorema de ejes paralelos: $I = I_{\text{CM}} + Md^2$
- [ ] Resolver problemas de rodadura sin deslizamiento (conservación de energía)
- [ ] Calcular trabajos y energías cinéticas en cuerpos rígidos

### **Momentos de Inercia:**
- [ ] Calcular $I$ para distribuciones continuas: $I = \int r^2 dm$
- [ ] Construir la matriz de inercia $\mathbf{I}$ (tensor de inercia)
- [ ] Encontrar ejes principales de inercia (diagonalizar $\mathbf{I}$)
- [ ] Interpretar productos de inercia ($I_{xy}, I_{xz}, I_{yz}$)

### **Movimiento Giroscópico:**
- [ ] Entender la ecuación $\vec{\tau} = \vec{\Omega} \times \vec{L}$ (precesión)
- [ ] Resolver problemas de giroscopios estabilizadores
- [ ] Analizar precesión libre en trompos asimétricos

---

## 📂 Índice de Archivos

### **Teoría (Nivel Universitario):**

| Archivo | Contenido | Ejercicios Relacionados |
|---------|-------------|---------------------------|
| `01-ecuaciones-dinamica-rigida.md` | Torques, $L$, rotación alrededor de eje fijo | Ej. 1-10 del TP6 |
| `02-momentos-inercia-tensor.md` | $I$, teorema de ejes paralelos, tensor de inercia | Ej. 20-26 del TP6 |
| `03-movimiento-giroscopico.md` | Precesión, giroscopios, ecuaciones de Euler | Ej. 27-29 del TP6 |

---

### **Ejercicios Prácticos:**

| Archivo | Descripción | Cantidad |
|---------|----------------|----------|
| `tp6-dinamica-rigida.md` | Ejercicios del PDF original (2026) | 29 ejercicios |

---

## 📝 Descripción de los Archivos

### **1. `01-ecuaciones-dinamica-rigida.md`**
- **Teoría:** Ecuación fundamental $\vec{\tau} = d\vec{L}/dt$, momento angular, teorema de las fuerzas vivas, trabajos de torques.
- **Nivel:** Goldstein/Landau (física teórica)
- **Alineación:** Ejercicios 1-10 del TP6 (piedra de amolar, Atwood, disco rodando, esfera, volante, bloque girando)

---

### **2. `02-momentos-inercia-tensor.md`**
- **Teoría:** Momentos de inercia para distribuciones continuas, teorema de ejes paralelos, tensor de inercia $\mathbf{I}$, ejes principales.
- **Nivel:** Mecánica racional (Landau Sec. 32)
- **Alineación:** Ejercicios 20-26 del TP6 (sistemas de masas, barra, esfera, cilindro, matriz de inercia)

---

### **3. `03-movimiento-giroscopico.md`**
- **Teoría:** Ecuaciones de Euler, precesión libre (trompo simétrico), precesión forzada (giroscopio con torque), estabilización.
- **Nivel:** Ingeniería mecánica (Goldstein Cap. 5)
- **Alineación:** Ejercicios 27-29 del TP6 (giroscopio precesando, estabilizador de barco, disco precesando)

---

### **4. `tp6-dinamica-rigida.md`**
- **Contenido:** 29 ejercicios resueltos/para resolver del PDF original.
- **Formato:** Enunciado, pistas, solución paso a paso, etiquetas de dificultad.
- **Temas:** Torques, $I$, rodadura, energía, tensor de inercia, giroscopios.

---

## 🔗 Referencias Bibliográficas

### **Dinámica del Rígido:**
1. **Goldstein** - *Classical Mechanics* (Cap. 4-5: Rigid Body Dynamics)
2. **Landau & Lifshitz** - *Mechanics* (Vol. 1, Sec. 24-32: Motion of Rigid Bodies)
3. **Marion & Thornton** - *Classical Dynamics* (Cap. 11-12: Rigid Body Motion)
4. **Hibbeler** - *Engineering Mechanics: Dynamics* (Cap. 17-18: Planar Kinetics of a Rigid Body)

### **Tensor de Inercia:**
5. **Goldstein** - *Classical Mechanics* (Cap. 4: The Inertia Tensor)
6. **Landau & Lifshitz** - *Mechanics* (Vol. 1, Sec. 32: The inertia tensor)

### **Movimiento Giroscópico:**
7. **Goldstein** - *Classical Mechanics* (Cap. 5: The Rigid Body Equations of Motion)
8. **Butikov** - *Rigid Body Dynamics* (Online Notes: Gyroscopic Motion)

---

## 📊 Estadísticas de la Unidad

- **Total de archivos:** 4
- **Archivos de teoría:** 3
- **Archivo de ejercicios:** 1
- **Total de ejercicios:** 29
- **Nivel de dificultad:** ⭐ (Fácil) a ⭐⭐⭐ (Difícil)
- **Tiempo estimado:** 10-50 min por ejercicio

---

## 🚀 Cómo Empezar

1. **Leer la teoría** en orden: `01` → `02` → `03`
2. **Practicar** con los ejercicios del TP6
3. **Verificar** entendimiento con las soluciones paso a paso
4. **Consultar** las referencias bibliográficas para profundizar

---

## 🤔 ¿Dudas?

- **Torques:** ¿Cuándo usar $\tau = I\alpha$? (Eje fijo o que pasa por el CM)
- **Ejes principales:** ¿Por qué $\vec{L}$ y $\vec{\omega}$ no son paralelos? (Productos de inercia no cero)
- **Giroscopios:** ¿Cómo funciona la estabilización? (Resistencia a cambios en $\vec{L}$)

---

**¡Comenza con:** `01-ecuaciones-dinamica-rigida.md` (Teoría de torques y momento angular)