import React from "react";

interface ShowDetailsProps {
  icon?: React.ReactNode;
  title: string;
  details: string;
}

function ShowDetails({ icon, title, details }: ShowDetailsProps) {
  return (
    <div className="relative bg-white p-8 rounded-2xl shadow-lg text-center transition-all duration-500 hover:shadow-2xl overflow-hidden group">
  {icon && <div className="flex justify-center">{icon}</div>}
  <h3 className="mt-4 text-2xl font-semibold text-primary">{title}</h3>

  <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:max-h-96 group-hover:opacity-100">
    <p className="mt-4 text-gray-600 leading-relaxed text-sm">{details}</p>
  </div>
</div>

  );
}

export default ShowDetails;
