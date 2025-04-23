import Banner from './Banner.jsx';
import { useRef } from 'react';

function Section({title, paragraph, banners }) {
  const scrollRef=useRef(null);
  const isHighlightedEvents = title === 'Highlighted Events';

 
  const ScrollRight=()=>{
      if(scrollRef.current){
        scrollRef.current.scrollBy({
          left:200,
          behaviour: 'smooth'
        });
      }
  };

  const ScrollLeft=()=>{
    if(scrollRef.current){
      scrollRef.current.scrollBy({
        left:-200,
        behaviour: 'smooth',
      });
    }
};
  return (
    <>
    <div className="p-8 relative">
     
      <div>
        <h1 className="font-bold text-amber-800">{title}</h1>
      </div>

      
      <div>
        <p>{paragraph}</p>
      </div>
     
      
      {/* Banner Section */}
      <div className=''>
          <button className='absolute top-1/2 left-0 transform -translate-y-1/2 ' onClick={ScrollLeft}>
              <img src='/assets/LeftArrow.png' alt="left navigation arrow" className='w-[50px] h-[50px]'/>
          </button>
      </div>
      
      <div
        className="my-8 m-4 relative flex space-x-12 overflow-x-auto"
        ref={scrollRef}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {banners.map((banner, index) =>
          banner.videoUrl ? (
            
            <iframe
              key={index}
              width="660" 
              height="315" 
              src={banner.videoUrl} 
              
            ></iframe>
          ) : (
           
            <Banner
              key={index}
              backgroundImage={banner.backgroundImage}
              title={banner.title}
              logos={banner.logo}
              extraText={banner.extraText}
              highlighted={isHighlightedEvents}
            />
          )
        )}     
      </div>
      <div>
        <button className='absolute top-1/2 right-0 transform -translate-y-1/2 ' onClick={ScrollRight}>
            <img src='/assets/RightArrow.png' alt="right navigation arrow" className='w-[40px] h-[40px]'/>
        </button>
      </div> 
    </div>
    </>
  );
}

export default Section;
