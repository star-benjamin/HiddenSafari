
function Starts({img, value, valueName}){
    return(
        <>
            <div className="flex flex-row"> 
                
                <div className="w-[50px] h-[50px] pr-0">
                    <img src={img}/>
                </div>
                <div className="pl-0">
                    <h1 className="text-white">{value}</h1>
                    <p className="text-white">{valueName}</p>
                </div>
            </div>
        </>
    );
}
export default Starts