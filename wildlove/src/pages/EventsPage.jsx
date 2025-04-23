import { useEffect, useState } from 'react';
import axios from 'axios';
import DataLoading from "../components/Shared/DataLoadingIcon";
import search from '/assets/search.png';
import { CONSTANTS } from '../Utils/constant.js';
import { useNavigate } from 'react-router-dom';

const categoryAPIMap = {
  'Snow Treks': '/api/v1/events/snow-treks-events',
  'Summer': '/api/v1/events/summer-events',
  'Monsoon': '/api/v1/events/monsoon-events',
  'Epic Adventures': '/api/v1/events/epic-adventure-events',
  'Special': '/api/v1/events/special-events',
  'Highlighted': '/api/v1/events/highlighted-events'
};

function EventsPage() {
  const [categoryData, setCategoryData] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);
  const navigate = useNavigate();  

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      const newCategoryData = {};
      try {
        await Promise.all(Object.entries(categoryAPIMap).map(async ([label, endpoint]) => {
          const res = await axios.get(`${CONSTANTS.API_URL}${endpoint}`);
          newCategoryData[label] = res.data;
        }));
        setCategoryData(newCategoryData);
        setFilteredEvents(Object.values(newCategoryData).flat());
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError('Failed to load events.');
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchQuery('');
    setVisibleCount(8);

    if (category === 'All') {
      setFilteredEvents(Object.values(categoryData).flat());
    } else {
      setFilteredEvents(categoryData[category] || []);
    }
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setSelectedCategory('All');
    setVisibleCount(8);

    const allEvents = Object.values(categoryData).flat();
    const filtered = allEvents.filter(event =>
      event.heading.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  const handleEventClick = (eventId) => {
  
    navigate(`/event/${eventId}`);
  };

  const allCategories = ['All', ...Object.keys(categoryAPIMap)];

  return (
    <>
      <div className="flex flex-col mt-0 lg:flex-row justify-between items-start lg:items-center p-4 bg-orange-600">
        <div>
          <h1 className="text-white font-bold text-2xl">Events</h1>
          <p className="text-white py-2">Life is either a daring adventure or nothing</p>
        </div>
        <form className="flex items-center max-w-md mx-auto border rounded-lg bg-white mt-4 lg:mt-0">
          <input
            type="text"
            className="flex-1 text-black p-2 outline-none"
            placeholder="Search Here"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button type="submit" className="p-2" onClick={(e) => e.preventDefault()}>
            <img src={search} alt="search" className="w-6 h-6" />
          </button>
        </form>
      </div>

      
      <div className="flex flex-wrap justify-center gap-4 p-4 bg-white shadow-sm">
        {allCategories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => handleCategoryClick(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              selectedCategory === cat
                ? 'bg-orange-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-orange-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

     
      <div className="min-h-[50h] p-4 bg-gray-50">
        {Loading ? (
          <div className="flex justify-center items-center h-[60vh]">
            <DataLoading className="animate-spin text-4xl text-orange-600" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-[50vh]">
              {filteredEvents.slice(0, visibleCount).map((event, idx) => (
                <div
                  key={event.id || idx}
                  className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-lg"
                  onClick={() => handleEventClick(event.id)}  
                >
                  <img
                    src={event.bannerImages1}
                    alt={event.heading}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{event.heading}</h3>
                    <p className="text-sm text-gray-600">{event.calendarDates}</p>
                    <p className="text-xs text-gray-500 mt-1">{event.category}</p>
                  </div>
                </div>
              ))}
            </div>

            
            {visibleCount < filteredEvents.length && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={handleLoadMore}
                  className="text-orange-600 font-semibold hover:underline"
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}

        
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </>
  );
}

export default EventsPage;
