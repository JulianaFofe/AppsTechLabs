import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

interface ContactProp{
    location:string;
    number:string
    email:string
}
function ContactCards({location, number, email}:ContactProp) {
  return (
    <div className="bg-white p-2 rounded-xl w-[70%] flex flex-col items-center gap-y-2 shadow-xl inset-shadow-sm transition-transform duration-300 hover:scale-105">
        <h1 className="text-primary text-lg md:text-2xl font-medium">{location}</h1>
      <div className=" flex flex-col gap-y-5 md:gap-y-10">
        <div className="flex justify-center gap-x-10">
           <FaPhone size={25} className="text-primary"/>
           <p>{number}</p>
        </div>
        <div className="flex justify-center gap-x-10">
           <IoMail size={25} className="text-primary"/>
           <p>{email}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactCards
