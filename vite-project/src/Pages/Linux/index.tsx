import React from 'react';
import InfoBloc from '../../Components/InfoBloc';
import { images } from '../../Types/images';

function Linux() {
  return (

    <>
      {/* Banner */}
      <header>
        <img src={images.linux_banner} alt="" className="w-[100%] mb-15 object-cover h-full" />
      </header>

      {/* Oracle Linux Overview */}
      <div className="text-center mb-20 w-full md:px-20 max-md:px-8">
        <InfoBloc
          title="Oracle Linux"
          description='Oracle Linux brings the latest Linux innovations to  market, delivering extreme performance, advanced scalability, 
            and reliability for enterprise applications and systems along with worldwide, enterprise-class, low-cost support. 
            Optimized for enterprise workloads, Oracle Linux is the only operating system to offer zero-downtime updates.

            Oracle is the only vendor in the industry that offers a complete Linux-based solution stack—applications, middleware, 
            database, management tools, operating system and hardware, along with a single point of support. Oracle invests 
            significantly in testing Oracle Linux and releasing critical bug fixes faster, enabling enterprises to deploy with confidence. 
            An Oracle Linux Support provides industry-leading global support for the Linux operating system at dramatically lower cost.'
          titleClass="text-4xl text-primary font-bold pb-7 2xl:text-6xl"
          descriptionClass="text-sm text-black whitespace-pre-line 2xl:text-xl"
        />
      </div>

      {/* Operating System Section */}
       <div className='relative mb-5 max-md:mb-20'>
         <InfoBloc
          image={images.linux_os}
          imageClass='w-[100%] h-full object-contain'
          className='w-[15%] h-40  max-md:w-full md:hidden max'/>
        <InfoBloc
          title="Operating System"
          titleClass="text-4xl w-full text-center text-center text-primary font-bold max-md:px-8 2xl:text-6xl"
        />
        <div className='flex md:justify-center gap-5 text-center w-[100%]'>
        <InfoBloc
          image={images.linux_os}
          imageClass='w-[100%] h-full object-contain '
          className='w-[15%] h-40 max-md:hidden'/>
        <InfoBloc
          description={
            <>
              <p>
                Oracle Linux is an open-source operating system under the GNU General Public License, optimized for Oracle 
                hardware and software. It is the only OS offering zero-downtime patching and delivers the latest Linux innovations, 
                rigorously tested with real-world workloads for enterprise use.
              </p>
              <ul className=" list-disc pl-6 pt-3">
                <li>Oracle Linux</li>
                <li>Linux Management</li>
                <li>Linux High Availability</li>
              </ul>
            </> 
          } max-md:flex
          descriptionClass="text-sm mt-10 max-h-20 pb-50 text-left text-black max-md:w-[100vw] max-md:px-8 2xl:text-xl"
          className='w-[75%]'
          />
      </div>
      </div>
      

      {/* Support Section */}
       <div className='relative mb-5 max-md:mb-20'>
         <InfoBloc
          image={images.linux_support}
          imageClass='w-[100%] h-full object-contain '
          className='w-[15%] h-40 max-md:flex max-md:w-full md:hidden'/>
        <InfoBloc
          title="Support"
          titleClass="text-4xl w-full text-center text-primary font-bold 2xl:text-6xl"
        />
        <div className='flex md:justify-center gap-5 text-center w-[100%]'>
        <InfoBloc
          image={images.linux_support}
          imageClass='w-[100%] h-full object-contain '
          className='w-[15%] h-40 max-md:hidden'/>
        <InfoBloc
          description='The Oracle Linux Support program provides enterprise-grade support with premier backports, 
            management tools, cluster software, testing, and indemnification at a lower cost, offering comprehensive 
            solutions to help organizations succeed with Linux.'
          descriptionClass="text-sm mt-10 max-h-20 pb-50 text-left max-md:pb-40 max-md:px-8 max-md:w-[100vw] text-black 2xl:text-xl"
          className='w-[75%]'
          />
      </div>
      </div>

      {/* Red Hat Section */}
       
       <div className='relative mb-5 max-md:mb-90 2xl:mb-60 max-lg:mb-70'>
        <InfoBloc
          image={images.redhat}
          imageClass='w-[100%] h-full object-contain '
          className='w-[15%] h-40 max-md:flex max-md:w-full md:hidden'/>
        <InfoBloc 
          title="Red Hat Enterprise Linux Server"
          titleClass="text-4xl w-full text-center text-center text-primary font-bold max-md:px-8 2xl:text-6xl"
        />
        <div className='flex md:justify-center gap-5 text-center w-[100%]'>
        <InfoBloc
          image={images.redhat}
          imageClass='w-[100%] h-full object-contain'
          className='w-[15%] max-md:hidden'/>
        <InfoBloc
          description={
            <>
              <p className="pb-6">
                Red Hat<sup>®</sup> Enterprise Linux<sup>®</sup> is a leading standard for enterprise datacenters, supporting all major<br />
                hardware platforms and thousands of applications, and powering critical operations like trades,<br />
                purchases, and analysis daily.
              </p>
              <span className="text-3xl text-primary font-bold max-md:px-2 2xl:text-5xl">Built for the modern data center</span>
              <p className="pt-5">
                Red Hat Enterprise Linux is designed for modern datacenters, offering pervasive networking, virtualization, 
                strong security, and support for multicore hardware. It enables seamless transitions to next-generation 
                IT environments and provides long-term stability with support for all major hardware architectures and 
                a 10-year update lifecycle.
              </p>
            </> 
          } 
          descriptionClass="text-sm mt-10 max-h-20 pb-50 text-left text-black max-md:px-8 max-md:text-center max-md:w-[100vw] 2xl:text-xl"
          className='w-[75%] max-md:w-full'
          />
      </div>
      </div>
      
    </>
  );
}

export default Linux
