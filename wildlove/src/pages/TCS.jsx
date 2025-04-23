 import BelowHeader from "../components/Shared/BelowHeader";
 import { Link } from "react-router-dom";

function TCS(){
    return(
        <>
        <div className="mt-0">
            <BelowHeader Header='Terms and Conditions' Paragraph='Meet the heroes behind our Success.'/>
        </div>
        <div className="p-4 min-h-[50vh]">
            <h1>Welcome to the terms and conditions page</h1>
            <p><Link to="/Privacy" className="hover:underline text-gray-500">View Our Privacy Policy</Link>  </p>
        </div>
        </>
    );
}
export default TCS