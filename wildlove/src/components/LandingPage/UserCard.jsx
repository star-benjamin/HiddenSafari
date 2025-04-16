
function UserCard(props){
    return(
        <div className="border-gray-400 border-1 flex flex-row bg-red-100 h-[80px] w-[400px]">
           
            <div className="m-2">
                <img src={props.img} alt="Employee Profile picture" className="w-[50px] m-4 h-[50px] rounded-full"/>
            </div>
            
            <div className="justify-items-start p-5 pl-1">
                <h1 className="font-bold">{props.name}</h1>
                <p className="text-gray-400">{props.role}</p>
            </div>
        </div>
    );
}
export default UserCard