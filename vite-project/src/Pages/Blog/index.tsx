import React from 'react'
import InfoBloc from '../../Components/InfoBloc'
import Button  from '../../Components/Button/Button'
import { images } from '../../Types/images'

function Blog() {
  return (
    <>
    {/* Banner Section */}
      <div className="text-center mt-20 w-full px-20 max-md:px-10">
        <InfoBloc
          title="AppsTech Innovation for smarter Business"
          description="Discover the ideas and innovation driving AppsTech. On our blog, we explore industry trends, 
          share breakthroughs, and offer a behind-the-scenes look at our journey
          to build better solutions.."
          titleClass="text-4xl text-blue-600 font-bold pb-7 2xl:text-6xl"
          descriptionClass="text-sm text-black whitespace-pre-line 2xl:text-xl"
        />
      </div>

    {/* Blog:E-Business Suite */}
      <div className="mt-20 flex max-md:flex-col justify-center items-center gap-10 max-md:px-10 px-20 w-full">
        <InfoBloc
        image={images.bl1}
        imageClass='w-[100%]'
        description='Stella Joyce Bulu
                     AppsTech Apps DBA'
        descriptionClass='text-center leading-7 whitespace-pre-line text-sm'        
        className='w-[70%] max-md:w-[50%] xl:w-[40%]'
        />
        <div className='max-md:text-center'>
        <InfoBloc
        title='Oracle  E-Business Suite security'
        description='There are so many misconceptions about securing Oracle E-Business Suite applications that most 
          Apps DBAs call Myths.Fortunately versus these myths are realities that show that security in your Oracle 
          E-Business is more than just installing an antivirus on the system or attributing passwords. Security comes at 
          different levels and in different forms, from data loss or theft to fraud passing by misusing system privileges 
          are all security threats and risks for the application. '
           titleClass="text-4xl text-blue-600 indent-18 max-md:indent-0 font-bold pb-7 2xl:text-6xl"
          descriptionClass="text-sm text-black 2xl:text-xl"
        />
        <div className='md:text-right md:mr-15'><Button title='Read more'/></div>
        </div>
      </div>
        <div className="mt-20 flex max-md:flex-col justify-center items-center gap-10 max-md:px-10 px-20 w-full">
        <InfoBloc
        image={images.bl1}
        imageClass='w-[100%]'
        description='Stella Joyce Bulu
                     AppsTech Apps DBA'
        descriptionClass='text-center leading-7 whitespace-pre-line text-sm'        
        className='w-[70%] max-md:w-[50%]'
        />
        <div className='max-md:text-center'>
        <InfoBloc
        title='Oracle  E-Business Suite security'
        description='There are so many misconceptions about securing Oracle E-Business Suite applications that most 
          Apps DBAs call Myths.Fortunately versus these myths are realities that show that security in your Oracle 
          E-Business is more than just installing an antivirus on the system or attributing passwords. Security comes at 
          different levels and in different forms, from data loss or theft to fraud passing by misusing system privileges 
          are all security threats and risks for the application. '
           titleClass="text-4xl text-blue-600 indent-18 max-md:indent-0 font-bold pb-7 2xl:text-6xl"
          descriptionClass="text-sm text-black 2xl:text-xl"
        />
        <div className='md:text-right md:mr-15'><Button title='Read more'/></div>
        </div>
      </div>
      <div className="mt-20 flex-col max-md:text-center justify-end self-end w-full md:px-20 max-md:px-8">
        <InfoBloc
          title="Introducing AppsTech Mobile Security for iOS and Android Devices"
          description={
            <>
            <ul>
              <li className='pb-1'>
                Bethesda, MD. – February 27, 2014
              </li>
              <li>
                As the workforce becomes increasingly mobile, the need for organizations to control access and protect company data on mobile devices 
                has become more critical than ever. When it comes to mobile security, organizations need a solution that offers advanced security 
                controls for corporate devices and personal devices (also known as Bring Your Own Device/BYOD or Corporate Owned Personally Enabled/
                COPE), while providing a simplified user experience. With AppsTech’s Mobile Security solution, organizations have the flexibility to permit 
                enterprise access from users’ devices with more granular control by isolating corporate and personal data, enabling secure enterprise 
                application access.                      
              </li>
            </ul>
            </>
          }
                                                                                                                                                                                                      
          titleClass="text-3xl text-center text-blue-600 font-bold pb-7 2xl:text-6xl"
          descriptionClass="text-sm text-black 2xl:text-xl"/>
          <div className='md:text-right md:mr-15'>
          <Button title='Read more'/>
          </div>
      </div>
      <div className="mt-20 flex-col max-md:text-center justify-end self-end w-full md:px-20 max-md:px-8">
        <InfoBloc
          title="Oracle introduces Oracle E-Business Suite R12.2"
          description={
            <>
            <ul>
              <li className='pb-1'>
                Redwood Shores, Calif. – September 19, 2013
              </li>
              <li>
                With the complexities of today’s global business environments, organizations depend on the high availability of their mission-critical systems. 
                To help customers manage that complexity and ensure continuous operation of their key business processes, Oracle has released Oracle E-
                Business Suite 12.2. The latest release introduces Online Patching to support organizations with high-availability requirements by dramatically 
                reducing planned maintenance downtimes, increases performance by exploiting latest, cutting-edge features of the Oracle platform, and 
                provides cross-industry enhancements spanning key business applications. With the powerful new capabilities, organizations will be able to 
                leverage an integrated suite of business applications to make better decisions, reduce costs and increase performance.      
              </li>
            </ul>
            </>
          }
                                                                                                                                                                                                      
          titleClass="text-3xl text-center text-blue-600 font-bold pb-7 2xl:text-6xl"
          descriptionClass="text-sm text-black 2xl:text-xl"/>
          <div className='md:text-right md:mr-15'>
          <Button title='Read more'/>
          </div>
      </div>
      <div className="mt-20 flex-col max-md:text-center justify-end self-end w-full md:px-20 max-md:px-8">
        <InfoBloc
          title="Oracle Announces General Availability of Oracle Database 12c, 
          the First Database Designed for the Cloud"
          description={
            <>
            <ul>
              <li className='pb-1'>
                Redwood Shores, Calif. – July 1, 2013
              </li>
              <li>
                As organizations embrace the cloud, they seek technologies that will transform business and improve their overall operational agility and 
                effectiveness. Oracle Database 12c is a next-generation database designed to meet these needs, providing a new multitenant architecture on 
                top of a fast, scalable, reliable, and secure database platform. By plugging into the cloud with Oracle Database 12c, customers can improve 
                the quality and performance of applications, save time with maximum availability architecture and storage management and simplify 
                database consolidation by managing hundreds of databases as one

                                                                                                                                                                                                                              
              </li>
            </ul>
            </>
          }
                                                                                                                                                                                                      
          titleClass="text-3xl text-center text-blue-600 font-bold pb-7 2xl:text-6xl"
          descriptionClass="text-sm text-black 2xl:text-xl"/>
          <div className='md:text-right md:mr-15'>
          <Button title='Read more'/>
          </div>
      </div>
      <div className="mt-20 pb-30 flex-col max-md:text-center justify-end self-end w-full md:px-20 max-md:px-8">
        <InfoBloc
          title="Oracle Renews AppsTech’s Oracle Platinum Membership"
          description={
            <>
            <ul>
              <li className='pb-1'>
                Bethesda, MD. – January 15
              </li>
              <li>
                AppsTech, a global provider of enterprise solutions, today announced that Oracle has renewed its Platinum Partner status in the Oracle 
                PartnerNetwork (OPN). By attaining Platinum level membership, Oracle has recognized AppsTech for its in-depth expertise and excellence in 
                delivering Oracle solutions.<br/>
                With its Platinum status, AppsTech receives the benefit of being recognized and preferred by Oracle and its customers, and receiving the 
                highest level of engagement, commitment and benefits available to OPN partners. Platinum members receive dedicated virtual account 
                management support to build joint development plans and help broaden specialization areas and revenue opportunities. Additional benefits 
                include priority placement in the OPN Solutions Catalog, one free application integration validated by Oracle, joint marketing and sales 
                opportunities, discounted training and more.

                                                                                                                                                                                                                              
              </li>
            </ul>
            </>
          }
                                                                                                                                                                                                      
          titleClass="text-3xl text-center text-blue-600 font-bold pb-7 2xl:text-6xl"
          descriptionClass="text-sm text-black 2xl:text-xl"/>
          <div className='md:text-right md:mr-15'>
          <Button title='Read more'/>
          </div>
      </div>
    </>
  )
}

export default Blog
