import BelowHeader from "../components/Shared/BelowHeader";
import {useState,useEffect} from 'react';
import { CONSTANTS } from "../Utils/constant";
import axios from "axios";

function AboutPage(){
    const[about,setabout]=useState(null);
    const[error,seterror]=useState(null);

    useEffect(()=>{
        const fetchAbout = async ()=>{
            try {
                const response = await axios.get(`${CONSTANTS.API_URL}/api/v1/info/about-us`)
                setabout(response.data);
            }catch(err){
                console.error("Unable to fetch about data:",err);
                seterror("Could not load about data");
            }
        };
        fetchAbout();
    },[]);

    return(
        <>
        <div>
            <BelowHeader Header="About Us" Paragraph='Who we are and where do we stand'/>
        </div>
        <div className="px-6 py-8 max-w-4xl mx-auto">
            {about? (
                <>
                {error && <p className="text-red-500">{error}</p>}
                {about.content.split("\n\n").map((section, index) => (
                    <p key={index} className="mb-4 text-lg leading-relaxed text-gray-700">
                        {section}
                    </p>
                ))}
                </>
            ) : (
                <p className="text-gray-500 text-center">Loading About Us content...</p>
            )}
    </div>
        </>
    );
}
export default AboutPage