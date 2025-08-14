import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavLinks from "./Containers/Navigation";
import Home from "./Pages/Home";
import Internship from "./Pages/Internship";
import CloudSolution from "./Pages/cloudSolution";
import MobileSecurity from "./Pages/MobileSecurity";
import MobileSolution from "./Pages/mobileSolution";
import OracleEbusiness from "./Pages/OracleEbusiness";
import Linux from "./Pages/Linux";
import Footer from "./Containers/Footer";
import About from "./Pages/about";
import News from "./Pages/news";
import Comunity from "./Pages/community/Comunity";
import OracleDatabase from "./Pages/OracleDatabase";
import Blog from "./Pages/Blog";
import AppstechLabs from "./Pages/appstechlabs";
import Careers from "./Pages/careers/Careers";
import Approach from "./Pages/Approach";
import Lisence from "./Pages/license";
import DBservices from "./Pages/oracleDBsevrice";
import OracleEbusinessServices from "./Pages/Oracle E-business Suite services/OracleEbusinessServices";
import ManagedServicces from "./Pages/Managed_Services";

function App() {
  return (
    <BrowserRouter>
      <NavLinks className="px-0 md:px-2" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/internship" element={<Internship />} />
        <Route path="/cloud_solutions" element={<CloudSolution />} />
        <Route path="/mobile_security" element={<MobileSecurity />} />
        <Route path="/mobile_solution" element={<MobileSolution />} />
        <Route path="/oracle_e_bsns" element={<OracleEbusiness />} />
        <Route path="/oracle_database" element={<OracleDatabase/>} />
        <Route path="/linux" element={<Linux />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/comunity" element={<Comunity/>}/>
        <Route path="/appstechlabs" element={<AppstechLabs/>}/>
        <Route path="/career" element={<Careers/>}/>
        <Route path="/approach" element={<Approach/>}/>
        <Route path="/license_management" element={<Lisence/>}/>
        <Route path="/oracle_database_services" element={<DBservices/>}/>
        <Route path="/oracle_e_business_suit" element={<OracleEbusinessServices/>}/>
        <Route path="/managed_services" element={<ManagedServicces/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
