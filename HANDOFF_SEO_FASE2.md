# Handoff — Torre Palmas · SEO Fase 2 (Local SEO)

> **Documento de traspaso para nuevo chat.** Contiene contexto completo del proyecto, estado actual y plan detallado para arrancar la Fase 3 (Local SEO).

---

## 🗂️ Datos del proyecto

- **Cliente**: Torre Palmas — Centro de negocios premium en Metepec
- **Domicilio**: Av. Ignacio Comonfort 1312, Col. La Providencia, Metepec, Edo. de México, CP 52140
- **Teléfono**: +52 722 571 9944
- **Email**: informes@torrepalmas.com
- **WhatsApp**: https://wa.me/527225719944
- **Dominio**: torrepalmas.com (aún no verificado si está apuntando; sitio actual vive en GitHub Pages en `https://felipejsf.github.io/torrepalmas/`)
- **Repo**: https://github.com/Felipejsf/torrepalmas (main)
- **Carpeta local**: `C:\Users\fsalvati\Downloads\Torrepalmas`
- **Coordenadas GPS**: 19.2613, -99.6167
- **Horarios**: L-V 08:00–20:00, S 09:00–14:00

### Servicios/productos
1. **Torre Palmas** (Oficinas corporativas 67–214 m², personalizables, contratos desde 1 año)
2. **Business Center** (Oficinas equipadas 12–37 m², contratos desde 6 meses, 5 categorías: Ejecutiva → Gerencial)
3. **Coworking** (17.5 m² · 12 lugares · desde $3,990/mes · contratos desde 3 meses)

### Amenidades destacadas
- 12 salas de juntas + 2 de capacitación
- Terraza con domo
- Cafetería
- Terraza fumadores con expendedoras
- 2 estacionamientos (interior + exterior) sin costo
- Elevadores
- Calefacción
- Seguridad 24/7 (CCTV, tarjetas, vigilantes)
- Internet alta velocidad
- Domicilio fiscal y comercial

---

## ✅ Fases YA completadas

### FASE 1 — SEO técnico fundacional (`1e3ec9d`)
Todo en producción:
- Meta description única en las 9 páginas (index, torre-palmas, business-center, coworking, amenidades, disponibilidad, ubicacion, nosotros, contacto)
- Open Graph + Twitter Card
- Canonical URLs
- JSON-LD estructurado (LocalBusiness, Service, FAQPage, ContactPage, Place, AboutPage, Organization)
- `robots.txt`
- `sitemap.xml` con 9 URLs

### FASE 2 — Performance / Core Web Vitals (`55e58f5`)
- Video del Business Center: 31 MB → 4.8 MB
- Video del hero de Torre Palmas: 39 MB → 17 MB (nuevo video)
- 22 imágenes optimizadas in-place (JPEG q78 + PNG con paleta)
- `ubicacion.png` (7.2 MB) → `ubicacion.jpg` (114 KB)
- Video antiguo `video portada.mp4` (17 MB) eliminado
- **Total ahorro: ~65 MB en la carpeta `images/`**

### Página nueva
- `amenidades.html` — sección completa de amenidades + servicios + ventajas de ubicación (Town Square, bancos, supermercados)

---

## 🎯 FASE 3 — Local SEO (por hacer, ARRANQUE INMEDIATO)

Esta fase requiere acciones que YO (Claude) NO puedo hacer directamente — necesitan las manos del cliente. Yo puedo redactar todo el contenido, dar instrucciones paso a paso y validar.

### 3.1 Google Business Profile (prioridad #1)
**Pasos:**
1. Ir a https://business.google.com/create
2. Buscar "Torre Palmas Metepec" — si aparece, reclamar; si no, crear nuevo
3. Categoría primaria: **Centro de negocios**
4. Categorías secundarias: Oficinas en renta · Espacio de coworking · Sala de conferencias
5. Verificación (postal o llamada)
6. **Subir 20+ fotos**: exterior, recepción, cada tipo de oficina, salas de juntas, terraza, cafetería, estacionamiento
7. Añadir horarios (L-V 08:00-20:00, S 09:00-14:00, D cerrado)
8. Descripción (750 caracteres) — ver plantilla más abajo
9. Atributos: estacionamiento gratis, WiFi, acceso silla ruedas, servicios de audio y video
10. Activar mensajería directa
11. Solicitar reseñas a inquilinos actuales — meta: **15+ reseñas en 30 días**

**Descripción propuesta para GBP (700 caracteres):**
```
Torre Palmas es el centro de negocios premium de Metepec, ubicado sobre
Av. Ignacio Comonfort 1312, frente al Parque Providencia y a un lado
de Town Square. Ofrecemos tres formatos de espacios de trabajo: oficinas
corporativas personalizables de 67 a 214 m², business center con oficinas
equipadas de 12 a 37 m² y coworking con lugares fijos asignados. Incluye
domicilio fiscal, WiFi de alta velocidad, salas de juntas, seguridad 24/7
y estacionamiento sin costo. A 35 min de Santa Fe y CDMX. Ideal para
emprendedores, PYMEs y corporativos en Metepec, Toluca y zona Edomex.
```

