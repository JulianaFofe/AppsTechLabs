import MobileSecurityImage from "../../assets/images/mobile-security-hero.jpg";
import { GoGlobe, GoLock, GoShield } from "react-icons/go";
import { CgSmartphone } from "react-icons/cg";
import { BiBookOpen, BiCameraMovie } from "react-icons/bi";
import { LuPresentation } from "react-icons/lu";
import { FaRegFileAlt } from "react-icons/fa";

function MobileSecurity() {
  return (
    <div className="mx-4 md:mx-10">
      <div className="space-y-10 py-10 md:py-25">
        <div className="space-y-3">
          <h1 className="font-medium text-2xl md:text-3xl text-primary text-center">
            Appstech Mobile Security
          </h1>
          <p className="text-gray-500 font-medium text-base md:text-xl text-center">
            Comprehensive mobile identity and application management for
            provisionning trusted access across your entreprise.
          </p>
        </div>

        {/* Responsive text + image section */}
        <div className="flex flex-col lg:flex-row border border-gray-200 rounded-lg mx-2 md:mx-8 p-4 md:p-10 gap-6 items-center">
          <div className="flex-1">
            <h2 className="text-secondary text-xl md:text-3xl font-semibold">
              COMPREHENSIVE MOBILE IDENTITY AND APPLICATION MANAGEMENT FOR
              PROVISIONING OF TRUSTED ACCESS
            </h2>
            <p className="font-semibold text-gray-400 pt-4 md:pt-6 text-sm md:text-base">
              Supported by Oracle's powerful suite of identity management tools,
              AppsTech's Mobile Security solution delivers authentication and
              authorization for applications and services, application signing
              and wrapping, enterprise application store, device wipe, device
              enrollment, and provisioning—all in a simplified management
              framework.
            </p>
          </div>
          <img
            src={MobileSecurityImage}
            alt="mobile security"
            className="rounded-xl w-full max-w-[400px] object-contain"
          />
        </div>

        <div className="mt-16 mx-2 md:mx-8 font-semibold text-xl md:text-2xl text-secondary">
          <h2>APPSTECH MOBILE SECURITY OVERVIEW</h2>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-2 md:px-10 mt-5">
          {[
            {
              icon: <GoShield size={28} className="text-white" />,
              text: "Securely extend identity services and policies to mobile devices through authentication, policy enforcement, and single sign-on between applications.",
            },
            {
              icon: <GoLock size={28} className="text-white" />,
              text: "Deliver a secure container for application security and control in order to separate, protect, and wipe corporate applications and data.",
            },
            {
              icon: <CgSmartphone size={28} className="text-white" />,
              text: "Simplify the provisioning process of users, applications, identities, and devices from days to minutes.",
            },
            {
              icon: <GoGlobe size={28} className="text-white" />,
              text: "Reduce the complexity of auditing to meet your regulatory compliance goals.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-md shadow-sm p-4 md:p-6 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-primary p-2">{item.icon}</div>
                <p className="font-semibold text-primary text-sm md:text-base">
                  Application Security Container
                </p>
              </div>
              <p className="font-medium text-sm md:text-base">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="mt-16 mx-2 md:mx-8 font-semibold">
          <h2 className="text-xl md:text-2xl text-secondary">
            APPSTECH MOBILE SECURITY BENEFITS
          </h2>
          <div className="border mt-6 border-gray-300 shadow-sm py-8 md:py-15 rounded-xl px-4 md:px-6">
            <ul className="list-disc pl-5 space-y-3 text-sm md:text-base">
              <li>
                Provides a trusted and independent mobile workspace for
                enterprise applications, email, and data
              </li>
              <li>
                Securely extends all identity services and policies of the
                enterprise user to their personal mobile device
              </li>
              <li>
                Delivers centralized management for auditing and enforcement,
                reducing the cost of complex mobile environments
              </li>
            </ul>
          </div>
        </div>

        {/* Resources */}
        <div className="mx-2 md:mx-8 mt-16">
          <h2 className="font-semibold text-secondary text-xl md:text-2xl">
            Related Oracle Mobile Security Resources
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-2 md:mx-8 mt-5">
          {[
            {
              icon: <FaRegFileAlt size={20} />,
              label: "White Paper",
              format: "PDF",
              title:
                "Extending Enterprise Access and Governance with Oracle Mobile Security Oracle Mobile and Social Service: The Next Step in IAM Suite",
            },
            {
              icon: <BiBookOpen size={20} />,
              label: "Case Study",
              format: "PDF",
              title:
                "Oracle Mobile and Social Service: The Next Step in IAM",
            },
            {
              icon: <BiCameraMovie size={20} />,
              label: "Webcast",
              format: "Video",
              title:
                "Develop and Enforce a Bring-Your-Own-Device (BYOD) Policy",
            },
            {
              icon: <LuPresentation size={20} />,
              label: "White Paper",
              format: "Slides",
              title:
                "User Provisioning and Compliance: SANS Institute Product Review of Oracle Identity Manager",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-md shadow-sm p-4 md:p-6 space-y-6 hover:text-primary"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 rounded-lg p-2">{item.icon}</div>
                  <div className="bg-gray-100 px-2 py-1 rounded-2xl text-sm font-semibold">
                    <p>{item.label}</p>
                  </div>
                </div>
                <div className="border border-gray-200 px-2 rounded-xl">
                  <p className="text-sm font-medium">{item.format}</p>
                </div>
              </div>
              <p className="font-bold text-sm md:text-base">{item.title}</p>
              <button className="p-2 rounded-xl border border-gray-200 text-sm md:text-base">
                Download Resource
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileSecurity;
