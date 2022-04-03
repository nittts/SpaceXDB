import "./styles.css";
import { memo, useEffect, useState } from "react";
import LoadingPage from "../../../LoadingPage";

function History() {
  const [info, setInfo] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/history")
      .then((response) => response.json())
      .then((data) => setInfo(data))
      .then(setLoading(false));
  }, []);
    return(
        <div className="History-page">
            { loading ? (<LoadingPage/>) : (<div className="stories">
                {info.map((memory) => {
                    return <div className="memory-story" key={memory.id}>
                        <div className="memory-container">
                            <h1>{memory.title}</h1>
                            <p className="memory-article"><a href={memory.links.article}>{ memory.links.article !== null ? "Reference Link" : " "} </a></p>
                            <p className="memory-date">{memory.event_date_utc}</p>
                            <p className="memory-details">{memory.details}</p>
                        </div>
                    </div>
                })}
            </div>)}
        </div>
    )
}

export default History