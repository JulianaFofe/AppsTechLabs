import { Link } from 'react-router-dom';
import { IoIosCloudOutline } from "react-icons/io";
import { GoShieldCheck } from "react-icons/go";
import { FaGlobe, FaRegNewspaper, FaTv, FaUserEdit } from "react-icons/fa";
import { FaCartShopping, FaMobileScreenButton } from 'react-icons/fa6';
import { BsFillSuitcaseLgFill, BsPeopleFill } from "react-icons/bs";
import { TbLicense } from "react-icons/tb";
import { CgDatabase } from "react-icons/cg";
import { MdMiscellaneousServices } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { MdOutlineDeveloperMode } from "react-icons/md";
import type { ReactNode } from 'react';

interface CardProps{
    items:CardItems[];
    className?:string
}
interface CardItems{
    title:string;
    description:string;
    path:string
    icon:ReactNode
}

export const NavCardData = [
    {
        title:"Cloud solution",
        description:"Oracle cloud products offer advantages in cost, security and agility.",
        path:"/cloud_solutions",
        icon:<IoIosCloudOutline size={30} />
    },
     {
        title:"Mobile Security",
        description:"Empower mobility without compromising security.",
        path:"/mobile_security",
        icon:<GoShieldCheck size={30}/>
    },
    {
        title:"Mobile solution",
        description:"Enterprise mobility is transformational",
        path:"/mobile_solution",
        icon:<FaMobileScreenButton size={30}/>
    },
    {
        title:"Oracle E business suit",
        description:"Streamline your operations with integrated oracle business applications.",
        path:"/oracle_e_bsns",
        icon:<FaCartShopping size={30}/>
    },
    {
        title:"Linux Virtualization",
        description:"Optimize performance and flexibility with secure linux virtualization",
        path:"/linux",
        icon:<FaTv size={30}/>
    },
    { 
        title:"Oracle Database",
        description:"Power your enterprise with the world`s most trusted database platform",
        path:"/oracle_database",
        icon:<CgDatabase size={30}/>
    }
]

export const expertiseCardData = [
    {
        title:"License Management",
        description:"Simplify compliance and maximize value from your software licenses.",
        path:"/license_management",
        icon:<TbLicense size={30} />
    },
     {
        title:"Oracle Database Services",
        description:"Ensure reliability, performance, and security for your Oracle databases.",
        path:"/oracle_database_service",
        icon:<CgDatabase size={30}/>
    },
    {
        title:"Oracle E-business Suite services",
        description:"Enhances and support your Oracle applications for peak efficiency",
        path:"/oracle_e_business_suit",
        icon:<BsFillSuitcaseLgFill size={30} />
    },
    {
        title:"Managed services",
        description:"Focus on your business while we manage your IT operations seamlessly.",
        path:"/managed_services",
        icon:<MdMiscellaneousServices size={30}/>
    },
    {
        title:"Approach",
        description:"We combine expertise, innovaation, and partnership to deliver lasting results.",
        path:"/approach",
        icon:<BsPeopleFill size={30}/>
    },
]

export const companyNavCardData = [
    {
        title:"About",
        description:"Discover our story and how we empower businesses worldwide",
        path:"/about",
        icon:<FcAbout size={30} />
    },
    {
        title:"News and Events",
        description:"Stay updated with our latest innovations, stories, and impact.",
        path:"/news",
        icon:<FaRegNewspaper size={30}/>
    },
    {
        title:"Community outreach",
        description:"Building stronger communities throught technology and impact",
        path:"/community_outreach",
        icon:<FaGlobe size={30} />
    },
    {
        title:"AppsTechLabs",
        description:"Innovating the future through research, creativity and technology",
        path:"/appstechlabs",
        icon:<MdOutlineDeveloperMode size={30}/>
    },
    {
        title:"Careers",
        description:"Join our team and grow your career with global technology leaders",
        path:"/careers",
        icon:<FaUserEdit size={30}/>
    }
]

function NavCard({items}:CardProps) {
  return (
    <div className='animate-slide-down overflow-y-auto scroll-smooth grid grid-cols-1 gap-5 px-3 mt-10 md:grid-cols-3 md:mt-5 md:gap-10 py-5 md:px-6 z-50'>
      {
        items.map((item) =>(
            <Link to={item.path} className='p-1 md:p-3 max-w-[370px] bg-white rounded-xl shadow-lg inset-shadow-xs flex items-center gap-x-4'>
                <div className='text-primary'>{item.icon}</div>
                <div>
                    <h3 className='font-medium text-lg text-black md:text-xl md:font-medium'>{item.title}</h3>
                    <p className='text-accent'>{item.description}</p>
                </div>
            </Link>
        ))
      }
    </div>
  )
}

export default NavCard
