import React, { useState, useEffect } from "react";
import { get } from "../helper/apiHelper";

function DietAPI() {
  const [sportsData, setSportsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSportsData = async () => {
      try {
        const response = await get("sports");
        const data = await response;
        setSportsData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching sports data:", error);
        setError(error);
        setIsLoading(false);
      }
    };

    fetchSportsData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <div>Error: {error.message}</div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Diet Recommendations</h1>
      {sportsData.map((sport) => (
        <div key={sport.id} className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">{sport.sport}</h5>
            <div>
              <h6 className="card-subtitle mb-2 text-muted">
                Recommended Foods:
              </h6>
              <ul>
                {sport.recommended_foods.map((food, index) => (
                  <li key={index}>{food}</li>
                ))}
              </ul>
            </div>
            <div>
              <h6 className="card-subtitle mb-2 text-muted">Avoid Foods:</h6>
              <ul>
                {sport.avoid_foods.map((food, index) => (
                  <li key={index}>{food}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DietAPI;
