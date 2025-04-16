


function Banner({logos,title,extraText,backgroundImage, highlighted}){
   
    return(
        <>
        <div className="flex flex-col border-1  rounded-lg w-[300px] h-[320px]">
            <div className="bg-cover bg-center  w-[300px] flex flex-col space-y-16"
                style={{ backgroundImage: `url(${backgroundImage})`,height: highlighted ? '320px' : '240px', width: highlighted ? '300px' : '300px',borderRadius: highlighted ? '12px' : '8px', }}>
                    <div >
                        <h1 className="">{title}</h1>
                    </div>
                    <div className="">
                        {logos.length > 0 && (
                        <div className="flex justify-center items-center space-x-4">
                            {logos.map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt={`Logo ${index + 1}`}
                                className="w-10 h-10 object-contain"/>
                        ))}
                        </div>
                    )}
                    </div>
                    <div className="mt-30 text-center">
                        <h1>{extraText}</h1>
                    </div>

                </div> 

           
        </div>   
        </>
       
    );
}
export default Banner