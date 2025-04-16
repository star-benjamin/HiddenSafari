import BelowHeader from "../components/Shared/BelowHeader";
import { useState,useEffect } from "react";
import axios from 'axios'
import { CONSTANTS } from "../Utils/constant.js";

function Privacy(){
    const[privacy,setprivacy]=useState(null);
    const[error,seterror]=useState(null);

    useEffect(()=>{
        const fetchPrivacy = async ()=>{
            try {
                const response = await axios.get(`${CONSTANTS.API_URL}/api/v1/info/privacy-policy`)
                setprivacy(response.data);
            }catch(err){
                console.error("Unable to fetch privacy data:",err);
                seterror("Could not load privacy data");
            }
        };
        fetchPrivacy();
    },[]);

    return(
        <>
        <div>
            <BelowHeader Header="Privacy Policy" Paragraph='Who we are and where do we stand'/>
        </div>
        <div className="p-4 min-h-[50vh]">
            {privacy? (
                <>
                {error && <p className="text-red-500">{error}</p>}
                {privacy.content.split("\n\n").map((section, index) => (
                    <p key={index} className="mb-4 text-lg leading-relaxed text-gray-700">
                        {section}
                    </p>
                ))}
                </>
            ) : (
                <p className="text-gray-500 text-center">Loading Privacy content...</p>
            )}
    </div>
        </>
    );
}
export default Privacy