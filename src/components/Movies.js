import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";

const Movies = () => {
  const { movie, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <section>
        <div className="loading">Loading....</div>;
      </section>
    );
  }

  return (
    <>
      <section className="movie-page">
        <div className="container grid grid-4-col">
          {movie.map((curMovie, index) => {
            const { Title, imdbID, Poster } = curMovie;
            return (
              <div key={index}>
                <NavLink to={`movie/${imdbID}`}>
                  <div className="card">
                    <div className="card-info">
                      <h2>{Title.slice(0, 15) + "..."}</h2>
                      <img src={Poster} alt={imdbID} />
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
