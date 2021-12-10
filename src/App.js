import React, { useState } from "react";
import "./styles.css";

const moviesDictionary = {
  Action: [
    { Movie: "Black Panther", Year: "2018" },
    { Movie: "Mad Max: Fury Road", Year: "2015" },
    { Movie: "Thor: Ragnarok", Year: "2017" }
  ],
  Horror: [
    { Movie: "Get Out", Year: "2017" },
    { Movie: "A Quiet Place", Year: "2018" },
    { Movie: "The Evil Dead", Year: "1981" }
  ],
  Comedy: [
    { Movie: "Once Upon a Time In Hollywood", Year: "2019" },
    { Movie: "Zootopia", Year: "2016" },
    { Movie: "Monty Python and the Holy Grail", Year: "1975" }
  ],
  Romance: [
    { Movie: "It Happened One Night", Year: "1934" },
    { Movie: "The Shape of Water", Year: "2017" },
    { Movie: "Slumdog Millionaire", Year: "2008" }
  ],
  Thriller: [
    { Movie: "Don't Breathe", Year: "2016" },
    { Movie: "The Purge", Year: "2013" },
    { Movie: "Source Code", Year: "2011" }
  ]
};

var heading = "Movie Recommendation";
var subHeading =
  "Listed here are some of my favourite movies in the different genres";

export default function App() {
  const [genrelist, setGenrelist] = useState("Action");

  function onClickHandler(genreSelected) {
    setGenrelist(genreSelected);
  }

  return (
    <div className="App">
      <h1>{heading}</h1>
      <h4>{subHeading}</h4>
      <hr />
      {Object.keys(moviesDictionary).map((genreSelected) => {
        return (
          <button
            onClick={() => onClickHandler(genreSelected)}
            key={genreSelected}
          >
            {genreSelected}
          </button>
        );
      })}
      <ul>
        {moviesDictionary[genrelist].map((genre) => {
          return (
            <li className="movieList" key={genre.Movie}>
              <div className="songDet">
                <span className="spanText">Movie - </span>
                {genre.Movie}
              </div>
              <div className="songDet">
                <span className="spanText">Year - </span>
                {genre.Year}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
