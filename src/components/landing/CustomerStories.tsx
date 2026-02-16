import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const stories = [
  { tag: "Construction", title: "Transguard Group", desc: "Invixium worked very closely with our management team to deliver an automated workforce management solution that delivers exceptional administration efficiency, heightened employee sustainability, and extreme accuracy.", img: "https://beta.invixium.com/wp-content/themes/invixium/assets/images/lp/new-design/Transguard-Group-story.png" },
  { tag: "Museum", title: "Museum of the Future", desc: "When the Museum of the Future in Dubai approached us for a biometric solution for their building; without much thought, we offered the IXM TITAN from Invixium.", img: "https://beta.invixium.com/wp-content/themes/invixium/assets/images/lp/new-design/Museum-of-the-Future.png" },
  { tag: "Aviation", title: "DAMMAM AIRPORTS COMPANY (DACO)", desc: "Advanced biometric solutions like the ones offered by Invixium boast fast throughputs that get thousands of employees to work in minutes, speeding up shift changes.", img: "https://beta.invixium.com/wp-content/themes/invixium/assets/images/lp/new-design/Dammam-Airports-story.png" },
  { tag: "Tourism & Hospitality", title: "Red Sea Nursery in Saudi Arabia", desc: "The overall design of the IXM TITAN, featuring an aluminum body and large IPS LCD screen, exudes next-gen, futuristic elegance. 4G cellular connectivity was a game-changer.", img: "https://beta.invixium.com/wp-content/themes/invixium/assets/images/lp/new-design/Red-Sea-Global-story.png" },
];

const CustomerStories = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % stories.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const story = stories[current];

  return (
    <section id="customer-stories" className="py-8 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-muted-foreground font-semibold text-xs uppercase tracking-wider">Customer Stories</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-3">Trusted by Industry Leaders</h2>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="bg-background rounded-xl overflow-hidden border border-border transition-opacity duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
              <div className="relative h-64 sm:h-72 lg:h-[350px]">
                <img src={story.img} alt={story.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center lg:min-h-[350px]">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold">{story.tag}</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3">{story.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{story.desc}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={() => setCurrent(c => (c - 1 + stories.length) % stories.length)}
              className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-secondary transition-all cursor-pointer">
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {stories.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === current ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/50"}`} />
              ))}
            </div>
            <button onClick={() => setCurrent(c => (c + 1) % stories.length)}
              className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center hover:bg-secondary transition-all cursor-pointer">
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;
