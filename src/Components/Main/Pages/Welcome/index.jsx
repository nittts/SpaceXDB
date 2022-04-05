import "./styles.css";
import "../../../LoadingPage";
import background from "./Resources/background.mp4";

function Welcome() {
  return (
    <div className="welcome-page">
      <video className="background-video" autoPlay loop muted>
        <source src={background} type="video/mp4" />
      </video>
      <div className="page-content">
        <h1>Welcome to SpaceX DataBase Project</h1>
        <p>Please, use the top-left menu to proceed</p>
        <h6>Projected by William B. © 2022</h6>
      </div>
    </div>
  );
}

export default Welcome;
