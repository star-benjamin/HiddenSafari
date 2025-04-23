import { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard.jsx';
import UserRating from './UserRating.jsx';
import DataLoading from "../Shared/DataLoadingIcon.jsx"; 
import { CONSTANTS } from "../../Utils/constant.js"; 

function Review({ Title, para }) {
  const ScrollRef = useRef();

  const [userData, setUserData] = useState([]);
  const [selectedUserIndex, setSelectedUserIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(`${CONSTANTS.API_URL}/api/v1/info/testimonials`);
        console.log('testimonials', response.data);
        setUserData(response.data);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setError('Could not load testimonials');
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const ScrollDown = () => {
    if (ScrollRef.current) {
      ScrollRef.current.scrollBy({ top: 100, behavior: 'smooth' });
    }
  };

  const ScrollUp = () => {
    if (ScrollRef.current) {
      ScrollRef.current.scrollBy({ top: -100, behavior: 'smooth' });
    }
  };

  const handleUserClick = (index) => setSelectedUserIndex(index);

  return (
    <div className="p-4">
      <div>
        <h1 className="font-bold text-amber-800">{Title}</h1>
        <p>{para}</p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-[300px]">
          <DataLoading className="animate-spin text-4xl text-orange-600" />
        </div>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 gap-0 m-10">
           
            <div className="relative">
             
              <button
                className="absolute -top-10 left-1/3 transform -translate-x-1/2 z-10"
                onClick={ScrollUp}
              >
                <img
                  src="/assets/UpArrow.png"
                  alt="Scroll up arrow"
                  className="w-[30px] h-[30px]"
                />
              </button>

              {/* Scrollable List */}
              <div className="h-[250px] overflow-y-auto scrollbar-none px-2 py-0 " ref={ScrollRef}>
                {userData.map((user, index) => (
                  <div
                    key={index}
                    onClick={() => handleUserClick(index)}
                    className={`cursor-pointer my-1 rounded p-1 ${
                      selectedUserIndex === index ? 'bg-pink-200' : 'bg-pink-50'
                    }`}
                  >
                    <UserCard
                      name={user.name}
                      role={user.role}
                      img={user.profileImage}
                    />
                  </div>
                ))}
              </div>

           
              <button
                className="absolute -bottom-10 left-1/3 transform -translate-x-1/2 z-10"
                onClick={ScrollDown}
              >
                <img
                  src="/assets/DownArrow.png"
                  alt="Scroll down arrow"
                  className="w-[30px] h-[30px]"
                />
              </button>
            </div>

           
            <div className="mt-10 ml-2 flex flex-col px-2">
              
              <UserRating
                coment={userData[selectedUserIndex]?.review}
                rating={userData[selectedUserIndex]?.ratings}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Review;
