import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import { images } from "../../Types/images";
import Subtitle from "../../Components/Subtitle";
import Button from "../../Components/Button/Button";
import Section from "../../Components/Section";

function CloudSolution() {
  return (
    <div className="">
      {/*Carousel Header*/}
      <div>
        <div>
          <img className="w-full h-200" src={images.cloud_solution} alt="" />
        </div>
        <HeaderTitle
          firstTitle="Cloud Solutions"
          secondTitle2="Developers from Cameroon and Africa"
          subtitle="explore a wide range of  Oracle cloud services with just one click"
          logo={images.logo1}
        />
      </div>

      {/*Cloud Platform*/}
      <div className="flex items-center justify-center px-10 py-20">
        <Section heading="Cloud Platform" image={images.cloudPlatform} className="flex-col  md:flex-row">
          <div className="flex flex-col max-md:text-center">
            <p>
              Explore a wide range of Oracle cloud services with just one click
            </p>
            <Button title="Learn More" />
          </div>
        </Section>
      </div>

      {/*Cloud Infrastructure*/}
      <div className="flex items-center justify-center px-6 py-20">
        <Section heading="Cloud Infrastructure" image={images.cloud} className="flex-col items-center max-sm:flex-col flex-row-reverse">
          <div className="flex flex-col max-md:text-center">
            <p>
              Oracle’s Cloud Platform provides a shared and elastically scalabel
              platform for consolidating existing applications and developing
              and deploying new applications.
            </p>
            <Button title="Learn More" />
          </div>
        </Section>
      </div>

      {/*Cloud Applications*/}
      <div className="flex flex-col items-center justify-center pt-10">
        <Subtitle
          className="text-primary text-4xl font-bold text-center"
          title="Cloud Applications"
          description="horizontal and industry-specific cloud applications."
        />
        <img className="pt-20 w-full" src={images.cloudApp} alt="" />
      </div>
    </div>
  );
}

export default CloudSolution;
