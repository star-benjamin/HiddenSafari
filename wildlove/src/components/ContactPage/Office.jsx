import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { CONSTANTS } from "../../Utils/constant.js"

function ContactOffice(){
    const { officeId} = useParams();
    const [contact, setcontact]=useState([]);
    const[error,seterror]=useState(null)

    useEffect(()=>{
      const fetchContacts=async()=>{
        try{
          const response=await axios.get(`${CONSTANTS.API_URL}/api/v1/contact`)
          setcontact(response.data);
        } catch(err){
          console.error("Contacts couldn't be fetched:",err);
          seterror("....Could not load contacts..");
        }
      };
      fetchContacts();
    },[])

    console.log(contact);

      const office = contact[officeId];
      if (!office) {
        return <p className="text-red-500 p-4">Office not found</p>;
      }
    return(
        <div className="border-2 bg-red-100 shadow rounded-lg h-[350px] w-[300px] m-4">
            <div className="p-4">
                <h1 >{office.ontact.name}</h1>
                <p>{office.contact.address}</p>
                <p>{office.contact.office_timings}</p><br/>
                <p>{office.contact.contact_numbers}</p><br/>
                <p className="pl-[180px] text-orange-500">View On Map</p>
            </div>
        </div>
    );
}
export default ContactOffice