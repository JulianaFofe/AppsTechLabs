import Carousel from "../../Components/carousel";
import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import Subtitle from "../../Components/Subtitle";
import Companies from "../../Components/TrustedCompany";
import { images } from "../../Types/images";
import { PiBuildingOfficeBold } from "react-icons/pi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { GrNotes } from "react-icons/gr";
import { LuBrainCircuit } from "react-icons/lu";
import { LuBrain } from "react-icons/lu";
import { PiHeadCircuit } from "react-icons/pi";
import { FaTrophy } from "react-icons/fa";
import Button from "../../Components/Button/Button";
import Section from "../../Components/Section";

export const CarouselImages = [
  images.CorporateMeeting,
  images.people_office,
  images.workers,
];

const Home: React.FC = () => {
  return (
    <div>
      {/*Carousel Header*/}
      <div className="relative">
        <Carousel CarouselImages={CarouselImages} />
        <HeaderTitle
          firstTitle="Team up With The Best"
          secondTitle2="Developers from Cameroon and Africa"
          subtitle="promoting tech in all domains"
          logo={images.logo1}
        />
      </div>

      {/*Database and cloud environment*/}
      <div className="flex items-center justify-center px-6 py-20">
        <Section
          heading="Scale databases and cloud Environments with ease"
          image={images.members}
          className="flex-col items-center md:flex-row"
        >
          <div className="flex flex-col max-md:items-center">
            <p>You’ve got the idea, we make it a reality at</p>
            <span className="text-secondary ">Appstech</span>
            <Button title="Learn More" />
          </div>
        </Section>
      </div>

      {/*Trusted companies*/}
      <div className="relative flex flex-col items-center text-center justify-center pb-40 bg-linear-to-t from-white-200 to-sky-200 max-md:bg-white">
        <div>
          <Subtitle
            className="text-primary text-5xl font-medium max-lg:text-3xl pt-10"
            title="Trusted by several Companies out there"
            description="Our strength is built on the trust of our most loyal clients"
          />
        </div>
        <div className="flex max-sm:flex-col gap-20 pt-25 max-md: max-sm:gap-5">
          <Companies
            amount="20k+"
            icons={<PiBuildingOfficeBold className="max-sm:w-10" size={50} />}
            text="monthly companies"
          />
          <Companies
            amount="7k+"
            icons={<HiBuildingOffice2 className="max-sm:w-10" size={50} />}
            text="monthly companies"
          />
          <Companies
            amount="10k+"
            icons={<GrNotes className="max-sm:w-10" size={50} />}
            text="monthly companies"
          />
        </div>
        <div className="absolute left-[29px] bottom-3 size-48 rounded-full bg-radial-[at_50%_75%] via-sky-100 from-white-100 to-sky-200 to-90% max-lg:bg-white max-lg:hidden"></div>
        <div className="absolute right-[30px] top-23  size-58 rounded-full bg-radial-[at_50%_75%] via-sky-200 from-white-100 to-sky-200 to-90% max-lg:hidden"></div>
      </div>

      {/*Powered systems*/}
      <div className="flex items-center justify-center lg:pb-40 lg:gap-50 max-sm:gap-0 md:pt-20 md:gap-0 lg:gap-5 max-lg:flex-col">
        <div className="max-sm:text-center max-sm:pt-20">
          <h2 className="text-5xl font-bold text-secondary pb-5 max-lg:text-4xl max-md:text-3xl">
            Get inovative with AI
          </h2>
          <h1 className="text-5xl font-bold text-primary max-lg:text-4xl max-md:text-2xl">
            Powered Systems
          </h1>
          <div className="p-9">
            <div className="flex gap-2 pb-3 items-center">
              <LuBrain className="text-primary" size={40} />
              <p className="text-xl text-accent">Machine Learning</p>
            </div>
            <div className="flex gap-2 pb-3 items-center">
              <LuBrainCircuit className="text-primary" size={40} />
              <p className="text-xl text-accent">Deep learning</p>
            </div>
            <div className="flex gap-2 pb-3 items-center">
              <PiHeadCircuit className="text-primary" size={40} />
              <p className="text-xl text-accent">Neural Networks</p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="w-100 max-lg:hidden"
            src={images.visual_lense}
            alt=""
          />
        </div>
      </div>

      {/*Academic Internship*/}
        <div className="flex items-center justify-center px-6 py-20">
        <Section
          heading="Offer Professional and Academic internship"
          image={images.internship}
          className="flex flex-col md:flex-row"
        >
          <div className="flex flex-col max-md:items-center">
            <p>We build and train for the next Generation</p>
            <Button title="Apply now" />
          </div>
        </Section>
      </div>

      {/*Platinium partner*/}
      <div className="relative flex flex-col items-center pb-40 bg-linear-to-t from-sky-200 to-white-200">
        <div className="flex w-full justify-between  px-50 items-center max-lg:text-center max-sm:flex-col max-lg:flex-col  ">
          <div className="max-sm:text-center pb-20">
            <h1 className="font-bold text-5xl text-primary pb-3 ">Oracle</h1>
            <h1 className="font-bold text-5xl text-secondary pb-5 max-lg:text-4xl">
              {" "}
              Platinum Partner{" "}
            </h1>
            <p className="text-accent text-xl w-80">
              work efficiency and reliable results are what we do best{" "}
            </p>
          </div>
          <div>
            <img className="max-lg:hidden" src={images.trophy} alt="" />
          </div>
        </div>

        <p className="text-2xl p-6 max-lg:font-bold">Some clients</p>
        <div className="flex flex-row items-center gap-10 max-sm:gap-15 pt-6 lg:gap-5 max-lg:grid max-lg:grid-cols-2">
          <img src={images.MTN_Logo} alt="" />
          <img src={images.dell} alt="" />
          <img src={images.mastercard} alt="" />
          <img src={images.Afriland} alt="" />
          <img src={images.oracle} alt="" />
          <img src={images.atlantic} alt="" />
        </div>
        <FaTrophy
          className="absolute left-28 bottom-40 rotate-45 max-lg:hidden"
          color="white"
          size={70}
        />
        <FaTrophy
          className="absolute max-lg:hidden bottom-78"
          color="white"
          size={70}
        />
        <FaTrophy
          className="absolute right-10 top-80 rotate-45 max-lg:hidden"
          color="white"
          size={70}
        />
        <div className="absolute left-[29px] bottom-3 size-48 rounded-full bg-radial-[at_50%_75%] via-sky-200 from-white-100 to-sky-200 to-90% lg:bottom-39 max-md:hidden"></div>
        <div className="absolute right-[30px] top-23  size-58 rounded-full bg-radial-[at_50%_75%] via-sky-100 from-white-100 to-sky-200 to-90% max-lg:hidden lg:top-7"></div>
      </div>

      {/*global support*/}
       <div className="flex items-center justify-center px-6 py-20">
        <Section
          heading="AppsTech global Support"
          image={images.lady_smiling}
          className="flex flex-col md:flex-row"
        >
          <div className="flex flex-col max-md:items-center">
            <p>Provide service support</p>
            <p className="text-blue-300 max-lg:text-2xl max-lg:pt-5  max-lg:text-center">
            24/7/365
          </p>
          <Button title="Contact Us" />
           
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Home;
