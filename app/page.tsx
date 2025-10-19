'use client';
import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

type Slide = { title: string; images: string[]; text: string; subtitle?: string };
const SLIDES: Slide[] = [
  { title: 'Miss Venezuela', subtitle: 'Belleza, talento y orgullo nacional', images: ['https://upload.wikimedia.org/wikipedia/commons/3/3d/Miss_Venezuela_logo.png'], text: 'Presentación web interactiva inspirada en la línea de belleza MUBA.' },
  { title: 'Historia y legado', images: ['https://upload.wikimedia.org/wikipedia/commons/f/fd/Osmel_Sousa.jpg', 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Miss_Venezuela_2018_stage.jpg'], text: 'Desde 1952, el certamen forma reinas con disciplina y proyección internacional.' },
  { title: 'Reinas emblemáticas', images: ['https://upload.wikimedia.org/wikipedia/commons/d/dc/Dayana_Mendoza.jpg', 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Stefan%C3%ADa_Fern%C3%A9ndez_Miss_Universe_2009.jpg'], text: 'Irene Sáez, Alicia Machado, Dayana Mendoza, Stefanía Fernández, Gabriela Isler.' },
  { title: 'Línea de belleza MUBA', images: ['https://mubacosmetics.com/cdn/shop/files/MUBA_Logo_Black_160x@2x.png', 'https://mubacosmetics.com/cdn/shop/files/MODELS1_475x_crop_top.png'], text: 'MUBA Cosmetics potencia looks de escenario: larga duración, piel real y acabados profesionales.' },
  { title: 'Interacción con el público', images: ['https://i.ytimg.com/vi/KVXIDnFhXQc/maxresdefault.jpg', 'https://i.ytimg.com/vi/OtEcOef2_io/hq720.jpg'], text: 'Votaciones, redes en vivo y activaciones con estaciones MUBA en venue.' },
  { title: 'Gala final', images: ['https://upload.wikimedia.org/wikipedia/commons/5/5e/Miss_Venezuela_2018_stage.jpg', 'https://www.hola.com/us/horizon/original_aspect_ratio/fac50baec14e-gettyimages-1831289567.jpg'], text: 'Escenografía, pasarela y coronación: momento cumbre con cobertura global.' },
  { title: 'Cierre e inspiración', images: ['https://upload.wikimedia.org/wikipedia/commons/a/ae/Stefan%C3%ADa_Fern%C3%A9ndez_Miss_Universe_2009.jpg'], text: '“Más que un concurso: disciplina, talento y empoderamiento femenino.”' }
];

export default function Page() {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const next = useCallback(() => setIndex(i => (i + 1) % SLIDES.length), []);
  const prev = useCallback(() => setIndex(i => (i - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => { if (!autoplay) return; const t = setInterval(next, 5000); return () => clearInterval(t); }, [autoplay, next]);
  useEffect(() => { const onKey = (e: KeyboardEvent) => { if (e.key === 'ArrowRight') { setAutoplay(false); next(); } if (e.key === 'ArrowLeft') { setAutoplay(false); prev(); } }; window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey); }, [next, prev]);

  const slide = SLIDES[index];
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-rose-50 via-white to-rose-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="flex items-center justify-between gap-4">
          <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-3xl md:text-4xl font-bold text-rose-600">Miss Venezuela · MUBA</motion.h1>
          <div className="flex items-center gap-2">
            <Button onClick={() => setAutoplay(a => !a)}>{autoplay ? 'Pausar' : 'Reanudar'}</Button>
            <Button onClick={() => { setAutoplay(false); prev(); }} variant="secondary">←</Button>
            <Button onClick={() => { setAutoplay(false); next(); }}>→</Button>
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div key={index} initial={{ opacity: 0, scale: 0.98, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98, y: -10 }} transition={{ duration: 0.5 }} className="mt-6" onMouseDown={() => setAutoplay(false)}>
            <Card><CardContent>
              <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-2xl md:text-3xl font-semibold text-rose-500 text-center">{slide.title}</motion.h2>
              <div className={`grid gap-4 mt-5 ${slide.images.length === 2 ? 'md:grid-cols-2' : ''}`}>
                {slide.images.map((src, i) => (
                  <motion.div key={src} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.08 }} className="relative w-full aspect-[16/10] rounded-xl overflow-hidden ring-1 ring-rose-100">
                    <Image src={src} alt={`${slide.title} ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" priority={index < 2} />
                  </motion.div>
                ))}
              </div>
              <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-5 text-center text-neutral-700 max-w-3xl mx-auto">{slide.text}</motion.p>
              <div className="mt-6 flex items-center justify-center gap-2">
                {SLIDES.map((_, i) => (
                  <button key={i} aria-label={`Ir al slide ${i + 1}`} onClick={() => { setAutoplay(false); setIndex(i); }} className={`h-2.5 rounded-full transition-all ${i === index ? 'w-8 bg-rose-500' : 'w-2.5 bg-rose-200 hover:bg-rose-300'}`} />
                ))}
              </div>
              <div className="mt-4 text-xs text-center text-neutral-500">Pulsa ← → para navegar · Click para pausar/reanudar</div>
            </CardContent></Card>
          </motion.div>
        </AnimatePresence>

        <footer className="mt-8 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Presentación educativa sin fines comerciales. Imágenes con fines ilustrativos (Wikimedia/MUBA/medios).</footer>
      </div>
    </div>
  );
}
