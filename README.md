# 📖 Stoica Reader — 100% Gratuito

Lector personal con voz, traducción, resúmenes y análisis.
**Sin APIs de pago. Sin configuración. Funciona inmediatamente.**

---

## ✅ Funcionalidades y tecnología usada

| Función | Tecnología | Costo | ¿Internet? |
|---|---|---|---|
| Lectura en voz alta | Web Speech API (Chrome nativo) | Gratis | No |
| Resaltado sincronizado | Web Speech onboundary | Gratis | No |
| Barra de progreso interactiva | JavaScript puro | Gratis | No |
| Control flotante arrastrable | JavaScript puro | Gratis | No |
| Carga de PDF | PDF.js (Mozilla, open source) | Gratis | No* |
| Carga de TXT | FileReader API (nativo) | Gratis | No |
| Notas (guardar, editar, exportar) | localStorage (nativo) | Gratis | No |
| Resumen automático | Algoritmo TF-IDF propio | Gratis | No |
| Preguntas de comprensión | Extracción de oraciones | Gratis | No |
| Mapa conceptual | Análisis de frecuencia propio | Gratis | No |
| Traducción | MyMemory API (gratis, sin clave) | Gratis | Sí |
| Exportar audio | MediaRecorder API (nativo) | Gratis | No |
| Búsqueda en el texto | DOM API (nativo) | Gratis | No |
| PWA / Instalable / Offline | Service Worker (nativo) | Gratis | No |

*PDF.js se carga desde CDN la primera vez, luego queda en caché offline.

---

## 🚀 Subir a GitHub y Netlify

### Paso 1: Reemplaza los archivos en GitHub

En tu repositorio https://github.com/Funker460/Stoica-Reader, reemplaza **todos** los archivos con los de esta carpeta:
- `index.html`
- `sw.js`
- `manifest.json`
- `netlify.toml`
- `icon-192.png`
- `icon-512.png`
- `README.md`

> **Importante:** Elimina la carpeta `netlify/functions/` si la tienes — ya no se necesita. No hay backend.

### Paso 2: Netlify redespliega automáticamente

Una vez que subes los archivos a GitHub, Netlify detecta el cambio y redesplega en ~30 segundos.

**No necesitas configurar variables de entorno ni nada más.**

---

## 💻 Ejecutar localmente

```bash
# Opción 1: Con Node.js (recomendada para PDF)
npx serve .
# Abre: http://localhost:3000

# Opción 2: Python (alternativa)
python -m http.server 8000
# Abre: http://localhost:8000
```

> No abras `index.html` directamente con doble clic — los PDF necesitan un servidor local.

---

## 📱 Instalar como app (PWA)

1. Abre la app en Chrome
2. Busca el ícono de instalar (arriba a la derecha de Chrome)
3. Haz clic → "Instalar"
4. Aparece en tu escritorio como aplicación nativa

---

## 🎛 Guía de uso

### Cargar texto
| Botón | Acción |
|---|---|
| 📄 Cargar PDF | Extrae texto automáticamente del PDF |
| 📝 Cargar TXT | Carga archivos .txt o .md |
| 📋 Pegar texto | Escribe o pega texto manualmente |

### Lectura en voz
| Control | Acción |
|---|---|
| ▶ (rojo) | Reproducir / Pausar |
| ◈ (azul) | Leer solo el texto que tienes seleccionado |
| ⏹ | Detener completamente |
| Barra de progreso | Haz clic en cualquier punto para saltar ahí |
| ⊕ | Activa el control flotante arrastrable |
| `Espacio` | Pausar / Reanudar |
| `Esc` | Detener |

### Pestañas
| Pestaña | Qué hace |
|---|---|
| 📖 Lector | Texto, voz y configuración |
| 📝 Notas | Selecciona texto → "💾 Guardar nota" |
| 📋 Resumen | Resumen extractivo automático (offline) |
| ❓ Preguntas | Preguntas de comprensión (offline) |
| 🗺 Mapa | Mapa de conceptos clave (offline) |
| 🌐 Traducción | Traducción gratuita (MyMemory, requiere internet) |

### Exportar audio
1. Panel lateral → escribe el nombre del archivo
2. Pulsa **"Iniciar grabación"**
3. Chrome pide compartir pantalla → elige la pestaña y **activa "Compartir audio de la pestaña"**
4. Pulsa **▶** para iniciar la lectura
5. Cuando termines, pulsa **"Detener y guardar"** → se descarga el archivo `.webm`

> El formato `.webm` se puede abrir con VLC, Windows Media Player o cualquier navegador.

---

## ❓ Preguntas frecuentes

**¿Por qué la traducción necesita internet?**
Usa MyMemory (https://mymemory.translated.net), una API pública y gratuita. Límite: ~10.000 palabras por día por IP. Si llegas al límite, espera 24h o traduce por secciones.

**¿Por qué el resumen/mapa/preguntas no usan IA?**
Porque la IA (Claude, OpenAI, etc.) tiene costo. En su lugar usamos algoritmos extractivos propios (TF-IDF) que funcionan offline y son completamente gratuitos. Los resultados son buenos para comprensión de texto.

**¿El resaltado funciona en Firefox?**
El evento `onboundary` de Web Speech API es más robusto en Chrome. En Firefox puede funcionar parcialmente. Se recomienda Chrome para la mejor experiencia.

**¿Cómo mejoro las voces en español?**
Windows → Configuración → Tiempo e idioma → Habla → Agregar voces en español.

---

*Stoica Reader — Uso personal, 100% gratuito*
