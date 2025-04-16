
import { useEffect, useState } from "react";
import axios from "axios";
import BelowHeader from "../components/Shared/BelowHeader";
import TeamBanner from "../components/Teams/TeamBanner";
import { CONSTANTS } from "../Utils/constant.js";

function TeamsPage() {
  const [team, setTeam] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await axios.get(`${CONSTANTS.API_URL}/api/v1/team`);
        setTeam(response.data);
      } catch (err) {
        console.error("Error fetching team data:", err);
        setError("Could not load team members.");
      }
    };

    fetchTeam();
  }, []);

  return (
    <div>
      <BelowHeader
        Header="Our Team"
        Paragraph="Meet the heroes behind our Success."
      />

      {error && console.log(error)}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-6">
        {team.map((member) => (
          <TeamBanner
            key={member.id}
            E_name={member.name}
            role={member.designation}
            profile_image={member.profileImage}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamsPage;

