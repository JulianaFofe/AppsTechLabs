import TopSection from '../../Components/topSection'
import { images } from '../../Types/images'

function Oracle_E_Business() {
  return (
    <div className="md:pt-[5rem] lg:pt-[5rem] px-4 sm:px-6 md:px-12 flex flex-col items-center gap-y-4 py-[3rem]">
     <div>
      <TopSection title="Oracle E-Business Suite Services" image={images.e_services}/>
     </div>
     <div>
      <p className="text-center md:text-lg lg:text-md text-black/70 text-xs">
        AppsTech offers comprehensive Oracle E-Business Suite services including product implementation, upgrades, business intelligence, training, applications management and strategic outsourcing.
From enterprise-wide global implementations to single-location point solutions, AppsTech leverages vast experience in Oracle E-Business Suite to provide the most cost-effective solutions for your business.
      </p>
     </div>
    </div>
  )
}

export default Oracle_E_Business
