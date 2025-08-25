import BigData from "../assets/images/BigData.png"
import enterpriseRepor from "../assets/images/enterpriseRepor.png"
import OlapAnalysis from "../assets/images/OlapAnalysis.png"
import inforDisc from "../assets/images/InforDisc.jpg"
import mobileBI from "../assets/images/mobileBI.jpg"
import realTime from "../assets/images/Rtdm.jpg"

export interface OIntelligenceDataItems{
    image: string;
    title: string;
    description: string;
    link: string;
}

export const OIntelligenceData: OIntelligenceDataItems[] = [
    {
        image: enterpriseRepor,
        title: "Enterprise Reporting",
        description: "Implement a single solution for authoring, managing, and distributing highly formatted reports and forms to get more results with less effort.",
        link: "https://www.oracle.com/what-is-business-intelligence/"
    },
    {
        image: BigData,
        title: "Big Data",
        description: "Data volumes are growing astronomically. Turn your data crisis into a competitive advantage with best-in-class BI solutions for analyzing big data.",
        link: "https://www.oracle.com/us/solutions/business-analytics/business-intelligence/big-data/overview/index.html"
    },
    {
        image: OlapAnalysis,
        title: "Olap Analytics",
        description: "Gain insights not only into what happened and what’s happening in your business but also what the future may hold – with the most widely deployed OLAP server in the World.",
        link: "https://www.oracle.com/us/solutions/business-analytics/business-intelligence/essbase/overview/index.html"
    },
    {
        image: inforDisc,
        title: "Information Discovery",
        description: "New business opportunities are sometimes hidden in data sources that extend beyond your data warehouse. Search and explore structured and unstructured data – within the enterprise and beyond.",
        link: "https://www.oracle.com/us/solutions/business-analytics/business-intelligence/endeca/overview/index.html"
    },
    {
        image: mobileBI,
        title: "Mobile BI",
        description: "Business doesn’t stop just because you’re on the go. Make sure critical information is reaching you wherever you are.",
        link: "https://www.oracle.com/what-is-business-intelligence/"
    },
    {
        image: realTime,
        title: "Real-Time Decision Management",
        description: "Optimize and manage recurring, high-volume operational decisions with a self-adapting decision services framework that adapts in real time to change and uncertainty.",
        link: "https://www.oracle.com/us/solutions/business-analytics/business-intelligence/real-time-decisions/overview/index.html"
    }
]