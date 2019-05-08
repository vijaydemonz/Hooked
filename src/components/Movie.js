import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://contentserver.com.au/assets/598411_p173378_p_v8_au.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img
          width="250"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p>{movie.Year}</p>
    </div>
  );
};

export default Movie;
