import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScanFace, ShieldCheck, Fingerprint, Users, Droplets, Cable, Monitor, HandMetal, Key, CreditCard, Zap, Lock, Eye, Radio, Shield, Award, QrCode, Network, TrendingUp, UserCheck, Clock, RefreshCw, GitBranch, Boxes, Briefcase } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature { icon: LucideIcon; text: string }
interface Product { name: string; subtitle: string; desc: string; img: string; imgStyle?: string; features: Feature[] }

const industrialProducts: Product[] = [
  {
    name: "IXM TITAN",
    subtitle: "The Flagship Rugged Biometric Device",
    desc: "Ideal for harsh environments such as for oil & gas refineries, manufacturing plants, construction zones, airports, petrochemicals, and mining sites.",
    img: "https://beta.invixium.com/wp-content/themes/invixium/assets/images/lp/new-design/ixm-titan.png",
    features: [
      { icon: ScanFace, text: "High Speed Touchless Face Recognition" },
      { icon: ShieldCheck, text: "Up to 5-factor authentication" },
      { icon: Fingerprint, text: "Dual Biometrics with Face and Fingerprint Recognition" },
      { icon: Users, text: "Large User Capacity for Workforces of Any Size" },
      { icon: Droplets, text: "IP67 and IK10 rated for ingress and impact protection" },
      { icon: Cable, text: "Integrated with leading Access Control Panels" },
    ],
  },
  {
    name: "IXM TFACE",
    subtitle: "The Slimmest Face Recognition Solution",
    desc: "Designed as a mullion-mount dual-biometric device that blends security and convenience.",
    img: "https://beta.invixium.com/wp-content/themes/invixium/assets/images/lp/new-design/ixm-tface.png",
    features: [
      { icon: ShieldCheck, text: "Dual biometrics (Face + Finger) for high security areas" },
      { icon: Cable, text: "PoE+ Makes Installation Simple" },
      { icon: Eye, text: "Advanced liveness detection for anti-spoofing" },
      { icon: Droplets, text: "IP65 & IK08 Certified" },
      { icon: Monitor, text: "2.4\" IPS Capacitive Display" },
      { icon: HandMetal, text: "Customization Options" },
    ],
  },
  {
    name: "IXM MYCRO",
    subtitle: "Simple Fingerprint and Card Access Control for Door Security",
    desc: "MYCRO offers everything you would expect in a high-end biometric device without over-complicated add-ons.",
    img: "https://beta.invixium.com/wp-content/themes/invixium/assets/images/lp/new-design/IXM-MYCRO.png",
    imgStyle: "max-w-[180px] max-h-[180px]",
    features: [
      { icon: Key, text: "Combine Biometrics With Cards For Enhanced Security" },
      { icon: Cable, text: "Integrations With Leading Access Control Software" },
      { icon: Users, text: "Robust User Capacity Offers Usage Flexibility" },
      { icon: CreditCard, text: "Built-in support for multi-class cards" },
      { icon: Zap, text: "High Quality Product Made In Canada" },
      { icon: Lock, text: "Communication Options Facilitate Versatile Security" },
    ],
  },
];

const enterpriseProducts: Product[] = [
  {
    name: "IXM ROSTO",
    subtitle: "Modern face recognition device for businesses of all sizes",
    desc: "A cost-effective and versatile biometric device designed for fast and secure access control, workforce, and visitor management needs of SMEs.",
    img: "https://beta.invixium.com/wp-content/themes/invixium/assets/images/lp/new-design/ixm-rosto.webp",
    features: [
      { icon: ScanFace, text: "High Speed Face Recognition" },
      { icon: Monitor, text: "Digital Card and Dynamic QR Code support via IXM Mobile" },
      { icon: Cable, text: "PoE for easy installation" },
      { icon: Radio, text: "Wi-Fi, BLE, and NFC" },
      { icon: Shield, text: "OSDPv2 Support" },
      { icon: Briefcase, text: "Intelligent Visitor & Workforce Management" },
    ],
  },
  {
    name: "IXM TOUCH 3",
    subtitle: "Cost-Effective Fingerprint & Card Device",
    desc: "The newest member of the highest-selling TOUCH Series!",
    img: "https://beta.invixium.com/wp-content/themes/invixium/assets/images/lp/new-design/ixm-touch3.webp",
    features: [
      { icon: Fingerprint, text: "Value Driven Fingerprint Technology" },
      { icon: Award, text: "FBI Certified 500dpi Optical Fingerprint Sensor" },
      { icon: QrCode, text: "Digital Card and Dynamic QR Code support via IXM Mobile" },
      { icon: Radio, text: "PoE, Wi-Fi and BLE option" },
      { icon: Shield, text: "OSDPv2 Support" },
      { icon: Droplets, text: "IP65 and IK08 Environmental Rating" },
    ],
  },
];

