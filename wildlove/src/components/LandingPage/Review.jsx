import { useRef, useState } from 'react';
import UserCard from './UserCard';
import UserRating from './UserRating';

function Review(props) {
  const ScrollRef = useRef();

  const [UserData, setUserData] = useState({
    Users: [
      {
        User_picture: 'src/assets/CEO.jpg',
        name: 'Jaja Benjamin',
        role: 'Founder',
        review_message:
          "This trekking organization is excellent. Their costs are minimal due to their NGO's non-profit efforts. You can have the experience of trekking at the lowest cost with basic amenities and the best available trek leaders. The best part is the food they provide during the trek. Their cooks are the best I have experienced so far with different organizations. The food they serve is healthy and a balanced.",
        rating: '',
      },
      {
        User_picture: 'src/assets/CEO.jpg',
        name: 'Jaja Sukwe',
        role: 'Developer',
        review_message: 'This trekking organization is excellent.',
        rating: '',
      },
    ],
  });

  const [selectedUserIndex, setSelectedUserIndex] = useState(0); 

  const ScrollDown = () => {
    if (ScrollRef.current) {
      ScrollRef.current.scrollBy({
        top: 100,
        behavior: 'smooth',
      });
    }
  };

  const ScrollUp = () => {
    if (ScrollRef.current) {
      ScrollRef.current.scrollBy({
        top: -100,
        behavior: 'smooth',
      });
    }
  };


  const handleUserClick = (index) => {
    setSelectedUserIndex(index);
  };

  return (
    <div className="p-4">
      <div>
        <h1 className="font-bold text-amber-800">{props.Title}</h1>
      </div>

     
      <div>
        <p>{props.para}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-0.5">
        {/* Scroll section */}
        <section className="my-8 flex flex-row relative scrollbar-none h-[200px] w-[200]">
          <div
            className="overflow-x-auto h-[250px]"
            ref={ScrollRef}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {UserData.Users.map((User, index) => (
              <div key={index} onClick={() => handleUserClick(index)} className={selectedUserIndex === index ? 'bg-red-300' : ''}>
                <UserCard
                  name={User.name}
                  role={User.role}
                  img={User.User_picture}
                />
              </div>
            ))}
          </div>
          <div>
            <button
              className="absolute bottom-2 left-1/5 transform translate-y-1/2"
              onClick={ScrollDown}
            >
              <img
                src="src/assets/DownArrow.png"
                alt="right navigation arrow"
                className="w-[40px] h-[40px]"
              />
            </button>
          </div>
        </section>

        {/* Review section */}
        <div className="flex flex-col">
          <UserRating coment={UserData.Users[selectedUserIndex].review_message} />
        </div>
      </div>
    </div>
  );
}

export default Review;
