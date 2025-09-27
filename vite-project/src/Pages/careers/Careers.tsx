import TopSection from "../../Components/topSection"
import { images } from "../../Types/images"

function Careers() {
  return (
    <div className="md:pt-[5rem] lg:pt-[5rem] px-4 sm:px-6 md:px-12 flex flex-col items-center gap-y-4 py-[3rem]">
      <div>
        <TopSection title="Career" image={images.career} subtitle="Exceptional people. Expertise with integrity"/>
      </div>
      <div>
        <p className="text-center md:text-lg lg:text-md text-black/70 text-xs">
          Our business is multi-faceted and so are our people. AppsTech team members come from diverse industries, backgrounds and countries around the world, and the benefits of this diversity are clearly reflected in the caliber of our work and the expertise of our people.
At AppsTech, we help exceptional individuals apply their existing skills to a wide range of challenges. We pride ourselves on the spectrum of bright, educated and brilliantly motivated professionals we hire. The dedication, technical expertise and global knowledge of these individuals is key to AppsTech’s success. At AppsTech, you’ll find an environment that attracts, develops, excites, and retains extraordinary people.
If you thrive on working in an environment shaped by shared values, on making a real impact on the ways in which technology gets done, on an entrepreneurial environment in which new ideas and perspectives are valued, and on the chance to solve the challenges faced by public and private sector clients around the world, then AppsTech is the place for you
        </p>
      </div>
    </div>
  )
}

export default Careers
