import "./home.css";
import { Main } from "../../component/main/Main";
import { Footer } from "../../component/footer/Footer";
import { CoffeeForm } from "../../component/offer/Offer";
import { Company } from "../../component/company/Company";
import { Adventage } from "../../component/advantage/Advantage";
import { ServicesSection } from "../../component/services/Services";

export const HomePage = () => {
  return (
    <div className="main">
      <Main />
      <Company />
      <Adventage />
      <ServicesSection />
      <CoffeeForm />
      <Footer />
    </div>
  );
};
