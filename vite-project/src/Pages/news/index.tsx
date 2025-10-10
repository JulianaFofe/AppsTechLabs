import { Link } from "react-router-dom";
import { images } from "../../Types/images";
import Section from "../../Components/Section";

function News() {
  return (
    <div>
      <div className="flex flex-row gap-10 items-center justify-between px-6 pt-30 max-lg:flex-col">
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
          <div className="flex flex-row gap-5 pb-5 text-xl text-accent items-center">
            <img className="" src={images.post1} alt="" />
            <Link to={"/"}>
              <p className="hover:underline hover:text-secondary">
                Introducing AppsTech Mobile Security for iOS and Android Devices
              </p>
            </Link>
          </div>

          <div className="flex flex-row gap-5 pb-5 text-xl text-accent items-center">
            <img className="" src={images.post2} alt="" />
            <Link to={"/"}>
              <p className="hover:underline hover:text-secondary">
                Oracle introduces Oracle E-Business Suite R12.2
              </p>
            </Link>
          </div>

          <div className="flex flex-row gap-5 pb-5 items-center text-xl text-accent">
            <img className="" src={images.post3} alt="" />
            <Link to={"/"}>
              <p className="hover:underline hover:text-secondary">
                Technology and Innovation in West Africa: AppsTech CEO talks to
                CNN
              </p>
            </Link>
          </div>
        </div>
      </div>
  {/* Tweets Section */}
<section className="py-20 bg-gray-50">
  <h1 className="text-primary text-3xl md:text-4xl text-center font-bold pb-16 transition-all duration-500 hover:scale-105">
    Tweets
  </h1>

  <div className="flex justify-between gap-10 px-10 max-lg:flex-col max-lg:items-center">
    {/* Tweet 1 */}
    <div className="flex flex-col items-center bg-white shadow-md hover:shadow-xl rounded-2xl p-6 w-full md:w-1/3 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
      <img
        src={images.tweet1}
        alt="Tweet 1"
        className="rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
      />
      <p className="pt-4 text-accent text-center text-lg italic">
        “Ideas are nothing without execution.”
      </p>
    </div>

    {/* Tweet 2 */}
    <div className="flex flex-col items-center bg-white shadow-md hover:shadow-xl rounded-2xl p-6 w-full md:w-1/3 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
      <img
        src={images.tweet2}
        alt="Tweet 2"
        className="rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
      />
      <p className="pt-4 text-accent text-center text-lg italic">
        AppsTech supporting women in tech.
      </p>
    </div>

    {/* Tweet 3 */}
    <div className="flex flex-col items-center bg-white shadow-md hover:shadow-xl rounded-2xl p-6 w-full md:w-1/3 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
      <img
        src={images.tweet3}
        alt="Tweet 3"
        className="rounded-lg shadow-md transition-transform duration-500 hover:scale-105"
      />
      <p className="pt-4 text-accent text-center text-lg italic">
        Evaluation meeting with <br /> @stevetchoumba of @ActivSpaces
      </p>
    </div>
  </div>
</section>


      {/*Other Post*/}
      <h1 className="text-primary text-3xl text-center py-5 font-semibold pt-40 pb-10">
        Other Posts
      </h1>

      <div className="flex items-center justify-between px-6 pb-40 max-lg:py-0">
        <Section
          heading="Oracle Announces General Availability of Oracle Database 12c, the First Database Designed for the Cloud ...."
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
          heading="AppsTech CEO Rebecca Enonchong named to WIE Power60 List ...."
          image={images.oracleMember}
          className="flex-col items-center max-sm:flex-col flex-row"
        >
          <div className="flex flex-col text-xl text-accent max-md:text-center">
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
          <div className="flex flex-col text-xl text-accent max-md:text-center">
            <p>REDWOOD SHORES, Calif. – July 1, 2013</p>
          </div>
        </Section>
      </div>
    </div>
  );
}

export default News;
