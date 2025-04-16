import Icon1 from '../assets/Icons/bus_icon.png'
import Icon2 from '../assets/Icons/cutlery.png'
import Icon3 from '../assets/Icons/recreation.png'
import Icon4 from '../assets/Icons/person.png'
import Icon5 from '../assets/Icons/medic.png'



export const sectionData=[
 
    {
        id: 1,
        title: 'Highlighted Events',
        paragraph: 'Recommended camps by our Instructors',
        banners:[
            {
                backgroundImage: 'src/assets/safari.jpg',
                title: 'Kilimanjaro',
                logo: [Icon1,Icon2,Icon3,Icon4,Icon5],
                extraText: '',
              },
              {
                backgroundImage: 'src/assets/safari.jpg',
                title: 'Everest',
                logo: [Icon1,Icon2,Icon3,Icon4,Icon5],
                extraText: '',
              },
              {
                  backgroundImage: 'src/assets/safari.jpg',
                  title: 'Kilimanjaro',
                  logo: [Icon1,Icon2,Icon3,Icon4,Icon5],
                  extraText: '',
              },
                {
                  backgroundImage: 'src/assets/safari.jpg',
                  title: 'Everest',
                  logo: [Icon1,Icon2,Icon3,Icon4,Icon5],
                  extraText: '',
                },
        ].map(banner => {
          if (1) {
            banner.title = (
              <h1 className="text-3xl font-bold text-white pt-40 pl-20" >
                {banner.title}
              </h1>
            );
          }
          return banner;
        }),

    },
    //section 2
    {
        id: 2,
        title: 'Snow Treks',
        paragraph: 'Experience the magic of winter landscapes with our guided snow treks',
        banners:[
            {
                backgroundImage: 'src/assets/safari.jpg',
                title: 'Kilimanjaro',
                logo: [],
                extraText: 'Extra text for Kilimanjaro',
              },
              {
                backgroundImage: 'src/assets/safari.jpg',
                title: 'Everest',
                logo: [],
                extraText: 'Extra text for Everest',
              },
              {
                  backgroundImage: 'src/assets/safari.jpg',
                  title: 'Kilimanjaro',
                  logo: [],
                  extraText: 'Extra text for Kilimanjaro',
              },
                {
                  backgroundImage: 'src/assets/safari.jpg',
                  title: 'Everest',
                  logo: [],
                  extraText: 'Extra text for Everest',
                },
        ].map(banner => {
          if (1) { 
              banner.title = <h1 className="text-2xl font-bold text-white pl-20">{banner.title}</h1>;
              
          }
          return banner;
      }),

    },
    //section 3
    {
        id: 3,
        title: 'Summer Events',
        paragraph: 'Join our exciting range of summer activities',
        banners:[
            {
                backgroundImage: 'src/assets/safari.jpg',
                title: 'Kilimanjaro',
                logo: [],
                extraText: 'Extra text for Kilimanjaro',
              },
              {
                backgroundImage: 'src/assets/safari.jpg',
                title: 'Everest',
                logo: [],
                extraText: 'Extra text for Everest',
              },
              {
                  backgroundImage: 'src/assets/safari.jpg',
                  title: 'Kilimanjaro',
                  logo: [],
                  extraText: 'Extra text for Kilimanjaro',
              },
                {
                  backgroundImage: 'src/assets/safari.jpg',
                  title: 'Everest',
                  logo: [],
                  extraText: 'Extra text for Everest',
                },
        ].map(banner => {
          if (1) { 
              banner.title = <h1 className="text-2xl font-bold text-white pl-20">{banner.title}</h1>;
              
          }
          return banner;
      }),


    },
    //section 4
    {
        id: 4,
        title: 'Epic Adventures',
        paragraph: 'Push your limits with our most thrilling outdoor challenges',
        banners:[
            {
                backgroundImage: 'src/assets/safari.jpg',
                title: 'Kilimanjaro',
                logo: [],
                extraText: 'Extra text for Kilimanjaro',
              },
              {
                backgroundImage: 'src/assets/safari.jpg',
                title: 'Everest',
                logo: [],
                extraText: 'Extra text for Everest',
              },
              {
                  backgroundImage: 'src/assets/safari.jpg',
                  title: 'Kilimanjaro',
                  logo: [],
                  extraText: 'Extra text for Kilimanjaro',
              },
                {
                  backgroundImage: 'src/assets/safari.jpg',
                  title: 'Everest',
                  logo: [],
                  extraText: 'Extra text for Everest',
                },
        ].map(banner => {
          if (1) { 
              banner.title = <h1 className="text-2xl font-bold text-white pl-20">{banner.title}</h1>;
              
          }
          return banner;
      }),


    },
    //section 5
    {
        id: 5,
        title: 'Special Events',
        paragraph: 'Join us for unique, limited-time gatherings that celebrate remarkable occasions',
        banners:[
            {
                backgroundImage: 'src/assets/safari.jpg',
                title: 'Kilimanjaro',
                logo: [],
                extraText: 'Extra text for Kilimanjaro',
              },
              {
                backgroundImage: 'src/assets/safari.jpg',
                title: 'Everest',
                logo: [],
                extraText: 'Extra text for Everest',
              },
              {
                  backgroundImage: 'src/assets/safari.jpg',
                  title: 'Kilimanjaro',
                  logo: [],
                  extraText: 'Extra text for Kilimanjaro',
              },
                {
                  backgroundImage: 'src/assets/safari.jpg',
                  title: 'Everest',
                  logo: [],
                  extraText: 'Extra text for Everest',
                },
        ].map(banner => {
          if (1) { 
              banner.title = <h1 className="text-2xl font-bold text-white pl-20">{banner.title}</h1>;
              
          }
          return banner;
      }),


    },
    //section 6
    {
        id: 6,
        title: 'Experience Yourself',
        paragraph: 'Exclusive footage from our camps',
        banners:[
            {
              
                videoUrl: 'https://www.youtube.com/embed/bKtxyA70G94?si=FPHKZKvrSuRgCwze',
               
                
              },
              {
                videoUrl: 'https://www.youtube.com/embed/OyzIWQCNKN0?si=Qw7JlOVcV6bMRNxZ ', 
               
              },
              {
                videoUrl: 'https://www.youtube.com/embed/J0vprjwb0A8?si=zZ0ZYo16u4jv9UwP',
                 
              },
                {
                  videoUrl: 'https://www.youtube.com/embed/u5tHxaaj3M4?si=vQSwpz27VgvF6ujw',
                  
                },
        ],

    },
]