import React, { useEffect, useState } from "react";
import classes from "../styles/MovieDetails.module.css";
import { useParams } from "react-router-dom";
const MovieDetails = () => {
  const param = useParams();
  const { movieId } = param;
  const [detail, setDetail] = useState("");
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmQzNDFhNDZhMmUxOWY2NDk1ODI3ZGE3MWY5OWM1YSIsInN1YiI6IjY1MDlhZDAzNDJkOGE1N2U5OGE3YWM1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.28ctBcf5HOzcIVSUnKdr7woujS38ZO8Ngf8o2k-_vSc",
        },
      };

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          options
        );
        const data = await response.json();
        setDetail(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchData();
  }, [movieId]);

  console.log("movie", detail);
  return (
    <>
      {detail && (
        <div className={classes.card}>
          <img
            src={`${API_IMG}${detail.poster_path}`}
            alt={detail.original_title}
          />
          <p className={classes.moviedetails}>Title: {detail.original_title}</p>
          <p className={classes.moviedetails}>
            Language: {detail.original_language}
          </p>
          <p className={classes.moviedetails}>Runtime: {detail.runtime} min</p>
          <p className={classes.moviedetails}>
            Release Date: {detail.release_date}
          </p>
          <p className={classes.moviedetails}>Details: {detail.overview}</p>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
