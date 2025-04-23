import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CONSTANTS } from '../Utils/constant';

function EventDetailPage() {
  const { sectionId } = useParams();
  const[section,setSection]=useState(null);
  const[loading,setloading]=useState(true)
  
  useEffect(()=>{
    const fetchSection= async ()=>{
      try{
        setloading(true);
        const response = await axios.get(`${CONSTANTS.API_URL}/api/v1/events/${sectionId}`);
        const fetchedData = response.data;
        setSection(fetchedData);
      }catch(error){
        console.error(`Failed to fetch section:${sectionId}`,error);
      }finally{
        setloading(false);
      }
    };
    fetchSection();
  },[sectionId]);

  if (loading) {
    return console.log('Loading section')
    
  }

  if (!section) {
    return console.log('section not found')
    
  }
  
  return (
    <div className="p-6 max-w-6xl mx-auto min-h-[50vh] mt-150">
      <h1 className="text-4xl font-bold mb-4">{section.heading}</h1>
      <p className="text-lg text-gray-700 mb-2">{section.calendarDates}</p>
      <p className="text-gray-800 mb-6">{section.about}</p>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {[section.bannerImages1, section.bannerImages2, section.bannerImages3].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Banner ${idx + 1}`}
            className="w-full h-48 object-cover rounded-lg shadow"
          />
        ))}
      </div>

      
      <h2 className="text-2xl font-semibold mb-4">🗓️ {section.numberOfDays}-Day Itinerary</h2>
      <div className="space-y-6">
        {section.schedule.map(day => (
          <div key={day.day} className="flex flex-col md:flex-row items-start bg-white rounded-lg shadow p-4 gap-4">
            <img src={day.bannerImage} alt={`Day ${day.day}`} className="w-full md:w-60 h-40 object-cover rounded-md" />
            <div>
              <h3 className="text-xl font-bold">Day {day.day}</h3>
              <p className="text-gray-700">{day.plan}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventDetailPage;
