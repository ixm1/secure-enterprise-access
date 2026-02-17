import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import WhyVisit from "@/components/landing/WhyVisit";
import Industries from "@/components/landing/Industries";
import ContactForm from "@/components/landing/ContactForm";
import TrustedBy from "@/components/landing/TrustedBy";
import Solutions from "@/components/landing/Solutions";
import VisitCTA from "@/components/landing/VisitCTA";
import Team from "@/components/landing/Team";
import CustomerStories from "@/components/landing/CustomerStories";
import Partners from "@/components/landing/Partners";
import BookSession from "@/components/landing/BookSession";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <main className="min-h-screen bg-background">
    <Header />
    <Hero />
    <Industries />
    <WhyVisit />
    <ContactForm />
    <TrustedBy />
    <Solutions />
    <VisitCTA />
    <Team />
    <CustomerStories />
    <Partners />
    <BookSession />
    <Footer />
  </main>
);

export default Index;
