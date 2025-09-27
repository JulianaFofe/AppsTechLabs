import TopSection from "../../Components/topSection";
import { images } from "../../Types/images";

const DBservices = () => {
  return (
    <div className="pt-30">
      <TopSection
        title="Comprehensive Oracle Database Services"
        image={images.oracleDB}
        subtitle="Strategy, architecture, license management, implementation, upgrades and support. We're fluent with standard deployments and have extensive experience with advanced database features."
      />
      <div className="pt-20">
        <h1 className="font-bold text-4xl text-primary text-center">Complete Oracle Database Solutions</h1>
        <p className="text-accent text-center text-xl p-6">
          From solution design and architecting, from training to support, we
          have your entire Oracle database needs covered.
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default DBservices;
