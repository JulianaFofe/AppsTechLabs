import React from "react";
import { images } from "../../Types/images";
import { FaDatabase, FaLinux, FaUserShield, FaClock } from "react-icons/fa6";
import { MdBusinessCenter, MdInsights } from "react-icons/md";

function ManagedServices() {
  return (
    <div className="py-20 px-6 md:px-20 space-y-32 bg-gray-50">

      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl text-primary font-bold">
          Oracle Support and Application Management
        </h1>
        <p className="text-lg text-primary/90 max-w-3xl mx-auto">
          AppsTech Global Support (AGS) is our full-featured support solution for Oracle Database,
          Oracle E-Business Suite, and Oracle/Red Hat Enterprise Linux support.
        </p>
      </section>

      {/* Reliable Solution Section */}
      <section className="flex flex-col md:flex-row items-center gap-10">
        <img 
          src={images.AGS_logo} 
          alt="AGS Logo" 
          className="w-56 md:w-64 rounded-xl shadow-lg mx-auto md:mx-0"
        />
        <div className="md:w-2/3 space-y-6">
          <h2 className="text-2xl md:text-3xl text-primary font-semibold">
            The most reliable solution for your Oracle support needs
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
            For the last 14 years, AppsTech had supported thousands of end users located 
            in more than 50 countries around the world. With AGS, our customers have 
            real-time updates on the status of their issue. By email, by phone, through 
            the web or even on Facebook or Twitter, AGS is easy to contact.
          </p>
        </div>
      </section>

      {/* Reduce Cost & AGS Section */}
      <section className="flex flex-col md:flex-row items-center gap-10">
        {/* Text Card */}
        <div className="md:w-3/5 bg-white p-10 rounded-2xl shadow-lg space-y-6 border-l-4 border-primary">
          <h2 className="text-2xl md:text-3xl text-primary font-bold">
            Reduce your Oracle Support Costs
          </h2>
          <p>
            Oracle experts can be expensive. If you need temporary expertise for your 
            Oracle databases or your Oracle E-Business Suite implementation, or if your 
            operations don’t require a full time team, our AGS solution provides reliable, 
            24×7 Oracle database administration services and Oracle E-Business Suite support.
          </p>
          <p>
            Without the expense or headache associated with hiring and retaining your own staff, 
            AppsTech Global Support (AGS) is fully staffed with highly skilled DBA teams that are 
            ready to assist you anytime, any day, weekend or holiday, and in most cases, at a lower 
            cost than a full-time employee.
          </p>
        </div>

        {/* Icon Card */}
        <div className="md:w-2/5 flex justify-center">
          <div className="flex flex-col items-center bg-primary/10 p-12 rounded-3xl shadow-lg">
            <div className="flex items-center justify-center gap-4 mb-3">
              <FaUserShield className="w-16 h-16 text-primary" />
              <FaClock className="w-12 h-12 text-primary" />
            </div>
            <p className="text-center font-semibold text-primary text-lg">
              Trusted Experts · 24×7
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Support Section */}
      <section className="bg-red-50 rounded-2xl p-10 text-center space-y-4">
        <h2 className="text-2xl md:text-3xl text-primary font-semibold">
          Do you have an Oracle support emergency?
        </h2>
        <p>
          We offer Oracle emergency support worldwide and can assist you within minutes with your mission-critical 
          Oracle database or Oracle E-Business Suite environment. All Oracle support will be performed by an Oracle Certified DBA, 
          Oracle Certified Apps DBA with extensive real-world and emergency support experience. Each member of our worldwide AGS team is 
          an Oracle Certified Support Specialist with extensive troubleshooting expertise.
        </p>
        <p>
          To access our emergency services, we require remote VPN access and an advance deposit.
        </p>
      </section>

      {/* Supported Products Section */}
      <section className="space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center animate-fade-in-down">
            SUPPORTED ORACLE PRODUCTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-6 bg-white shadow-md rounded-xl transform transition-all duration-500 hover:scale-100 hover:shadow-2xl animate-fade-in-up">
              <FaDatabase className="w-8 h-8 text-primary animate-bounce-slow" />
              <p>Oracle Database (9i, 10g, 11g, 12c)</p>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white shadow-md rounded-xl transform transition-all duration-500 hover:scale-100 hover:shadow-2xl animate-fade-in-up delay-100">
              <MdBusinessCenter className="w-8 h-8 text-primary animate-bounce-slow" />
              <p>Oracle E-Business Suite (11i, R12)</p>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white shadow-md rounded-xl transform transition-all duration-500 hover:scale-100 hover:shadow-2xl animate-fade-in-up delay-200">
              <FaLinux className="w-8 h-8 text-primary animate-bounce-slow" />
              <p>Oracle Linux (all versions)</p>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white shadow-md rounded-xl transform transition-all duration-500 hover:scale-100 hover:shadow-2xl animate-fade-in-up delay-300">
              <MdInsights className="w-8 h-8 text-primary animate-bounce-slow" />
              <p>Oracle Business Intelligence (all versions)</p>
            </div>
          </div>
        </section>

    </div>
  );
}

export default ManagedServices;
