import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Philosophy from "@/components/Philosophy";
import TrustedBy from "@/components/TrustedBy";
import UseCases from "@/components/UseCases";
import Integration from "@/components/Integration";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Philosophy />
        <TrustedBy />
        <UseCases />
        <Integration />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
