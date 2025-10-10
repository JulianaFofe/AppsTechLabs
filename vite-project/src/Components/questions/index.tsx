import { IoMdCheckmarkCircleOutline } from "react-icons/io";

interface textProps {
  text: string;
}

const Questions: React.FC<textProps> = ({ text }) => {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 shadow-sm transition-all duration-500 ease-in-out hover:bg-primary/10 hover:shadow-md hover:scale-[1.02] animate-fadeInUp">
      <IoMdCheckmarkCircleOutline
        size={25}
        color="red"
        className="transition-transform duration-500 max-md:hidden group-hover:rotate-6"
      />
      <p className="text-lg text-accent transition-colors duration-500">{text}</p>
    </div>
  );
};

export default Questions;
          