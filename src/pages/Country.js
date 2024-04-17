import React, { useState } from "react";
import axios from "axios";

function Country() {
  const [country, setCountry] = useState("");
  const [sportsData, setSportsData] = useState(null);

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://lkh3qndazu4z2zunn4hmcwqvlm0fluur.lambda-url.eu-west-1.on.aws/api/country/${country}`
      );
      setSportsData(response.data);
    } catch (error) {
      console.error("Error fetching sports data:", error);
      setSportsData(null);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Sports Information</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="countrySelect">Select Country:</label>
              <select
                className="form-control"
                id="countrySelect"
                value={country}
                onChange={handleChange}
              >
                <option value="">Select a country</option>
                <option value="Brazil">Brazil</option>
                <option value="USA">USA</option>
                <option value="Singapore">Singapore</option>
                {/* Add more countries as needed */}
              </select>
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Get Sports Data
            </button>
          </form>
        </div>
      </div>
      {sportsData && (
        <div className="row justify-content-center mt-4">
          <div className="col-md-6">
            <div>
              {/* <h2 className="text-center mb-3">Sports Data for {country}</h2> */}
              {sportsData.sports.map((sport, index) => (
                <div key={index} className="mb-4">
                  <h3>{sport.name}</h3>
                  <p>Popularity Level: {sport.popularityLevel}</p>
                  {sport.top5Players && sport.top5Players.length > 0 ? (
                    <div>
                      <h4>Top 5 Players:</h4>
                      <ul className="list-unstyled">
                        {sport.top5Players.map((player, idx) => (
                          <li key={idx}>
                            {player.name} - {player.position} ({player.team})
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p>No top players for this sport</p>
                  )}
                </div>
              ))}
              <p>Least Played Sport: {sportsData.leastPlayedSport}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Country;