### 3.2 NAP consistente en directorios
Publicar los mismos datos (Nombre-Address-Phone) exactos en:
- Páginas Amarillas (paginasamarillas.com.mx)
- Inmuebles24 (perfil comercial)
- Lamudi (perfil empresarial)
- iCasas
- Facebook Business Page
- LinkedIn Company Page
- Cámara de Comercio de Metepec (canaco-metepec.com)
- Directorio Empresarial Metepec

**IMPORTANTE**: usar exactamente el mismo formato:
- Nombre: `Torre Palmas`
- Dirección: `Av. Ignacio Comonfort 1312, Col. La Providencia, Metepec, Estado de México, CP 52140`
- Teléfono: `722 571 9944`

### 3.3 Página `ubicacion.html` enriquecida
Yo (Claude) puedo hacer esto directamente. Añadir:
- Mapa de Google embebido (iframe)
- Sección "A cuánto tiempo estás de…" con distancias reales:
  - Town Square (2 min a pie)
  - Parque Providencia (frente)
  - Galerías Metepec (10 min en auto)
  - Santa Fe (35 min)
  - AICM (55 min)
  - Toluca centro (12 min)
- Sección "Cómo llegar desde…":
  - Desde CDMX / Santa Fe
  - Desde Toluca
  - Desde Lerma / Metepec centro
- Transporte público
- Bloque de coordenadas GPS y enlace directo a Waze/Maps

### 3.4 Reseñas: script para pedirlas
Redactar un WhatsApp/email para pedir reseñas a inquilinos actuales:
```
Hola [nombre], ¿qué tal? En Torre Palmas nos importa mucho tu experiencia.
Si te ha gustado el espacio y el servicio, nos ayudaría muchísimo si nos
dejas una reseña en Google. Toma menos de 1 minuto:

👉 [link_directo_al_review]

Cualquier feedback, positivo o negativo, siempre bienvenido.
¡Gracias! — Equipo Torre Palmas
```

---

## 🚀 FASE 4 — Contenido de blog (después de Fase 3)

Crear `/blog/` con 6 posts iniciales atacando keywords sin competencia local:

1. **"¿Cuánto cuesta rentar una oficina en Metepec en 2026? Guía de precios"**
   - Keyword: "cuánto cuesta oficina metepec"
   - Angle: precios por m², ejemplos concretos, gastos ocultos
2. **"Oficina corporativa vs Business Center vs Coworking: ¿cuál conviene?"**
   - Keyword: "oficina vs business center vs coworking"
   - Angle: matriz de decisión con perfil de empresa
3. **"Las mejores zonas de Metepec para tu oficina"**
   - Keyword: "mejores zonas metepec oficinas"
   - Angle: Providencia, Pilares, Tecnológico, Galerías (comparativa)
4. **"Por qué Av. Comonfort + Parque Providencia son el nuevo distrito de negocios"**
   - Keyword: "avenida comonfort metepec negocios"
   - Angle: crecimiento comercial, conectividad, servicios cercanos
5. **"Domicilio fiscal en Metepec: guía completa"**
   - Keyword: "domicilio fiscal metepec"
   - Angle: requisitos SAT, beneficios, cómo elegir
6. **"Tour virtual de Torre Palmas — Recorrido en 360°"**
   - Keyword: "tour torre palmas metepec"
   - Angle: video embebido + galería + secciones destacadas

**Estructura de cada post:**
- H1 con la keyword principal
- Intro con problema del lector
- 4-6 subheadings (H2) con contenido substancial
- Imágenes propias del inmueble
- CTA a `/disponibilidad.html` al final
- JSON-LD Article schema
- Meta description única

---

## 📊 FASE 5 — Tracking / analytics (paralela a Fase 4)

1. Google Search Console (verificar dominio + subir sitemap)
2. Google Analytics 4 (property + tag manager)
3. Microsoft Clarity (heatmaps gratis)
4. Panel mensual con: impresiones, clics, posición promedio, top keywords

---

## 🏗️ FASE FUTURA — Web app + móvil (proyecto aparte)

Ya diseñado, en pausa hasta arrancarlo formalmente. Documento maestro: `TorrePalmas_WebApp_MVP_Resumen.docx` en la raíz.

**Resumen de la arquitectura decidida:**
- **Backend**: Supabase (Postgres + Auth + Realtime + Storage) — plan gratuito
- **Web App**: Vercel (nuevo repo, separado del marketing site)
- **Marketing site actual**: se queda en GitHub Pages
- **Mobile**: PWA primero → Capacitor cuando haya tracción → React Native si UX nativa lo justifica

**Sistema de roles del MVP:**
1. Administrador — control total
2. Recepcionista Jefe — reserva y edita
3. Recepcionista General — solo lectura
4. Usuario — reserva propia con bolsa de horas + cobro por exceso

**Tablas Supabase:**
`users, rooms, reservations, role_permissions, usage_log`

---

## 🗺️ Contexto arquitectónico actual del sitio

