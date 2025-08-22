
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
        <div className="flex flex-col items-center justify-center py-40">
          <h1 className="text-primary text-4xl font-bold text-center">
            Enterprise Mobility is Transformational.
          </h1>
          <p className="text-center text-accent text-xl py-10 pb">
            It is not just about a particular mobile device, screen size,
            <br /> operating system or online application store.  It is a new
            way of conducting business <br /> that demands your
            attention.  Companies will succeed or fail based in large part on
            their ability to <br /> respond to this reality.
          </p>
          <img src={images.mobiles} alt="" />
        </div>

        {/*Business Mobile*/}
        <h1 className="text-primary text-4xl font-bold text-center">
          Make Your Business Mobile with Us
        </h1>
        <div className="flex items-center justify-center px-6 py-20">
          <Section
            heading="Quickly access your dashboards from anywhere"
            image={images.mobileDashboard}
            className="flex-col items-center max-sm:flex-col flex-row-reverse"
          >
            <div className="flex flex-col max-md:text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                pretium scelerisque rhoncus.
              </p>
            </div>
          </Section>
        </div>

        <div className="flex items-center justify-center px-6 py-20">
          <Section
            heading="Improve Your Business  with  Easy Apps"
            image={images.easyApp}
            className="flex-col items-center max-sm:flex-col flex-row"
          >
            <div className="flex flex-col max-md:text-center">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                pretium scelerisque rhoncus.
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

export default MobileSolution;
