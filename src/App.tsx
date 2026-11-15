import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ExploreVariables from "@/components/ExploreVariables";
import UnderstandingPlanet from "@/components/UnderstandingPlanet";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#020711] text-white antialiased selection:bg-cyan-500/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        <ExploreVariables />
        <UnderstandingPlanet />
      </main>
      <Footer />
    </div>
  );
}
