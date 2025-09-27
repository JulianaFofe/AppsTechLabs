import { BsFillDatabaseFill } from "react-icons/bs";
import DBsolution from "../../Components/DBsolution";
import TopSection from "../../Components/topSection";
import { images } from "../../Types/images";
import { IoSettingsOutline } from "react-icons/io5";
import { GiArmorDowngrade } from "react-icons/gi";
import { MdOutlineElectricBolt } from "react-icons/md";

const DBservices = () => {
  return (
    <div className="pt-30 max-md:pt-10">
      <TopSection
        title="Comprehensive Oracle Database Services"
        image={images.oracleDB}
        subtitle="Strategy, architecture, license management, implementation, upgrades and support. We're fluent with standard deployments and have extensive experience with advanced database features."
      />
      <div className="pt-20">
        <h1 className="font-bold text-4xl text-primary text-center">
          Complete Oracle Database Solutions
        </h1>
        <p className="text-accent text-center text-xl p-6">
          From solution design and architecting, from training to support, we
          have your entire Oracle database needs covered.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-5 px-6 py-10 max-md:grid-cols-1">
        <DBsolution
          icon={<BsFillDatabaseFill size={22} color="red" />}
          title="Database Strategy & Architecture"
          subtitle="Comprehensive planning and design of Oracle database solutions tailored to your business needs."
          text1="Solution Design"
          text2="Architecture Planning"
          text3="Capacity Planning"
          text4="Migration Strategy"
        />
        <DBsolution
          icon={<IoSettingsOutline size={22} color="red" />}
          title="Implementation & Configuration"
          subtitle="Professional installation and setup of Oracle database environments with best practices."
          text1="Standard Deployments"
          text2="Custom Configurations"
          text3="High-Availability Setup"
          text4="Performance Optimization"
        />
        <DBsolution
          icon={<GiArmorDowngrade size={22} color="red" />}
          title="License Management & Compliance"
          subtitle="Expert guidance on Oracle licensing to ensure compliance and cost optimization."
          text1="License Audits"
          text2="Compliance Management"
          text3="Cost Optimization"
          text4="Contract Negotiation"
        />
        <DBsolution
          icon={<MdOutlineElectricBolt size={22} color="red" />}
          title="Performance Tuning & Optimization"
          subtitle="Maximize your database performance with expert tuning and optimization services."
          text1="Query Optimization"
          text2="Memory Tuning"
          text3="Index Management"
          text4="Storage Optimization"
        />
      </div>
      <div className="pt-10">
        <h1 className="font-bold text-4xl text-primary text-center">
          Seasoned Oracle Database Experts
        </h1>
        <p className="text-accent text-center text-xl p-6">
          Each one of AppsTech's expert database administrators has several
          Oracle Certified Professional (OCP) certifications and at least 25
          Oracle Specialists certifications.
        </p>
      </div>
      <div className="flex px-10 items-center py-10 gap-10 max-md:flex-col max-md:text-center max-md:px-2">
        <div className="flex-1">
          <div className="pb-10">
            <h1 className="font-bold text-2xl pb-2">
              Oracle Certified Professionals
            </h1>
            <p className="text-accent text-2xl ">
              Our team holds multiple Oracle Certified Professional (OCP)
              certifications, ensuring deep expertise across all Oracle database
              technologies and versions.
            </p>
          </div>
          <div className="pb-10">
            <h1 className="font-bold text-2xl pb-2">25+ Specialist Certifications</h1>
            <p className="text-accent text-2xl">
              Our team holds multiple Oracle Certified Professional (OCP)
              certifications, ensuring deep expertise across all Oracle database
              technologies and versions.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-2xl pb-2">
              Complex Environment Experience
            </h1>
            <p className="text-accent text-2xl">
              Our team holds multiple Oracle Certified Professional (OCP)
              certifications, ensuring deep expertise across all Oracle database
              technologies and versions.
            </p>
          </div>
        </div>
        <div className="flex flex-col bg-gray-100 rounded-lg text-center justify-center gap-5 px-30 py-10 max-md:p-10 max-md:mt-20">
          <p className="font-bold text-2xl">Certifications</p>
          <img src={images.certificate1} alt="" className="w-70" />
          <img src={images.certificate2} alt="" className="w-70" />
          <img src={images.certificate3} alt="" className="w-70" />
        </div>
      </div>
      <div className="py-20">
        <h1 className="font-bold text-4xl text-primary text-center">
          High Availability and Business Continuity
        </h1>
        <p className="text-accent text-center text-xl p-6">
          In addition to standard database services, AppsTech provides Oracle
          Database high availability and business continuity solutions. We
          design and implement your backup strategy, including possible
          integration with storage replication.
        </p>
      </div>
    </div>
  );
};

export default DBservices;
