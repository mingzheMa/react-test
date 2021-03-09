import React, { useEffect } from "react";
import { connect } from "react-redux";

import { setData } from "@/store/action/movies";
import moviesApi from "@/api/moviesApi";

function Movies({ movies, getMovies }) {
  useEffect(() => {
    if (window.$currentPath !== "/movies") {
      getMovies && getMovies();
    }
  }, []);

  const moviesLis = movies.map(m => <li key={m._id}>{m.name}</li>);
  return (
    <>
      <div>movies</div>
      <ul>{moviesLis}</ul>
    </>
  );
}

Movies.loadData = async store => {
  const movies = await moviesApi.getMovies();
  store.dispatch(setData(movies));
};

function mapStateToProps(store) {
  return {
    movies: store.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovies: async (page, limit) => {
      const movies = await moviesApi.getMovies(page, limit);
      dispatch(setData(movies));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
