import { useEffect, useState } from "react";

const apiKey = "995ee51a72edb94730341062f433c2d9";

export default function Times() {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    fetch("https:/v3.football.api-sports.io/teams?league=74&season=2023", {
      headers: {
        "x-apisports-key": apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => setTimes(data));
  }, []);

  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold">Times</h1>
      <p className="mt-2 text-gray-600">Página de times.</p>
      {times.map((pegaTime) => (
        <div key={pegaTime.id}>
          <p>{pegaTime.team.name}</p>
          <p>{pegaTime.team.country}</p>
          <p>{pegaTime.team.logo}</p>
        </div>
      ))}
    </div>
  );
}
