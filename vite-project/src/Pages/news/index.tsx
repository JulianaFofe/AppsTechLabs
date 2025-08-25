import { Link } from "react-router-dom";
import HeaderTitle from "../../Components/HeaderTitle/HeaderTitle";
import { images } from "../../Types/images";
import Section from "../../Components/Section";

function News() {
  return (
    <div>
      <div className="flex flex-row gap-10 items-center justify-between px-6 pt-10 max-lg:flex-col">
        <div className="relative">
          <div>
            <img src={images.CEO} alt="" className="brightness-50" />
          </div>
          <div className="absolute bottom-2 px-6">
            <h1 className="text-2xl font-medium text-white max-lg:text-lg">
              AppsTech CEO Featured in Forbes
            </h1>
            <p className="text-primary font-bold text-md pt-3 max-lg:text-sm">
              AppsTech CEO named to Forbes list of women tech founders Bethesda,
              MD – March 27, 2014
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-primary text-2xl text-center font-semibold max-lg:pb-10">
            Recent Posts
          </h1>
          <div className="flex flex-row gap-5 pb-5 items-center">
            <img className="" src={images.post1} alt="" />
            <Link to={"/"}>
              <p className="">
                Introducing AppsTech Mobile Security for iOS and Android Devices
              </p>
            </Link>
          </div>

          <div className="flex flex-row gap-5 pb-5 items-center">
            <img className="" src={images.post2} alt="" />
            <Link to={"/"}>
              <p className="">
                Oracle introduces Oracle E-Business Suite R12.2
              </p>
            </Link>
          </div>

          <div className="flex flex-row gap-5 pb-5 items-center">
            <img className="" src={images.post3} alt="" />
            <Link to={"/"}>
              <p className="">
                Technology and Innovation in West Africa: AppsTech CEO talks to
                CNN
              </p>
            </Link>
          </div>
        </div>
      </div>
      {/*Tweets*/}
      <h1 className="text-primary text-3xl text-center font-semibold pt-40 pb-20">
        Tweets
      </h1>

      <div className="flex gap-10 justify-between px-6  max-lg:flex-col  max-lg:items-center">
        <div>
          <img src={images.tweet1} alt="" />
          <p className="pt-3">“Ideas are nothing without execusion”</p>
        </div>
        <div>
          <img src={images.tweet2} alt="" />
          <p className="pt-3">Appstech suporting women in tech</p>
        </div>
        <div>
          <img src={images.tweet3} alt="" />
          <p className="pt-3">
            Evaluation meeting with <br /> @stevetchoumba of @ActivSpaces ,
          </p>
        </div>
      </div>

      {/*Other Post*/}
      <h1 className="text-primary text-3xl text-center py-5 font-semibold pt-40 pb-10">
        Other Posts
      </h1>

      <div className="flex items-center justify-between px-6 pb-40 max-lg:py-0">
        <Section
          heading="Oracle Announces General Availability of Oracle Database 12c, the First Database Designed for the Cloud ....Read more"
          image={images.oracleDb}
          className="flex-col items-center max-sm:flex-col flex-row-reverse"
        >
          <div className="flex flex-col max-md:text-center">
            <p>REDWOOD SHORES, Calif. – July 1, 2013</p>
          </div>
        </Section>
      </div>

      <div className="flex items-center justify-between px-6 pb-40 max-lg:py-0">
        <Section
          heading="AppsTech CEO Rebecca Enonchong named to WIE Power60 List ....Read more"
          image={images.oracleMember}
          className="flex-col items-center max-sm:flex-col flex-row"
        >
          <div className="flex flex-col max-md:text-center">
            <p>REDWOOD SHORES, Calif. – July 1, 2013</p>
          </div>
        </Section>
      </div>
      <div className="flex items-center justify-between px-6 pb-40 max-lg:py-0">
        <Section
          heading="AppsTech CEO Rebecca Enonchong named to WIE Power60 List..."
          image={images.rebecca}
          className="flex-col items-center max-sm:flex-col flex-row-reverse"
        >
          <div className="flex flex-col max-md:text-center">
            <p>REDWOOD SHORES, Calif. – July 1, 2013</p>
          </div>
        </Section>
      </div>
    </div>
  );
}

export default News;
