import React from 'react'

interface companiesProps {
  amount: string
  icons: any
  text: string
}

const Companies: React.FC<companiesProps> = ({ amount, icons, text }) => {
  return (
    <div
      className="
        flex flex-col items-center 
        bg-white border border-primary border-solid 
        shadow-2xl text-accent p-5 rounded-lg w-40 
        max-md:p-3
        transform transition-transform duration-300 ease-in-out
        hover:scale-105 hover:shadow-3xl hover:bg-primary/10
      "
    >
      <h1 className="font-bold text-3xl pb-4 max-md:text-2xl transition-colors duration-300">
        {amount}
      </h1>
      <div className="transition-transform duration-300 ease-in-out hover:scale-110">
        {icons}
      </div>
      <p className="font-medium text-lg pt-5 max-md:pt-3 transition-colors duration-300 hover:text-primary">
        {text}
      </p>
    </div>
  )
}

export default Companies
