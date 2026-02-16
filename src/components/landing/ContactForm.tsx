import { Shield, Clock, Zap, CircleCheck, User, Mail, Building, Phone, MessageSquare } from "lucide-react";
import { useState } from "react";

const benefits = [
  { icon: Shield, title: "Specialist-Led", desc: "Guidance from experts who understand your challenges." },
  { icon: Clock, title: "Focused Session", desc: "A concise, high-value demo tailored for you." },
  { icon: Zap, title: "Requirement-Driven", desc: "We center the conversation around your unique needs." },
  { icon: CircleCheck, title: "Strategic Direction", desc: "Walk away with clear insights and next steps." },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", country: "", phone: "", comments: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you shortly.");
  };

  return (
    <section id="contact-form" className="py-10 bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Schedule Your Demo</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">Meet our team of experts and learn how our solutions can transform your unique security and productivity requirements.</p>
            </div>
            <div className="space-y-2.5">
              {benefits.map((b, i) => (
                <div key={i} className="group bg-background rounded-xl p-4 border border-border hover:border-brand/50 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-light flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <b.icon className="w-5 h-5 text-brand" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground text-sm mb-0.5">{b.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 mt-6">
            <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-4 md:p-7 border border-border space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-foreground mb-2">Full Name <span className="text-brand">*</span></label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input required type="text" placeholder="John Doe*" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                      className="w-full pl-11 py-3 bg-secondary border-2 border-border rounded-lg text-sm text-foreground placeholder-muted-foreground transition-all focus:border-brand focus:outline-none focus:bg-background" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground mb-2">Email Address <span className="text-brand">*</span></label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input required type="email" placeholder="john@company.com*" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      className="w-full pl-11 py-3 bg-secondary border-2 border-border rounded-lg text-sm text-foreground placeholder-muted-foreground transition-all focus:border-brand focus:outline-none focus:bg-background" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-foreground mb-2">Company Name <span className="text-brand">*</span></label>
                  <div className="relative">
                    <Building className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input required type="text" placeholder="Company Name*" value={formData.company} onChange={e => setFormData(p => ({ ...p, company: e.target.value }))}
                      className="w-full pl-11 py-3 bg-secondary border-2 border-border rounded-lg text-sm text-foreground placeholder-muted-foreground transition-all focus:border-brand focus:outline-none focus:bg-background" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-foreground mb-2">Country <span className="text-brand">*</span></label>
                  <div className="relative">
                    <select required value={formData.country} onChange={e => setFormData(p => ({ ...p, country: e.target.value }))}
                      className="w-full pl-4 py-3 bg-secondary border-2 border-border rounded-lg text-sm text-foreground transition-all focus:border-brand focus:outline-none focus:bg-background appearance-none">
                      <option value="">Select Country</option>
                      <option>United States</option><option>Canada</option><option>United Kingdom</option><option>Germany</option><option>France</option>
                      <option>Australia</option><option>India</option><option>United Arab Emirates</option><option>Saudi Arabia</option><option>Singapore</option>
                      <option>Japan</option><option>Brazil</option><option>Mexico</option><option>South Africa</option><option>Other</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-foreground mb-2">Mobile Number <span className="text-brand">*</span></label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input required type="tel" placeholder="Mobile Number with Country Code* (ie. +1 xxxxxxx)" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                    className="w-full pl-11 py-3 bg-secondary border-2 border-border rounded-lg text-sm text-foreground placeholder-muted-foreground transition-all focus:border-brand focus:outline-none focus:bg-background" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-foreground mb-2">Questions/Comments</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-muted-foreground" />
                  <textarea rows={3} placeholder="Questions/Comments" value={formData.comments} onChange={e => setFormData(p => ({ ...p, comments: e.target.value }))}
                    className="w-full pl-11 py-3 bg-secondary border-2 border-border rounded-lg text-sm text-foreground placeholder-muted-foreground transition-all focus:border-brand focus:outline-none focus:bg-background resize-none" />
                </div>
              </div>
              <button type="submit"
                className="w-full py-4 bg-gradient-to-r from-brand to-brand-hover text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
                Request A Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
