const logos = [
  "alabama.png", "amazon.png", "avdg.png", "cboe.png", "barrick-gold.png", "deloitte.png",
  "electric-company-of-omaha.png", "houston-airport.png", "kraft.png", "lightedge.png", "loma_linda.png",
  "louisiana_radio_communications.png", "massachusetts.jpg", "pepsi-logo.png", "piper.png", "pittsburgh.jpg",
  "ppg.png", "pwc.png", "rutgers.jpg", "sandia-national-laboratories-logo.png", "saudi-aramco.png", "shell.png",
];

const TrustedBy = () => (
  <section className="py-8 bg-secondary">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-10">
        <span className="text-muted-foreground font-semibold text-xs uppercase tracking-wider">Trusted by Global Leaders</span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-3">Check Out Our Prestigious Roster of Customers</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
        {logos.map((logo, i) => (
          <div key={i} className="group">
            <div className="relative aspect-[3/2] flex items-center justify-center p-6 rounded-lg bg-background border border-border hover:border-muted-foreground/30 hover:shadow-md transition-all duration-300">
              <img src={`https://beta.invixium.com/wp-content/themes/invixium/assets/images/lp/isc-east/brands-logo/${logo}`} alt="" className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustedBy;
