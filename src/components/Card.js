import "./Card.css";
import Platform from "./Platform";
import { useNavigate } from "react-router-dom";

function Card({ card }) {
  const navigate = useNavigate();

  function routeToDetails() {
  navigate(`/game/${card.id}`)
  }

  return (
    <div className="Game" onClick={routeToDetails}>
      <div className="GameThumbContainer">
        <img src={card.thumbnail} alt="Thumbnail" className="GameThumbnail" />
      </div>
      <div className="GameDescription">
        <p className="GameName">{card.title}</p>
        <div className="GamePlatforms">
          <Platform platform={card.platform} />
        </div>
      </div>
    </div>
  );
}
export default Card;
