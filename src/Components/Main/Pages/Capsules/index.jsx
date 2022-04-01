import { useEffect, useState } from "react";
import "./styles.css";

function Capsules() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/capsules")
      .then((response) => response.json())
      .then((response) => setInfo(response));
  });

  return (
    <div className="Capsules-page">
      <h1 className="Capsules-title">Capsules:</h1>
      <div className="Capsules-list">
      {info.map((capsule, index) => {
        return (
          <div className="capsule" key={capsule.id}>
            <h2 className="capsule-serial"> Capsule {capsule.serial}</h2>
            <p className="capsule-reuseCount">
              <b>Times re Used: </b>
              {capsule.reuse_count};
            </p>
            <p className="capsule-waterLandings">
              <b>Water Landings: </b>
              {capsule.water_landings};
            </p>
            <p className="capsule-landLandings">
              <b>Land Landings: </b>
              {capsule.land_landings};
            </p>
            <fieldset>
              <legend className=".capsule-titleUpdate">Last Update:</legend>
              <p className="capsule-lastUpdate">
                {capsule.last_update ? capsule.last_update : "No new news"}
              </p>
            </fieldset>
            <p className="capsule-satus">
              <b>Status: </b>
              {capsule.status};
            </p>
            <p className="capsule-type">
              {" "}
              <b>Type: </b>
              {capsule.type};
            </p>
            <p className="capsule-id">
              <b>Capsule ID: </b>
              {capsule.id};
            </p>
          </div>
        )
      })}
      </div>
    </div>
  );
}

export default Capsules;
