import "./styles.css";
import { useEffect, useState } from "react";
import LoadingPage from "../../../LoadingPage";

function Crew() {
  const [info, setInfo] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/crew")
      .then((response) => response.json())
      .then((data) => setInfo(data))
      .then(setLoading(false));
  }, []);

  return (
    <div className="crew-page">
      <h1>Crew</h1>
      <div className="crew-cards">
        {loading ? (
          <LoadingPage />
        ) : (
          <div className="crew">
            {info.map((astronaut) => {
              let statusColor = () => {
                return astronaut.status ? true : false;
              };

              return (
                <div
                  className={`astronaut-card ${astronaut.name}`}
                  key={astronaut.id}
                >
                  <div className="astronaut-img">
                    <img src={astronaut.image} alt={astronaut.name} />
                  </div>
                  <h1>
                    {astronaut.name}, {astronaut.agency}
                  </h1>
                  <div className="astronaut-about">
                    <a
                      href={astronaut.wikipedia}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      Wikipedia{" "}
                    </a>
                    <p
                      className="astronaut-status"
                      style={{ color: statusColor ? "green" : "red" }}
                    >
                      {astronaut.status}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Crew;
