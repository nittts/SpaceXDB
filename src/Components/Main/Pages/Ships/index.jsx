import "./styles.css";
import { useEffect, useState } from "react";
import LoadingPage from "../../../LoadingPage";

function Ships() {
  const [info, setInfo] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/ships")
      .then((response) => response.json())
      .then((data) => setInfo(data))
      .then(setLoading(false));
  }, []);

    return(
        <div className="Ships-page">
            { loading ? (<LoadingPage/>) : (<div className="Ships">
                { info.map((ship) => {
                    return <div className="ship" key={ship.id}>
                        <div className="ship-img">
                        <img src={ship.image} alt="ship"/>
                        </div>
                        <h1>{ship.name}</h1>
                        <p style={ {color : ship.active ? "green" : "red"}}>{ ship.active ? "Active" : "Retired"}</p>
                        <h2>Home Port: {ship.home_port}</h2>
                        <fieldset className="ship-info">
                            <legend>Ship type:</legend>
                            <p>{ship.type}</p>
                            <legend>Ship Roles:</legend>
                            <p>{ ship.roles.map((role) => {return <p>{role}</p>})}</p>
                        </fieldset>
                        <h3>More information about it at <a href={ship.link} target="_blank" rel="noreferrer"> Marinetraffic </a></h3>

                    </div>
                })}
            </div>)}
        </div>
    )
}

export default Ships