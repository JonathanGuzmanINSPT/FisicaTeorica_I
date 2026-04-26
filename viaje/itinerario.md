---
layout: viaje
title: "Viaje — Jonathan & Alejandra"
puppeteer:
  landscape: true
  format: "A3"
  margin:
    top: "14mm"
    bottom: "14mm"
    left: "18mm"
    right: "18mm"
print_background: true
---

<style>
/* ── Layout multi-columna · MPE (.markdown-preview) y web Jekyll (.page-content) ── */

@media screen {
  :is(.markdown-preview, .page-content) {
    max-width: 1400px !important;
    padding: 24px 32px !important;
  }
}

/* ── 2 columnas ── */
:is(.markdown-preview, .page-content) {
  columns: 2;
  column-gap: 36px;
  column-rule: 2px solid rgba(14, 107, 142, 0.2);
}

/* H1: full-ancho */
:is(.markdown-preview, .page-content) h1 {
  column-span: all;
  margin-bottom: 20px !important;
}

/* Párrafos de intro (Ruta / Fechas): full-ancho */
:is(.markdown-preview, .page-content) h1 + p,
:is(.markdown-preview, .page-content) h1 + p + p {
  column-span: all;
  color: #0e6b8e;
  font-size: 13px;
}

/* HR de intro: full-ancho */
:is(.markdown-preview, .page-content) h1 ~ hr:first-of-type {
  column-span: all;
}

/* H2 (cada día): fuerza inicio de columna nueva */
:is(.markdown-preview, .page-content) h2 {
  break-before: column;
  break-after: avoid;
  margin-left: 0 !important;
  margin-right: 0 !important;
  font-size: 11px !important;
  padding: 7px 14px 7px 18px !important;
}

/* Primer H2: no fuerza salto innecesario */
:is(.markdown-preview, .page-content) h2:first-of-type {
  break-before: avoid;
}

/* H3, tablas, blockquotes: sin cortes internos */
:is(.markdown-preview, .page-content) h3 {
  break-after: avoid;
  break-inside: avoid;
  font-size: 12px;
  margin: 12px 0 6px !important;
}

:is(.markdown-preview, .page-content) table {
  break-inside: avoid;
  font-size: 11px;
  width: 100%;
}

:is(.markdown-preview, .page-content) thead th,
:is(.markdown-preview, .page-content) tbody td {
  padding: 4px 8px !important;
}

:is(.markdown-preview, .page-content) blockquote {
  break-inside: avoid;
  padding: 6px 12px;
  font-size: 11px;
  margin: 8px 0;
}

/* HR entre días */
:is(.markdown-preview, .page-content) hr {
  margin: 10px 0;
  break-after: avoid;
}

/* Chips de estado */
:is(.markdown-preview, .page-content) span[style*="border-radius:99px"] {
  white-space: nowrap;
  font-size: 9px !important;
  padding: 1px 7px !important;
}

/* Sección OPCIONAL y rutas alternativas: full-ancho */
:is(.markdown-preview, .page-content) div[style*="text-align:center"],
:is(.markdown-preview, .page-content) div[style*="font-family"] table {
  column-span: all;
}
</style>

# Viaje — Jonathan & Alejandra

**Ruta:** Buenos Aires → París → Munich → Amsterdam → ...
**Fechas:** 26 ABR – ...

---

## Día 0 — Domingo 26 de Abril · Partida

### ✈️ Check-in vuelo Buenos Aires → París

| | |
|---|---|
| **Vuelo** | AF0477 — Air France |
| **Aeropuerto** | EZE — Ministro Pistarini, Terminal P |
| **Cierre de check-in** | **23:30 hs** (llegar al aeropuerto antes de esta hora) |
| **Sugerencia llegada** | 21:30 hs (2 hs antes del cierre) |
| **Equipaje** | Solo equipaje de mano |

---

## Día 1 — Lunes 27 de Abril · Buenos Aires → París → Munich

### ✈️ Vuelo Buenos Aires → París

| | |
|---|---|
| **Vuelo** | AF0477 — Air France |
| **Salida** | 00:30 hs — EZE, Terminal P |
| **Llegada** | 18:20 hs — CDG, Terminal 2E |
| **Clase** | Economy |
| **Equipaje** | Solo equipaje de mano |
| **Tickets** | [Jonathan](tickets/airfrance_jonathan.pdf) · [Alejandra](tickets/airfrance_alejandra.pdf) |
| **Ref. reserva** | Y5NBY5 |

### 🔀 Conexión en París CDG

| | |
|---|---|
| **Llegada** | 18:20 hs — Terminal 2E |
| **Próximo vuelo** | Check-in cierra a las 19:40 hs |
| **Salida** | Terminal 2F (T2E → T2F: mismo complejo, ~10 min caminando) |
| ⚠️ **Tiempo disponible** | 2 hs — suficiente, pero sin demoras |

### ✈️ Vuelo París → Munich

| | |
|---|---|
| **Vuelo** | AF1122 — Air France |
| **Salida** | 20:20 hs — CDG, Terminal 2F |
| **Llegada** | 21:55 hs — MUC, Munich International Airport, Terminal 1 |
| **Clase** | Economy |
| **Equipaje** | Solo equipaje de mano |

### 🏨 Alojamiento en Munich

