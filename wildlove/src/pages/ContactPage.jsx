import BelowHeader from "../components/Shared/BelowHeader";
import { Link, Outlet } from "react-router-dom";

function ContactPage(){
    return(
        <>
        <div>
            <BelowHeader Header='Contact' Paragraph='Life is either a daring adventure or nothing.'/>
        </div>
        <div className=" relative min-h-[40vh]">
            <Link className="text-orange-500 p-4 underline" to="/Contact/office1">Office 1</Link>
            <Link className="text-orange-500 p-4 underline" to="/Contact/office2">Office 2</Link>
            <Link className="text-orange-500 p-4 underline" to="/Contact/office3">Office 3</Link>
            <Link className="text-orange-500 p-4 underline" to="/Contact/office4">Office 4</Link>
            
            <div className="grid grid-cols">
                <Outlet/>  
            </div>
        </div>   
        </>
    );
}
export default ContactPage