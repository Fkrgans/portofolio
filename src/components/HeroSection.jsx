import { memo, useRef, useState, useEffect } from 'react';
import { Gsap, useGsapReducedMotion, useGsapScroll, useGsapTransform } from '../utils/gsapAnimate';
import { Terminal, Code2, Database, Cpu, Download, ArrowUpRight } from 'lucide-react';
import LightRays from './LightRays.jsx';

// Shared Intl formatter — created once, reused on every tick
const jakartaFormatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Asia/Jakarta',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true,
});

// === LOCATION & TIME BADGE ===
// Uses direct DOM update via ref to avoid React re-renders every second
const LocationTimeBadge = () => {
  const timeRef = useRef(null);

  useEffect(() => {
    const update = () => {
      if (timeRef.current) {
        timeRef.current.textContent = jakartaFormatter.format(new Date());
      }
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-5 font-mono text-xs uppercase tracking-[0.15em] text-slate-300/80">
      <div className="flex items-center gap-2">
        <span className="font-bold text-slate-100">Based in Indonesia</span>
      </div>
      <div className="w-[1px] h-3 bg-slate-300/15" />
      <div className="flex items-center gap-1.5 tabular-nums">
        <span className="text-slate-300/50 hidden sm:inline">LOCAL:</span>
        <span ref={timeRef} className="font-bold text-slate-100" />
      </div>
    </div>
  );
};

// === DECORATIVE ORBITING ELEMENTS (Left & Right) ===
const OrbitingDecoration = ({ icon: Icon, delay, className, isRevealed, enableAmbientMotion }) => (
  <Gsap.div
    initial={false}
    animate={
      isRevealed
        ? { opacity: 1, y: 0, scale: 1 }
        : { opacity: 0, y: 12, scale: 0.9 }
    }
    transition={{
      opacity: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
      y: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
      scale: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
    }}
    className={`absolute flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-200/15 bg-slate-100/10 backdrop-blur-lg shadow-[0_10px_30px_rgba(255,255,255,0.12)] ${className}`}
    style={enableAmbientMotion && isRevealed ? {
      animation: `hero-float 5.8s ${delay + 0.35}s ease-in-out infinite`,
      willChange: 'transform',
    } : undefined}
  >
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
    <Icon size={18} className="relative text-white" />
  </Gsap.div>
);

// === MAIN COMPONENT ===
const HeroSection = memo(function HeroSection({ isRevealed = true }) {
  const containerRef = useRef(null);
  const reduceMotion = useGsapReducedMotion();
  const [enableParallax, setEnableParallax] = useState(false);
  const [enableAmbientMotion, setEnableAmbientMotion] = useState(false);

  const { scrollYProgress } = useGsapScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Subtle scroll parallax
  const bgY = useGsapTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const contentY = useGsapTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  useEffect(() => {
    if (typeof window === 'undefined' || reduceMotion) {
      setEnableParallax(false);
      setEnableAmbientMotion(false);
      return;
    }

    const parallaxMedia = window.matchMedia('(min-width: 1024px) and (hover: hover) and (pointer: fine)');
    const updateParallax = () => {
      setEnableParallax(parallaxMedia.matches);
      setEnableAmbientMotion(parallaxMedia.matches);
    };

    updateParallax();

    if (parallaxMedia.addEventListener) {
      parallaxMedia.addEventListener('change', updateParallax);
    } else {
      parallaxMedia.addListener(updateParallax);
    }

    return () => {
      if (parallaxMedia.removeEventListener) {
        parallaxMedia.removeEventListener('change', updateParallax);
      } else {
        parallaxMedia.removeListener(updateParallax);
      }
    };
  }, [reduceMotion]);

  return (
    <header
      ref={containerRef}
      id="hero-section"
      className="min-h-[100svh] w-full relative bg-black selection:bg-slate-300/10 selection:text-slate-100 overflow-hidden flex flex-col items-center justify-center pt-16 pb-16"
    >
      {/* ── BACKGROUND ENGINEERING Grid & Dynamic Glow ── */}
      <Gsap.div
        initial={false}
        animate={isRevealed ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={enableParallax ? { y: bgY } : undefined}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      >
        <LightRays
          className="absolute inset-0"
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.4}
          lightSpread={0.6}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.3}
          noiseAmount={0.07}
          distortion={0.05}
          fadeDistance={1.2}
          saturation={1.2}
        />
      </Gsap.div>

      {/* ── MAIN CONTENT (PERFECTLY CENTERED) ── */}
      {/* Parallax wrapper (scroll-driven y only) */}
      <Gsap.div
        style={enableParallax ? { y: contentY } : undefined}
        className="relative z-10 w-full max-w-[1200px] px-5 sm:px-6 md:px-12 flex flex-col items-center text-center mt-8"
      >
        {/* Iris reveal + entrance wrapper */}
        <Gsap.div
          initial={false}
          animate={isRevealed
            ? { opacity: 1, y: 0, filter: 'blur(0px)', clipPath: 'circle(150% at 50% 100%)' }
            : { opacity: 0, y: 14, filter: 'blur(3px)', clipPath: 'circle(0% at 50% 100%)' }
          }
          transition={{
            clipPath: { duration: 1.25, ease: [0.2, 0.95, 0.3, 1] },
            opacity: { duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
            y: { duration: 1.0, delay: 0.08, ease: [0.22, 1, 0.36, 1] },
            filter: { duration: 0.8, delay: 0.1 },
          }}
          className="w-full flex flex-col items-center"
        >

        {/* Location & Time — visible at top */}
        <Gsap.div
          initial={false}
          animate={isRevealed ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mb-3 md:mb-4"
        >
          <LocationTimeBadge />
        </Gsap.div>

        {/* 2. Massive Clear Typography */}
        <div className="flex flex-col items-center justify-center relative w-full mb-4 md:mb-5">
          {/* Left Decoration */}
          <OrbitingDecoration icon={Code2} delay={0.15} className="left-0 sm:left-2 lg:left-16 top-2" isRevealed={isRevealed} enableAmbientMotion={enableAmbientMotion} />
          <OrbitingDecoration icon={Terminal} delay={0.45} className="left-6 sm:left-12 lg:left-28 bottom-8 hidden sm:flex" isRevealed={isRevealed} enableAmbientMotion={enableAmbientMotion} />

          <Gsap.h1
            initial={false}
            animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(4.25rem,14vw,9rem)] font-black uppercase tracking-tight text-slate-100 leading-[0.88]"
          >
            AHMAD
          </Gsap.h1>

          <Gsap.h1
            initial={false}
            animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(4.25rem,14vw,9rem)] font-black uppercase tracking-tight text-slate-100 leading-[0.88] mt-2 sm:mt-0 font-outline-fallback"
          >
            FIKRI
          </Gsap.h1>

          {/* Right Decoration */}
          <OrbitingDecoration icon={Database} delay={0.28} className="right-0 sm:right-2 lg:right-16 top-10" isRevealed={isRevealed} enableAmbientMotion={enableAmbientMotion} />
          <OrbitingDecoration icon={Cpu} delay={0.58} className="right-6 sm:right-12 lg:right-28 -bottom-2 hidden sm:flex" isRevealed={isRevealed} enableAmbientMotion={enableAmbientMotion} />
        </div>

        {/* 3. Clean Slogan with Green Accent */}
        <Gsap.div
          initial={false}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.38, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-2 mt-0"
        >
          <h2 className="text-[clamp(1.35rem,4.2vw,2.25rem)] font-bold text-slate-100 tracking-tight flex items-center justify-center flex-wrap gap-2 px-2">
            IoT, AI, & <span className="bg-lime-400/15 px-2 rounded-md ring-1 ring-lime-400/10 text-lime-400">Front-end</span> Systems<span className="text-lime-400 font-extrabold -ml-1">.</span>
          </h2>
          <p className="font-sans text-base text-slate-300/70 max-w-xl leading-7 mt-2 px-4">
            Lulusan SMK & mahasiswa Sistem Komputer yang bangun solusi IoT, Computer Vision, dan pengalaman web modern dengan vibe elegan dan to-the-point.
          </p>
        </Gsap.div>

        {/* 4. CTA Buttons */}
        <Gsap.div
          initial={false}
          animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ delay: 0.5, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mt-5"
        >
          <button
            onClick={() => document.getElementById('project-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2 bg-slate-900 text-slate-100 px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider hover:bg-lime-300 hover:text-slate-950 transition-all duration-300 cursor-pointer"
          >
            View Projects <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <a
            href={`${import.meta.env.BASE_URL}cv.pdf`}
            download
            className="group flex items-center gap-2 bg-transparent text-slate-100 border-2 border-slate-200/40 px-6 py-3 font-mono text-sm font-bold uppercase tracking-wider hover:bg-slate-200 hover:text-slate-950 transition-all duration-300"
          >
            Download CV <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
        </Gsap.div>



        </Gsap.div>

      </Gsap.div>
    </header>
  );
});

export default HeroSection;
