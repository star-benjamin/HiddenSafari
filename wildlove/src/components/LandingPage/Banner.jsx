function Banner({ title, extraText, backgroundImage, highlighted }) {
    const logos = [
        "/assets/Icons/bus_icon.png",
        "/assets/Icons/cutlery.png",
        "/assets/Icons/tent.png",
        "/assets/Icons/hiking.png",
        "/assets/Icons/medic.png"
      ];

    return (
      <div className="flex-shrink-0 flex flex-col border-2 rounded-lg w-[320px] h-[320px] overflow-hidden">
        {highlighted ? (
         
          <div
            className="bg-cover bg-center w-full h-full flex flex-col justify-evenly py-4 px-4"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              fontFamily: "'Charm', cursive",
              borderRadius: '8px',
            }}
          >
            <h1 className="text-white text-xl font-bold ">{title}</h1>
            {logos.length > 0 && (
              <div className="flex  space-x-4">
                {logos.map((logo, index) => (
                  <img
                    key={index}
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className="w-10 h-10 object-contain"
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
        
          <>
            <div
              className="bg-cover bg-center w-full"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                fontFamily: "'Lexend', sans-serif",
                height: '240px',
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
              }}
            >
              <div className="h-full flex flex-col py-4 px-1">
                <h1 className="text-black text-xl font-bold uppercase">{title}</h1>
                {/* {logos.length > 0 && (
                  <div className="flex justify-center items-center space-x-4">
                    {logos.map((logo, index) => (
                      <img
                        key={index}
                        src={logo}
                        alt={`Logo ${index + 1}`}
                        className="w-10 h-10 object-contain"
                      />
                    ))}
                  </div>
                )} */}
              </div>
            </div>
  
         
            <div className="flex-1 bg-orange-200">
              <h1 className="text-black  text-sm">{extraText}</h1>
            </div>
          </>
        )}
      </div>
    );
  }
  
  export default Banner;
  