import "./GameDetails.css";

function GameDetails({ game }) {
  return (
    <div className="game-details">
      <p className="publisher">{game.publisher}</p>
      <div className="minimum_system_requirements">
        <p>{game.minimum_system_requirements.graphics}</p>
        <p>{game.minimum_system_requirements.memory}</p>
        <p>{game.minimum_system_requirements.os}</p>
        <p>{game.minimum_system_requirements.processor}</p>
        <p>{game.minimum_system_requirements.storage}</p>
      </div>
      <a href={game.game_url}>go to game site</a>
      <p className="developer">{game.developer}</p>
      <p className="description">{game.description}</p>
      <div className="screenshots">
        {
          game.screenshots.map(element => {
            return <img src={element.image} alt="" className="screenshot" />
          })
        }

        
      </div>
    </div>
  );
}
export default GameDetails;
