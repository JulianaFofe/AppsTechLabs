import { FaMicrochip } from "react-icons/fa6";
import { images } from "../../Types/images"
import { FaBriefcase, FaGlobe, FaCheckCircle, FaCogs } from "react-icons/fa";
import ShowDetails from "../../Components/ShowDetails"

function Approach() {
  return (
    <section className="px-6 md:px-16 py-20 space-y-20">
      {/* Hero / Intro */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary 2xl:text-6xl">
          Our Approach
        </h1>
        <p className="mt-2 text-lg text-primary/80">
          business knowledge · product knowledge · global knowledge
        </p>
        <div className="w-full flex justify-center items-center gap-10 pt-10 max-md:flex-col">
          <div>
            <p className="text-gray-700 leading-relaxed">
              Our approach brings more than people to our teams, we bring experience.
              Not only do AppsTech experts have in-depth knowledge of the Oracle
              technologies with which they work, but they also have in-depth knowledge
              of the business processes to which these technologies are applied in a
              local or global environment.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Our unique methodologies, like our 
               <span className="text-secondary hover:border-b-2"> FastApps for Oracle E-Business Suite, </span>
              are tailored to meet our customers’ needs.
            </p>
          </div>
        </div>
      </div>

      {/* Business Knowledge */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h3 className="text-3xl font-semibold text-primary flex items-center gap-3">
            <FaBriefcase className="text-primary" /> Business Knowledge
          </h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Whether providing high-level, strategic direction, or performing hands-on implementation, 
            our experts bring their experience to each task, ensuring that our clients consistently 
            receive the value, strategy and successful solutions they need to maintain their competitive edge. 
            Our experts have either professional designations (CPA, Chartered Accountant, APICS) and/or an MBA.
          
          </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              AppsTech brings a unique understanding of your business needs and we have knowledge of your industry. 
              In addition to the many technical certifications our team members have, AppsTech’s experts also have industry 
              and vertical certifications. 
            </p>
        </div>
        <div className="flex-1">
          <img src={images.business} alt="Business Knowledge" className="w-full rounded-2xl shadow-lg object-cover" />
        </div>
      </div>

      {/* Product Knowledge */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="flex-1">
          <h3 className="text-3xl font-semibold text-primary flex items-center gap-3">
            <FaMicrochip className="text-primary" /> Product Knowledge
          </h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
           The average AppsTechie holds 25 Oracle certifications. Collectively, AppsTech has over 1000 
           Oracle certifications. We have the very first Oracle Certified Professional for Oracle applications 
           and some of the very first certified on Oracle Database 12c. Oracle has recognized AppsTech’s depth of knowledge 
           in its technologies by awarding us with multiple “Oracle Specialized” designations in addition to our Platinum level partnership.
          </p>
        </div>
        <div className="flex-1 max-md:pl-5">
          <img src={images.oracle_certified} alt="Product Knowledge" className="w-[90%] md:w-[70%] rounded-2xl shadow-lg object-cover" />
        </div>
      </div>

      {/* Global Knowledge */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h3 className="text-3xl font-semibold text-primary flex items-center gap-3">
            <FaGlobe className="text-primary" /> Global Knowledge
          </h3>
          <p className="mt-4 text-gray-700 leading-relaxed">
            AppsTech experts are also uniquely qualified to provide guidance on the critical 
            globalization issues that businesses and organizations face. Our experts have all lived, 
            or worked, overseas and as a result, bring a global dimension and perspective to their work without which no true business can compete.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Regardless of which one of our worldwide offices in which they work, our team members’ 
            expertise enables them to communicate efficiently and seamlessly across geographical, 
            linguistic and professional boundaries making ours is a true global team.
            </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We know our products. But most of all, we know our clients and their businesses. 
            These are just a few of the qualities that make the AppsTech approach ideal for 
            any company that demands value and measurable results.
            </p>
        </div>
        <div className="flex-1">
          <img src={images.global} alt="Global Knowledge" className="w-full rounded-2xl shadow-lg object-cover" />
        </div>
      </div>

      {/* Methodologies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10">
          <div className="group">
      <ShowDetails
        icon={<FaCheckCircle className="text-5xl text-primary" />}
        title="Proven. Effective."
        details="AppsTech’s unique methodologies ensure that our client projects are executed efficiently and thoroughly. Our methodologies help our clients gain the most mileage of their time and resources. They also give them the assurance that their projects are being performed with the utmost consistency and accuracy throughout the solutions implementation and post implementations process"
      />
  </div>
  <div className="group">
      <ShowDetails
        icon={<FaCogs className="text-5xl text-primary" />}
        title="Scalable. Flexible."
        details="At AppsTech, we recognize that one size doesn’t fit all. That is why we have developed several unique methodologies that address the different requirements of each client.  So, no matter what their needs are, they can be sure that we have a solution that fits."
      />
      </div>
    </div>
    </section>
  );
}

export default Approach;
