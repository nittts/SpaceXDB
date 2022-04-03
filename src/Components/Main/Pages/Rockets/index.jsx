import "./styles.css";
import { useEffect, useState } from "react";
import LoadingPage from "../../../LoadingPage";

function Rockets() {
  const [info, setInfo] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/rockets")
      .then((response) => response.json())
      .then((data) => setInfo(data))
      .then(setLoading(false));
  }, []);

    return(
        <div className="Rockets-page">
            { loading ? (<LoadingPage/>) : (<div className="rockets">
                {info.map((rocket,index) => {
                    return <div className="rocket" key={index}>
                        <div className="rocket-imgs">
                            {rocket.flickr_images.map((img) => {return <img src={img} alt={rocket.name}></img> })}
                        </div>
                        <h1>{rocket.name}</h1>
                        <h2>{rocket.type}</h2>
                        <h3 style={{ color : rocket.active ? "green" : "red" }}>{rocket.active ? "Active" : "Retired"}</h3>
                        <div className="rocket-info">
                            <div className="rocket-stages">
                            <p>{rocket.stages}</p>
                                <h3>Stages</h3>
                            </div>
                            <div className="rocket-boosters">
                            <p>{rocket.boosters}</p>
                                <h3>Boosters</h3>
                            </div>

                        </div>
                        <fieldset>
                            <legend>Cost per Launch</legend>
                            <p>{rocket.cost_per_launch.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                      })} dollars</p>
                        </fieldset>
                        <h3>Success rate {rocket.success_rate_pct}%</h3>
                        <p>first flight : {rocket.first_flight}</p>
                        <p>{rocket.country}</p>
                        <a href={rocket.wikipedia}>Wikipedia</a>
                        <div className="rocket-description">
                            <p>{rocket.description}</p>
                        </div>
                    </div>
                })}
            </div>)}
        </div>
    )
}

export default Rockets