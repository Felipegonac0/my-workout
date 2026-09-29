# Mi rutina

Webapp personal para seguir la rutina del gym: muestra la rutina del día, permite marcar ejercicios como completados y enseña cómo se hace cada uno.

## Desarrollo

```bash
npm install
npm run dev
```

## Editar la rutina

Todo está en `app/data/routine.ts`:

- `schedule`: qué rutina toca cada día (índice 0 = domingo).
- Cada bloque con dos ejercicios se muestra como superserie.
- `img` apunta a `public/ex/<img>-0.webp` y `-1.webp` (posición inicial y final, que se alternan como un GIF).

Las imágenes vienen de [free-exercise-db](https://github.com/yuhonas/free-exercise-db) (dominio público), redimensionadas a WebP de ~10 KB.

## Ligera y offline

- Sin librerías extra ni fuentes web: solo Next.js y CSS.
- Las imágenes cargan solo al abrir un ejercicio.
- Un service worker (`public/sw.js`) guarda la app y las imágenes en el teléfono; si cambias imágenes, sube la versión de `CACHE` en ese archivo.
- El progreso se guarda en el teléfono (`localStorage`) y se reinicia cada día.
