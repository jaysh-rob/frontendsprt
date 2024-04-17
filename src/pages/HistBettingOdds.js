import React, { useState, useEffect } from 'react';

function HistBettingOdds() {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState('');
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await fetch(
        'http://asg1-1-557245752.eu-west-1.elb.amazonaws.com/public/allteams'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch teams');
      }
      const data = await response.json();
      setTeams(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTeamData = async (team) => {
    try {
      const response = await fetch(
        `http://asg1-1-557245752.eu-west-1.elb.amazonaws.com/public/getdatabyteam?team=${team}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch team data');
      }
      const data = await response.json();
      setTeamData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTeamChange = (event) => {
    const selectedTeam = event.target.value;
    setSelectedTeam(selectedTeam);
    fetchTeamData(selectedTeam);
  };

  return (
    <div style={{display:'table',margin:'auto'}}>
      <h2>Select a team:</h2>
      <select value={selectedTeam} onChange={handleTeamChange}>
        <option value="">Select a team</option>
        {teams.map((team, index) => (
          <option key={index} value={team}>
            {team}
          </option>
        ))}
      </select>
      {teamData.length > 0 && (
        <div>
          <h3>Matches involving {selectedTeam}:</h3>
          <ul>
            {teamData.map((match, index) => (
              <li key={index}>
                {match.home_team} vs {match.away_team}
                <ul>
                  <li>Home Win Odds: {match.odds.home_win}</li>
                  <li>Draw Odds: {match.odds.draw}</li>
                  <li>Away Win Odds: {match.odds.away_win}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default HistBettingOdds;
