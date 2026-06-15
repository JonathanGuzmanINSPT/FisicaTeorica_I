#!/usr/bin/env python3
"""Diagrama de pares de interacción - Ejercicio 1 TP2 Dinámica."""

from pysketcher import *
from pysketcher._point import Point
from pysketcher._style import Style
import pysketcher.backend.matplotlib as mpl
import numpy as np

# -------------------------------------------------------------------
# Figura
# -------------------------------------------------------------------
fig = Figure(0, 12, 0, 9, backend=mpl.MatplotlibBackend)

# -------------------------------------------------------------------
# 1. CAJA
# -------------------------------------------------------------------
caja = Rectangle(Point(5, 5.8), 2.0, 1.4)
caja.style.fill_color = Style.Color.BLUE
caja.style.line_color = Style.Color.BLUE
caja.style.line_width = 3
fig.add(caja)

txt_caja = Text('CAJA (C)', Point(6, 6.5))
txt_caja.style.font_size = 14
fig.add(txt_caja)

# -------------------------------------------------------------------
# 2. MESA
# -------------------------------------------------------------------
tapa = Rectangle(Point(3.8, 4.5), 4.4, 0.4)
tapa.style.fill_color = Style.Color.ORANGE
tapa.style.line_color = Style.Color.ORANGE
tapa.style.line_width = 3
fig.add(tapa)

p1 = Rectangle(Point(4.2, 3.3), 0.2, 1.2)
p1.style.fill_color = Style.Color.ORANGE
p1.style.line_color = Style.Color.ORANGE
p1.style.line_width = 2
fig.add(p1)

p2 = Rectangle(Point(7.6, 3.3), 0.2, 1.2)
p2.style.fill_color = Style.Color.ORANGE
p2.style.line_color = Style.Color.ORANGE
p2.style.line_width = 2
fig.add(p2)

txt_mesa = Text('MESA (M)', Point(6, 3.9))
txt_mesa.style.font_size = 14
fig.add(txt_mesa)

# -------------------------------------------------------------------
# 3. TIERRA (círculo achatado como elipse)
# -------------------------------------------------------------------
th = np.linspace(0, 2 * np.pi, 200)
pts = [Point(6 + 4.5 * np.cos(t), 1.5 + 1.2 * np.sin(t)) for t in th]
tierra = Curve(pts)
tierra.style.fill_color = Style.Color.GREEN
tierra.style.line_color = Style.Color.GREEN
tierra.style.line_width = 3
fig.add(tierra)

txt_tierra = Text('TIERRA (T)', Point(6, 1.3))
txt_tierra.style.font_size = 14
fig.add(txt_tierra)

# -------------------------------------------------------------------
# 4. PAR 1: Peso (Tierra → Caja)
# -------------------------------------------------------------------
p_c = Arrow(Point(6.5, 3.2), Point(6, 5.5))
p_c.style.line_color = Style.Color.BLUE
p_c.style.line_style = Style.LineStyle.DASHED
p_c.style.line_width = 2.5
fig.add(p_c)

l_pc = Text('$P_C = m\\vec{g}$', Point(7.3, 4.2))
l_pc.style.font_size = 11
fig.add(l_pc)

# Reacción (Caja → Tierra)
r_c = Arrow(Point(5, 5.5), Point(5.5, 3.2))
r_c.style.line_color = Style.Color.RED
r_c.style.line_style = Style.LineStyle.DASHED
r_c.style.line_width = 2
fig.add(r_c)

l_rc = Text('$\\vec{F}_{C\\to T}$', Point(2.5, 4.2))
l_rc.style.font_size = 10
fig.add(l_rc)

# -------------------------------------------------------------------
# 5. PAR 2: Peso mesa (Tierra → Mesa)
# -------------------------------------------------------------------
p_m = Arrow(Point(8.8, 3.9), Point(8.8, 2.8))
p_m.style.line_color = Style.Color.GREEN
p_m.style.line_style = Style.LineStyle.DASHED
p_m.style.line_width = 2
fig.add(p_m)

l_pm = Text('$P_M = M\\vec{g}$', Point(9.5, 3.3))
l_pm.style.font_size = 11
fig.add(l_pm)

# -------------------------------------------------------------------
# 6. PAR 3: Normal (Mesa → Caja)
# -------------------------------------------------------------------
n_mc = Arrow(Point(7.5, 5.1), Point(7.5, 5.6))
n_mc.style.line_color = Style.Color.PURPLE
n_mc.style.line_width = 2.5
fig.add(n_mc)

l_nmc = Text('$\\vec{N}_{M\\to C}$', Point(8.2, 5.2))
l_nmc.style.font_size = 11
fig.add(l_nmc)

# Reacción (Caja → Mesa)
n_cm = Arrow(Point(7.9, 5.6), Point(7.9, 5.1))
n_cm.style.line_color = Style.Color.ORANGE
n_cm.style.line_width = 2
fig.add(n_cm)

l_ncm = Text('$\\vec{N}_{C\\to M}$', Point(8.6, 5.0))
l_ncm.style.font_size = 11
fig.add(l_ncm)

# -------------------------------------------------------------------
# 7. LEYENDA
# -------------------------------------------------------------------
ley = Rectangle(Point(0.3, 0.2), 11.4, 0.5)
ley.style.fill_color = Style.Color.GREY
ley.style.line_color = Style.Color.GREY
ley.style.line_width = 1
fig.add(ley)

ley1 = Text('Peso (gravitatorio)', Point(0.5, 0.42))
ley1.style.font_size = 10
fig.add(ley1)

ley2 = Text('Normal (contacto)', Point(4.0, 0.42))
ley2.style.font_size = 10
fig.add(ley2)

ley3 = Text('Reacci\u00f3n (3\u00aa Ley)', Point(7.5, 0.42))
ley3.style.font_size = 10
fig.add(ley3)

ley4 = Text('Segmentada = interacci\u00f3n a distancia', Point(0.5, 0.25))
ley4.style.font_size = 9
fig.add(ley4)

# -------------------------------------------------------------------
# Guardar
# -------------------------------------------------------------------
fig.show()
fig.save('unidad-2-dinamica/assets/ej1-pares-interaccion.png')
print('Diagrama generado exitosamente.')