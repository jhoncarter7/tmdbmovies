import React from 'react'
import classes from '../styles/MovieList.module.css'

const MovieList = async ({searchResult}) => {
   const {results} = await searchResult
    console.log("result from list",results)
  return (
    <div className={classes.container}>
      {results?.map((mov) => 
        <div className={classes.card} key={mov.id}>
        <p>{mov.original_title}</p>
        </div>
      )  }

    </div>
  )
}

export default MovieList

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmQzNDFhNDZhMmUxOWY2NDk1ODI3ZGE3MWY5OWM1YSIsInN1YiI6IjY1MDlhZDAzNDJkOGE1N2U5OGE3YWM1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.28ctBcf5HOzcIVSUnKdr7woujS38ZO8Ngf8o2k-_vSc
// 8bd341a46a2e19f6495827da71f99c5a