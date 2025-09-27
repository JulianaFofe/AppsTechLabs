import { LuShoppingCart } from "react-icons/lu";
import ResellerCard from "../../Components/resellerCard";
import TopSection from "../../Components/topSection";
import { images } from "../../Types/images";
import { AiOutlineGlobal } from "react-icons/ai";
import { MdOutlineElectricBolt } from "react-icons/md";
import { FaRegClock } from "react-icons/fa6";
import Questions from "../../Components/questions";

function Lisence() {
  return (
    <div className="pt-30 max-md:pt-10">
      <TopSection
        title="Oracle License Management"
        image={images.license}
        subtitle="Oracle licensing is complex, elaborate and has a lot of details to it. With Oracle's never ending acquisition of technology vendors, it is often challenging for an Oracle customer to keep up with the latest licensing policies and procedures.
Oracle licensing policy states that any software installed and/or used needs to be properly licensed."
      />
      <h1 className="font-bold text-4xl text-primary text-center pt-20">
        Critical Questions Oracle Customers Must Address:
      </h1>
      <div className="grid grid-cols-2 gap-5 px-6 py-20 max-md:grid-cols-1">
        <Questions text="What Oracle licenses does your company currently own?"/>
        <Questions text="Do you have adequate Oracle licenses for all your IT environments?"/>
        <Questions text="Do you know if your Oracle licenses are being managed effectively?"/>
        <Questions text="Do you understand the serious implications of a contractually abiding Oracle license audit?"/>
        <Questions text="Does your team fully understand the Oracle licensing complexities, contractual rights and restrictions?"/>
        <Questions text="Are of aware of any exposure to financial and operational risks, by means of license over-usage or under-usage?"/>
      </div>
      <TopSection
        title="Oracle Reseller"
        subtitle="Don't yet own Oracle licenses or need to get in compliance? AppsTech has a Full Use Distribution Agreement with Oracle and access to the Online Partner Ordering Portal allowing AppsTech to place orders electronically for fast paperless delivery to customers around the globe."
      />
      <h1 className="font-bold text-4xl text-primary text-center pt-20">
        Why Choose Our Oracle Reseller Services
      </h1>
      <div className="flex gap-5 px-6 py-20 max-md:flex-col">
        <ResellerCard icon={<LuShoppingCart size={22} color="red"/>} title="Full Use Distribution Agreement" subtitle="Access to complete Oracle product portfolio with authorized reseller status"/>
        <ResellerCard icon={<AiOutlineGlobal size={22} color="red"/>} title="Global Reach" subtitle="Paperless delivery to customers around the globe for fast, efficient service"/>
        <ResellerCard icon={<MdOutlineElectricBolt size={22} color="red"/>} title="Electronic Ordering" subtitle="Streamlined online ordering portal for quick license procurement"/>
        <ResellerCard icon={<FaRegClock size={22} color="red"/>} title="Fast Delivery" subtitle="Rapid deployment and license activation to minimize downtime"/>
      </div>
    </div>
  );
}

export default Lisence;
