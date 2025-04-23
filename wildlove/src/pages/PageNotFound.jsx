import { Link } from "react-router-dom";

function PageNotFound(){
    return(
        <div className=" flex flex-col mt-14 p-4  text-gray-700 min-h-[50vh]">
            <h1 className="text-red-500 text-2xl">404 error</h1>
            <h2 className="text-2xl text-black">Page doesn't exist.<br/> Find the nearest exit. <br/>God speed!!</h2>
            <p><Link to='/' className="underline">Take me Home</Link></p>
        </div>
    );
}
export default PageNotFound