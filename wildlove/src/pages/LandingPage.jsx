import Review from '../components/LandingPage/Review.jsx';
import Section from '../components/LandingPage/Section.jsx';
import Starts from '../components/LandingPage/LandingStartsIcons.jsx';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { CONSTANTS } from '../Utils/constant.js';
import { sectionData as initialSections } from '../Data/SectionData.jsx'; 
import { useNavigate } from 'react-router-dom';
//import FlyingBirds from '../components/LandingPage/FlyingBirds.jsx';
//import '/assets/fonts/fontstyles.css';

function LandingPage() {
  const [allEvents, setAllEvents] = useState({});
  const [sections, setSections] = useState(initialSections);
  const [error, setError] = useState(false);
  const navigate= useNavigate();

  useEffect(() => {
    const keywordToSectionId = {
      HighlightedEvents: 1,
      SnowTreks: 2,
      SummerEvents: 3,
      EpicAdventures: 4,
      SpecialEvents: 5,
      ExperienceYourself: 6,
    };

    const fetchAllEvents = async () => {
      try {
        const response = await axios.get(`${CONSTANTS.API_URL}/api/v1/events/all-events`);
        const fetchedData = response.data;
        setAllEvents(fetchedData);

        const updatedSections = [...initialSections];

        Object.keys(fetchedData).forEach((key) => {
          const sectionId = keywordToSectionId[key];
          if (!sectionId) return;

          const sectionIndex = updatedSections.findIndex(
            (section) => section.id === sectionId
          );

          if (sectionIndex === -1) return;

          const rawBanners = fetchedData[key];

          if (sectionId === 6) {
          
            updatedSections[sectionIndex].banners = rawBanners.map((item) => ({
              videoUrl: item.videoUrl,
            }));
          } else {
            updatedSections[sectionIndex].banners = rawBanners.map((item) => ({
              backgroundImage: item.bannerImages1,
              title: (
                <h1 className="text-2xl font-bold text-white pl-20">
                  {item.heading}
                </h1>
              ),
              logo: [], 
            }));
          }
        });

        setSections(updatedSections);
      } catch (err) {
        console.error("Error fetching events data:", err);
        setError("Could not load events.");
      }
    };

    fetchAllEvents();
  }, []);

  return (
    <>
      {/* {error && <div className="text-red-500 p-4">{error}</div>} */}

      <div className="text-5xl mt-20 m-4 text-white pl-4">
        <h1 className='pb-1' style={{ fontFamily: 'TheCrocodile-DY01d' }}>Experience</h1>
        <h1 style={{ fontFamily: 'TheCrocodile-DY01d' }}>Nature</h1>
      </div>

      <div className="m-4 mt-18 pl-4 text-2xl">
        <h1 className="text-white font-bold">India's Largest Trekking Organisation</h1>
      </div>

      <div className="m-2 flex flex-row pl-4">
        <Starts img="/assets/Icons/hiking.png" value="211,500+" valueName="Participants" />
        <Starts img="/assets/Icons/TeamsIcon.png" value="2750+" valueName="Volunteers" />
        <Starts img="/assets/Icons/tent.png" value="68+" valueName="Events" />
        <Starts img="/assets/Icons/time.png" value="11" valueName="Years" />
      </div>

      <div className="flex flex-col">
        {sections.map((section, index) => (
          <div key={section.id} onClick={() => navigate(`/event/${section.id}`)} className={`${index === 5 ? 'bg-red-200' : 'bg-white'}`}>
            <Section
              title={section.title}
              paragraph={section.paragraph}
              banners={section.banners}
            />
          </div>
        ))}
        <Review Title="Why people ❤️ Invincible" para="Experience the best with us" />
      </div>
    </>
  );
}

export default LandingPage;
