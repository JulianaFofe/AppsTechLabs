import { IoMdCheckmarkCircleOutline } from "react-icons/io";

interface props {
  icon: any;
  title: string;
  subtitle: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}

const DBsolution: React.FC<props> = ({
  icon,
  title,
  subtitle,
  text1,
  text2,
  text3,
  text4,
}) => {
  return (
    <div className="bg-gray-100 p-5 rounded-lg">
      <div className="flex items-center gap-3 text-xl">
        <div className="bg-red-100 p-2 rounded-lg">
          <p>{icon}</p>
        </div>
        <h1 className="font-bold">{title}</h1>
      </div>
      <p className="p-3">{subtitle}</p>
      <div className="pl-3 ">
        <div className="flex gap-2 items-center">
          <IoMdCheckmarkCircleOutline size={22} color="red" />
          <p>{text1}</p>
        </div>
        <div className="flex gap-2 items-center">
          <IoMdCheckmarkCircleOutline size={22} color="red" />
          <p>{text2}</p>
        </div>
        <div className="flex gap-2 items-center">
          <IoMdCheckmarkCircleOutline size={22} color="red" />
          <p>{text3}</p>
        </div>
        <div className="flex gap-2 items-center">
          <IoMdCheckmarkCircleOutline size={22} color="red" />
          <p>{text4}</p>
        </div>
      </div>
    </div>
  );
};

export default DBsolution;
