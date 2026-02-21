# 📖 Stoica Reader v3

Lector personal inteligente con lectura en voz alta sincronizada, traducción, resúmenes, preguntas y mapas conceptuales.

---

## ✅ Funcionalidades implementadas

| # | Funcionalidad | Estado |
|---|---|---|
| 1 | Traducción (texto completo y selección, 10 idiomas) | ✅ |
| 2 | Lectura con resaltado sincronizado palabra por palabra | ✅ |
| 3 | Barra de progreso interactiva (clic para saltar) | ✅ |
| 4 | Carga directa de PDF (extracción automática) | ✅ |
| 5 | Exportar audio (WebM grabado con MediaRecorder) | ✅ |
| 6 | Notas inteligentes (guardar, editar, eliminar, exportar) | ✅ |
| 7 | Resúmenes automáticos (3 niveles de profundidad) | ✅ |
| 8 | Mapa conceptual visual tipo Notebook LM | ✅ |
| 9 | Generación de preguntas (tipos y niveles de lectura) | ✅ |
| 10 | Control flotante arrastrable | ✅ |

---

## 🚀 Configuración en Netlify (IMPORTANTE)

Las funciones de IA (traducción, resumen, preguntas, mapa) requieren configurar la clave de Claude en Netlify.

### Paso 1: Configura la clave de API

1. Ve a → https://console.anthropic.com
2. Crea una cuenta y genera una API Key (empieza con `sk-ant-...`)
3. En tu panel de Netlify → **Site Settings** → **Environment Variables**
4. Agrega esta variable:
   - **Key:** `CLAUDE_API_KEY`
   - **Value:** `sk-ant-tu-clave-aquí`
5. Guarda y haz **Deploy** → **Trigger deploy** → **Deploy site**

### Paso 2: Activa las Netlify Functions

El archivo `netlify.toml` ya configura todo automáticamente.
Solo asegúrate de que la carpeta `netlify/functions/claude.js` esté en el repositorio.

---

## 📁 Estructura del proyecto

```
stoica-reader/
├── index.html                    ← App completa
├── manifest.json                 ← PWA config
├── netlify.toml                  ← Config Netlify + Functions
├── sw.js                         ← Service Worker (offline)
├── icon-192.png                  ← Ícono PWA
├── icon-512.png                  ← Ícono PWA grande
└── netlify/
    └── functions/
        └── claude.js             ← Proxy seguro para Claude API
```

---

## 🔧 Actualizar desde GitHub a Netlify

Cada vez que hagas cambios:
1. Edita los archivos
2. Súbelos a GitHub (`git add . && git commit -m "update" && git push`)
3. Netlify redesplega automáticamente en ~30 segundos

---

## 💻 Ejecutar localmente

```bash
# Instala Node.js (https://nodejs.org)
# En terminal:
cd stoica-reader
npx serve .
# Abre: http://localhost:3000
```

Para funciones locales (necesario para IA):
```bash
npm install -g netlify-cli
netlify dev
# Abre: http://localhost:8888
```

---

## 🎛 Guía de uso

### Cargar contenido
- **📄 PDF** → carga y extrae texto automáticamente
- **📝 TXT** → carga archivos de texto plano
- **📋 Pegar** → pega texto manualmente

### Lectura en voz
- **▶ Grande rojo** → Reproducir / Pausar
- **◈ Azul** → Leer solo el texto seleccionado
- **⏹** → Detener completamente
- **Barra de progreso** → clic en cualquier punto para saltar ahí
- **⊕** → Activa el control flotante arrastrable

### Pestañas
- **📖 Lector** → texto y controles de voz
- **📝 Notas** → notas guardadas (selecciona texto → "Guardar nota")
- **📋 Resumen** → resumen automático con 3 niveles
- **❓ Preguntas** → preguntas con respuesta y justificación
- **🗺 Mapa** → mapa conceptual visual
- **🌐 Traducción** → traducción de texto completo o selección

### Atajos de teclado
- `Espacio` → Reproducir / Pausar
- `Esc` → Detener

---

## 🔊 Exportar audio

1. Ve al **Panel lateral** (botón ▐)
2. Escribe el nombre del archivo
3. Pulsa **Exportar audio**
4. Chrome te pedirá compartir la pantalla — **activa "Compartir audio del sistema"** o **"Compartir audio de la pestaña"**
5. La app inicia la lectura y graba
6. Al terminar o pulsar ⏹, el archivo se descarga automáticamente

---

## ❓ Solución de problemas

**"Error al traducir / generar resumen"**
→ La clave `CLAUDE_API_KEY` no está configurada en Netlify.
→ Ve a Site Settings → Environment Variables → agrega la clave.

**"La voz no suena"**
→ Recarga la página (F5). Chrome tarda ~2s en cargar las voces.
→ Asegúrate de tener voces en español: Windows → Configuración → Tiempo e idioma → Habla.

**"El PDF no carga"**
→ Usa el servidor local (`npx serve .`) o Netlify. No funciona abriendo el HTML directamente.

**"El resaltado no sincroniza bien"**
→ El evento `onboundary` de Chrome es el más preciso. En Firefox puede no funcionar — usa Chrome.

---

*Stoica Reader v3 — Uso personal*
