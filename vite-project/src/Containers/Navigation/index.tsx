import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { FaChevronDown, FaChevronRight, FaChevronUp } from "react-icons/fa6";
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { images } from "../../Types/images";
import NavCard, { companyNavCardData, expertiseCardData } from "../../Components/navCard/NavCard";
import { NavCardData } from "../../Components/navCard/NavCard";

interface Props {
  className?: string
}

function NavLinks({ className }: Props) {
  // Instead of 3 separate toggles, use 1 state
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showNav, setShowNav] = useState(false)
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation()
  const pagepath = location.pathname

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // change 100 to whatever scroll offset you want
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // helper function
  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  }

  return (
    <div className={className}>
      {/* { Navigation Links } */}
      <div
        className={`flex justify-between z-50 w-full py-3 px-6 transition-colors left-0 md:fixed duration-300
          ${scrolled || (pagepath !== "/" && pagepath !== "/cloud_solutions" && pagepath !== "/mobile_solution") ? "bg-white shadow-sm text-black" : "bg-transparent md:text-white"}`}>
        <div className="max-w-[100px] md:max-w-[150px]">
          <img src={images.logo} alt="Logo" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li onClick={() => toggleDropdown("products")} className="flex items-center gap-x-2 cursor-pointer">
            <p>Products</p>
            {openDropdown === "products" ? <FaChevronUp /> : <FaChevronDown />}
            {openDropdown === "products" &&
              <div className="md:absolute w-full top-12 left-0 bg-white flex justify-center shadow-xl">
                <NavCard items={NavCardData} />
              </div>}
          </li>

          <li onClick={() => toggleDropdown("expertise")} className="flex items-center gap-x-2 cursor-pointer">
            <p>Expertise</p>
            {openDropdown === "expertise" ? <FaChevronUp /> : <FaChevronDown />}
            {openDropdown === "expertise" &&
              <div className="md:absolute w-full top-12 left-0 md:bg-white flex justify-center shadow-xl">
                <NavCard items={expertiseCardData} />
              </div>}
          </li>

          <li onClick={() => toggleDropdown("company")} className="flex items-center gap-x-2 cursor-pointer">
            <p>Company</p>
            {openDropdown === "company" ? <FaChevronUp /> : <FaChevronDown />}
            {openDropdown === "company" &&
              <div className="md:absolute w-full top-12 left-0 md:bg-white flex justify-center shadow-xl">
                <NavCard items={companyNavCardData} />
              </div>}
          </li>

          <li>
            <Link to="/internship">Internship</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>

        {/* Mobile Nav */}
        {!showNav
          ?
          <MdOutlineMenu onClick={() => setShowNav(true)} size={30} color="black" className="md:hidden" />
          :
          <div className="bg-white absolute w-[90%] top-2 right-2 rounded-2xl h-[50vh] shadow-xl inset-shadow-sm z-50 md:hidden">
            <ul className="pt-[2rem] pl-10 block flex flex-col items-start gap-5 md:hidden ">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li onClick={() => toggleDropdown("products")} className="flex items-center gap-x-2 cursor-pointer">
                <p>Products</p>
                {openDropdown === "products" ? <FaChevronUp /> : <FaChevronRight />}
                {openDropdown === "products" &&
                  <div className="absolute bg-white w-[100%] top-1 rounded-xl right-1 shadow-xl inset-shadow-sm md:hidden z-30 flex justify-center">
                    <NavCard items={NavCardData} className="animate-slide_down" />
                    <IoCloseCircleOutline size={30} className=" absolute top-1 right-1 text-secondary md:hidden " />
                  </div>}
              </li>

              <li onClick={() => toggleDropdown("expertise")} className="flex items-center gap-x-2 cursor-pointer">
                <p>Expertise</p>
                {openDropdown === "expertise" ? <FaChevronUp /> : <FaChevronRight />}
                {openDropdown === "expertise" &&
                  <div className="absolute bg-white z-40 right-1 top-1 w-[100%] shadow-xl inset-shadow-sm flex justify-center md:hidden rounded-xl">
                    <NavCard items={expertiseCardData} />
                    <IoCloseCircleOutline size={30} className=" absolute top-1 right-1 text-secondary md: z-40 " />
                  </div>
                }
              </li>

              <li onClick={() => toggleDropdown("company")} className="flex items-center gap-x-2 cursor-pointer">
                <p>Company</p>
                {openDropdown === "company" ? <FaChevronUp /> : <FaChevronRight />}
                {openDropdown === "company" &&
                  <div className="absolute bg-white z-40 right-1 top-1 w-[100%] shadow-xl inset-shadow-sm flex justify-center md:hidden rounded-xl">
                    <NavCard items={companyNavCardData} />
                    <IoCloseCircleOutline size={30} className=" absolute top-1 right-1 text-secondary md: z-40 " />
                  </div>
                }
              </li>

              <li>
                <Link to="/internship">Internship</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
            <IoCloseCircleOutline onClick={() => setShowNav(false)} size={30} className="md:hidden absolute top-1 right-1 text-secondary" />
          </div>
        }
      </div>
    </div>
  )
}

export default NavLinks
