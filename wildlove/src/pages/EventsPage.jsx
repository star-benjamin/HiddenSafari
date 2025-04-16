import Icon1 from '../assets/Icons/three dots.png';
import search from '../assets/search.png';
import { useEffect, useState } from 'react';
import Banner from '../components/LandingPage/Banner.jsx';
import axios from 'axios';
import { CONSTANTS } from '../Utils/constant.js';

function EventsPage(){
    const[AllEvents,setAllEvents]=useState([]);
    const[error,seterror]=useState(false);
    const[Loading,setLoading]=useState(false);
    const [visibleCount, setVisibleCount] = useState(6);

    useEffect(()=>{
        const fetchAllEvents=async ()=>{
        try{
            const response = await axios.get(`${CONSTANTS.API_URL}/api/v1/events/all-events`);
            console.log("Fetched events data:", response.data);
            setAllEvents(response.data);
        }catch (err){
            console.error("error fetching events data:", err);
            seterror("could not load Events");
        }
        };
        fetchAllEvents();
    },[]);

     // Flatten all events from all categories into a single array
        const flattenedEvents = Object.values(AllEvents).flat();
        console.log("flattened events",flattenedEvents);

        const handleLoadMore = () => {
            setVisibleCount(prev => prev + 6);
        };
      
      
    if (Loading) return <p>Loading...</p>;
    if (error) return console.log(error);

    return(
        <>
            <div className="flex flex-col lg:flex-row  pl-4 bg-orange-600">
                <div>
                    <h1 className="text-white font-bold text-2xl">Events</h1>
                    <p className="text-white p-2 pb-6">Life is either a daring adventure or nothing</p>
                </div>
                <div className="pl-4 pt-[20px] lg:pl-[600px]">
                    <form className=' flex flex-row border-1 rounded-lg bg-white'>
                        <input className='text-black p-2 ' type="email" placeholder="Search Here"></input>
                        <img className=' rounded-lg w-[40px] h-[40px] m-0 p-1 bg-amber-700' src={search} alt="search icon"/>
                    </form>
                </div>
                
            </div>

            <div className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
                {flattenedEvents.slice(0, visibleCount).map((event, index) => (
                <div key={event.id || index} className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src={event.bannerImages1} alt={event.heading} className="w-full h-48 object-cover" />
                    <div className="p-4">
                    <h3 className="text-lg font-semibold">{event.heading}</h3>
                    <p className="text-sm text-gray-600">{event.calendarDates}</p>
                    </div>
                </div>
                ))}
            </div>

            {/* Load More Button */}
            {visibleCount < flattenedEvents.length && (
                <div className="flex justify-center mt-6">
                <button
                    onClick={handleLoadMore}
                    className="text-orange-600 font-semibold hover:underline"
                >
                    Load More
                </button>
                </div>
            )}

            {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
                
        </>
    ); 
}
export default EventsPage