import {
  SEARCH_MOVIE,
  FETCH_MOVIES,
  FETCH_MOVIE,
  LOADING,
  PREVIOUS_PAGE,
  NEXT_PAGE,
  RATE_MOVIE,
  SORT_BY,
  GET_ALL_MOVIES
} from "../actions/types";

const initialState = {
  text: "",
  movies: [],
  loading: false,
  movie: [],
  pageNumber: 1,
  totalResults: 0,
  totalPages: 0,
  rating: 0,
  sortby: "",
  sortKey: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        totalResults: action.payload.total_results,
        totalPages: action.payload.total_pages,
        pageNumber: 1,
        loading: false
      };
    case FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case RATE_MOVIE:
      return {
        ...state,
        rating: action.payload,
        loading: false
      };
    case PREVIOUS_PAGE:
      return {
        ...state,
        movies: action.payload,
        pageNumber: state.pageNumber - 1
      };
    case NEXT_PAGE:
      return {
        ...state,
        movies: action.payload,
        pageNumber: state.pageNumber + 1
      };
    case GET_ALL_MOVIES:
      return {
        ...state,
        movies: action.payload,
        totalResults: action.payload.total_results,
        totalPages: action.payload.total_pages,
        pageNumber: 1,
        loading: false
      };
    case SORT_BY:
      let sort = action.payload;
      if (sort === "Year") {
        return {
          ...state,
          sortby: "release_date.desc"
        };
      } else if (sort === "RATE") {
        return {
          ...state,
          sortby: "vote_count.desc"
        };
      } else {
        return {
          ...state,
          sortby: "popularity.desc"
        };
      }
    default:
      return state;
  }
}
