
function UserCard(props){
    return(
        <div className="border-gray-400  flex flex-row bg-none h-[100px] w-[450px]">
           
            <div className="m-2">
                <img src={props.img} alt="Employee Profile picture" className="w-[70px] m-4 h-[70px] rounded-full"/>
            </div>
            
            <div className="justify-items-start p-5 pl-1">
                <h1 className="font-bold">{props.name}</h1>
                <p className="text-gray-400">{props.role}</p>
            </div>
        </div>
    );
}
export default UserCard