# 📖 STOICA READER v2 — Guía Completa

## ¿QUÉ HAY EN ESTA VERSIÓN?

✅ Lectura en voz alta con resaltado sincronizado
✅ Carga de PDF directa (extracción automática)
✅ Carga de archivos TXT
✅ Pegar texto manualmente
✅ Barra de progreso interactiva (haz clic para saltar)
✅ Control flotante (arrastrable)
✅ Traducción de texto (requiere internet + clave Claude)
✅ Resúmenes automáticos (requiere internet + clave Claude)
✅ Generación de preguntas (requiere internet + clave Claude)
✅ Mapa conceptual visual (requiere internet + clave Claude)
✅ Notas inteligentes con historial
✅ Exportar notas en TXT
✅ Modo claro / oscuro
✅ Instalable como PWA
✅ Funciona offline (lectura, notas, voz)

---

## PARTE 1 — USAR LA APP LOCALMENTE (Sin internet para lo básico)

### Paso 1: Instala Node.js
1. Ve a → https://nodejs.org
2. Descarga la versión **LTS** (botón verde)
3. Instala haciendo clic en "Siguiente" hasta terminar
4. Reinicia el computador

### Paso 2: Descarga los archivos
Guarda toda la carpeta `stoica-reader-v2` en tu escritorio.

### Paso 3: Abre la terminal
- **Windows:** presiona `Win + R` → escribe `cmd` → Enter
- **Mac:** busca "Terminal" en Spotlight

### Paso 4: Entra a la carpeta
```
cd C:\Users\TuNombre\Desktop\stoica-reader-v2
```
(En Mac: `cd ~/Desktop/stoica-reader-v2`)

### Paso 5: Inicia el servidor
```
npx serve .
```
Escribe `y` si pregunta algo y presiona Enter.

### Paso 6: Abre en Chrome
Verás: `Local: http://localhost:3000`
Copia esa dirección → pégala en Google Chrome.

¡La app está lista!

---

## PARTE 2 — ACTIVAR LAS FUNCIONES DE IA (Traducción, Resúmenes, Preguntas, Mapa)

Estas funciones usan el API de Claude. Necesitas una clave gratuita.

### Paso 1: Obtén tu clave de Claude
1. Ve a → https://console.anthropic.com
2. Crea una cuenta gratuita
3. Ve a "API Keys" → "Create Key"
4. Copia la clave (empieza con `sk-ant-...`)

### Paso 2: Agrega la clave a la app
Abre el archivo `index.html` con el Bloc de Notas.
Busca esta línea (cerca del inicio del JavaScript):
```
const CLAUDE_API = "https://api.anthropic.com/v1/messages";
```
Justo debajo, agrega:
```
const API_KEY = "sk-ant-TU_CLAVE_AQUI";
```

Luego busca todas las partes donde dice:
```
headers: { 'Content-Type': 'application/json' },
```
Y cámbiala por:
```
headers: { 'Content-Type': 'application/json', 'x-api-key': API_KEY, 'anthropic-version': '2023-06-01', 'anthropic-dangerous-direct-browser-ipc': 'true' },
```

> 💡 Nota: Si despliegas en Netlify (ver Parte 3), puedes usar variables de entorno
> para no poner la clave directamente en el código.

---

## PARTE 3 — DESPLIEGUE EN NETLIFY (Para acceder desde cualquier dispositivo)

### Paso 1: Crea una cuenta en Netlify
1. Ve a → https://www.netlify.com
2. Crea una cuenta gratuita (puedes entrar con Google o GitHub)

### Paso 2: Sube la app
**Opción más fácil (arrastrar y soltar):**
1. Entra a Netlify
2. En el panel principal, busca la sección "Sites"
3. Arrastra toda la carpeta `stoica-reader-v2` al área que dice "drag and drop"
4. Netlify sube automáticamente los archivos
5. Te dará una URL como: `https://stoica-abc123.netlify.app`

**Opción alternativa (desde GitHub):**
1. Sube la carpeta a GitHub (github.com → New Repository)
2. En Netlify → "New site from Git"
3. Conecta tu repositorio de GitHub
4. En "Build command": deja vacío
5. En "Publish directory": escribe `.`
6. Haz clic en "Deploy site"

### Paso 3: Configura el dominio (opcional)
1. En tu sitio en Netlify → "Domain settings"
2. Puedes usar el dominio gratuito de Netlify
3. O comprar un dominio personalizado

### Paso 4: Variables de entorno en Netlify (para la clave de Claude)
1. En tu sitio → "Site settings" → "Environment variables"
2. Agrega: `CLAUDE_API_KEY = sk-ant-tu-clave-aqui`
3. Redeploya el sitio

---

## PARTE 4 — INSTALAR COMO APP EN WINDOWS (PWA)

Con la app abierta en Chrome:
1. Mira arriba a la derecha de Chrome → ícono de instalar (computador con +)
2. Haz clic → "Instalar"
3. La app aparece en tu escritorio y en el menú de inicio
4. Abre como cualquier aplicación normal

---

## GUÍA DE USO RÁPIDO

### Cargar contenido
| Acción | Cómo |
|--------|------|
| Cargar PDF | Clic en "📄 PDF" → selecciona tu archivo |
| Cargar TXT | Clic en "📝 TXT" → selecciona tu archivo |
| Pegar texto | Clic en "📋 Pegar" → pega → "Cargar texto" |

### Controles de lectura
| Control | Función |
|---------|---------|
| ▶ Grande (rojo) | Reproducir / Pausar |
| ◈ Azul | Leer texto seleccionado |
| ⏹ | Detener completamente |
| Barra de progreso | Clic en cualquier punto para saltar |
| Control flotante ⊕ | Panel arrastrable con controles rápidos |

### Teclado
- `Espacio` → Reproducir / Pausar
- `Escape` → Detener

### Pestañas
- **📖 Lector** → Texto y controles de voz
- **📝 Notas** → Notas guardadas (selecciona texto → "Guardar nota")
- **📋 Resumen** → Resumen automático del texto
- **❓ Preguntas** → Preguntas automáticas con respuesta y justificación
- **🗺 Mapa** → Mapa conceptual visual
- **🌐 Traducción** → Traducción de texto completo o selección

---

## FUNCIONES QUE REQUIEREN INTERNET

| Función | Requiere internet | Requiere clave Claude |
|---------|-----------------|----------------------|
| Leer en voz alta | No | No |
| Cargar PDF/TXT | No | No |
| Notas | No | No |
| Resumen automático | Sí | Sí |
| Preguntas | Sí | Sí |
| Mapa conceptual | Sí | Sí |
| Traducción | Sí | Sí |

---

## PROBLEMAS FRECUENTES

**"La voz no suena"**
→ Espera 3 segundos y vuelve a intentarlo. Chrome tarda en cargar voces.
→ Recarga la página con F5.

**"El PDF no carga"**
→ Usa siempre el servidor local (`npx serve .`) no el doble clic directo.

**"Error de API / traducción no funciona"**
→ Verifica que configuraste la clave de Claude correctamente.
→ Verifica que tengas internet.

**"No veo voces en español"**
→ Windows: Configuración → Tiempo e idioma → Habla → Agregar voz en español.

---

*Stoica Reader v2 — Uso personal*
