import { useEffect, useState } from "react";
import axios from "axios";
import BelowHeader from "../components/Shared/BelowHeader";
import TeamBanner from "../components/Teams/TeamBanner";
import { CONSTANTS } from "../Utils/constant.js";
import DataLoading from "../components/Shared/DataLoadingIcon";

function TeamsPage() {
  const [team, setTeam] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get(`${CONSTANTS.API_URL}/api/v1/team`);
        setTeam(response.data);
      } catch (err) {
        console.error("Error fetching team data:", err);
        setError("Could not load team members.");
      } finally {
        setLoading(false); 
      }
    };

    fetchTeam();
  }, []);

  return (
    <div className="mt-15">
      <BelowHeader
        Header="Our Team"
        Paragraph="Meet the heroes behind our Success."
      />

      {error && <p className="text-center text-red-500">{error}</p>}

      {loading ? (
        <div className="flex justify-center items-center h-[300px]">
          <DataLoading className="animate-spin text-4xl text-orange-600" />
        </div>
      ) : (
        <div className="min-h-[50vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-6">
          {team.map((member) => (
            <TeamBanner
              key={member.id}
              E_name={member.name}
              role={member.designation}
              profile_image={member.profileImage}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TeamsPage;
