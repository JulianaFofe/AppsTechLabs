import type { ReactNode } from "react"

interface Props{
  heading: string
  children: ReactNode
  className?: string
  image: any
}

const Section: React.FC<Props> = ({ heading, children, className, image }) => {
  return (
    <div className={`py-[3rem] flex flex-col md:flex-row md:justify-center md:items-center md:gap-x-10 ${className}`}>
      
      {/* Text Section */}
      <div className="flex-1 flex flex-col items-center md:items-center lg:items-start text-center md:text-center lg:text-left gap-y-6">
        <h1 className="text-2xl py-[2rem] md:text-5xl font-medium">{heading}</h1>
        <div>
          {children}
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center items-center mt-6 md:mt-0">
        <div className="w-[80%]">
          <img src={image} alt="" className="w-full h-full rounded-lg"/>
        </div>
      </div>

    </div>
  )
}

export default Section