### Estructura
```
Torrepalmas/
├── index.html           (home)
├── nosotros.html
├── ubicacion.html
├── torre-palmas.html    (servicio 1)
├── business-center.html (servicio 2)
├── coworking.html       (servicio 3)
├── amenidades.html      (nueva, junio 2026)
├── disponibilidad.html  (plano interactivo)
├── contacto.html
├── css/styles.css       (todos los estilos globales)
├── js/scripts.js        (nav, cursor, floor plans, gallery, reveal)
├── images/              (comprimidas ya)
│   ├── TorrePalmas_Hero_web.mp4  (17 MB, 1080p, video del hero)
│   ├── Business_Center_Vid_Fin_web.mp4 (4.8 MB, video brochure)
│   ├── coworking-plano.png
│   ├── Oficinas bussynes center.png
│   ├── Piso3_PlanoRecurso 9.png
│   ├── Piso4_PlanoRecurso 11.png
│   ├── logos clientes/     (14 PNGs para carrusel)
│   └── fotos para galerias/{torre palmas, Bussynes center, Cowork}
├── robots.txt
├── sitemap.xml
├── TorrePalmas_WebApp_MVP_Resumen.docx  (plan MVP)
├── TorrePalmas_WebApp_MVP.pptx          (pres 11 slides)
└── Reporte_TorrePalmas_Mayo_2026.docx   (reporte mayo)
```

### Paleta de marca (usada en todo el sitio)
- Verde principal: `#14994B`
- Verde oscuro: `#0E7A3B`
- Olive (acento cálido): `#6B7C5C`
- Olive-pale (background): `#F1F4EE`
- Ink (texto/oscuro): `#1A1F18`
- Surface (bg claro): `#F8F9F7`
- Blue (coworking): `#1E90B8`

### Tipografía
- Titulares: **Cormorant Garamond** (serif, itálicas para acentos verdes)
- Cuerpo: **DM Sans**

### Sistemas técnicos activos
- **Plano interactivo** (`disponibilidad.html`) — SVG con hover/click, tooltip, 4 pisos (3, 4, Business Center, Coworking)
- **Badge de ocupación** por piso (verde con gradient) — Piso 3: 100%, Piso 4: 100%, Business Center: 85%, Coworking: 100%
- **Cursor personalizado** con ring que sigue el movimiento
- **Scroll reveal** con Intersection Observer + `--reveal-delay` CSS variable
- **Carrusel infinito** de logos de clientes en el home
- **Galería con lightbox** en páginas de servicio (Cowork, Torre Palmas, Business Center)
- **Modal de Video Brochure** en el home

### Estado de disponibilidad actual
Todas las oficinas del sitio marcadas como **totalmente ocupadas** excepto:
- **Business Center**: 5 disponibles (A1a Ejecutiva 15m², A4 Gerencial 34m², A5 Ejecutiva Plus 17m², B1 Ejecutiva Large 19m², C3 Corporativa 31m²)
- **Coworking**: activo con $3,990/mes

---

## 🧠 Aprendizajes/decisiones importantes

- El cliente prefiere Spanish, comunicación informal.
- No agregar precios sin autorización explícita.
- Estrategia comercial actual: "totalmente ocupados" para generar sensación de demanda.
- No hay CMS — todo es HTML estático, hasta que arranquemos la web app con Supabase.
- El dominio real es torrepalmas.com pero por ahora el sitio vive en GitHub Pages (subdirectorio).
- Las galerías de fotos usan URLs con espacios URL-encoded (`fotos%20para%20galerias/Bussynes%20center/...`) — no cambiar los nombres de carpeta sin actualizar cada referencia.
- El scroll reveal usa **animation** (no transition) para no chocar con hovers — variable CSS `--reveal-delay`.

---

## 📋 Primeros 3 pasos del nuevo chat

1. **Enriquecer `ubicacion.html`** con:
   - Mapa de Google embebido
   - Tabla de distancias/tiempos a landmarks
   - Instrucciones "Cómo llegar desde…"
   - Coordenadas GPS + enlaces a Waze/Google Maps

2. **Redactar el paso a paso del Google Business Profile** para que el cliente lo configure:
   - Screenshots comentados (o instrucciones ultra específicas)
   - Descripción optimizada de 700 chars
   - Categorías correctas
   - Foto brief (qué fotos subir en qué orden)

3. **Preparar el script de solicitud de reseñas**:
   - Plantilla de WhatsApp
   - Plantilla de email
   - Link corto directo a la review

---

## 📞 Referencias del proyecto

- Git remoto: `origin` → `https://github.com/Felipejsf/torrepalmas.git`
- Rama principal: `main`
- Último commit: `1866233` (Coworking 100% + BC 85%)
- Preview local: `.claude/launch.json` config `torrepalmas` en puerto 8100
- Toolset esperado en el nuevo chat: **Read, Edit, Write, Bash, Grep, Glob** + preview server con http-server para verificar visualmente

---

**Fin del handoff.** El nuevo chat puede empezar con: *"Continúa la Fase 3 SEO de Torre Palmas desde donde quedamos. Lee `HANDOFF_SEO_FASE2.md` en la raíz del proyecto para el contexto completo."*
