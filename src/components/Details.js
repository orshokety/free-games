import "./Details.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Platform from "./Platform";
import GameDetails from "./GameDetails";

function Details() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  useEffect(() => {
    fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "a4e33d0195mshab0b05c7b63d434p1f92b8jsnd20ef0b722fa",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res);
        setGame(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <div className="container">
      {game && (
        <div className="game">
          <div className="gamebanner">
            <img src={game.thumbnail} className="game-banner-img" alt="background img" />
          </div>
          <div className="details-wrapper">
            <div className="game-header">
              <h1 className="title">{game.title}</h1>
              <Platform platform={game.platform} />
              <p className="releaseDate"> Release date: {game.release_date}</p>
              <p className="shortDescription">{game.short_description}</p>
              <p className="genre">{game.genre}</p>
            </div>
            <GameDetails game={game}/>
          </div>
        </div>
      )}
    </div>
  );
}
export default Details;
