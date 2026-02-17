import { Calendar, User, Mail, Building } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "" });

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll contact you shortly.");
    setShowForm(false);
    setFormData({ name: "", email: "", company: "" });
  };

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: 640 }}>
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.png"
          alt="Biometric Solutions at ISC WEST"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/70" />
      </div>
      <div className="relative h-full flex items-center justify-center pt-24 pb-12">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
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
            <p className="text-white/80 text-base mb-6">March 25–27, 2026</p>

            {!showForm ? (
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => setShowForm(true)}
                  className="group bg-brand hover:bg-brand-hover text-white border-2 border-brand px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Calendar className="w-5 h-5" />
                  Quick Register
                </button>
                <a
                  href="#contact-form"
                  className="group bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-3 transition-all duration-300"
                >
                  <Calendar className="w-5 h-5" />
                  Schedule A Meeting
                </a>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="max-w-md mx-auto mt-6"
              >
                <form onSubmit={handleQuickSubmit} className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl">
                  <h3 className="text-lg font-bold text-foreground mb-4">Quick Registration</h3>
                  <div className="space-y-3">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        required
                        type="text"
                        placeholder="Full Name*"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 bg-background border-2 border-border rounded-lg text-sm text-foreground placeholder-muted-foreground transition-all focus:border-brand focus:outline-none"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        required
                        type="email"
                        placeholder="Email Address*"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 bg-background border-2 border-border rounded-lg text-sm text-foreground placeholder-muted-foreground transition-all focus:border-brand focus:outline-none"
                      />
                    </div>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        required
                        type="text"
                        placeholder="Company Name*"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 bg-background border-2 border-border rounded-lg text-sm text-foreground placeholder-muted-foreground transition-all focus:border-brand focus:outline-none"
                      />
                    </div>
                    <div className="flex gap-2 pt-2">
                      <button
                        type="submit"
                        className="flex-1 bg-brand hover:bg-brand-hover text-white py-2.5 rounded-lg font-semibold transition-all duration-200"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="px-4 py-2.5 bg-secondary hover:bg-secondary/80 text-foreground rounded-lg font-semibold transition-all duration-200"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
