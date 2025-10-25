import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface LogoIconProps {
  className?: string;
}

export const LogoIcon: FC<LogoIconProps> = ({ className }) => {
  return (
    <motion.div
      className={`relative group cursor-none ${className || ""}`}
      whileHover={{
        filter: "invert(1)",
        scale: 1.05,
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {/* halo parpadeante */}
      <motion.div
        className="absolute inset-0 blur-md opacity-40 group-hover:opacity-70 transition-all duration-700"
        animate={{
          filter: [
            "brightness(8) invert(1)",  // blanco
            "brightness(8) invert(1)",  // se mantiene blanco (2s)
            "brightness(1) invert(0)",  // negro
            "brightness(8) invert(1)",  // blanco
            "brightness(1) invert(0)",  // negro
            "brightness(8) invert(1)",  // vuelve a blanco
          ],
          scale: [1, 1.05, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "linear",
          times: [0, 0.4, 0.6, 0.7, 0.8, 1],
        }}
      >
        <Image
          src="/images/Logo principal.svg"
          alt="Logo"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* logo principal */}
      <motion.div
        animate={{
          filter: [
            "brightness(8) invert(1)",  // blanco inicial
            "brightness(8) invert(1)",  // estable 2s
            "brightness(1) invert(0)",  // negro
            "brightness(8) invert(1)",  // blanco
            "brightness(1) invert(0)",  // negro
            "brightness(8) invert(1)",  // blanco final
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 5, 
          ease: "linear",
          times: [0, 0.4, 0.6, 0.7, 0.8, 1],
        }}
        className="relative z-10 w-full h-full"
      >
        <Image
          src="/images/Logo principal.svg"
          alt="Logo"
          fill
          className="object-contain"
        />
      </motion.div>
    </motion.div>
  );
};
