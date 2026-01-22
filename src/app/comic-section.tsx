import { cn } from '@/lib/utils';
import { useElementVisibility, useTimeoutFn } from '@reactuses/core';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useAudio, useTimeout } from 'react-use';
import { HTMLMediaState } from 'react-use/lib/factory/createHTMLMediaHook';

type Props = React.ComponentPropsWithRef<'section'>;
type MediaActions = {
  play: () => Promise<void> | undefined;
  pause: () => void;
  seek: (time: number) => void;
  volume: (volume: number) => void;
  mute: () => void;
  unmute: () => void;
};

export const ComicSection = ({ className, ...props }: Props) => {
  return (
    <section
      className={cn('mx-auto flex min-h-dvh max-w-240 flex-col text-center', className)}
      {...props}
    />
  );
};

export const AlarmSection = ({
  audio,
  mediaState,
  mediaActions,
  ...props
}: Props & {
  audio: React.ReactNode;
  mediaState: HTMLMediaState;
  mediaActions: MediaActions;
}) => {
  const [mao, setMao] = useState<boolean>(false);

  return (
    <ComicSection
      {...props}
      className='relative'>
      {audio}
      <Image
        src='/images/quadros/quadro_01.png'
        className='object-contain'
        alt=''
        fill
      />
      <button
        className='absolute top-60 left-65 cursor-pointer'
        onClick={() => {
          mediaActions.pause();
          setMao(true);
        }}>
        <Image
          src='/images/quadros/quadro_01_relogio.png'
          className='animate-alarm object-contain object-bottom'
          alt=''
          width={300}
          height={300}
          style={{
            animationName: !mediaState.playing ? 'none' : undefined,
          }}
        />
      </button>
      {mao && (
        <>
          <Image
            src='/images/quadros/quadro_01_relogio_mao.png'
            className='animate-in fade-in fade-out absolute top-45 left-65'
            alt=''
            width={900}
            height={400}
          />
          <Image
            src='/fodasses/falas/01.png'
            alt=''
            className='absolute top-1/2 -translate-y-1/2'
            width={300}
            height={300}
          />
        </>
      )}
    </ComicSection>
  );
};

export const CarSection = (props: Props) => {
  return (
    <ComicSection
      className='relative'
      {...props}>
      <Image
        src='/images/quadros/cap01-cidade/sem-carro.png'
        alt=''
        fill
      />

      <Image
        src='/images/quadros/cap01-cidade/carro.png'
        alt=''
        fill
      />
      <Image
        src='/fodasses/falas/02.png'
        alt=''
        className='absolute top-1/2 right-0 -translate-y-1/2'
        width={300}
        height={300}
      />
    </ComicSection>
  );
};

export const CarIntSection = (props: Props) => {
  const ref = useRef<HTMLImageElement>(null);
  const [visible] = useElementVisibility(ref);
  const [sfx, {}, { play, pause }] = useAudio({ src: '/sounds/car.wav', loop: true });

  useEffect(() => {
    if (visible) {
      console.log('FUCK');
      play();
    } else pause();
  }, [visible, play, pause]);

  return (
    <ComicSection
      className='relative'
      ref={ref}
      {...props}>
      {sfx}
      <Image
        src='/images/quadros/cap01-carro/cenario.png'
        alt=''
        fill
      />

      <Image
        src='/images/quadros/cap01-carro/carro.png'
        alt=''
        fill
      />
      <Image
        src='/fodasses/falas/03.png'
        alt=''
        className='absolute top-1/2 right-30 -translate-y-1/2'
        width={300}
        height={300}
      />
    </ComicSection>
  );
};

