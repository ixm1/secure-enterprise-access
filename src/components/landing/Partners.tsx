import { MapPin } from "lucide-react";

const row1 = [
  { logo: "galaxy-logo.png", stand: "Stand 3077" },
  { logo: "wesco.png", stand: "Stand 20017" },
  { logo: "idcube.png", stand: "Stand 7051" },
  { logo: "Honeywell.png", stand: "Stand 20059" },
  { logo: "genetec.png", stand: "Stand 13062" },
];

const row2 = [
  { logo: "johnson-controls.png", stand: "Stand 18019" },
  { logo: "dormakaba.png", stand: "Stand 20007" },
  { logo: "prosegur_logo.png", stand: "Stand 3089" },
  { logo: "parabit-logo.png", stand: "Stand 23131" },
];

const PartnerCard = ({ logo, stand }: { logo: string; stand: string }) => (
  <div className="group">
    <div className="bg-background rounded-xl overflow-hidden border border-border hover:border-brand hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <div className="relative h-40 bg-background flex items-center justify-center p-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <img src={`https://beta.invixium.com/wp-content/themes/invixium/assets/images/lp/new-design/${logo}`} alt="" className="max-w-full max-h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="bg-gradient-to-br from-primary to-primary/90 p-4 group-hover:from-brand group-hover:to-brand-hover transition-all duration-300">
        <div className="flex items-center justify-center gap-2 text-primary-foreground">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span className="font-semibold text-sm">{stand}</span>
        </div>
      </div>
    </div>
  </div>
);

const Partners = () => (
  <section id="partners" className="py-8 bg-gradient-to-b from-background via-secondary/30 to-background">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-10">
        <span className="text-muted-foreground font-semibold text-xs uppercase tracking-wider">Our Partners</span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-3">Where Else to Find Us</h2>
        <p className="text-base text-muted-foreground max-w-2xl mx-auto">Visit our partner booths to experience Invixium's solutions integrated with industry-leading platforms</p>
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {row1.map((p, i) => <PartnerCard key={i} {...p} />)}
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
            {row2.map((p, i) => <PartnerCard key={i} {...p} />)}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Partners;
