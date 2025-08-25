import { Link } from "react-router-dom"
import AboutCards from "../../Components/aboutCards"
import { TiSocialLinkedinCircular } from "react-icons/ti";
import HistoryCards from "../../Components/historyCards"
import { aboutCardData } from "../../data/aboutCardData"
import { historyCardData } from "../../data/history"
import { FaXTwitter } from "react-icons/fa6";
import { images } from "../../Types/images"
import Section from "../../Components/Section";
import ContactCards from "../../Components/contactCards";

function About() {
  return (
    <div>
      <div className="pt-[80px]">
        <h1 className="text-center text-primary text-2xl font-bold">Our Story</h1>
        <div className="py-[3rem]">
          <AboutCards items={aboutCardData}/>
        </div>
        <div className="  py-[1rem] md:py-[3rem]">
          <h1 className="text-center text-primary py-3 text-lg md:text-2xl font-bold">Evolution of The Company</h1>
          <div className=" py-[1rem] md:w-full md:py-[3rem]">
            <HistoryCards item={historyCardData}/>
          </div>
        </div>

        <div className="flex flex-col py-[1rem] gap-y-[1rem] items-center md:flex-row md:justify-center md:gap-x-[10rem] items-center md:py-[3rem]">
          <div className="w-[70%] md:w-[25%]">
            <img src={images.founder} alt="CEO" className="w-full transition-transform duration-300 hover:scale-105" />
          </div>
          <div className="flex flex-col items-center gap-y-2 md:items-start">
            <h1 className="text-primary text-2xl md:text-4xl">Meet  our founder </h1>
            <h2 className="text-xl md:text-3xl font-medium">Rebecca Enonchong</h2>
            <p className="text-accent text-center text-md md:text-xl">“Technology is not just about  code
                ,its about solving real-world problems”
            </p>
            <div className="flex gap-4 items-center">
              <Link to="/" className="hover:text-primary">
                <TiSocialLinkedinCircular size={40}/>
              </Link>
              <Link to="/" className="hover:text-primary">
                <FaXTwitter size={30}/>
              </Link>
            </div>
          </div>
        </div>


        <div className="flex flex-col items-center  py-[1rem] md:py-[3rem] px-6">
          <h1 className="text-2xl font-bold text-primary  py-[1rem] md:py-[3rem]">Our Offers</h1>
          <Section heading="Sharing knowledge, Sharing Success" image={images.puzzle} className="flex-col-reverse md:flex-row-reverse ">
            <p className="text-md  md:text-xl text-center text-accent">
              At AppsTech, our outreach program promotes entrepreneurship and technology
              innovation in our communities. Through partnerships with organizations like
              Activspaces, we bring this mission to life.
            </p>
          </Section>
        </div>

        <div className="px-6 py-[1rem] md:py-[3rem]">
          <Section heading="What We Do" image={images.whatWeDo} className=" flex-col-reverse items-center  md:flex-row">
            <div>
              <p className="text-md  md:text-xl text-center text-accent">
                We provide  enterprise software solutions to help our clients maximise the value of their IT investment
              </p>
              <p className="text-md  md:text-xl text-center text-accent">
                Oracle 	software implementation
                Cloud-based 	services
                Mobile 	application development
                Support and 	Maintenance
              </p>
            </div>

          </Section>
        </div>

        <div className="flex flex-col items-center  py-[1rem] md:py-[3rem] px-6">
          <h1 className="text-2xl font-bold text-primary  py-[1rem] md:py-[3rem]">Why Choose Appstecch</h1>
          <Section heading="" image={images.whatweDo2} className="flex-col-reverse md:flex-row-reverse ">
            <li className="text-md  md:text-xl text-accent">Hundreds of 	success projects</li>
            <li className="text-md  md:text-xl text-accent">Seasoned 	professionals</li>
            <li className="text-md  md:text-xl text-accent">Deep expertise</li>
            <li className="text-md  md:text-xl text-accent">Commitment to 	client success</li>
          </Section>
        </div>

        <div className="flex flex-col items-center py-[3rem]">
          <h1 className="text-primary text-xl md:text-3xl font-medium">
            Awards & Recognition
          </h1>
          <p className="md:text-xl text-md text-accent text-center">Appstech has been recognised forexcellence in delivering innovative enterprise solutions</p>
        </div>

        <div>
          <h1 className="py-[3rem] text-primary text-center text-xl md:text-4xl font-md w-full">Global presence</h1>
          <div className="h-[40vh] bg-[url(C:\Users\Bryan\Desktop\Appstech\AppsTechLabs\vite-project\src\assets\images\global-globalization-world-map-environmental-concservation-concept.jpg)] bg-cover bg-center">
          </div>
          <div className=" flex flex-col items-center gap-y-2 md:flex-row md:justify-center md:gap-x-20 p-[3rem]">
            <ContactCards location="UNITED STATES" number="+1 123 456 7890" email="info@gmail.com"/>
            <ContactCards location="CAMEROON" number="+1 123 456 7890" email="info@gmail.com"/>
            <ContactCards location="UNITED ARAB EMERATES" number="+1 123 456 7890" email="info@gmail.com"/>
          </div>
        </div>


      </div>
    </div>
  )
}

export default About
