import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Scholarship from "@/components/Scholarship";
import CreditTransfer from "@/components/CreditTransfer";
import GameAndTestimonial from "@/components/GameAndTestimonial";
import BenefitsCurriculum from "@/components/BenefitsCurriculum";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import FacultyBios from "@/components/FacultyBios";

const Home = () => {
  return (
    <div className="font-sans bg-white text-foreground lg:w-[1250px] lg:mx-auto">

      <Header />
      
      <main>
        <HeroSection />

        <Scholarship />

        {/* Red Line Between Section */}
        <div className="flex flex-row justify-center items-center mt-5 mb-5">
          <span className="big-red-line w-full sm:w-2/5 h-[3px] mr-[5em] "></span>
        </div>

        <GameAndTestimonial />
        
        <CreditTransfer />

        <BenefitsCurriculum />
        
        <FacultyBios />
        
        <WhyChooseUs />
          
      </main>

      <Footer />

    </div>
  );
};

export default Home;
