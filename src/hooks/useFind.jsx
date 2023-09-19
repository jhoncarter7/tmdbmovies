import { useEffect, useState } from "react";

const useFind = (userinput) => {
  const [searchResult, setSearchResult] = useState(null); // State to store the search result

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${userinput}&include_adult=false&language=en-US&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YmQzNDFhNDZhMmUxOWY2NDk1ODI3ZGE3MWY5OWM1YSIsInN1YiI6IjY1MDlhZDAzNDJkOGE1N2U5OGE3YWM1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.28ctBcf5HOzcIVSUnKdr7woujS38ZO8Ngf8o2k-_vSc",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setSearchResult(data); // Store the search result in state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [userinput]);

  return searchResult; // Return the search result from the hook
};

export default useFind;
