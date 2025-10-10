import { images } from "../../Types/images";

const AppstechLabs = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 py-20">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-14 tracking-tight">
        AppsTech Labs
      </h1>

      {/* Main Image */}
      <div className="overflow-hidden rounded-2xl shadow-lg mb-16">
        <img
          src={images.appstechlabs}
          alt="AppsTech Labs"
          className="w-full h-[450px] object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Intro Section */}
      <section className="mb-16 space-y-4">
        <h2 className="text-3xl font-semibold text-gray-900">
          We Nurture Innovation
        </h2>
        <p className="text-accent text-lg leading-relaxed">
          AppsTech Labs is a dynamic solution center built to showcase existing
          technologies for our customers while developing cutting-edge ones.
          Visitors can explore live product demonstrations, attend interactive
          workshops, and preview prototypes of their systems in development.
        </p>
        <p className="text-accent text-lg leading-relaxed">
          Our collaborative environment provides a valuable space for
          generating ideas and accelerating innovation—bringing solutions to
          market faster using Oracle technologies. We also explore future
          strategies and emerging trends to build next-generation applications.
        </p>
      </section>

      {/* Sections */}
      <div className="space-y-14">
        {/* Customer Briefing */}
        <Section
          title="Customer Briefing and Demonstration"
          text="AppsTech Labs offers a high-tech environment for showcasing Oracle technologies and demonstrating custom solutions tailored to client needs."
        />

        {/* Proof-of-Concept */}
        <Section
          title="Proof-of-Concept"
          text="With advanced systems and skilled experts, AppsTech Labs supports customers in developing and testing prototype solutions in near real-world environments—validating both architecture and scalability."
        />

        {/* Workshops */}
        <Section
          title="Workshops"
          text="Our workshops deliver hands-on sessions led by AppsTech professionals, offering deep technical insights and real-world application of modern technologies."
        />

        {/* Architecture & Planning */}
        <Section
          title="Architecture Design & Capacity Planning"
          text="We help customers craft optimal architectures for their enterprise applications. Services include solution presentation, configuration, sizing, and demonstration environment development."
        />

        {/* Performance Testing */}
        <Section
          title="Performance and Scalability Testing"
          text="We simulate production systems to analyze performance, fine-tune scalability, and ensure solutions meet evolving customer expectations both now and in the future."
        />
      </div>
    </div>
  );
};

// Reusable section component
const Section = ({ title, text }: { title: string; text: string }) => (
  <section className="transition-transform duration-500 hover:translate-x-2">
    <h2 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h2>
    <p className="text-accent text-lg leading-relaxed">{text}</p>
  </section>
);

export default AppstechLabs;
