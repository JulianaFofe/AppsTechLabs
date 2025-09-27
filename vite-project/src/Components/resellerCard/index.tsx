interface Reseller {
  icon: any;
  title: string;
  subtitle: string;
}

const ResellerCard: React.FC<Reseller> = ({ icon, title, subtitle }) => {
  return (
    <div className="flex flex-col text-center items-center justify-center bg-gray-100 p-5 rounded-lg">
      <p className="bg-red-100 p-2 rounded-lg">{icon}</p>
      <h1 className="font-bold py-3">{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default ResellerCard;
