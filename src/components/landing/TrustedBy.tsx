const logos = [
  "alabama.png", "amazon.png", "avdg.png", "cboe.png", "barrick-gold.png", "deloitte.png",
  "electric-company-of-omaha.png", "houston-airport.png", "kraft.png", "lightedge.png", "loma_linda.png",
  "louisiana_radio_communications.png", "massachusetts.jpg", "pepsi-logo.png", "piper.png", "pittsburgh.jpg",
  "ppg.png", "pwc.png", "rutgers.jpg", "sandia.png", "saudi-aramco.png", "shell.png",
];

const BASE = "/images/brands/";

const TrustedBy = () => (
  <section className="py-8 bg-secondary overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-10">
        <span className="text-muted-foreground font-semibold text-xs uppercase tracking-wider">Trusted by Global Leaders</span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-3">Check Out Our Prestigious Roster of Customers</h2>
      </div>
    </div>
    <div className="relative w-full">
      <div className="flex animate-scroll-x gap-8">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex-shrink-0 w-36 h-20 flex items-center justify-center p-4 rounded-lg bg-background border border-border">
            <img src={`${BASE}${logo}`} alt="" className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedBy;
