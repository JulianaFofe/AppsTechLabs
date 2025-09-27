interface TopProps {
  title: string;
  image?: any;
  subtitle: string;
}

const TopSection: React.FC<TopProps> = ({ title, image, subtitle }) => {
  return (
    <div className="flex flex-col items-center text-center justify-center">
      <h1 className="font-bold text-4xl text-primary">{title}</h1>
      <div className="w-[60%] p-10">
        <img src={image} className="w-full h-full rounded-xl" />
      </div>
      <p className="text-accent text-center text-xl px-6">{subtitle}</p>
    </div>
  );
};

export default TopSection;
