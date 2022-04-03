import "./styles.css";
import { useEffect, useState } from "react";
import LoadingPage from "../../../LoadingPage";

function Launchpads() {
  const [info, setInfo] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/Launchpads")
      .then((response) => response.json())
      .then((data) => setInfo(data))
      .then(setLoading(false));
  }, []);

  return (
    <div className="Launchpads-page">
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="Launchpads">
          {info.map((launchpad) => {
            return (
              <div className="launchpad" key={launchpad.id}>
                <div className="launchpad-img">
                  <img src={launchpad.images.large[0]} alt="launchpad" />
                </div>
                <h1>{launchpad.name}</h1>
                <h3>{launchpad.full_name}</h3>
                <p style={{color : "#005288" }}>{launchpad.status}</p>
                <div className="launchpad-info">
                  <p>{launchpad.type}</p>
                  <p>{launchpad.locality}</p>
                  <p>{launchpad.region}</p>
                </div>
                <div className="launchpad-coordinates">
                  <a
                    href={`http://www.google.com/maps/place/${launchpad.latitude},${launchpad.longitude}`}
                    target="_blank" rel="noreferrer"
                  >
                    {launchpad.latitude} / {launchpad.longitude}
                  </a>
                </div>
                <div className="launchpad-landings">
                  <div className="launchpad-landingsAttempts">
                    <p>{launchpad.landing_attempts}</p>
                    <h3>Landing Attempts</h3>
                  </div>
                  <div className="launchpad-landingsSuccess">
                    <p>{launchpad.landing_successes}</p>
                    <h3>Landing Sucesses</h3>
                  </div>
                </div>
                <a href={launchpad.wikipedia}> wikipedia </a>
                <p>{launchpad.details}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Launchpads;
