
import InfoBloc from "../../Components/InfoBloc";
import Button from "../../Components/Button/Button";
import { images } from "../../Types/images";

function Blog() {
  return (
    <>
      {/* Banner Section */}
      <div className="text-center pt-24 pb-10 w-full px-10 md:px-20 bg-gradient-to-b from-gray-50 to-white">
        <InfoBloc
          title="AppsTech Innovation for Smarter Business"
          description="Discover the ideas and innovation driving AppsTech. On our blog, we explore industry trends, share breakthroughs, and offer a behind-the-scenes look at our journey to build better solutions."
          titleClass="text-4xl md:text-5xl text-primary font-extrabold pb-5"
          descriptionClass="text-accent text-lg md:text-xl leading-relaxed max-w-4xl mx-auto"
        />
      </div>

      {/* Blog Section Template */}
      <BlogItem
        image={images.bl1}
        author="Stella Joyce Bulu"
        role="AppsTech Apps DBA"
        title="Oracle E-Business Suite Security"
        description="There are so many misconceptions about securing Oracle E-Business Suite applications that most Apps DBAs call myths. Fortunately, versus these myths are realities that show security in your Oracle E-Business is more than just installing antivirus software or assigning passwords. Security spans multiple levels — from preventing data theft and fraud to ensuring system privilege protection."
      />

      <BlogItem
        image={images.boss3}
        author="Rebecca Enonchong"
        role="AppsTech CEO"
        title="AppsTech CEO Featured in Forbes"
        description="Enonchong, a Cameroonian national, is the founder and CEO of AppsTech, a global provider of enterprise application solutions. Founded in 1999, AppsTech now serves clients in over 40 countries across three continents. As an Oracle Platinum Partner, the company delivers enterprise software services, training, and application management solutions while empowering African tech startups through mentorship and innovation."
      />

      {/* Mobile Security */}
      <BlogHighlight
        title="Introducing AppsTech Mobile Security for iOS and Android Devices"
        date="Bethesda, MD – February 27, 2014"
        description="As the workforce becomes increasingly mobile, organizations must secure access and protect corporate data on mobile devices. AppsTech’s Mobile Security solution offers advanced BYOD/COPE management, isolating personal and corporate data while maintaining seamless enterprise access."
      />

      {/* Oracle R12.2 */}
      <BlogHighlight
        title="Oracle Introduces Oracle E-Business Suite R12.2"
        date="Redwood Shores, Calif. – September 19, 2013"
        description="Oracle E-Business Suite 12.2 introduces online patching to reduce maintenance downtime and improve system performance. With advanced scalability, the update empowers enterprises to make smarter decisions, reduce costs, and optimize global business operations."
      />

      {/* Oracle Database 12c */}
      <BlogHighlight
        title="Oracle Announces General Availability of Oracle Database 12c"
        date="Redwood Shores, Calif. – July 1, 2013"
        description="Oracle Database 12c introduces a new multitenant architecture optimized for the cloud. It enhances operational agility, simplifies database consolidation, and delivers improved performance, making it ideal for organizations embracing modern cloud environments."
      />

      {/* Platinum Membership */}
      <BlogHighlight
        title="Oracle Renews AppsTech’s Oracle Platinum Membership"
        date="Bethesda, MD – January 15"
        description="Oracle has renewed AppsTech’s Platinum Partner status, recognizing its expertise in delivering Oracle-based enterprise solutions. This status provides priority support, joint marketing opportunities, and specialized technical benefits to expand AppsTech’s global impact."
      />
    </>
  );
}

/* --- BlogItem Component --- */
const BlogItem = ({ image, author, role, title, description }: any) => (
  <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-10 md:px-20 px-6 transition-all duration-500 hover:scale-[1.01]">
    <div className="flex flex-col items-center text-center md:w-1/3 space-y-2">
      <img
        src={image}
        alt={author}
        className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
      />
      <p className="text-accent text-sm">
        {author} <br /> {role}
      </p>
    </div>
    <div className="md:w-2/3 space-y-5">
      <InfoBloc
        title={title}
        description={description}
        titleClass="text-3xl md:text-4xl text-primary font-bold"
        descriptionClass="text-accent text-lg md:text-xl leading-relaxed"
      />
      <div className="text-right">
        <Button title="Read more" />
      </div>
    </div>
  </div>
);

/* --- BlogHighlight Component --- */
const BlogHighlight = ({ title, date, description }: any) => (
  <div className="mt-20 flex flex-col items-center w-full md:px-20 px-8 text-center transition-all duration-500 hover:-translate-y-1">
    <InfoBloc
      title={title}
      description={
        <>
          <ul className="space-y-2">
            <li className="text-gray-600 font-semibold">{date}</li>
            <li>{description}</li>
          </ul>
        </>
      }
      titleClass="text-3xl md:text-4xl text-primary font-bold pb-4"
      descriptionClass="text-accent text-lg md:text-xl leading-relaxed max-w-4xl mx-auto"
    />
    <div className="text-right mt-4 w-full md:pr-20">
      
    </div>
  </div>
);

export default Blog;
