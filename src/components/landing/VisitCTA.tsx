import { Calendar, MapPin, Building2 } from "lucide-react";

const VisitCTA = () => (
  <section className="py-6 bg-gradient-to-b from-background via-secondary/30 to-background">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="relative z-10 p-8 md:p-10">
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Visit Us at ISC WEST 2026</h3>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">We look forward to meeting you at the show!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { icon: Calendar, label: "Event Dates", value: "March 25-27, 2026" },
            { icon: MapPin, label: "Venue", value: "The Venetian Expo, Las Vegas" },
            { icon: Building2, label: "Our Booth", value: "Stand 9109" },
          ].map((item, i) => (
            <div key={i} className="relative bg-secondary rounded-2xl p-6 border border-border">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-background flex items-center justify-center mb-2">
                  <item.icon className="w-7 h-7 text-foreground" />
                </div>
                <div className="text-xs text-brand font-bold uppercase tracking-wider mb-2">{item.label}</div>
                <div className="text-lg font-bold text-foreground text-center">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <a href="#contact-form" className="bg-brand border-2 border-brand text-white px-8 py-4 rounded-xl font-bold text-base inline-flex items-center gap-3 hover:bg-background hover:text-brand transition-all duration-300">
            <Calendar className="w-5 h-5" />Schedule A Meeting
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default VisitCTA;
