import type { ReactNode } from "react"

interface Props{
  heading:string
  children:ReactNode
  className?:string
  image:any

}
const Section: React.FC <Props> =({heading,children,className,image}) => {
  return (
    <div className={`py-[3rem] flex items-center md:justify-center md:items-center md:gap-x-10 ${className}`}>
        <div className="flex-1 flex md:gap-y-10 flex-col">
           <h1 className="text-2xl py-[2rem] md:text-5xl font-medium">{heading}</h1>
           <div>
            {children}
           </div>
        </div>
        <div className="flex-1 flex md:justify-center">
          <div className="w-[80%]">
            <img src={image} alt="" className="w-full h-full rounded-lg"/>
          </div>
        </div>
    </div>
  )
}

export default Section
