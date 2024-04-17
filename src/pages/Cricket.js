import React, { useState, useEffect } from 'react';
import './Cricket.css'; // Import CSS file for styling (create this file if not exist)

const Cricket = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.cricapi.com/v1/currentMatches?apikey=f060b28b-9b08-4221-b8c1-e5625d4c75f8&offset=0');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setMatches(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="matches-container">
      <h1>Current Matches</h1>
      {matches.map(match => (
        <div className="match-card" key={match.id}>
          <h2>{match.name}</h2>
          <p>Status: {match.status}</p>
          <p>Venue: {match.venue}</p>
          <p>Date: {match.date}</p>
          <div className="teams">
            {match.teamInfo.map(team => (
              <div className="team" key={team.shortname}>
                <img src={team.img} alt={team.name} />
                <p>{team.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cricket;
