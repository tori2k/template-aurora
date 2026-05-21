import Nav from "@/components/aurora/Nav";
import Hero from "@/components/aurora/Hero";
import Bento from "@/components/aurora/Bento";
import Showcase from "@/components/aurora/Showcase";
import CTA from "@/components/aurora/CTA";
import Footer from "@/components/aurora/Footer";

export default function Page() {
  return (
    <>
      <div className="noise" />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Bento />
        <Showcase />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
