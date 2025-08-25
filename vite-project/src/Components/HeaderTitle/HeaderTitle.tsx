import React from "react";

interface HeaderProps {
  firstTitle: string;
  secondTitle2: string,
  subtitle: string;
  logo: string;
}

const HeaderTitle: React.FC<HeaderProps> = ({ firstTitle, secondTitle2, subtitle, logo }) => {
  return (
    <div className="absolute w-screen bottom-30 flex justify-between px-10 max-md:px-5 max-sm:bottom-20">
      <div>
        <h1 className="text-3xl font-medium text-white max-sm:text-lg">{firstTitle}</h1>
        <h1 className="text-3xl font-small text-white max-sm:text-lg">{secondTitle2}</h1>
        <p className="text-primary font-bold text-xl pt-3 max-sm:text-lg">{subtitle}</p>
      </div>
      <div className="mt-20">
        <img src={logo} alt="" />
      </div>
      
    </div> 
  );
};

export default HeaderTitle;
