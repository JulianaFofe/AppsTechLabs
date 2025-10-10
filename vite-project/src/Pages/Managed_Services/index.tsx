import { images } from "../../Types/images";
import { FaDatabase, FaLinux, FaUserShield, FaClock } from "react-icons/fa6";
import { MdBusinessCenter, MdInsights } from "react-icons/md";

function ManagedServices() {
  return (
    <div className="py-20 px-6 md:px-20 space-y-32 bg-gray-50 overflow-hidden">

      {/* Hero Section */}
      <section className="text-center space-y-6 animate-fadeIn">
        <h1 className="text-4xl md:text-5xl text-primary font-bold leading-snug">
          Oracle Support and Application Management
        </h1>
        <p className="text-lg text-accent max-w-3xl mx-auto">
          AppsTech Global Support (AGS) is our full-featured support solution for Oracle Database,
          Oracle E-Business Suite, and Oracle/Red Hat Enterprise Linux support.
        </p>
      </section>

      {/* Reliable Solution Section */}
      <section className="flex flex-col md:flex-row items-center gap-10 animate-fadeInUp">
        <img 
          src={images.AGS_logo} 
          alt="AGS Logo" 
          className="w-56 md:w-64 rounded-xl shadow-xl mx-auto md:mx-0 transition-transform duration-700 hover:scale-105"
        />
        <div className="md:w-2/3 space-y-6 text-accent">
          <h2 className="text-2xl md:text-3xl text-primary font-semibold">
            The Most Reliable Solution for Your Oracle Support Needs
          </h2>
          <p>
            24 hours a day, 7 days a week we provide guaranteed response times at a fixed monthly price.
            Run your business and leave the management of your applications to us.
          </p>
          <p>
            The AGS team is One. Global. Team. By utilizing resources in each of our worldwide offices,
            our AGS customers benefit from the very best Oracle experts in the world when you need them.
          </p>
          <p>
            For the last 14 years, AppsTech has supported thousands of end users located 
            in more than 50 countries around the world. With AGS, our customers have 
            real-time updates on the status of their issues — by email, phone, web, or 
            even on social platforms.
          </p>
        </div>
      </section>

      {/* Reduce Cost & AGS Section */}
      <section className="flex flex-col md:flex-row items-center gap-10 animate-fadeInUp delay-100">
        {/* Text Card */}
        <div className="md:w-3/5 bg-white p-10 text-accent rounded-2xl shadow-lg space-y-6 border-l-4 border-primary hover:shadow-2xl transition-all duration-500">
          <h2 className="text-2xl md:text-3xl text-primary font-bold">
            Reduce Your Oracle Support Costs
          </h2>
          <p>
            Oracle experts can be expensive. If you need temporary expertise for your 
            Oracle databases or your Oracle E-Business Suite implementation, or if your 
            operations don’t require a full-time team, our AGS solution provides reliable, 
            24×7 Oracle database administration services and Oracle E-Business Suite support.
          </p>
          <p>
            Without the expense or headache of hiring and retaining your own staff, 
            AppsTech Global Support (AGS) is fully staffed with highly skilled DBA teams 
            ready to assist you anytime, any day, weekend or holiday—often at a lower cost 
            than a full-time employee.
          </p>
        </div>

        {/* Icon Card */}
        <div className="md:w-2/5 flex justify-center">
          <div className="flex flex-col items-center bg-primary/10 p-12 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="flex items-center justify-center gap-4 mb-3">
              <FaUserShield className="w-16 h-16 text-primary animate-pulse-slow" />
              <FaClock className="w-12 h-12 text-primary animate-pulse-slow delay-200" />
            </div>
            <p className="text-center font-semibold text-primary text-lg">
              Trusted Experts · 24×7
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Support Section */}
      <section className="bg-red-50 rounded-2xl p-10 text-center space-y-4 shadow-md animate-fadeInUp delay-200">
        <h2 className="text-2xl md:text-3xl text-primary font-semibold">
          Do You Have an Oracle Support Emergency?
        </h2>
        <p>
          We offer Oracle emergency support worldwide and can assist you within minutes 
          with your mission-critical Oracle database or Oracle E-Business Suite environment.
          All support is provided by Oracle Certified DBAs and Apps DBAs with extensive 
          real-world and emergency support experience.
        </p>
        <p>
          To access our emergency services, we require remote VPN access and an advance deposit.
        </p>
      </section>

      {/* Supported Products Section */}
      <section className="space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center animate-fadeInDown">
          SUPPORTED ORACLE PRODUCTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <FaDatabase className="w-8 h-8 text-primary animate-bounce-slow" />, text: "Oracle Database (9i, 10g, 11g, 12c)" },
            { icon: <MdBusinessCenter className="w-8 h-8 text-primary animate-bounce-slow delay-100" />, text: "Oracle E-Business Suite (11i, R12)" },
            { icon: <FaLinux className="w-8 h-8 text-primary animate-bounce-slow delay-200" />, text: "Oracle Linux (all versions)" },
            { icon: <MdInsights className="w-8 h-8 text-primary animate-bounce-slow delay-300" />, text: "Oracle Business Intelligence (all versions)" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-6 bg-white shadow-md rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fadeInUp"
            >
              {item.icon}
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default ManagedServices;
