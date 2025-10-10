import React from "react";

interface InfoBlocProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  image?: string;
  className?: string;
  titleClass?: string;
  descriptionClass?: string;
  imageClass?: string;
}

const Subtitle: React.FC<InfoBlocProps> = ({
  title,
  description,
  image,
  className = "flex flex-col items-center text-center gap-4 py-4",
  titleClass = "text-2xl md:text-4xl font-bold text-primary animate-fadeInUp",
  descriptionClass = "text-accent text-base md:text-xl animate-fadeInUp",
  imageClass = "w-full max-w-[150px] h-auto object-contain animate-fadeInUp",
}) => {
  return (
    <div className={`animate-fadeInUp ${className}`}>
      {image && <img src={image} alt="InfoBloc visual" className={imageClass} />}
      {title && <h1 className={titleClass}>{title}</h1>}
      {description && <p className={descriptionClass}>{description}</p>}
    </div>
  );
};

export default Subtitle;
