import HomeIcon from '../../assets/Icons/HomeIcon.png'
import EventIcon from '../../assets/Icons/EventIcon.png'
import ContactIcon from '../../assets/Icons/ContactIcon.png'
import AboutIcon  from '../../assets/Icons/AboutIcon.png'
import TeamsIcon from '../../assets/Icons/TeamsIcon.png'
import Icon from '../LandingPage/Icon.jsx'
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './Authentication.jsx'



function Header({className}){
    const { isAuthenticated, logout } = useAuth();
    
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();  
        navigate("/Home");  
    };

    const[word,setword]=useState('')
    useEffect(()=>{
        setword('HiddenSafari')
        },[])
    return(
       
        <div className={`${className} sticky top-0 z-50 `}>
            <ul className="flex flex-col lg:flex-row justify-between w-1/4">
            <li className="p-2 m-2 text-white text-2xl pr-[580px]">{word}</li>
            {!isAuthenticated?(
                    <>
                    <div className="flex">
                        <li className="p-1 m-2 text-white "><Link className="flex  space-x-0.5 hover:underline" to="/"><Icon img={HomeIcon}/>Home</Link></li>
                        <li className="p-1 m-2 text-white "><Link className="flex  space-x-0.5 hover:underline" to="/Events"><Icon img={EventIcon}/>Events</Link></li>
                        <li className="p-1 m-2 text-white "><Link className="flex  space-x-0.5 hover:underline" to="/Teams"><Icon img={TeamsIcon}/>Team</Link></li>
                        <li className="p-1 m-2 text-white "><Link className="flex  space-x-0.5 hover:underline" to="/About"><Icon img={AboutIcon}/>About</Link></li>
                        <li className="p-1 m-2 text-white "><Link className="flex  space-x-0.5 hover:underline" to="/Contact"><Icon img={ContactIcon}/>Contact</Link></li>
                        <li className="p-1 m-2 text-white "><Link className="flex  space-x-0.5 hover:underline" to="/Login"><Icon img={ContactIcon}/>Login</Link></li>
                        {/*<li className="p-1 m-2 text-white "><Link className="flex  space-x-0.5 hover:underline" to="/Register"><Icon img={ContactIcon}/>Register</Link></li>*/}
                    </div>
                    </>
                ):(
                    <>
                        <div className="flex ">
                            <li className="p-1 m-2 text-white "><Link className="flex  space-x-0.5 hover:underline" to="/Home"><Icon img={HomeIcon}/>Home</Link></li>
                            <li className="p-1 m-2 text-white "><Link className="flex  space-x-0.5 hover:underline" to="/Events"><Icon img={EventIcon}/>Events</Link></li>
                            <li className="p-1 m-2 text-white "><Link className="flex  space-x-0.5 hover:underline" to="/Profile"><Icon img={AboutIcon}/>Profile</Link></li>
                            <li className="p-1 m-2 text-white "><Link className="flex  space-x-0.5 hover:underline" to="/Teams"><Icon img={TeamsIcon}/>Team</Link></li>
                            <li className="p-1 m-2 text-white "><Link className="flex  space-x-0.5 hover:underline" to="/About"><Icon img={AboutIcon}/>About</Link></li>
                            <li className="p-1 m-2 text-white "><Link className="flex  space-x-0.5 hover:underline" to="/Contact"><Icon img={ContactIcon}/>Contact</Link></li> 
                            <li className="p-1 m-2 text-white "><Link className="flex  space-x-0.5" to="/About"><Icon img={AboutIcon}/><button onClick={handleLogout} className="text-white hover:underline">Logout</button></Link></li>
                        </div>
                    </>
                )}
                
                
                
            </ul>
        </div>
    );
}
export default Header