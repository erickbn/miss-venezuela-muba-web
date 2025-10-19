# Miss Venezuela · MUBA — Demo Web

Presentación web interactiva (1–2 fotos por slide, animaciones con framer-motion, autoplay, navegación por teclado).

## Despliegue rápido en Vercel (recomendado)
1. Crea un repo en GitHub y sube estos archivos (o usa **Import Project** desde Vercel apuntando a esta carpeta).
2. En Vercel, elige framework **Next.js**. No necesitas variables de entorno.
3. Click en **Deploy**. El build usará `npm i` y `npm run build` automáticamente.
4. Abre el dominio generado (ej. `https://miss-venezuela-muba-web.vercel.app`).

## Ejecutar localmente
```bash
npm i
npm run dev
```

## Notas
- Las imágenes remotas están habilitadas en `next.config.js` (Wikimedia, MUBA, YouTube, HOLA).
- Estilos con Tailwind (config incluidos).