| | |
|---|---|
| **Nombre** | ibis budget München City Olympiapark |
| **Dirección** | [Am Oberwiesenfeld 22, München, Germany 80809](https://maps.google.com/?q=Am+Oberwiesenfeld+22,+Munich,+Germany+80809) |
| **Check-in** | Lunes 27 de Abril |
| **Check-out** | Jueves 30 de Abril (antes de las 23:01 hs — salida en tren nocturno) |
| **Reserva a nombre de** | Maria Alejandra Cuervo Miranda |
| **Número de reserva** | 6638097701 |

---

<!-- PRÓXIMOS DÍAS A COMPLETAR -->

---

## Días 2–4 — Munich (28 ABR – 30 ABR)

> Alejandra trabaja remotamente. Actividades flexibles según disponibilidad.
> Base de transporte: **U-Bahn U3 desde Olympiazentrum** (a 5 min caminando del hotel).
> ⚠️ El **30 de Abril** hay que hacer checkout y salir en tren nocturno a las 23:01 hs.

---

### 📍 A pasos del hotel — sin transporte

| Actividad | Descripción | Horario aprox. |
|---|---|---|
| **Olympiapark** | Parque olímpico de los JJ.OO. 1972. Lago, jardines, colinas artificiales. Entrada libre al parque. | Todo el día |
| **Olympiaturm** | Torre olímpica con mirador 360° y restaurante giratorio. Vistas increíbles de los Alpes en días despejados. | 09:00–24:00 |
| **BMW Welt** | Showroom espectacular de BMW, arquitectura icónica. Entrada libre. | 09:00–18:00 |
| **BMW Museum** | Historia completa de la marca. ~€10 entrada. | 10:00–18:00 |
| **Olympiastadion** | Estadio de 1972, visitas guiadas o libre. | Variable |

---

### 🚇 Hasta 20 min en U3 desde Olympiazentrum

| Actividad | Estación | Descripción |
|---|---|---|
| **Marienplatz + Glockenspiel** | Marienplatz (U3/U6) | Plaza central de Munich. El carillón toca a las 11:00 y 12:00 hs. Mercados, cafés. |
| **Viktualienmarkt** | Marienplatz | Mercado al aire libre con comida fresca, quesos, cervezas. Ideal mediodía. |
| **Hofbräuhaus** | Marienplatz | Cervecería histórica de 1589. Maßkrug de 1 litro. |
| **Residenz München** | Odeonsplatz (U3/U6) | Palacio real de los Wittelsbach. Museo magnífico. ~€9 entrada. |
| **Englischer Garten** | Münchner Freiheit (U3) | Parque más grande que Central Park. Cervecería Chinesischer Turm. Surfers en el Eisbach. |
| **Pinakothek der Moderne** | Universität (U3/U6) | Arte moderno, diseño, arquitectura. ~€10. Domingos: €1. |
| **Alte Pinakothek** | Universität | Maestros del Renacimiento y Barroco. ~€7. Domingos: €1. |

---

### 🚇 Hasta 30 min — excursiones de medio día

| Actividad | Cómo llegar | Descripción |
|---|---|---|
| **Nymphenburg Palace** | Bus 051 desde Moosacher Str. (~20 min) | Palacio barroco con jardines enormes. Entrada al parque libre. |
| **Deutsches Museum** | S-Bahn hasta Isartor + caminar | Museo de ciencia y tecnología más grande del mundo. Día entero fácilmente. |
| **Schleissheim Palace** | S1 hasta Oberschleissheim (~30 min) | Tres palacios barrocos con jardines versallescos. Menos turistas. |
| **Dachau Memorial** | S2 hasta Dachau + Bus 726 (~35 min) | Memorial del campo de concentración. Entrada libre. Impactante. |

---

## Día 5 — Jueves 30 de Abril · Último día en Munich + Tren nocturno

### 🏨 Checkout — ibis budget München City Olympiapark

| | |
|---|---|
| **Checkout** | A convenir con el hotel, antes de las 23:01 hs |
| **Consigna München Hbf** | Lockers disponibles en la estación (~€5–8/día) para dejar maletas mientras exploran |

### 🗓️ Día libre en Munich

> Último día en la ciudad. Sin actividad fija — aprovechar lo que quede pendiente.

### 🚆 Tren nocturno München → Amsterdam

| | |
|---|---|
| **Tren** | NightJet NJ 420 (ÖBB) |
| **Ticket** | [Ver ticket](tickets/tren_amsterdam.pdf) |
| **Salida** | **23:01 hs** — [München Hauptbahnhof](https://maps.google.com/?q=M%C3%BCnchen+Hauptbahnhof) |
| **Llegada** | **09:49 hs** del 1 de Mayo — Amsterdam Centraal |
| **Vagón / Asientos** | Coche 427 — Asientos 106 y 108 (mesa, pasillo) |
| **Pasajeros** | Jonathan Guzman de la Cruz, Maria Alejandra Cuervo Miranda (2 adultos) |
| **Tarifa** | Sparschiene Adult — **sin cambios ni cancelación** |
| **Precio total** | EUR 69,80 |
| **Sugerencia llegada estación** | 22:15 hs (45 min antes) |

---

## Día 6 — Viernes 1 de Mayo · Llegada a Amsterdam

### 🚆 Llegada Amsterdam Centraal — 09:49 hs

> ⚠️ El check-in en el Airbnb es a las **15:00 hs** — hay 5 horas libres antes de poder entrar.

**Para el intervalo llegada → check-in:**

| Opción | Detalle |
|---|---|
| **Guardar equipaje** | Lockers en Amsterdam Centraal (~€7–9 hasta las 24 hs) |
| **Ducharse / asearse** | ⚠️ *Pendiente: consultar al anfitrión si es posible llegar antes del check-in para asearse, o buscar opción cerca de Central* |
| **Mientras esperan** | Mercado Albert Cuyp (sábado por la mañana), Vondelpark, canales del Jordaan |

---

### 🏨 Alojamiento en Amsterdam

| | |
|---|---|
| **Nombre** | Cozy room in green Amsterdam neighbourhood |
| **Anfitrión** | Olivier |
| **Dirección** | [Kruidenommegang 54, Duivendrecht](https://maps.google.com/?q=Kruidenommegang+54,+Duivendrecht) |
| **Check-in** | Viernes 1 de Mayo — **15:00 hs** |
| **Check-out** | Domingo 3 de Mayo — **12:00 hs** |
| **Huéspedes** | 2 |
| **Código de confirmación** | [HMNDZZ342C](https://www.airbnb.com.ar/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMNDZZ342C) |
| ⚠️ **Cancelación gratuita hasta** | 26 de Abril, 15:00 hs |

> 🚇 **Cómo llegar desde Centraal:** Metro línea 54 dirección Gein → bajarse en **Duivendrecht** (~15 min, 4 paradas). Desde ahí ~5 min caminando.

### 🗺️ Tarde y noche — primer día en Amsterdam

> Día tranquilo de llegada. Es **1 de Mayo** (Día del Trabajo) — muchos museos cerrados, pero los canales y barrios son de los más lindos para recorrer a pie.

| Momento | Actividad | Detalle |
|---|---|---|
| **15:00–17:00** | Check-in + instalarse | Dejar el equipaje, descansar un poco del tren nocturno |
| **17:00** | [Barrio Jordaan](https://maps.google.com/?q=Jordaan+Amsterdam) | El barrio más pintoresco de Amsterdam. Canales angostos, casas del siglo XVII, cafés, galerías. Ideal para caminar sin rumbo. |
| **18:30** | Aperitivo en un brown café | Los *bruine kroegen* (bares tradicionales holandeses) son el lugar ideal. Jenever (ginebra holandesa) o cerveza Heineken local. |
| **19:30** | Cena en Jordaan o Negen Straatjes | Las "Nueve Callejuelas" entre Jordaan y el centro tienen restaurantes de todo tipo y precios razonables. |
| **Noche** | Canal walk al anochecer | Los canales con los puentes iluminados son espectaculares de noche. |

---

## Día 7 — Sábado 2 de Mayo · Amsterdam con la prima

> Día completo. Se juntan con la prima. Albert Cuyp Market abre sábados por la mañana — ideal arrancar por ahí.

### 🗺️ Recorrido sugerido

| Momento | Actividad | Cómo llegar |
|---|---|---|
| **Mañana** | [Mercado Albert Cuyp](https://maps.google.com/?q=Albert+Cuyp+Markt+Amsterdam) — el mercado callejero más grande de Holanda. Desayuno, flores, quesos, souvenirs | Metro 54 → Vijzelgracht (~10 min) |
| **Mañana** | [Vondelpark](https://maps.google.com/?q=Vondelpark+Amsterdam) — el parque central de Amsterdam. Ideal para recorrer a pie o en bicicleta | Desde Albert Cuyp, 15 min caminando |
| **Mediodía** | Jordaan — el barrio más pintoresco. Canales angostos, cafés, tiendas vintage. Almorzar ahí | Tranvía 2 desde Vondelpark |
| **Tarde** | 🎨 **A elegir:** [Van Gogh Museum](https://maps.google.com/?q=Van+Gogh+Museum+Amsterdam) (~€22, reservar online) **ó** [Canal boat tour](https://maps.google.com/?q=Canal+Boat+Amsterdam) (~€15–20) | Ambos cerca de Vondelpark |
| **Noche** | Leidseplein o Rembrandtplein — plazas con vida nocturna, bares y restaurantes | Tranvía 2 |

---

## Día 8 — Domingo 3 de Mayo · Última mañana en Amsterdam

> Checkout a las **12:00 hs**. Mañana tranquila antes de salir.

### 🗓️ Mañana libre

| Momento | Actividad |
|---|---|
| **Antes del checkout** | Desayuno en el barrio de Duivendrecht o en algún café camino a Centraal |
| **Después del checkout** | [Bloemenmarkt](https://maps.google.com/?q=Bloemenmarkt+Amsterdam) — mercado de flores flotante sobre el canal Singel (abre domingos) |
| **Si queda tiempo** | [NEMO Science Museum](https://maps.google.com/?q=NEMO+Science+Museum+Amsterdam) — techo con vista panorámica de la ciudad, entrada libre al techo |

### 🏨 Checkout

| | |
|---|---|
| **Hora** | **12:00 hs** |
| **Equipaje** | Lockers en Amsterdam Centraal si necesitan seguir moviéndose |

### 🚌 FlixBus Amsterdam → Bruselas

| | |
|---|---|
| **Reserva** | [334 752 4073](tickets/Boarding-Pass-Amsterdam-Brussels-3347524073.pdf) |
| **Salida** | **17:00 hs** — [Amsterdam Sloterdijk](https://maps.google.com/?q=Piarcoplein+1043+DW+Amsterdam) (plataformas al norte de la estación, seguir carteles "Hatostraat") |
| **Llegada** | **20:00 hs** — [Brussels-North train station](https://maps.google.com/?q=Brussels+North+station) |
| **Asientos** | Jonathan: 1C · Alejandra: 1D |
| **Equipaje incluido** | 1 bolso de mano (7kg) + 1 maleta bodega (20kg) por persona |
| **Precio total** | EUR 51,95 |
| ⚠️ **Llegar** | 15 min antes de salida |

> 🚇 Para llegar a Amsterdam Sloterdijk desde Centraal: tren directo 5 min (o cualquier metro/tren hacia el oeste).

---

## Día 9 — Lunes 4 de Mayo · Bruselas

> Un día libre en Bruselas antes del bus nocturno a Frankfurt.

### 🗺️ Actividades en Bruselas

| Momento | Actividad | Detalle |
|---|---|---|
| **Mañana** | [Grand Place](https://maps.google.com/?q=Grand+Place+Brussels) | La plaza más bella de Europa según muchos. Ayuntamiento gótico, casas gremiales doradas. |
| **Mañana** | [Manneken Pis](https://maps.google.com/?q=Manneken+Pis+Brussels) | La famosa estatuita a 400m de Grand Place. |
| **Mediodía** | Almuerzar en Rue des Bouchers | Callejuela gastronómica a pasos de Grand Place. Moules-frites (mejillones con papas fritas), el plato típico. |
| **Tarde** | [Barrio Europeo / Parlamento Europeo](https://maps.google.com/?q=European+Parliament+Brussels) | Visita guiada gratuita disponibles. |
| **Tarde** | [Museo Magritte](https://maps.google.com/?q=Magritte+Museum+Brussels) | Arte surrealista de René Magritte. ~€10 entrada. |
| **Tarde** | Chocolaterías y waflerías | Bruselas es capital mundial del chocolate. Neuhaus, Godiva, Leonidas. |

### 🚌 FlixBus nocturno Bruselas → Frankfurt

| | |
|---|---|
| **Reserva** | [334 763 2115](tickets/Boarding-Pass-Brussels-Frankfurt-3347632115.pdf) |
| **Salida** | **22:30 hs** — [Brussels South / Gare du Midi](https://maps.google.com/?q=Rue+de+France+1060+Saint-Gilles+Brussels) (Rue de France, tira de buses) |
| **Llegada** | **05:50 hs del 5 de Mayo** — [Frankfurt central train station](https://maps.google.com/?q=Stuttgarter+Strasse+26+Frankfurt) |
| **Asientos** | Jonathan: 9A · Alejandra: 9B |
| **Equipaje incluido** | 1 bolso de mano (7kg) + 1 maleta bodega (20kg) por persona |
| **Precio total** | EUR 46,15 |
| ⚠️ **Llegar** | 15 min antes de salida |

---

## Día 10 — Martes 5 de Mayo · Llegada a Frankfurt

> Llegan de madrugada (05:50 hs). Día para recuperarse y explorar.

### 🚌 Llegada Frankfurt Hauptbahnhof — 05:50 hs

> Consigna de equipaje disponible en la estación central.

### 🗺️ Frankfurt

| Momento | Actividad | Detalle |
|---|---|---|
| **Mañana** | Desayuno y descanso en cafetería cerca de la estación | Llegada madrugada — tomársela con calma. |
| **Mediodía** | [Römerberg](https://maps.google.com/?q=Römerberg+Frankfurt) | Plaza histórica medieval, corazón de Frankfurt. |
| **Tarde** | [Sachsenhausen](https://maps.google.com/?q=Sachsenhausen+Frankfurt) | Barrio bohemio con tabernas de sidra de manzana (*Apfelwein*). Muy pintoresco. |
| **Tarde** | [Skyline desde Maintower](https://maps.google.com/?q=Main+Tower+Frankfurt) | Terraza más alta de Frankfurt. ~€10. |
| **Tarde** | [Museumsufer](https://maps.google.com/?q=Museumsufer+Frankfurt) | Fila de museos sobre el río Main. Städel (arte) es el más destacado. |

---

## Días 11–16 — Frankfurt y Munich (5 MAY – 16 MAY)

> ⚠️ **Verificar fecha del bus:** el ticket Frankfurt→Munich figura con fecha **lunes 4 de Mayo**, pero ese día están tomando el bus Bruselas→Frankfurt (22:30). La reserva del Airbnb en Munich empieza el **martes 5 de Mayo** — lo más lógico es que el bus sea el 5 de Mayo también. Confirmar con FlixBus.

### 🚌 FlixBus Frankfurt → Munich *(fecha a confirmar: probable 5 de Mayo)*

| | |
|---|---|
| **Reserva** | [334 763 2379](tickets/Boarding-Pass-Frankfurt-Muenchen-3347632379.pdf) |
| **Salida** | **16:40 hs** — [Frankfurt central train station](https://maps.google.com/?q=Stuttgarter+Strasse+26+Frankfurt) |
| **Llegada** | **21:30 hs** — [Munich central bus station](https://maps.google.com/?q=Arnulfstrasse+21+Munich) |
| **Asientos** | Jonathan: 5C · Alejandra: 5D |
| **Equipaje incluido** | 1 bolso de mano (7kg) + 1 maleta bodega (20kg) por persona |
| **Precio total** | EUR 52,95 |

### 🏨 Alojamiento en Munich (segunda estadía)

| | |
|---|---|
| **Nombre** | Quiet room in shared flat |
| **Anfitrión** | Stergios |
| **Dirección** | [Schaffhauser Straße 4, München 81476](https://maps.google.com/?q=Schaffhauser+Straße+4+Munich+81476) |
| **Check-in** | Martes 5 de Mayo — **14:00 hs** (caja de seguridad para llaves — contactar al anfitrión) |
| **Check-out** | Miércoles 6 de Mayo — **11:00 hs** |
| **Huéspedes** | 2 |
| **Código de confirmación** | [HMJTMPKTNQ](https://www.airbnb.com.ar/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMJTMPKTNQ) |
| ⚠️ **Cancelación** | No reembolsable (plazo ya vencido — 28 de Abril) |

---

## Días 17–20 — Munich (6 MAY – 16 MAY)

### 🏨 Airbnb Munich — Noche 6 al 8 de Mayo

| | |
|---|---|
| **Nombre** | Zimmer Nähe Messe / nur an Frauen oder Pärchen |
| **Anfitriona** | Sara |
| **Dirección** | [Am Mitterfeld 29, München 81829](https://maps.google.com/?q=Am+Mitterfeld+29+Munich+81829) |
| **Check-in** | Miércoles 6 de Mayo — **15:00 hs** (caja de seguridad para llaves — contactar a Sara) |
| **Check-out** | Viernes 8 de Mayo — **12:00 hs** |
| **Huéspedes** | 2 |
| **Código de confirmación** | [HMMSNEMNF9](https://www.airbnb.com.ar/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMMSNEMNF9) |
| ⚠️ **Cancelación** | Reembolso parcial si se cancela antes del check-in (6 Mayo 15:00) · Cancelación gratuita antes del 5 de Mayo 15:00 |

> Alojamiento pendiente para las noches del 8 al 16 de Mayo. El vuelo de regreso sale el 17 de Mayo a las 09:35 hs — hay que estar en el aeropuerto antes de las 08:00.

---

## Días 12–20 — Ruta Europa Central: Praga · Viena · Budapest (8–16 MAY)

<span style="display:inline-block;background:#166534;color:#fff;font-size:10px;font-weight:700;letter-spacing:1.2px;padding:2px 10px;border-radius:99px;font-family:sans-serif;text-transform:uppercase;">✦ TENTATIVO</span>

> **Ruta recomendada:** Munich → Praga → Viena → Budapest → Munich  
> Todos los traslados son buses nocturnos para ahorrar noches de alojamiento.  
> ⚠️ Reservas pendientes — los links de abajo son puntos de partida para buscar.

## 🗓️ Resumen de la ruta

| Noche | Transporte | Salida | Llegada | Precio aprox. |
|---|---|---|---|---|
| 8 → 9 Mayo | 🚌 Munich → Praga | ~22:00 MUC | ~03:00 PRG | EUR 15–25 pp |
| 10 → 11 Mayo | 🚌 Praga → Viena | ~22:00 PRG | ~02:30 VIE | EUR 10–20 pp |
| 12 → 13 Mayo | 🚌 Viena → Budapest | ~22:00 VIE | ~01:30 BUD | EUR 10–15 pp |
| 14 → 15 Mayo | 🚌 Budapest → Munich | ~21:00 BUD | ~05:30 MUC | EUR 25–40 pp |

> Dónde buscar: [FlixBus](https://www.flixbus.com) · [RegioJet](https://www.regiojet.com) · [Omio](https://www.omio.com)  
> RegioJet suele ser el más barato en los tramos Praga–Viena y Viena–Budapest.

---

## 🏙️ Día 12 — Viernes 8 de Mayo · Munich → Praga (bus nocturno)

<span style="display:inline-block;background:#166534;color:#fff;font-size:10px;font-weight:700;letter-spacing:1.2px;padding:2px 10px;border-radius:99px;font-family:sans-serif;text-transform:uppercase;">✦ TENTATIVO</span>

**Mañana/tarde libre en Munich** después del checkout de Sara a las 12:00.

- 🎒 Guardar equipaje en el alojamiento hasta la noche (o en consigna de la estación)
- Pasear por el Englischer Garten o el barrio de Maxvorstadt
- **~21:00–22:00:** Salida del bus nocturno Munich → Praga

> <span style="display:inline-block;background:#b45309;color:#fef3c7;font-size:10px;font-weight:700;letter-spacing:1.2px;padding:2px 10px;border-radius:99px;font-family:sans-serif;text-transform:uppercase;">⚠ SIN RESERVAR</span> bus Munich → Praga para el 8 de Mayo

---

## 🏙️ Días 13–14 — Sábado 9 y Domingo 10 de Mayo · Praga 🇨🇿

<span style="display:inline-block;background:#166534;color:#fff;font-size:10px;font-weight:700;letter-spacing:1.2px;padding:2px 10px;border-radius:99px;font-family:sans-serif;text-transform:uppercase;">✦ TENTATIVO</span>

Llegan de madrugada (~03:00–04:00). Dejar maletas en el hostel y descansar.

**Qué ver:**

- Barrio Antiguo (Staré Město) + Reloj Astronómico (cada hora en punto)
- Puente Carlos al amanecer (sin turistas)
- Castillo de Praga + Catedral de San Vito
- Barrio Malá Strana
- Cena con cerveza checa barata (Praga es una de las ciudades más baratas de Europa)

> 💰 Presupuesto referencia: alojamiento hostel €25–40/noche para 2 · comida ~€8–12 por persona

**Noche del domingo 10:** Bus nocturno Praga → Viena (~22:00)

> <span style="display:inline-block;background:#b45309;color:#fef3c7;font-size:10px;font-weight:700;letter-spacing:1.2px;padding:2px 10px;border-radius:99px;font-family:sans-serif;text-transform:uppercase;">⚠ SIN RESERVAR</span> hostel/Airbnb Praga (noches 9 y 10 de Mayo) + bus Praga → Viena

---

## 🏙️ Días 15–16 — Lunes 11 y Martes 12 de Mayo · Viena 🇦🇹

<span style="display:inline-block;background:#166534;color:#fff;font-size:10px;font-weight:700;letter-spacing:1.2px;padding:2px 10px;border-radius:99px;font-family:sans-serif;text-transform:uppercase;">✦ TENTATIVO</span>

Llegan de madrugada (~02:30–03:00). Check-in al mediodía.

**Qué ver:**
- Palacio de Schönbrunn + jardines (entrada €18 por persona con tour básico)
- Belvedere Palacio + El Beso de Klimt
- Naschmarkt (mercado, ideal para el almuerzo)
- Ringstrasse a pie: Ópera, Kunsthistorisches Museum, Parlamento
- Noche en el barrio de Spittelberg o Prater (rueda gigante histórica, libre)

> 💰 Viena es más cara que Praga: hostel €35–55/noche para 2

**Noche del martes 12:** Bus nocturno Viena → Budapest (~22:00–23:00)

> <span style="display:inline-block;background:#b45309;color:#fef3c7;font-size:10px;font-weight:700;letter-spacing:1.2px;padding:2px 10px;border-radius:99px;font-family:sans-serif;text-transform:uppercase;">⚠ SIN RESERVAR</span> hostel/Airbnb Viena (noches 11 y 12 de Mayo) + bus Viena → Budapest

---

## 🏙️ Días 17–18 — Miércoles 13 y Jueves 14 de Mayo · Budapest 🇭🇺

<span style="display:inline-block;background:#166534;color:#fff;font-size:10px;font-weight:700;letter-spacing:1.2px;padding:2px 10px;border-radius:99px;font-family:sans-serif;text-transform:uppercase;">✦ TENTATIVO</span>

Llegan de madrugada (~01:30–02:00). Una de las ciudades más lindas y baratas de Europa.

**Qué ver:**
- Bastión de los Pescadores + Castillo de Buda al amanecer
- Puente de las Cadenas
- Parlamento (tour desde €15) visto desde el Danubio
- Baños Széchenyi (termales al aire libre, ~€20 — experiencia única)
- Ruin bars del barrio judío (Ruin Bar Szimpla Kert, imperdible)
- Gran Mercado Central para comprar paprika y recuerdos baratos

> 💰 Budapest: hostel €20–35/noche para 2 · comida increíblemente barata

**Noche del jueves 14:** Bus nocturno Budapest → Munich (~21:00–22:00)

> <span style="display:inline-block;background:#b45309;color:#fef3c7;font-size:10px;font-weight:700;letter-spacing:1.2px;padding:2px 10px;border-radius:99px;font-family:sans-serif;text-transform:uppercase;">⚠ SIN RESERVAR</span> hostel/Airbnb Budapest (noches 13 y 14 de Mayo) + bus Budapest → Munich

---

## 🏙️ Días 19–20 — Viernes 15 y Sábado 16 de Mayo · Munich (regreso)

<span style="display:inline-block;background:#166534;color:#fff;font-size:10px;font-weight:700;letter-spacing:1.2px;padding:2px 10px;border-radius:99px;font-family:sans-serif;text-transform:uppercase;">✦ TENTATIVO</span>

Llegan de madrugada del 15 (~05:00–06:00).

- Descanso y baño antes del vuelo del día siguiente
- Opción: dejar maletas en consigna en la Hauptbahnhof y dar una última vuelta por Munich
- **Noche del 16:** alojamiento cerca del aeropuerto o en la ciudad

> <span style="display:inline-block;background:#b45309;color:#fef3c7;font-size:10px;font-weight:700;letter-spacing:1.2px;padding:2px 10px;border-radius:99px;font-family:sans-serif;text-transform:uppercase;">⚠ SIN RESERVAR</span> hostel/Airbnb Munich para las noches 15 y 16 de Mayo  
> Tip: buscar cerca de la [S-Bahn línea S1/S8](https://maps.google.com/?q=Munich+Airport+S-Bahn) para llegar al aeropuerto en 40 min.

---

## Día 21 — Domingo 17 de Mayo · Regreso a Buenos Aires

### ✈️ Vuelo Munich → París

| | |
|---|---|
| **Vuelo** | AF1423 (operado por HOP) |
| **Salida** | **09:35 hs** — MUC, Munich International Airport, Terminal 1 |
| **Llegada** | **11:20 hs** — CDG, Terminal 2G |
| **Cierre check-in** | **08:55 hs** — Llegar al aeropuerto antes de las 08:00 |
| **Clase** | Economy |
| **Tickets** | [Jonathan](tickets/airfrance_jonathan.pdf) · [Alejandra](tickets/airfrance_alejandra.pdf) |
| **Ref. reserva** | Y5NBY5 |

### 🔀 Conexión en París CDG — T2G → T2E

| | |
|---|---|
| **Llegada** | 11:20 hs — Terminal 2G |
| **Próximo vuelo** | Check-in cierra 12:20 hs |
| **Tiempo disponible** | ~1 hora — mismo complejo T2 |

### ✈️ Vuelo París → Buenos Aires

| | |
|---|---|
| **Vuelo** | AF0468 — Air France |
| **Salida** | **13:20 hs** — CDG, Terminal 2E |
| **Llegada** | **22:05 hs** — EZE, Aeropuerto Ministro Pistarini |
| **Clase** | Economy |
| **Ref. reserva** | Y5NBY5 |

---

---

<!-- FIN DEL ITINERARIO -->

<div style="margin: 60px 0 0; text-align:center;">
  <div style="display:inline-block; background: linear-gradient(135deg, #0c1e3c 0%, #0e6b8e 50%, #14b8a6 100%); padding: 2px; border-radius: 12px;">
    <div style="background:#fffbf5; border-radius: 10px; padding: 28px 48px;">
      <div style="font-family:'Cormorant Garamond',Georgia,serif; font-size:11px; font-weight:700; letter-spacing:4px; text-transform:uppercase; color:#14b8a6; margin-bottom:8px;">✦ &nbsp; Sección opcional &nbsp; ✦</div>
      <div style="font-family:'Cormorant Garamond',Georgia,serif; font-size:32px; font-weight:700; font-style:italic; color:#0c1e3c; letter-spacing:1px;">Rutas Alternativas</div>
      <div style="font-family:'Nunito','Segoe UI',sans-serif; font-size:13px; color:#0e6b8e; margin-top:8px;">8 al 16 de Mayo · Munich como base · Praga obligatorio</div>
    </div>
  </div>
</div>

<div style="font-family:'Nunito','Segoe UI',sans-serif; font-size:13px; color:#1c2b3a; background:linear-gradient(100deg,#fef3c7,#fffbf5); border-left:4px solid #f59e0b; border-radius:4px; padding:12px 20px; margin:24px 0 40px;">
  💡 Todas las rutas usan <strong>buses o trenes nocturnos</strong> para ahorrar alojamientos. Praga es parada obligatoria en todas las opciones. Los precios son estimados por persona en segunda clase o bus estándar.
</div>

---

## Ruta A — Europa Central Clásica <span style="display:inline-block;background:#0e6b8e;color:#fff;font-size:10px;font-weight:700;letter-spacing:1px;padding:2px 10px;border-radius:99px;font-family:sans-serif;margin-left:8px;">RECOMENDADA</span>

<div style="display:flex;gap:8px;flex-wrap:wrap;margin:8px 0 16px;">
  <span style="background:#fef3c7;color:#92400e;font-size:11px;font-weight:700;padding:3px 12px;border-radius:99px;font-family:sans-serif;">💰 Presupuesto bajo</span>
  <span style="background:#dcfce7;color:#166534;font-size:11px;font-weight:700;padding:3px 12px;border-radius:99px;font-family:sans-serif;">🚌 Solo buses nocturnos</span>
  <span style="background:#e0f2fe;color:#0e6b8e;font-size:11px;font-weight:700;padding:3px 12px;border-radius:99px;font-family:sans-serif;">🏙️ 4 ciudades</span>
</div>

**Munich → Praga → Viena → Budapest → Munich**

| Tramo | Tipo | Duración | Precio aprox. |
|---|---|---|---|
| Munich → Praga | 🚌 Bus nocturno | ~5hs | EUR 15–25 pp |
| Praga → Viena | 🚌 Bus nocturno | ~4hs | EUR 10–20 pp |
| Viena → Budapest | 🚌 Bus nocturno | ~3hs | EUR 10–15 pp |
| Budapest → Munich | 🚌 Bus nocturno | ~8hs | EUR 25–40 pp |

### 🇨🇿 Praga · 2 noches

- Puente Carlos al amanecer (sin turistas)
- Barrio Antiguo: Reloj Astronómico medieval
- Castillo de Praga + Catedral de San Vito
- Barrio Malá Strana y callejuelas medievales
- Cerveza checa más barata que el agua 🍺

### 🇦🇹 Viena · 2 noches

- Palacio de Schönbrunn + jardines imperiales
- Belvedere: *El Beso* de Klimt en vivo
- Naschmarkt (mercado local, almuerzo barato)
- Ringstrasse a pie: Ópera, Parlamento, museos
- Café vienés clásico: Café Central o Café Landtmann

### 🇭🇺 Budapest · 2 noches

- Bastión de los Pescadores al amanecer · vistas únicas al Danubio
- Baños Széchenyi: termales al aire libre (~€20)
- Ruin Bar Szimpla Kert · imperdible de noche
- Gran Mercado Central: paprika, foie gras y recuerdos
- Parlamento visto desde el Danubio al atardecer

---

## Ruta B — Bohemia + Alemania <span style="display:inline-block;background:#166534;color:#fff;font-size:10px;font-weight:700;letter-spacing:1px;padding:2px 10px;border-radius:99px;font-family:sans-serif;margin-left:8px;">MÁS TRANQUILA</span>

<div style="display:flex;gap:8px;flex-wrap:wrap;margin:8px 0 16px;">
  <span style="background:#fef3c7;color:#92400e;font-size:11px;font-weight:700;padding:3px 12px;border-radius:99px;font-family:sans-serif;">💰💰 Presupuesto medio</span>
  <span style="background:#dcfce7;color:#166534;font-size:11px;font-weight:700;padding:3px 12px;border-radius:99px;font-family:sans-serif;">🚂 Trenes directos</span>
  <span style="background:#e0f2fe;color:#0e6b8e;font-size:11px;font-weight:700;padding:3px 12px;border-radius:99px;font-family:sans-serif;">🏙️ 3 ciudades · más tiempo en cada una</span>
</div>

**Munich → Praga → Dresde → Berlín → Munich**

| Tramo | Tipo | Duración | Precio aprox. |
|---|---|---|---|
| Munich → Praga | 🚌 Bus nocturno | ~5hs | EUR 15–25 pp |
| Praga → Dresde | 🚂 Tren | ~2hs | EUR 15–30 pp |
| Dresde → Berlín | 🚂 Tren | ~2hs | EUR 15–25 pp |
| Berlín → Munich | 🚌 Bus nocturno | ~6hs | EUR 20–35 pp |

### 🇨🇿 Praga · 2–3 noches

*(mismo contenido que Ruta A — más tiempo para explorar)*

### 🇩🇪 Dresde · 1 noche

- Frauenkirche: reconstruida ladrillo a ladrillo post-WWII
- Zwinger: palacio barroco con museos de porcelana y arte
- Brühlsche Terrasse: paseo sobre el Elba · "Balcón de Europa"
- Neustadt: barrio alternativo con street art y bares

### 🇩🇪 Berlín · 2–3 noches

- Muro de Berlín: East Side Gallery (1.3km de murales)
- Checkpoint Charlie + Topografía del Terror
- Isla de los Museos (Patrimonio UNESCO)
- Barrio de Mitte + Alexanderplatz
- Vida nocturna legendaria: Berghain, Watergate, clubs en el Spree

---

## Ruta C — Triángulo del Este <span style="display:inline-block;background:#7c3aed;color:#fff;font-size:10px;font-weight:700;letter-spacing:1px;padding:2px 10px;border-radius:99px;font-family:sans-serif;margin-left:8px;">MÁS CULTURAL</span>

<div style="display:flex;gap:8px;flex-wrap:wrap;margin:8px 0 16px;">
  <span style="background:#fef3c7;color:#92400e;font-size:11px;font-weight:700;padding:3px 12px;border-radius:99px;font-family:sans-serif;">💰 Más barato que A</span>
  <span style="background:#fce7f3;color:#9d174d;font-size:11px;font-weight:700;padding:3px 12px;border-radius:99px;font-family:sans-serif;">✈️ Vuelo al final</span>
  <span style="background:#e0f2fe;color:#0e6b8e;font-size:11px;font-weight:700;padding:3px 12px;border-radius:99px;font-family:sans-serif;">🏙️ 3 ciudades · historia profunda</span>
</div>

**Munich → Praga → Cracovia → Varsovia ✈️ Munich**

| Tramo | Tipo | Duración | Precio aprox. |
|---|---|---|---|
| Munich → Praga | 🚌 Bus nocturno | ~5hs | EUR 15–25 pp |
| Praga → Cracovia | 🚌 Bus nocturno | ~8hs | EUR 20–30 pp |
| Cracovia → Varsovia | 🚂 Tren | ~2.5hs | EUR 10–20 pp |
| Varsovia → Munich | ✈️ Avión | ~2hs | EUR 30–60 pp |

### 🇨🇿 Praga · 2 noches

*(mismo contenido que Ruta A)*

### 🇵🇱 Cracovia · 2 noches

- Casco Histórico Patrimonio UNESCO — el mejor conservado de Polonia
- Castillo Wawel sobre el Vístula
- Barrio judío Kazimierz: sinagogues, cafés, vida cultural
- **Auschwitz-Birkenau** a 1hs en bus (visita gratuita, reservar online)
- Ciudad subterránea de sal de Wieliczka (~€20, impresionante)
- La ciudad más barata de todo el itinerario 🍺 EUR 2–3

### 🇵🇱 Varsovia · 1 noche

- Ciudad Vieja reconstruida: única en el mundo post-WWII
- Museo del Levantamiento de Varsovia (uno de los mejores museos de historia de Europa)
- Palacio de la Cultura y Ciencia (vistas panorámicas gratuitas)
- Barrio de Praga (alternativo, street art)

---

## Ruta D — Norte Escandinavo <span style="display:inline-block;background:#f97316;color:#fff;font-size:10px;font-weight:700;letter-spacing:1px;padding:2px 10px;border-radius:99px;font-family:sans-serif;margin-left:8px;">MÁS AMBICIOSA</span>

<div style="display:flex;gap:8px;flex-wrap:wrap;margin:8px 0 16px;">
  <span style="background:#fee2e2;color:#991b1b;font-size:11px;font-weight:700;padding:3px 12px;border-radius:99px;font-family:sans-serif;">💰💰💰 Más cara</span>
  <span style="background:#dcfce7;color:#166534;font-size:11px;font-weight:700;padding:3px 12px;border-radius:99px;font-family:sans-serif;">🌍 Máxima diversidad</span>
  <span style="background:#e0f2fe;color:#0e6b8e;font-size:11px;font-weight:700;padding:3px 12px;border-radius:99px;font-family:sans-serif;">🏙️ 4 ciudades</span>
</div>

**Munich → Berlín → Copenhague → Praga → Munich**

| Tramo | Tipo | Duración | Precio aprox. |
|---|---|---|---|
| Munich → Berlín | 🚌 Bus nocturno | ~6hs | EUR 20–35 pp |
| Berlín → Copenhague | 🚂 Tren + ferry | ~5hs | EUR 40–80 pp |
| Copenhague → Praga | 🚌 Bus nocturno | ~12hs | EUR 35–55 pp |
| Praga → Munich | 🚌 Bus nocturno | ~5hs | EUR 15–25 pp |

### 🇩🇪 Berlín · 2 noches · *(ver Ruta B)*

### 🇩🇰 Copenhague · 2 noches

- Nyhavn: casas de colores sobre el canal · foto icónica
- Palacio de Amalienborg y cambio de guardia
- Tivoli Gardens: parque de diversiones histórico de 1843
- Freetown Christiania: comunidad alternativa única en el mundo
- Strøget: la calle peatonal más larga de Europa
- Gastronomía: New Nordic cuisine (Noma hizo historia aquí)

### 🇨🇿 Praga · 2 noches · *(ver Ruta A)*

---

## Ruta E — Capitales Pequeñas <span style="display:inline-block;background:#0891b2;color:#fff;font-size:10px;font-weight:700;letter-spacing:1px;padding:2px 10px;border-radius:99px;font-family:sans-serif;margin-left:8px;">MÁS AUTÉNTICA</span>

<div style="display:flex;gap:8px;flex-wrap:wrap;margin:8px 0 16px;">
  <span style="background:#fef3c7;color:#92400e;font-size:11px;font-weight:700;padding:3px 12px;border-radius:99px;font-family:sans-serif;">💰 Muy barata</span>
  <span style="background:#dcfce7;color:#166534;font-size:11px;font-weight:700;padding:3px 12px;border-radius:99px;font-family:sans-serif;">🚌 Solo buses nocturnos</span>
  <span style="background:#e0f2fe;color:#0e6b8e;font-size:11px;font-weight:700;padding:3px 12px;border-radius:99px;font-family:sans-serif;">🏙️ Sin multitudes</span>
</div>

**Munich → Praga → Bratislava → Budapest → Munich**

| Tramo | Tipo | Duración | Precio aprox. |
|---|---|---|---|
| Munich → Praga | 🚌 Bus nocturno | ~5hs | EUR 15–25 pp |
| Praga → Bratislava | 🚌 Bus / tren | ~4hs | EUR 10–18 pp |
| Bratislava → Budapest | 🚂 Tren | ~2.5hs | EUR 10–15 pp |
| Budapest → Munich | 🚌 Bus nocturno | ~8hs | EUR 25–40 pp |

### 🇨🇿 Praga · 3 noches *(más tiempo que en Ruta A)*

### 🇸🇰 Bratislava · 1 noche

- Ciudad Vieja compacta: recorrible en 4hs a pie
- Castillo de Bratislava sobre el Danubio
- UFO Bridge: restaurante / mirador sobre el puente del Danubio
- Cerveza Zlatý Bažant baratísima · EUR 1,50 en bar local
- Capital menos turística de Europa Central

### 🇭🇺 Budapest · 3 noches *(más tiempo para baños y excursiones)* · *(ver Ruta A)*

---

<div style="margin: 40px 0; font-family:'Nunito','Segoe UI',sans-serif; font-size:12px;">

| Ruta | Ciudades | Presupuesto total transporte | Dificultad logística | Ideal si... |
|---|---|---|---|---|
| **A** Europa Central | Praga · Viena · Budapest | EUR 130–200 pp | ⭐ Fácil | Querés lo mejor de Europa del Este |
| **B** Bohemia + Alemania | Praga · Dresde · Berlín | EUR 110–175 pp | ⭐ Fácil | Preferís cultura e historia alemana |
| **C** Triángulo del Este | Praga · Cracovia · Varsovia | EUR 100–165 pp | ⭐⭐ Media | Querés la experiencia más profunda e impactante |
| **D** Norte Escandinavo | Berlín · Copenhague · Praga | EUR 200–320 pp | ⭐⭐ Media | Querés variedad máxima y norte de Europa |
| **E** Capitales Pequeñas | Praga · Bratislava · Budapest | EUR 120–190 pp | ⭐ Fácil | Querés escapar del turismo masivo |

</div>

