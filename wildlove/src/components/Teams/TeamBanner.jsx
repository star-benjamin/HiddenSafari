
function TeamBanner({ E_name, role, profile_image }) {
  return (
    <div
      className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg bg-cover bg-center"
      style={{ backgroundImage: `url(${profile_image})` }}
    >
      <div className="absolute bottom-4 w-3/4 rounded-lg bg-white bg-opacity-90 p-2 ml-11 text-center">
        <h2 className="text-xl font-semibold text-gray-800">{E_name}</h2>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
}
export default TeamBanner;
  