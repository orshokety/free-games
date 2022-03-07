import { useEffect, useState } from "react";
import Card from "./Card";
import "./Home.css";

function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
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
        setData(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="containter">
      <div className="Filters">
        <select>
          <option value="name">Name</option>
          <option value="Released">Released</option>
          <option value="Added">Added</option>
          <option value="Created">Created</option>
          <option value="Updated">Updated</option>
          <option value="Rating">Rating</option>
          <option value="Metacritic">Metacritic</option>
        </select>
      </div>
      <div className="Games">
      {data && data.map((card) => <Card card={card} key={card.id} />)}
      </div>
    </div>
  );
}

export default Home;
