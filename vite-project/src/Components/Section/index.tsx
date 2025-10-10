import type { ReactNode } from "react"

interface Props{
  heading: string
  children: ReactNode
  className?: string
  image: any
}

const Section: React.FC<Props> = ({ heading, children, className, image }) => {
  return (
    <div className={`py-[2rem] md-max:py-[0px] flex flex-col md:flex-row md:justify-center md:items-center md:gap-x-10 animate-fadeIn ${className}`}>
      
      {/* Text Section */}
      <div className="flex-1 flex flex-col items-center md:items-center lg:items-start text-center md:text-center lg:text-left gap-y-6">
        <h1 className="text-2xl py-[2rem] md:text-5xl font-medium">
          {heading} 
        </h1>
        <div className="text-accent text-lg">
          {children}
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center mt-6 md:mt-0">
        <div className="w-[80%] transition-transform duration-500 ease-in-out hover:scale-105">
          <img src={image} alt="" className="w-full h-full rounded-lg"/>
        </div>
      </div>

    </div>
  )
}

export default Section
