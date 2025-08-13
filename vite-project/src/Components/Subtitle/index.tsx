import React from 'react'
import { images } from '../../Types/images';

interface SubtitleProps{
    title?: string,
    description?: string,
    className?: string,
}

const Subtitle: React.FC<SubtitleProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
    <p>{description}</p>
    </div>
  );
};


export default Subtitle
