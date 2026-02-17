import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => (
  <section className="relative w-full overflow-hidden" style={{ height: 560 }}>
    <div className="absolute inset-0">
      <img
        src="/images/hero-bg.png"
        alt="Biometric Solutions at ISC WEST"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60" />
    </div>
    <div className="relative h-full flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Global Leader in Biometric Access Control & Security
          </h1>
          <p className="text-lg md:text-xl text-white/90 italic mb-6 max-w-4xl mx-auto leading-relaxed mt-3">
            Biometric Access Control, Enterprise Security, and Seamless ACM Integrations
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold">
            <span className="text-brand-yellow">Visit Us @ ISC WEST – Las Vegas</span>
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-wide">
            Stand 9109
          </h2>
          <p className="text-white/80 text-base mb-5">March 25–27, 2026</p>
          <a
            href="#contact-form"
            className="group bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-3 transition-all duration-300"
          >
            <Calendar className="w-5 h-5" />
            Schedule A Meeting
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
