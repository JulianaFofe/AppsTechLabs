import { Link } from "react-router-dom"
import { OIntelligenceData } from "../../data/OIntelligenceData";

const OracleIntelligence = () => {
  return (
    <div className="py-16 px-6 bg-gray-50">
            {/* Header Section */}
            <div className="text-center max-w-4xl mx-auto mb-12">
                <h2 className="text-4xl font-extrabold text-primary tracking-tight">
                    Oracle Business Intelligence
                </h2>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                    Knowing more about your business—and knowing it faster than others—is
                    the best way to power innovation and gain an edge on your competition.
                    As the #1 vendor in business analytics with the industry’s most complete
                    and integrated range of enterprise-class business intelligence solutions,
                    Oracle leads the way in helping organizations gain more insight, across more data,
                    and drive better outcomes in every aspect of their business.
                </p>
            </div>

            {/* Cards Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {OIntelligenceData.map((item) => {
                    return (
                        <Link
                            key={item.title}
                            to={item.link}
                            className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-56 object-cover transform hover:scale-105 transition duration-300"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-5">
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {item.title}
                                    </h3>
                                </div>

                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
  )
}

export default OracleIntelligence
