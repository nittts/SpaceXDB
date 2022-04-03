import "./styles.css";
import { useEffect, useState } from "react";
import LoadingPage from "../../../LoadingPage";

function Landpads() {
  const [info, setInfo] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/landpads")
      .then((response) => response.json())
      .then((data) => setInfo(data))
      .then(setLoading(false));
  }, []);

  return (
    <div className="Landpads-page">
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="landpads">
          {info.map((landpad) => {
            return (
              <div className="landpad" key={landpad.id}>
                <div className="landpad-img">
                  <img src={landpad.images.large[0]} alt="landpad" />
                </div>
                <h1>{landpad.name}</h1>
                <h3>{landpad.full_name}</h3>
                <p style={{color : "#005288" }}>{landpad.status}</p>
                <div className="landpad-info">
                  <p>{landpad.type}</p>
                  <p>{landpad.locality}</p>
                  <p>{landpad.region}</p>
                </div>
                <div className="landpad-coordinates">
                  <a
                    href={`http://www.google.com/maps/place/${landpad.latitude},${landpad.longitude}`}
                    target="_blank" rel="noreferrer"
                  >
                    {landpad.latitude} / {landpad.longitude}
                  </a>
                </div>
                <div className="landpad-landings">
                  <div className="landpad-landingsAttempts">
                    <p>{landpad.landing_attempts}</p>
                    <h3>Landing Attempts</h3>
                  </div>
                  <div className="landpad-landingsSuccess">
                    <p>{landpad.landing_successes}</p>
                    <h3>Landing Sucesses</h3>
                  </div>
                </div>
                <a href={landpad.wikipedia}> wikipedia </a>
                <p>{landpad.details}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Landpads;
