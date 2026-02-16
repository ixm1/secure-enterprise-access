import { Layers, Building2, MonitorPlay, Network } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  { icon: Layers, title: "Complete Portfolio", desc: "From enterprise offices to industrial facilities - discover tailored biometric security solutions for every environment and requirement." },
  { icon: Building2, title: "Customizations", desc: "Your environment isn't generic. Your biometric solutions shouldn't be either. Explore tailored solutions for your unique security and productivity needs." },
  { icon: MonitorPlay, title: "Live Demonstrations", desc: "Get hands-on experience of IXM ROSTO and IXM TOUCH 3 at our stunning booth!" },
  { icon: Network, title: "Seamless Integrations", desc: "Check out our seamless integrations with leading Access Control Platforms." },
];

const WhyVisit = () => (
  <section id="why-choose" className="py-8 bg-secondary">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Meet Invixium at ISC WEST 2026</h2>
        <p className="text-base text-muted-foreground max-w-3xl mx-auto">Discover cutting-edge biometric solutions designed for rugged industrial applications and enterprises.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-background rounded-xl p-6 hover:shadow-md transition-all duration-300 border border-border group">
            <div className="w-12 h-12 mb-5 rounded-lg bg-brand-light flex items-center justify-center">
              <r.icon className="w-6 h-6 text-brand" />
            </div>
            <h3 className="text-base font-bold text-foreground mb-2">{r.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyVisit;
