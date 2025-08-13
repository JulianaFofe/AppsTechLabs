import React from 'react'
import { images } from '../../Types/images';

interface InfoBlocProps{
    title?: React.ReactNode,
    description?: React.ReactNode,
    image?:string,
    className?: string,
    titleClass?:string,
    descriptionClass?:string,
    imageClass?:string
}

const Subtitle: React.FC<InfoBlocProps> = ({
  title,
  description,
  image,
  className,
  titleClass = className,
  descriptionClass = className,
  imageClass
}) => {
  return (
    <div className={className}>
      {image && <img src={image} alt="ImfoBloc visual" className={imageClass} />}
      {title && <h1 className={titleClass}>{title}</h1>}
      {description && <p className={descriptionClass}>{description}</p>}
    </div>
  );
};


export default Subtitle
