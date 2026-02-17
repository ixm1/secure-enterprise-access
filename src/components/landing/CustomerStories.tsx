import { motion } from "framer-motion";

const stories = [
  {
    company: "LightEdge Solutions",
    tag: "Data Center",
    quote:
      "LightEdge requires uncompromising security. Biometrics help us ensure the high level of accuracy we demand from our access control system. Our direct relationship with Invixium provides us with tailored support from a company that's large enough to support our needs, but also intimate enough to be very personal. Standardizing on RS2 and Invixium helps us ensure that our system upholds our values of high security, modernness and futuristic design.",
    author: "John Martin",
    role: "Director of Data Center Operations at LightEdge Solutions",
    img: "/images/brands/lightedge.png",
  },
  {
    company: "Frisco Mining",
    tag: "Mining",
    quote:
      "Invixium equipment is characterized by its adaptability in complicated environments, as well as its easy installation and configuration, which allows managing the enrollment and start-up of the system more comfortably.",
    author: "Jorge Alamiya",
    role: "IT Project Manager, Global HCM",
    img: "/images/customer-stories/transguard.png",
  },
];

const CustomerStories = () => (
  <section id="customer-stories" className="py-8 bg-gradient-to-b from-secondary to-background">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-8">
        <span className="text-muted-foreground font-semibold text-xs uppercase tracking-wider">Customer Stories</span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 mt-3">Trusted by Industry Leaders</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {stories.map((story, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-background rounded-xl border border-border p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-12 w-24 flex items-center">
                  <img src={story.img} alt={story.company} className="max-h-full max-w-full object-contain" />
                </div>
                <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  {story.tag}
                </span>
              </div>
              <blockquote className="text-sm text-muted-foreground leading-relaxed italic mb-6">
                "{story.quote}"
              </blockquote>
            </div>
            <div className="border-t border-border pt-4">
              <p className="text-sm font-bold text-foreground">{story.author}</p>
              <p className="text-xs text-muted-foreground">{story.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CustomerStories;
