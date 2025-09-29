import { images } from '../../Types/images';

const AppstechLabs = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-8 py-16">
      <h1 className="text-4xl font-bold text-center text-primary mb-10 mt-10">
        AppstTech Labs
      </h1>

      <img
        src={images.appstechlabs}
        alt="Appstech Lab"
        className="w-full rounded-xl shadow-md mb-14 object-cover"
      />

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">We Nurture Innovation</h2>
        <p className="text-gray-600 mb-4">
          AppstTech Labs is a solution center created to showcase existing technologies for our
          customers as well as develop cutting-edge ones. Customers can experience product
          demonstrations, attend workshops, and preview prototypes of their systems.
        </p>
        <p className="text-gray-600">
          Our collaborative environment provides a valuable space for generating ideas and
          accelerating innovation—bringing solutions to market faster using Oracle technologies.
          We also explore future strategies and emerging trends to build next-generation
          applications.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Customer Briefing and Demonstration
        </h2>
        <p className="text-gray-600">
          Appstech Labs offers a high-tech environment for showcasing Oracle technologies and
          demonstrating custom solutions tailored to client needs.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Proof-of-Concept</h2>
        <p className="text-gray-600">
          With advanced systems and skilled experts, Appstech Labs supports customers in developing
          and testing prototype solutions in near real-world environments—validating both
          architecture and scalability.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Workshops</h2>
        <p className="text-gray-600">
          Our workshops deliver hands-on sessions led by Appstech professionals, offering deep
          technical insights and real-world application of modern technologies.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Architecture Design & Capacity Planning
        </h2>
        <p className="text-gray-600">
          We help customers craft optimal architectures for their enterprise applications. Services
          include solution presentation, configuration, sizing, and demonstration environment
          development.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Performance and Scalability Testing
        </h2>
        <p className="text-gray-600">
          We simulate production systems to analyze performance, fine-tune scalability, and ensure
          solutions meet evolving customer expectations both now and in the future.
        </p>
      </section>
    </div>
  );
};

export default AppstechLabs;
