import SearchBar from '../LandingPage/SearchBar.jsx'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-red-200 w-full text-black py-6 mt-auto">
      <div className="container mx-auto flex flex-col items-center px-4 space-y-6">
      
        <h1 className="text-xl font-bold">HiddenSafari</h1>

       
        <ul className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-4 text-center">
          <li className="hover:underline"><Link to="/Teams">Teams</Link></li>
          <li className="hover:underline"><Link to="/About">About</Link></li>
          <li className="hover:underline"><Link to="/Events">Events</Link></li>
          <li className="hover:underline"><Link to="/Contact">Contact Us</Link></li>
          <li className="hover:underline"><Link to="/TCS">Terms and Conditions</Link></li>
        </ul>

        
        <div className="flex flex-col md:flex-row justify-between  items-center w-full max-w-4xl px-0">
       
          <div className="self-start w-full md:w-auto">
            <SearchBar className=''/>
          </div>

     
          <div className="flex flex-wrap justify-center gap-4">
            <img src="src/assets/linkedin.png" alt="LinkedIn" className="w-6 h-6 md:w-8 md:h-8" />
            <img src="src/assets/facebook.png" alt="Facebook" className="w-6 h-6 md:w-8 md:h-8" />
            <img src="src/assets/threads.png" alt="Threads" className="w-6 h-6 md:w-8 md:h-8" />
            <img src="src/assets/youtube.png" alt="YouTube" className="w-6 h-6 md:w-8 md:h-8" />
        </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
