import HomeIcon from '/assets/Icons/HomeIcon.png'
import EventIcon from '/assets/Icons/EventIcon.png'
import ContactIcon from '/assets/Icons/ContactIcon.png'
import AboutIcon from '/assets/Icons/AboutIcon.png'
import TeamsIcon from '/assets/Icons/TeamsIcon.png'
import Icon from '../LandingPage/Icon.jsx'
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './Authentication.jsx'
import { Menu, X } from 'lucide-react'; 

function Header({ className }) {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [word, setword] = useState('');
  const [isOpen, setIsOpen] = useState(false); 

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    setword('HiddenSafari');
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const renderLinks = () => (
    <>
      <li><Link to="/"><Icon img={HomeIcon}/>Home</Link></li>
      <li><Link to="/Events"><Icon img={EventIcon}/>Events</Link></li>
      {isAuthenticated ? (
        <>
          <li><Link to="/Profile"><Icon img={AboutIcon}/>Profile</Link></li>
        </>
      ) : null}
      <li><Link to="/Teams"><Icon img={TeamsIcon}/>Team</Link></li>
      <li><Link to="/About"><Icon img={AboutIcon}/>About</Link></li>
      <li><Link to="/Contact"><Icon img={ContactIcon}/>Contact</Link></li>
      {!isAuthenticated ? (
        <li><Link to="/Login"><Icon img={ContactIcon}/>Login</Link></li>
      ) : (
        <li>
          <button onClick={handleLogout} className="flex items-center">
            <Icon img={AboutIcon}/>Logout
          </button>
        </li>
      )}
    </>
  );

  return (
    <div className={`${className} sticky top-0 z-50 `}>
      <div className="flex justify-between items-center px-4 py-3">
        <div className="text-white text-2xl">{word}</div>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="text-white w-6 h-6" /> : <Menu className="text-white w-6 h-6" />}
          </button>
        </div>
        <ul className="hidden lg:flex space-x-6 text-white text-lg items-center">
          {renderLinks()}
        </ul>
      </div>

     
      {isOpen && (
        <ul className="lg:hidden flex flex-col bg-orange-600 text-white text-lg space-y-4 p-4">
          {renderLinks()}
        </ul>
      )}
    </div>
  );
}

export default Header;
