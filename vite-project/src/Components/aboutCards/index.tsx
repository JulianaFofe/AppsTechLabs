interface Props{
    items:aboutCards[]
}

export interface aboutCards{
    image:any
    title:string;
    description:string
}

function AboutCards({items}:Props) {
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-around md:gap-12">
      {
        items.map((item) => (
            <div className="p-2 gap-y-2 flex flex-col w-[80%] md:w-[300px] shadow-xl inset-shadow-sm rounded-lg transition-transform duration-300 hover:scale-105">
                <img src={item.image} alt={item.title} className="flex-1 w-full"/>
                <div className="flex-1">
                    <h1 className="font-bold text-xl">{item.title}</h1>
                    <p>{item.description}</p>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default AboutCards
