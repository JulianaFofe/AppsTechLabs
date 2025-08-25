import React from 'react'

interface SubtitleProps{
    title: string,
    description: string
    className?: string
}

const Subtitle : React.FC<SubtitleProps> = ({title, description, className}) => {
  return (
    <div className='max-lg:flex-col max-lg:text-center'>
      <h1 className={className}>{title}</h1>
      <p className='text-accent text-xl pt-7 max-md:text-md max-sm:text-md'>{description}</p>
    </div>
  )
}

export default Subtitle
