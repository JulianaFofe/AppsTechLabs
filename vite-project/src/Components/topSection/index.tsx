interface TopProps {
  title: string;
  image?: any;
  subtitle?: string;
}

const TopSection: React.FC<TopProps> = ({ title, image, subtitle }) => {
  return (
    <div className="flex flex-col items-center text-center justify-center px-4 sm:px-6 md:px-12">
      {/* Title */}
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary">
        {title}
      </h1>

      {/* Image */}
      {image && (
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10">
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded-xl object-cover"
          />
        </div>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p className="text-accent text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default TopSection;
