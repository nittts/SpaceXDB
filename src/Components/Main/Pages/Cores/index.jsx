import "./styles.css";
import { useState, useEffect } from "react";
import LoadingPage from "../../../LoadingPage";

function Cores() {
  const [info, setInfo] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/cores")
      .then((response) => response.json())
      .then((data) => setInfo(data))
      .then(setLoading(false));
  }, []);

  return (
    <div className="cores-page">
      <h1>Space X cores</h1>
      <div className="cores">
        {loading ? (
          <LoadingPage />
        ) : (
          info.map((core, index) => {
            return (
              <div className="core-cell" key={core.id}>
                <h1>
                  Core n{index}º : Block {core.block ? core.block : "no info"}
                </h1>
                <div className="core-statistics">
                  <p>{core.reuse_count} Re uses</p>
                  <p>{core.rtls_attempts} Return to Landing site Attempts</p>
                  <p>{core.rtls_landings} Return to Landing site Landings</p>
                  <p>
                    {core.asds_attempts} Autonomous spaceport drone ship
                    Attempts
                  </p>
                  <p>
                    {core.asds_landings} Autonomous spaceport drone ship
                    Landings
                  </p>
                </div>
                <fieldset>
                  <legend> Core last Update </legend>
                  <p>
                    {core.last_update ? core.last_update : "Update unavailable"}
                    .
                  </p>
                </fieldset>
                <div className="core-serial-status">
                  <p>Serial {core.serial}</p>
                  <p>Status: {core.status}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Cores;
