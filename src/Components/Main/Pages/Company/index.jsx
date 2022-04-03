import LoadingPage from "../../../LoadingPage";
import "./styles.css";

import { useEffect, useState } from "react";

function Company() {
  const [info, setInfo] = useState([]);

  const [loading, setLoading] = useState(true);

  const handleLoading = () => {
    setLoading(false);
  };

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/company")
      .then((response) => response.json())
      .then((response) => setInfo([response]));
    handleLoading();
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="Company-page" key={info.id}>
          {info.map((company) => {
            return (
              <div className="company-page" key={company.id}>
                <div className="company-headquarters">
                  <h1>Headquarters</h1>
                  <ul>
                    <li>{company.headquarters.address},</li>
                    <li>{company.headquarters.city},</li>
                    <li>{company.headquarters.state}.</li>
                  </ul>
                </div>
                <div className="company-link">
                  <a
                    href={company.links.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>SpaceX website</button>
                  </a>
                  <a
                    href={company.links.flickr}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>SpaceX Flickr</button>
                  </a>
                  <a
                    href={company.links.twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>SpaceX Twitter</button>
                  </a>
                  <a
                    href={company.links.elon_twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button>Elon Musk Twitter</button>
                  </a>
                </div>
                <div className="company-about">
                  <div className="company-info">
                    <h1> About {company.name}</h1>
                    <p>
                      Founded by {company.founder} in {company.founded},
                      Currently employs {company.employees} employees.
                    </p>
                    <div className="company-info-statistics">
                      <div>
                        <h2>{company.vehicles}</h2>
                        <h3>Vehicles</h3>
                      </div>
                      <div>
                        <h2>{company.launch_sites}</h2>
                        <h3>Launch Sites</h3>
                      </div>
                      <div>
                        <h2>{company.test_sites}</h2>
                        <h3>Test Sites</h3>
                      </div>
                    </div>
                  </div>
                  <div className="company-leads">
                    <div>
                      <h2>Company CEO and CTO</h2>
                      <img
                        alt="Elon Musk"
                        srcSet="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"
                      />
                      <h3>{company.ceo}</h3>
                    </div>
                    <div>
                      <h2>Company Propulsion CTO</h2>
                      <img
                        alt="Tom Mueller"
                        srcSet="https://www.uidaho.edu/-/media/UIdaho-Responsive/Images/engr/news/features/tom-mueller/tom-mueller-profile.jpg"
                      />
                      <h3>{company.cto_propulsion}</h3>
                    </div>
                    <div>
                      <h2>Company COO</h2>
                      <img
                        alt="Gwynne Shotwell"
                        srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Gwynne_Shotwell_at_2018_Commercial_Crew_announcement.jpg/1200px-Gwynne_Shotwell_at_2018_Commercial_Crew_announcement.jpg"
                      />
                      <h3>{company.coo}</h3>
                    </div>
                  </div>
                  <fieldset>
                    <legend>Company Value</legend>
                    <p className="div-counter">
                      {company.valuation.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                      })}
                    </p>
                  </fieldset>
                </div>
                <p className="company-summary">{company.summary}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Company;

//{company.valuation}
