import search from '/assets/search.png'

function SearchBar(){
    return(
        <div>
        <form className='flex flex-row border-1 rounded-lg m-1'>
            <input className='flex-grow outline-none text-black p-0.5' type="email" placeholder="Enter your Email"></input>
            <img className='bg-gray-300 rounded-lg w-[30px] h-[30px]' src={search} alt="search icon"/>
        </form>
        </div>
    );
        
        
}
export default SearchBar