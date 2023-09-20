import React, { useState } from 'react'
import classes from '../styles/MovieList.module.css'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
const MovieList =  ({result}) => {
  const API_IMG="https://image.tmdb.org/t/p/w500";
  const [page, setPage] = useState(1);
 
  const moviesPerPage = 10; // Number of movies to display per page

  // Calculate the index range for the current page
  const indexOfLastMovie = page * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = result.slice(indexOfFirstMovie, indexOfLastMovie);
  const nodata = indexOfLastMovie >= result.length;
  const handleChange = (event, value) => {
    setPage(value);
  };
 
  return (
    <>  
    <div className={classes.boxcontainer}>
   {nodata? <h3 style={{alignItems:"center"}}>Sorry its's empty now !</h3>:
    currentMovies.map((mv, i)=> <div className={classes.box} key={mv.id}>
          <img src={`${API_IMG}${mv.poster_path}`} alt={mv.title} className={classes.boximage}/>
          <h2 className={classes.boxtitle}>{mv.title}</h2>
   </div>  )  } 
     </div>
     <Stack spacing={2}>
     <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange}  hideNextButton={nodata}  />
    </Stack>
    </>
  )
}

export default MovieList

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmQzNDFhNDZhMmUxOWY2NDk1ODI3ZGE3MWY5OWM1YSIsInN1YiI6IjY1MDlhZDAzNDJkOGE1N2U5OGE3YWM1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.28ctBcf5HOzcIVSUnKdr7woujS38ZO8Ngf8o2k-_vSc
// 8bd341a46a2e19f6495827da71f99c5a