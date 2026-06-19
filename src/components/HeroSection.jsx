import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import heroBg from "/hero-bg.png";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Photo background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />

        {/* Dark overlays — create depth and keep text readable */}
        <div className="absolute inset-0 bg-[#0d0d0d]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/45 via-transparent to-[#0d0d0d]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-20 w-full flex flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#E5A93C] text-sm lg:text-base tracking-[0.22em] uppercase mb-6 font-semibold"
        >
          Visual Designer &amp; Brand Strategist
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.05] text-[#f5f5f5] mb-8"
        >
          Crafting Digital
          <br />
          <span className="text-gradient">Experiences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-[#888888] text-lg lg:text-xl max-w-lg mb-14 font-light leading-relaxed"
        >
          I design brand identities, digital products, and AI-driven visual
          experiences that resonate with clarity and purpose.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex gap-5"
        >
          <a
            href="#projects"
            className="px-9 py-4 bg-[#E5A93C] text-[#000000] text-sm font-semibold tracking-wider rounded-full hover:bg-amber-400 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-9 py-4 border border-[rgba(229,169,60,0.35)] text-[#E5A93C] text-sm font-semibold tracking-wider rounded-full hover:border-[#E5A93C] hover:text-[#E5A93C] hover:shadow-[0_0_24px_rgba(229,169,60,0.15)] transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.22em] text-[#888888] uppercase font-semibold">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <FiArrowDown className="text-[#E5A93C]" size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
