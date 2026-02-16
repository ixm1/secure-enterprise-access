import { Mail, Linkedin } from "lucide-react";

const team = [
  {
    name: "Chris Thompson",
    role: "National Sales Manager, North America",
    email: "cthompson@invixium.com",
    linkedin: "https://www.linkedin.com/in/christopher-t-54ba31ba/",
    img: "https://beta.invixium.com/wp-content/themes/invixium/assets/images/lp/intersec/chris-headshot.png",
  },
  {
    name: "Steve Grebenschikov",
    role: "VP of Sales, North America",
    email: "sgrebenschikov@invixium.com",
    linkedin: "https://www.linkedin.com/in/steve-grebenschikov-8a6b8a1/",
    img: "https://beta.invixium.com/wp-content/themes/invixium/assets/images/lp/new-design/steve-headshot.png",
  },
];

const Team = () => (
  <section className="py-8 bg-gradient-to-b from-secondary to-background">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-8">
        <span className="text-muted-foreground font-semibold text-xs uppercase tracking-wider">Our Team</span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-3">Meet Our Expert Team</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {team.map((member, i) => (
          <div key={i} className="group relative">
            <div className="bg-background rounded-xl overflow-hidden border border-border hover:border-brand/30 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-40 flex-shrink-0 relative sm:min-h-[200px] border-r border-border">
                  <img src={member.img} alt={member.name} className="w-full h-full min-h-[200px] object-cover group-hover:scale-105 transition-transform duration-500" />
                  <a target="_blank" rel="noreferrer" href={member.linkedin}
                    className="absolute top-3 right-3 w-9 h-9 rounded-lg bg-[hsl(201,100%,35%)] flex items-center justify-center hover:bg-[hsl(201,100%,30%)] transition-all shadow-lg opacity-0 group-hover:opacity-100">
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>
                </div>
                <div className="flex-1 p-3">
                  <h3 className="text-lg font-bold text-foreground mb-2">{member.name}</h3>
                  <div className="inline-flex items-center px-3 py-1 bg-secondary rounded-lg border border-border mb-4">
                    <p className="text-xs text-foreground/80 font-semibold">{member.role}</p>
                  </div>
                  <a href={`mailto:${member.email}`} className="flex items-center gap-3 group/link hover:bg-secondary p-2 rounded-lg transition-all duration-300">
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover/link:bg-brand transition-all duration-300">
                      <Mail className="w-4 h-4 text-muted-foreground group-hover/link:text-white transition-all" />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium group-hover/link:text-brand transition-all">{member.email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
