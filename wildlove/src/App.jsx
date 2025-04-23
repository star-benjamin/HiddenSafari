import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Shared/Footer.jsx";
import Header from "./components/Shared/Header.jsx";
import "./App.css";
import clsx from "clsx";
import AboutPage from "./pages/AboutPage.jsx";
import { useState, useEffect } from "react";
import LoginPage from "./pages/LoginPage.jsx";
import { AuthProvider } from "./components/Shared/Authentication.jsx";
import PrivateRoute from './components/Shared/PrivateRouteComponent.jsx';
import ContactPage from "./pages/ContactPage.jsx";
import ContactOffice from "./components/ContactPage/Office.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import TeamsPage from "./pages/TeamsPage.jsx";
import TCS from "./pages/TCS.jsx";
import Privacy from "./pages/Privacy.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import EventDetailPage from "./pages/EventsDetailPage.jsx";

function App() {
  const [currentImage, setCurrentImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const landingImages = [
    "/src/assets/waterfall.jpg",
    "/src/assets/safari.jpg",
    "/src/assets/bird.jpg",
    "/src/assets/zipline.jpg"
  ];

  const eventImages = [
    "/src/assets/elephants.jpg",
    "/src/assets/rhino.jpg",
    "/src/assets/festival.jpg",
    "/src/assets/mountain.jpg"
  ];

  useEffect(() => {
    let imageSet = [];

    if (location.pathname === "/") {
      imageSet = landingImages;
    } else if (location.pathname.startsWith("/event/")) {
      imageSet = eventImages;
    } else {
      setCurrentImage(null); 
      return;
    }

    let index = 0;
    setCurrentImage(imageSet[index]);
    setCurrentIndex(index);

    const interval = setInterval(() => {
      index = (index + 1) % imageSet.length;
      setCurrentImage(imageSet[index]);
      setCurrentIndex(index);
    }, 3000); 

    return () => clearInterval(interval);
  }, [location.pathname]);

 
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const isEventDetailPage = location.pathname.startsWith("/event/");
  const isLandingPage = location.pathname === "/";

  const headerBgClass =
    (!isLandingPage && !isEventDetailPage) || isScrolled
      ? " bg-orange-600 bg-opacity-90 backdrop-blur-sm shadow-md transition-colors duration-300"
      : "";

  const currentImages =
    isLandingPage ? landingImages :
    isEventDetailPage ? eventImages : [];

  return (
    <>
      <AuthProvider>
        <Header className={headerBgClass} />

        {currentImage && (
          <>
            <div
              className="absolute top-0 left-0 w-full h-full -z-10 bg-cover bg-center transition-all duration-1000"
              style={{ backgroundImage: `url(${currentImage})` }}
            ></div>

            <div className="absolute top-72 md:top-80 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
              {currentImages.map((_, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full transition duration-300 ${
                    i === currentIndex ? "bg-white scale-110" : "bg-gray-400"
                  }`}
                ></span>
              ))}
            </div>
          </>
        )}

        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Events" element={<EventsPage />} />
          <Route path="/event/:sectionId" element={<EventDetailPage />} />
          <Route path="/TCS" element={<TCS />} />
          <Route path="/Teams" element={<TeamsPage />} />
          <Route path="/Contact" element={<ContactPage />}>
            <Route path=":officeId" element={<ContactOffice />} />
          </Route>
          <Route path="/Login" element={<LoginPage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/Profile" element={<ProfilePage />} />
          </Route>
        </Routes>

        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