const ixmWebProducts: Product[] = [
  {
    name: "IXM LINK",
    subtitle: "ACM Integration — No Middleware Needed",
    desc: "IXM Link enables seamless integration between IXM WEB and leading Access Control Panel (ACP) software.",
    img: "https://www.invixium.com/wp-content/themes/invixium/assets/images/lp/intersec/2025/Thumbnails_17.png",
    features: [
      { icon: Network, text: "Developed by Invixium, no middleware needed" },
      { icon: Zap, text: "Integrate with leading 15+ access control panels" },
      { icon: Boxes, text: "Scalability tested with real customers" },
      { icon: Users, text: "Eliminate dual entry of users" },
      { icon: RefreshCw, text: "Real time synchronization" },
      { icon: GitBranch, text: "Easier management for devices & users" },
    ],
  },
  {
    name: "IXM TIME",
    subtitle: "Biometric Time & Attendance",
    desc: "IXM Time is a biometric time and attendance solution that allows IXM WEB to manage workforces.",
    img: "https://www.invixium.com/wp-content/themes/invixium/assets/images/lp/intersec/2025/Thumbnails_1.png",
    features: [
      { icon: Clock, text: "Biometric Time and Attendance" },
      { icon: TrendingUp, text: "Accurate Time Tracking" },
      { icon: UserCheck, text: "Reduce Buddy Punching" },
      { icon: Clock, text: "Manage Company Shifts and Schedules" },
    ],
  },
  {
    name: "IXM VISITOR",
    subtitle: "Enterprise Visitor Management",
    desc: "Complete visitor management solution with pre-registration, host notifications, badge printing, and seamless integration with access control systems.",
    img: "https://www.invixium.com/wp-content/themes/invixium/assets/images/lp/intersec/2025/Thumbnails_16.png",
    features: [
      { icon: UserCheck, text: "Enterprise Visitor Management" },
      { icon: HandMetal, text: "Create and Manage Visits" },
      { icon: Eye, text: "Visitor Watchlist Monitoring" },
      { icon: Network, text: "Manage Visits Across Multiple Locations" },
      { icon: TrendingUp, text: "Frequent Visitors" },
      { icon: Lock, text: "Security Clearance Portal" },
    ],
  },
];

const tabs = [
  { key: "enterprise", label: "Enterprise Series" },
  { key: "industrial", label: "Industrial Series" },
  { key: "ixmweb", label: "IXM WEB (Software)" },
];

const ProductCard = ({ product, layout = "horizontal" }: { product: Product; layout?: "horizontal" | "vertical" }) => {
  if (layout === "vertical") {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative overflow-hidden rounded-xl shadow-2xl ring-1 ring-border/50">
          <img src={product.img} alt={product.name} className="w-full h-auto object-cover rounded-xl" />
          <div className="absolute top-4 right-4 w-20 h-20 bg-white/30 rounded-full blur-2xl" />
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{product.name}</h3>
          <p className="text-sm text-muted-foreground mb-1 font-medium">{product.subtitle}</p>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{product.desc}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {product.features.map((f, i) => (
              <div key={i} className="flex items-center gap-3 bg-background rounded-xl p-3 border border-border hover:border-brand/30 hover:bg-brand-light/30 transition-all duration-300 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-light flex items-center justify-center group-hover:bg-brand-light-hover transition-all">
                  <f.icon className="w-4 h-4 text-brand" />
                </div>
                <span className="text-xs text-foreground/80 font-medium leading-snug">{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-background to-secondary/50 rounded-2xl border border-border/60 overflow-hidden hover:border-brand/30 hover:shadow-xl transition-all duration-500">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/5 relative bg-background p-8 lg:p-10 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-light/20 via-transparent to-secondary/20" />
          <img src={product.img} alt={product.name} className={`relative z-10 w-full h-auto object-contain drop-shadow-2xl ${product.imgStyle || "max-w-[280px] max-h-[280px]"}`} />
        </div>
        <div className="lg:w-3/5 p-6 lg:p-8">
          <div className="mb-5">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight mb-1">{product.name}</h3>
            <p className="text-xs text-muted-foreground font-medium">{product.subtitle}</p>
            <p className="text-xs text-muted-foreground leading-relaxed mt-2">{product.desc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {product.features.map((f, i) => (
              <div key={i} className="flex items-center gap-3 bg-background rounded-xl p-3 border border-border hover:border-brand/30 hover:bg-brand-light/30 transition-all duration-300 group">
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-brand-light flex items-center justify-center group-hover:bg-brand-light-hover transition-all">
                  <f.icon className="w-4 h-4 text-brand" />
                </div>
                <span className="text-xs text-foreground/80 font-medium leading-snug">{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Solutions = () => {
  const [activeTab, setActiveTab] = useState("enterprise");

  const getProducts = () => {
    if (activeTab === "industrial") return industrialProducts;
    if (activeTab === "enterprise") return enterpriseProducts;
    return ixmWebProducts;
  };

  return (
    <section id="solutions" className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-muted-foreground font-semibold text-xs uppercase tracking-wider">Our Solutions</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-3">Featured Solutions on Display</h2>
          <p className="text-base text-muted-foreground max-w-4xl mx-auto">Experience our complete range of solutions, prioritizing access control, enterprise security, and seamless ACM integrations.</p>
        </div>
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-1 bg-secondary/80 backdrop-blur-sm p-1 rounded-full border border-border/50">
            {tabs.map(tab => (
              <button key={tab.key} onClick={() => setActiveTab(tab.key)}
                className={`relative px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${activeTab === tab.key ? "bg-brand text-white shadow-lg" : "text-muted-foreground hover:text-foreground"}`}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="space-y-8">
            {getProducts().map((product, i) => (
              <ProductCard key={i} product={product} layout={activeTab === "ixmweb" ? "vertical" : "horizontal"} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Solutions;
