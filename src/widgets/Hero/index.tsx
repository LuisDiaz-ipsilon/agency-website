'use client';
import { useRef } from 'react';
import Image from 'next/image';

import useFloatingImages from '@/composables/useFloatingImages';

import { useScroll, useTransform, motion } from 'framer-motion';

import { main_1, main_2, main_3 } from './images/index';

const Hero = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const { manageMouseMove } = useFloatingImages(ref1, ref2, ref3);

  const heading1 = useRef(null);
  const heading2 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heading1,
    offset: ['start 0.35', 'end 0.1'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="main" className="relative bg-gradient-to-b  ">
      <div
        onMouseMove={(e) => manageMouseMove(e)}
        className="relative left-0 top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden md:h-[80vh]"
      >
        <span className="relative inline-block">
  {/* Capa inferior: texto metálico con brillo */}
  <motion.h1
  ref={heading1}
  className="relative z-20 mt-[-5vw] w-full text-center text-[4.5vw] md:text-[6vw] md:leading-[1.2] font-extrabold max-w-[95%]"
  style={{ opacity }}
>
  CREATING{' '}
  <span className="relative inline-block">
    {/* Capa inferior: texto metálico con brillo */}
    <motion.span
      animate={{
        filter: [
          'brightness(1)',   // normal
          'brightness(2.5)', // flash leve
          'brightness(3.2)', // flash fuerte
          'brightness(1.2)', // leve
          'brightness(2.8)', // flash medio
          'brightness(3.4)', // flash fuerte
          'brightness(1)',   // normal
        ],
      }}
      transition={{
        duration: 1.6,
        times: [0, 0.1, 0.25, 0.4, 0.55, 0.7, 1],
        ease: 'linear',
        repeat: Infinity,
        repeatDelay: 1.2,
      }}
      className="relative z-10 bg-gradient-to-r from-white via-gray-300 to-white bg-[length:200%_200%] text-transparent bg-clip-text"
    >
      UNIQUENESS
    </motion.span>

    {/* Capa superior: opacidad negra con muchos flashes */}
    <motion.span
      aria-hidden="true"
      animate={{
        opacity: [
          0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, // 10 flashes dentro del mismo ciclo
        ],
      }}
      transition={{
        duration: 1.6,
        times: [0, 0.05, 0.1, 0.15, 0.25, 0.35, 0.45, 0.55, 0.7, 0.85, 1],
        ease: 'linear',
        repeat: Infinity,
        repeatDelay: 1.2,
      }}
      className="absolute inset-0 z-20 text-black font-extrabold mix-blend-normal"
    >
      UNIQUENESS
    </motion.span>
  </span>
</motion.h1>

</span>



        <motion.h2 ref={heading2} className="z-20 text-[1.7vw] md:text-[3vw] font-medium text-text-1/7 5" style={{ opacity }} >
          Innovative marketing that gets you more customers
          <br /> Free for the First Week.
        </motion.h2>
        <div ref={ref1} className={`absolute left-0 top-0 z-10 h-full w-full`}>
          <Image src={main_1} fill={true} alt="" className='' objectFit="cover" />
        </div>

        <div ref={ref2} className={`absolute left-0 top-0 h-full w-full `}>
          <Image src={main_2} fill={true} alt="" objectFit="cover" />
        </div>

        <div ref={ref3} className={`absolute left-0 top-0 h-full w-full `}>
          <Image src={main_3} fill={true} alt="" objectFit="cover" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