export const Shopping = (props: Props) => {
  const ref = useRef<HTMLImageElement>(null);
  const [visible] = useElementVisibility(ref);
  const [sfx, {}, { play, pause }] = useAudio({ src: '/sounds/slide.wav' });
  useEffect(() => {
    if (visible) {
      console.log('FUCK');
      play();
    } else pause();
  }, [visible, play, pause]);

  return (
    <ComicSection
      className='relative overflow-hidden'
      ref={ref}
      {...props}>
      {sfx}
      <Image
        src='/images/quadros/cap02/interior.png'
        alt=''
        fill
      />
      <Image
        src='/fodasses/falas/06.png'
        alt=''
        className='absolute top-1/2 right-0 -translate-y-1/2'
        width={300}
        height={300}
      />
      <Image
        src='/fodasses/falas/04.png'
        alt=''
        className='absolute top-[40%] left-10 -translate-y-1/2'
        width={300}
        height={300}
      />

      <Image
        src='/images/quadros/cap02/porta_direita.png'
        alt=''
        className='absolute top-0 bottom-0 h-full transition-transform'
        width={960}
        height={667}
        style={{
          animation: visible ? 'rightdoor 1.5s linear forwards' : 'none',
        }}
      />
      <Image
        src='/images/quadros/cap02/porta_esquerda.png'
        alt=''
        className='absolute top-0 bottom-0 h-full transition-transform'
        width={960}
        height={667}
        style={{
          animation: visible ? 'leftdoor 1.5s linear forwards' : 'none',
        }}
      />

      <Image
        ref={ref}
        src='/images/quadros/cap02/fachada.png'
        alt=''
        style={{
          animation: !visible ? 'none' : 'fck 3s linear forwards',
        }}
        className='absolute top-0 bottom-0 h-full transition-transform'
        width={960}
        height={667}
      />
    </ComicSection>
  );
};

export const City = (props: Props) => {
  return (
    <ComicSection
      className='relative'
      {...props}>
      <Image
        src='/images/quadros/cap03/completo.png'
        alt=''
        fill
      />
      <Image
        src='/images/quadros/cap04/bubble.png'
        alt=''
        className='animate-wiggle absolute top-50 right-20'
        width={30}
        height={30}
      />
      <Image
        src='/images/quadros/cap04/bubble.png'
        alt=''
        className='animate-wiggle absolute top-30 left-20 size-20'
        width={30}
        height={30}
      />
      <Image
        src='/images/quadros/cap04/bubble.png'
        alt=''
        className='animate-wiggle absolute bottom-30 left-20 size-50'
        width={30}
        height={30}
      />
      <Image
        src='/fodasses/falas/05.png'
        alt=''
        className='absolute top-1/2 right-30 -translate-y-1/2'
        width={300}
        height={300}
      />
    </ComicSection>
  );
};

export const Bubble = (props: Props) => {
  return (
    <ComicSection
      className='relative'
      {...props}>
      <Image
        src='/images/quadros/cap04/back.png'
        alt=''
        fill
      />
      <Image
        src='/images/quadros/cap04/bubble.png'
        alt=''
        className='animate-wiggle absolute -bottom-32 left-20 size-50'
        width={30}
        height={30}
      />
      <Image
        src='/images/quadros/cap04/bubble.png'
        alt=''
        className='animate-wiggle absolute top-50 right-20'
        width={300}
        height={300}
      />
      <Image
        src='/fodasses/falas/07.png'
        alt=''
        className='absolute top-1/2 left-30 -translate-y-1/2'
        width={300}
        height={300}
      />
    </ComicSection>
  );
};

export const Memories = (props: Props) => {
  return (
    <ComicSection
      className='relative'
      {...props}>
      <Image
        src='/images/quadros/cap05/back.png'
        alt=''
        fill
      />
      <Image
        src='/fodasses/falas/08.png'
        alt=''
        className='absolute top-1/2 left-12 -translate-1/2'
        width={300}
        height={300}
      />
    </ComicSection>
  );
};

export const Basement = (props: Props) => {
  return (
    <ComicSection
      className='relative'
      {...props}>
      <Image
        src='/images/quadros/cap06/back.png'
        alt=''
        fill
      />
      <Image
        src='/fodasses/falas/09.png'
        alt=''
        className='absolute top-20 right-12 -translate-1/2'
        width={300}
        height={300}
      />
      <Image
        src='/fodasses/falas/10.png'
        alt=''
        className='absolute -bottom-50 left-12 -translate-y-1/2'
        width={300}
        height={300}
      />
    </ComicSection>
  );
};

