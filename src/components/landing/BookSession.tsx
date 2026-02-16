import { Calendar, ArrowRight } from "lucide-react";

const BookSession = () => (
  <section className="py-8 md:py-12 bg-gradient-to-b from-secondary to-background">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-background rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 text-center border border-border shadow-sm">
      <div className="text-center mb-8 md:mb-10">
        <span className="text-muted-foreground font-semibold text-xs uppercase tracking-wider">Book Your Session</span>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4 mt-3">Make Your Visit Count</h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto">Book a 1:1 session with our team of experts for a tailored walkthrough based on your project needs.</p>
      </div>
      <a href="#contact-form"
        className="w-full sm:w-auto group bg-brand hover:bg-brand-hover text-white px-6 sm:px-10 py-3 sm:py-5 rounded-xl font-semibold inline-flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 text-sm sm:text-lg">
        <Calendar className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
        <span className="whitespace-nowrap">Reserve Your Meeting Now</span>
        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
      </a>
    </div>
  </section>
);

export default BookSession;
