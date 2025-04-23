
function UserRating({coment,rating}){

    return(
        <>
            <div className='flex flex-col'>
            <div className='flex flex-row space-x-0.5'>
                <p className="text-2xl">{rating}</p>
                <img src="/assets/star.png"/>
            </div>
           
             <p>{coment}</p>
         </div>   
        </>
    );
}
export default UserRating