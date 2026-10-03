# Plan de Vuelo (versión web para tablet / Android)

App web que reemplaza a la versión Kivy (`../code.py`). Funciona en Chrome de
Android, tablets, iPad y PC. Se instala como app y anda sin conexión
(el mapa necesita internet la primera vez que se ve cada zona).

## Archivos
- `index.html` – la app completa.
- `aerodromos.js` – 696 aeródromos de ANAC, generados desde `../aerodromos.db`.
  Para regenerarlos: `python herramientas/generar_aerodromos.py` (desde la carpeta PlandeVuelo).
- `datos_iniciales.js` – aeronaves e historial con los que arranca la primera vez.
- `manifest.webmanifest`, `sw.js`, `icono-*.png` – para instalarla y usarla sin conexión.
  Si se cambia algún archivo, subir `VERSION` en `sw.js`.

## Probar en la PC
    python -m http.server 8765 --directory web
y abrir http://localhost:8765

## Instalar en la tablet
Necesita estar publicada con https (por ejemplo GitHub Pages o Netlify).
Abrirla en Chrome → menú ⋮ → "Instalar app" / "Agregar a pantalla principal".

## Seguimiento en vuelo (GPS)
- "▶ Iniciar seguimiento GPS" (debajo del mapa) muestra posición, velocidad sobre el suelo,
  rumbo, distancia y hora estimada al próximo punto y al destino, desvío de la ruta y
  combustible estimado. Pasa solo al siguiente punto al llegar (a 1 NM) o al sobrepasarlo;
  ◀ ▶ lo cambian a mano. Al terminar se puede guardar el vuelo con su recorrido.
- Antes de salir: "Guardar mapa de la ruta" para tener el mapa sin internet.
- Necesita que la tablet tenga GPS y que la app esté publicada con https.
- Menú ⋯ → "Simular vuelo" para probarlo en tierra.
- Es una ayuda: no reemplaza cartas ni instrumentos.

## Datos
Aeronaves, historial y plan se guardan en el dispositivo. Para pasarlos a otro:
menú ⋯ → "Descargar respaldo" y después "Restaurar respaldo…" en el otro equipo.
