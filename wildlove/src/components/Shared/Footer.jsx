import SearchBar from '../LandingPage/SearchBar.jsx'
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <div className="bg-red-200 pl-0 flex flex-col md:justify-center items-center">
            <div className="">
                <h1 className="p-2">HiddenSafari</h1>
            </div>

            <div>
                <ul className="flex flex-col md:flex-row  p-2 m-2 w-[600px] ">
                    <li className="p-4 text-black hover:underline"><Link to="/Teams">Teams</Link></li>
                    <li className="p-4 text-black hover:underline"><Link to="/About">About</Link></li>
                    <li className="p-4 text-black hover:underline"><Link to="/Events">Events</Link></li>
                    <li className="p-4 text-black hover:underline"><Link to="/Contact">Contat US</Link></li>
                    <li className="p-4 text-black hover:underline"><Link to="/TCS">Terms and Condition</Link></li>
                </ul>
            </div>

            <div className='flex flex-col md:flex-row space-x-60 md:space-x-100 lg:space-x-200  pb-5'>
                {/*For the serach bar*/}
                <div className='just'>
                    <SearchBar/>
                </div>

                {/*For the social media links*/}
                <div >
                    <ul className='flex flex-col md:flex-row space-x-2 w-[100px] h-[100px]'>
                        <li><img src="src/assets/linkedin.png"/></li>
                        <li><img src="src/assets/facebook.png"/></li>
                        <li><img src="src/assets/threads.png"/></li>
                        <li><img src="src/assets/youtube.png"/></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Footer