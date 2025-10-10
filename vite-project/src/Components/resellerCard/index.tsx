interface Reseller {
  icon: any;
  title: string;
  subtitle: string;
}

const ResellerCard: React.FC<Reseller> = ({ icon, title, subtitle }) => {
  return (
    <div className="flex flex-col text-center items-center justify-center bg-gray-100 p-5 rounded-lg shadow-md transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-xl animate-fadeInUp">
      <p className="bg-red-100 p-3 rounded-xl text-primary transition-colors duration-300 hover:bg-red-200">
        {icon}
      </p>
      <h1 className="font-bold py-3 text-lg md:text-xl animate-fadeInUp">{title}</h1>
      <p className="text-accent text-sm md:text-base animate-fadeInUp">{subtitle}</p>
    </div>
  );
};

export default ResellerCard;
