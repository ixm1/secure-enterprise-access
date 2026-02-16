import { Server, GraduationCap, Building, Plane } from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  { icon: Server, title: "Data Center", desc: "High-security biometric access for mission-critical infrastructure and server rooms." },
  { icon: GraduationCap, title: "Education", desc: "Campus-wide security with biometric access control for universities and schools." },
  { icon: Building, title: "Corporate / Enterprise", desc: "Streamlined access management for modern office buildings and corporate headquarters." },
  { icon: Plane, title: "Airport", desc: "Advanced biometric screening and access control for aviation security zones." },
];

const Industries = () => (
  <section className="py-10 bg-background">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-10">
        <span className="text-muted-foreground font-semibold text-xs uppercase tracking-wider">Industries We Serve</span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-3">Solutions Across Key Industries</h2>
        <p className="text-base text-muted-foreground max-w-3xl mx-auto">Purpose-built biometric solutions for industries that demand the highest levels of security and reliability.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((ind, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-secondary rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-border group hover:border-brand/30">
            <div className="w-14 h-14 mb-5 rounded-xl bg-brand-light flex items-center justify-center group-hover:scale-110 transition-transform">
              <ind.icon className="w-7 h-7 text-brand" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{ind.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Industries;
