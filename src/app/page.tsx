'use client';

import { useRef } from 'react';
import {
  AlarmSection,
  Basement,
  Bubble,
  CarIntSection,
  CarSection,
  City,
  ComicSection,
  Espaco,
  Memories,
  Mesage,
  Nave,
  Revelacao,
  Shopping,
} from './comic-section';
import { useAudio } from 'react-use';
import Image from 'next/image';

export default function Home() {
  const nextRef = useRef<HTMLElement>(null);
  const [alarmSfx, mediaState, mediaActions] = useAudio({ src: '/sounds/alarm.mp3', loop: true });

  return (
    <div className='h-full'>
      <ComicSection className='font-bahiana justify-between pt-40 pb-10'>
        <div>
          <h1 className='mb-20 text-8xl text-red-500'>
            para matar <br /> a curiosidade
          </h1>

          <button
            onClick={() => {
              const { current } = nextRef;
              if (!current) return;
              current.hidden = false;
              current.scrollIntoView();
              setTimeout(() => mediaActions.play(), 500);
            }}
            className='cursor-pointer text-4xl hover:underline focus:underline'>
            iniciar
          </button>
        </div>

        <p className='text-3xl'>Bazeado no conto de Luiz Moreira</p>
      </ComicSection>
      <AlarmSection
        ref={nextRef}
        audio={alarmSfx}
        mediaState={mediaState}
        mediaActions={mediaActions}
      />
      <CarSection />
      <CarIntSection />
      <Shopping />
      <City />
      <Bubble />
      <Memories />
      <Basement />
      <Nave />
      <Espaco />
      <Mesage />
      <Revelacao />
    </div>
  );
}
