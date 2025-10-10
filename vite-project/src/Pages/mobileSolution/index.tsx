import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import Section from "../../Components/Section";
import { images } from "../../Types/images";

function MobileSolution() {
  return (
    <div>
      <div>
        {/*Carousel Header*/}
        <div>
          <div>
            <img
              className="w-full h-screen"
              src={images.mobileSolution}
              alt=""
            />
          </div>
          <HeaderTitle
            firstTitle="Mobile Solutions"
            secondTitle2="It is not just about a particular mobile device, screen size"
            subtitle="explore a wide range of  Oracle cloud services with just one click"
            logo={images.logo1}
          />
        </div>

        {/*Enterprise Mobility*/}
        <div className="flex flex-col items-center justify-center py-40 max-lg:py-20 max-lg:px-5 animate-fadeInUp">
          <h1 className="text-primary text-4xl font-bold text-center animate-fadeIn">
            Enterprise Mobility is Transformational.
          </h1>
          <p className="text-center text-accent text-xl py-10 animate-fadeInUp max-md:text-base">
            It is not just about a particular mobile device, screen size,
            <br /> operating system or online application store.  It is a new
            way of conducting business <br /> that demands your
            attention.  Companies will succeed or fail based in large part on
            their ability to <br /> respond to this reality.
          </p>
          <img
            src={images.mobiles}
            alt="Enterprise mobility"
            className="rounded-lg mt-6 w-full max-w-[600px] object-contain transition-transform duration-500 ease-in-out hover:scale-105 animate-fadeInUp"
          />
        </div>

        {/*Business Mobile*/}
        <h1 className="text-primary text-4xl font-bold text-center">
          Make Your Business Mobile with Us
        </h1>
        <div className=" items-center justify-center px-6 py-20 max-lg:py-0">
          <Section
            heading="Quickly access your dashboards from anywhere"
            image={images.mobileDashboard}
            className="flex-col items-center max-sm:flex-col"
          >
            <div className="flex flex-col text-accent text-xl max-md:text-center">
              <p>
                Quickly and securely access your dashboards from anywhere, on
                any device, to monitor real-time data, and make informed
                decisions wherever you are. Stay connected to your business
                insights at all times.
              </p>
            </div>
          </Section>
        </div>

        <div className="flex items-center justify-center px-6 py-20 max-lg:py-0">
          <Section
            heading="Improve Your Business  with  Easy Apps"
            image={images.easyApp}
            className="flex-col items-center max-sm:flex-col flex-row"
          >
            <div className="flex flex-col text-accent text-xl max-md:text-center">
              <p>
                Boost your business efficiency and growth with Easy Apps —
                simple, intuitive solutions designed to streamline your
                operations and empower your team.
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

export default MobileSolution;
