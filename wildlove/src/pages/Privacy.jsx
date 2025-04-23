import BelowHeader from "../components/Shared/BelowHeader";
import { useState,useEffect } from "react";
import axios from 'axios'
import { CONSTANTS } from "../Utils/constant.js";
import DataLoading from "../components/Shared/DataLoadingIcon";

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
        <div className="mt-0">
            <BelowHeader Header="Privacy Policy" Paragraph='Who we are and where do we stand'/>
        </div>
        <div className="p-4 min-h-[50vh]">
            {privacy? (
                <>
                
                {privacy.content.split("\n\n").map((section, index) => (
                    <p key={index} className="mb-4 text-lg leading-relaxed text-gray-700">
                        {section}
                    </p>
                ))}
                </>
            ) : (
                <div className="flex justify-center items-center h-[300px]">
                    <DataLoading className="animate-spin text-4xl text-orange-600" />
                </div>
            )}
    </div>
        </>
    );
}
export default Privacy