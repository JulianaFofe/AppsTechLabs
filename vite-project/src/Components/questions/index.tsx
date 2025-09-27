import { IoMdCheckmarkCircleOutline } from "react-icons/io";

interface textProps {
  text: string;
}

const Questions: React.FC<textProps> = ({ text }) => {
  return (
    <div className="flex bg-gray-100 items-center gap-3 p-2 rounded-lg">
      <IoMdCheckmarkCircleOutline size={25} color="red" className="max-md:hidden"/>
      <p className="text-lg text-accent">{text}</p>
    </div>
  );
};

export default Questions;
