import {Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Shared/Footer.jsx";
import Header from "./components/Shared/Header.jsx";
import "./App.css";
import clsx from "clsx";
import AboutPage from "./pages/AboutPage.jsx";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx"
import { AuthProvider } from "./components/Shared/Authentication.jsx"
import PrivateRoute from './components/Shared/PrivateRouteComponent.jsx';
import ContactPage from "./pages/ContactPage.jsx";
import ContactOffice from "./components/ContactPage/Office.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import TeamsPage from "./pages/TeamsPage.jsx";
import TCS from "./pages/TCS.jsx";
import Privacy from "./pages/Privacy.jsx"

function App() {
  const[showPara, setshowPara]=useState('False');
  const location=useLocation();

  useEffect(()=>{
    setshowPara(location.pathname==='/')
  },[location.pathname]);

  const headerBgClass = location.pathname !== '/' ? " bg-orange-600" : "";
  
  return (
    <>
    <AuthProvider>
      <Header  className={headerBgClass}/>
        <div className={clsx([
          "", 
          showPara ? "absolute top-0 left-0 w-full h-full z-[-1]  bg-[url('src/assets/safari.jpg')] bg-contain bg-center md:bg-cover flex flex-col min-h-screen transition-all" : "relative",
        
          ])}
        >
          <Routes>
            <Route path="/"element={<LandingPage />} />
            <Route path="/Register"element={<RegisterPage/>} />
            <Route path="/About" element={<AboutPage/>}/>
            <Route path="/Privacy" element={<Privacy />}/>
            <Route path="/Events" element={<EventsPage/>}/>
            <Route path="/TCS" element={<TCS/>}/>
            <Route path="/Teams" element={<TeamsPage/>}/>
            <Route path="/Contact" element={<ContactPage/>}>
                <Route path=":officeId" element={<ContactOffice/>}/>
            </Route>
            <Route path="/Login" element={<LoginPage/>}/>
            <Route element={<PrivateRoute/>}>
              <Route path="/Profile" element={<ProfilePage/>}/>
            </Route>   
          </Routes>
          <Footer/>
          </div>
    </AuthProvider>      
      
    </>
  );
}
export default App;
