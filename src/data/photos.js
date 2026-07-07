// Todas las fotos en src/assets/photos se cargan automáticamente, en orden alfabético.
// Para agregar una foto nueva: soltala en esa carpeta. No hace falta tocar código.
// Para ponerle un recuerdo/frase propio a una foto puntual, agregá una entrada
// en CAPTIONS usando el nombre de archivo exacto como clave.

const modules = import.meta.glob('../assets/photos/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default',
})

const CAPTIONS = {
  // 'photo-01.jpg': 'Nuestro primer viaje juntos ❤️',
}

const DEFAULT_CAPTIONS = [
  'Ese día nunca lo voy a olvidar.',
  'Contigo hasta lo simple se vuelve especial.',
  'Una sonrisa tuya y se me olvida todo lo demás.',
  'Este momento lo guardo en el corazón.',
  'Cada foto con vos es un tesoro.',
  'Así de fácil es quererte.',
  'Gracias por llenar mis días de color.',
  'Contigo, cualquier lugar es mi lugar favorito.',
  'No hay foto que alcance a mostrar lo que siento.',
  'Momentos pequeños, amor enorme.',
  'Quiero mil recuerdos más como este.',
  'Sos mi parte favorita de cualquier día.',
  'Cada instante a tu lado vale oro.',
  'Y pensar que esto recién empieza.',
]

export const photos = Object.keys(modules)
  .sort()
  .map((path, i) => {
    const filename = path.split('/').pop()
    return {
      src: modules[path],
      filename,
      caption: CAPTIONS[filename] || DEFAULT_CAPTIONS[i % DEFAULT_CAPTIONS.length],
    }
  })
