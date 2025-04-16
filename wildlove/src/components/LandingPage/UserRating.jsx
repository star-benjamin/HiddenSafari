
function UserRating({coment}){

    return(
        <>
            <div className='flex flex-col'>
            <div className='flex flex-row space-x-0.5'>
                <img src="src/assets/star.png"/>
                <img src="src/assets/star.png"/>
                <img src="src/assets/star.png"/>
                <img src="src/assets/star.png"/>
                <img src="src/assets/star.png"/>
            </div>
           
             <p>{coment}</p>
         </div>   
        </>
    );
}
export default UserRating