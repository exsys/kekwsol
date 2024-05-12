import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import HomeSection from "@/components/sections/home";
import InfoSection from "@/components/sections/info";
import KekwGenerator from "@/components/sections/kekw-generator";
import MemesSection from "@/components/sections/memes";
import Tokenomics from "@/components/sections/tokenomics";

export default function Home() {
  return (
    <div className="h-full">
      <Header />
      <HomeSection />
      <InfoSection />
      <Tokenomics />
      <KekwGenerator />
      <Footer />
    </div>
  );
}
