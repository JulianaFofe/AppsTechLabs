import { images } from '../../Types/images';

const CommunityOutreach = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-10 mt-10">
        Community Outreach
      </h2>

      <img
        src={images.greeting}
        alt="Community Outreach"
        className="w-full rounded-lg mb-6"
      />

      <h3 className="text-xl font-medium mb-4">
        Sharing Knowledge, Sharing Success
      </h3>

      <p className="text-gray-700 mb-4">
        At AppsTech our community outreach program is focused on fostering entrepreneurship and
        technology innovation in the communities in which we operate. Through partnerships with
        organizations such as ActivSpaces we make this mission a reality.
      </p>

      {/* For the last paragraph, logo on left, text on right */}
      <div className="flex items-center max-w-xl mx-auto space-x-8 text-justify">
        <img
          src={images.activSpaces}
          alt="ActivSpaces Logo"
          className="w-40 h-30 object-contain"
        />
        <p className="text-gray-700">
          AppsTech also actively mentors young technology entrepreneurs the world over, helping them
          translate their ideas into businesses. We engage the tech community by hosting training
          sessions, barcamps, hackathons and other events in our offices.
        </p>
      </div>
    </div>
  );
};

export default CommunityOutreach;