export const Nave = (props: Props) => {
  return (
    <ComicSection
      className='relative'
      {...props}>
      <Image
        src='/images/quadros/cap07/back.png'
        alt=''
        fill
      />
      <Image
        src='/images/quadros/cap07/nave.png'
        alt=''
        fill
      />
      <Image
        src='/images/quadros/cap04/bubble.png'
        alt=''
        className='animate-wiggle absolute top-20 -right-10 size-60 delay-5000'
        width={300}
        height={300}
      />
      <Image
        src='/images/quadros/cap04/bubble.png'
        alt=''
        className='animate-wiggle absolute top-40 left-20'
        width={300}
        height={300}
      />
      <Image
        src='/images/quadros/cap04/bubble.png'
        alt=''
        className='animate-wiggle absolute right-10 -bottom-23 size-50'
        width={30}
        height={30}
      />
      <Image
        src='/fodasses/falas/11.png'
        alt=''
        className='absolute right-2 -bottom-10 -translate-y-1/2'
        width={300}
        height={300}
      />
    </ComicSection>
  );
};

export const Espaco = (props: Props) => {
  const ref = useRef<HTMLImageElement>(null);
  const [visible] = useElementVisibility(ref);
  const [sfx, {}, { play, pause }] = useAudio({ src: '/sounds/rocket.wav' });
  useEffect(() => {
    if (visible) {
      console.log('FUCK');
      play();
    } else pause();
  }, [visible, play, pause]);
  return (
    <ComicSection
      className='relative'
      ref={ref}
      {...props}>
      {sfx}
      <Image
        src='/images/quadros/cap08/back.png'
        alt=''
        fill
      />
      <Image
        src='/images/quadros/cap08/nave.png'
        alt=''
        fill
      />
      <Image
        src='/images/quadros/cap04/bubble.png'
        alt=''
        className='animate-wiggle absolute top-68 right-30 size-15 delay-5000'
        width={300}
        height={300}
      />
      <Image
        src='/images/quadros/cap04/bubble.png'
        alt=''
        className='animate-wiggle absolute top-54 right-60 size-25 delay-3000'
        width={300}
        height={300}
      />
      <Image
        src='/images/quadros/cap04/bubble.png'
        alt=''
        className='animate-wiggle absolute top-74 right-100 size-35 delay-1500'
        width={300}
        height={300}
      />
      <Image
        src='/images/quadros/cap04/bubble.png'
        alt=''
        className='animate-wiggle absolute top-40 left-30 size-40 delay-1000'
        width={300}
        height={300}
      />
      <Image
        src='/fodasses/falas/13.png'
        alt=''
        className='absolute right-2 -bottom-10 -translate-y-1/2'
        width={300}
        height={300}
      />
    </ComicSection>
  );
};

export const Revelacao = (props: Props) => {
  return (
    <ComicSection
      className='relative'
      {...props}>
      <Image
        src='/images/quadros/cap09/back.png'
        alt=''
        fill
      />
      <Image
        src='/images/quadros/cap09/nave.png'
        alt=''
        fill
      />
      <Image
        src='/images/quadros/cap04/bubble.png'
        alt=''
        className='animate-wiggle absolute -top-32 left-20 size-50'
        width={30}
        height={30}
      />
      <Image
        src='/images/quadros/cap04/bubble.png'
        alt=''
        className='animate-wiggle absolute -top-32 left-20 size-50'
        width={30}
        height={30}
      />
      <Image
        src='/fodasses/falas/15.png'
        alt=''
        className='absolute top-50 right-2 -translate-y-1/2'
        width={300}
        height={300}
      />
    </ComicSection>
  );
};

export const Mesage = (props: Props) => {
  return (
    <>
      <ComicSection
        className='relative'
        {...props}>
        <Image
          src='/images/quadros/cap09/mensagem.png'
          alt=''
          fill
        />
        <Image
          src='/fodasses/falas/14.png'
          alt=''
          className='absolute right-2 -bottom-10 -translate-y-1/2'
          width={300}
          height={300}
        />
      </ComicSection>
      <ComicSection
        className='relative'
        {...props}>
        <Image
          src='/images/quadros/cap09/bacteria.png'
          alt=''
          fill
        />
      </ComicSection>
    </>
  );
};
