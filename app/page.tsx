import Navbar from "@/components/sections/ui/common/navbar";
import Footer from "@/components/sections/ui/common/footer";

import HomeSection from "@/components/sections/home";
import About from "@/components/sections/about";
import Work from "@/components/sections/work";
import Contact from "@/components/sections/contact";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="grow">
        <section id="home">
          <HomeSection />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="work">
          <Work />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
