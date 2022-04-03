import "./styles.css";
import { useEffect, useState } from "react";
import LoadingPage from "../../../LoadingPage";


function Dragons() {
    const [info, setInfo] = useState([]);

    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch("https://api.spacexdata.com/v4/dragons")
        .then((response) => response.json())
        .then((data) => setInfo(data))
        .then(setLoading(false));
    }, []);
  

    return(
        <div className="Dragons-page">
            { loading ? (<LoadingPage/>) : (<div className="dragons">
                {info.map((dragon) => {
                    return <div className="dragon" key={dragon.id}>
                        <h1>{dragon.name}</h1>
                        <div className="heatShield">
                            <h2>Heat Shield</h2>
                            <div className="heatShield-info">
                                <p>Material : {dragon.heat_shield.material}</p>
                                <p>Size : {dragon.heat_shield.size_meters}m</p>
                                <p>Max temperature : {dragon.heat_shield.temp_degrees}</p>
                                <p>Partner Developer : {dragon.heat_shield.dev_partner}</p>
                            </div>
                            <fieldset className="dragon-payload">
                                <legend>Payloads</legend>
                                <legend>Launch payload mass: </legend>
                                <p> KG: {dragon.launch_payload_mass.kg}Kgs, LB: {dragon.launch_payload_mass.lb}Lbs;</p>
                                <legend>Launch payload volume: </legend>
                                <p> Cubic Meters: {dragon.launch_payload_vol.cubic_meters}m²</p>
                                <p> Cubic feet: {dragon.launch_payload_vol.cubic_feet}ft</p>
                                <legend>Return payload mass: </legend>
                                <p> KG: {dragon.return_payload_mass.kg}Kgs, LB: {dragon.return_payload_mass.lb}Lbs;</p>
                            </fieldset>

                            <h2>Diameter: {dragon.diameter.meters}m or {dragon.diameter.feet}ft</h2>
                            <p>First flight on {dragon.first_flight}</p>
                            <p> Status : {dragon.active ? "active" : "deactivated"} </p>
                            <div className="dragon-imgs">
                                <img src={dragon.flickr_images[0]} alt="Dragon" />
                                <img src={dragon.flickr_images[1]} alt="Dragon" />
                                <img src={dragon.flickr_images[2]} alt="Dragon" />
                                <img src={dragon.flickr_images[3]} alt="Dragon" />
                            </div>

                            <div className="dragon-thrusters">
                                <p>{dragon.thrusters[0].type}</p>
                                <p> Amount : {dragon.thrusters[0].amount}</p>
                                <p> Pods : {dragon.thrusters[0].pods}</p>
                                <p> Fuels : {dragon.thrusters[0].fuel_1} and {dragon.thrusters[0].fuel_2}</p>
                                <p> Specific Impulse : {dragon.thrusters[0].isp}</p>
                                <p> Thrust Strength : {dragon.thrusters[0].thrust.kN}Kn, {dragon.thrusters[0].thrust.lbf}lbf</p>
                            </div>

                            <a className="dragon-wiki" href={dragon.wikipedia}>Wikipedia</a>
                            <div className="dragon-description">
                                <p>{dragon.description}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>)}
        </div>
    )
}

export default Dragons