
export default function AdventureLoader() {
  return (
    <div className="flex flex-col justify-center items-center h-[60vh]">
      <svg
        className="animate-spin h-20 w-20 text-orange-600"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
       
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="5" />
        
        
        <polygon points="50,20 55,50 50,80 45,50" fill="currentColor" />
        
       
        <circle cx="50" cy="50" r="4" fill="white" />
      </svg>
      
      <p className="text-orange-600 text-lg font-semibold tracking-wider">
          HiddenSafari
      </p>
    </div>
  );
}
