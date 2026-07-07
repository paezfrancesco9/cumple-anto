# Feliz Cumpleaños Antonella 💛

Regalo interactivo de cumpleaños hecho con React + Vite + Framer Motion.

## Cómo correrlo en tu compu

```bash
npm install
npm run dev
```

Abrí la URL que te muestre la terminal (algo como `http://localhost:5173/feliz-cumple-antonella/`).

## Agregar o cambiar fotos

Simplemente poné o sacá archivos `.jpg` / `.jpeg` / `.png` en:

```
src/assets/photos/
```

Aparecen automáticamente en la galería (Escena 3), en la sección de viajes (Escena 4) y en el círculo de fotos del final (Escena 6). No hace falta tocar código.

Si querés poner una frase específica para una foto puntual, editá `src/data/photos.js` y agregá una línea en `CAPTIONS` con el nombre exacto del archivo.

## Agregar la música

Poné tu archivo mp3 en:

```
public/music/song.mp3
```

(tiene que llamarse exactamente `song.mp3`). Arranca a sonar cuando ella toca "Presioná para comenzar", y hay un botón flotante abajo a la derecha para pausar/reproducir.

## Editar los textos

- Carta de apertura y carta final: `src/App.jsx` (constantes `OPENING_LETTER` y `FINAL_LETTER`).
- Destinos de viajes: `src/components/Travel.jsx` (constante `DESTINATIONS`).
- Frases de las escenas de girasoles / hero: dentro de cada componente en `src/components/`.

## Publicar en GitHub Pages

```bash
git init
git add .
git commit -m "Regalo de cumpleaños"
git branch -M main
git remote add origin https://github.com/paezfrancesco9/cumple-anto.git
git push -u origin main

npm run build
npm run deploy
```

Después activá GitHub Pages en el repo (Settings → Pages → branch `gh-pages`). El sitio va a quedar en:

```
https://paezfrancesco9.github.io/cumple-anto/
```
