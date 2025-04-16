
function TeamBanner({ E_name, role, profile_image }) {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden text-center p-4">
        <img
          src={profile_image}
          alt={E_name}
          className="w-32 h-32 mx-auto rounded-full object-cover"
        />
        <h2 className="text-xl font-semibold mt-4">{E_name}</h2>
        <p className="text-gray-500">{role}</p>
      </div>
    );
  }
  
  export default TeamBanner;
  