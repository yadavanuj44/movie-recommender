import React, { useState } from "react";
import "./styles.css";

const songsDictionary = {
  Action: [
    { Song: "Tujhe Kitna Chahne Lage Hum", Movie: "kabir Singh" },
    { Song: "Jaan Nissar", Movie: "Kedarnath" },
    { Song: "Ek tu hi yar mera", Movie: "Pati patni aur woh" }
  ],
  Horror: [
    { Song: "Yeh Ishq Hai", Movie: "Jab We Met" },
    { Song: "Hasi", Movie: "Hamari Adhuri Kahani" },
    { Song: "Teri meri", Movie: "Bodyguard" }
  ],
  Comedy: [
    { Song: "Yeh raat bheegi bheegi", Movie: "Chori Chori" },
    { Song: "Hai apna dil to awara", Movie: "Solva Saal" },
    { Song: "Lag jaa gale", Movie: "Woh jo hasina" }
  ],
  Romance: [
    { Song: "The nights", Movie: "" },
    { Song: "I could be the one", Movie: "" },
    { Songs: "The day", Movie: "" }
  ],
  Thriller: [
    { Song: "Love me like you do", Movie: "50 Shades of Grey" },
    { Song: "I know you care", Movie: "Now Is Good" },
    { Song: "Beating Heart", Movie: "Halcyon Days" }
  ]
};

var heading = "Movie Recommendation";
var subHeading = "Listed here are some of my favourite";

export default function App() {
  const [genrelist, setGenrelist] = useState("Action");

  function onClickHandler(musician) {
    setGenrelist(musician);
  }

  return (
    <div className="App">
      <h1>{heading}</h1>
      <h4>{subHeading}</h4>
      <hr />
      {Object.keys(songsDictionary).map((musician) => {
        return (
          <button
            className="musicians"
            onClick={() => onClickHandler(musician)}
            key={musician}
          >
            {musician}
          </button>
        );
      })}
      <ul>
        {songsDictionary[genrelist].map((genre) => {
          return (
            <li className="musicList" key={genre.Song}>
              <div className="songDet">
                <span className="spanText">Song - </span>
                {genre.Song}
              </div>
              <div className="songDet">
                <span className="spanText">Movie - </span>
                {genre.Movie}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
