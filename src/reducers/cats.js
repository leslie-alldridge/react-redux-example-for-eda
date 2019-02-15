export default function cats(state = [], action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: action.isFetching
      };
    case "ERROR":
      return {
        ...state,
        loading: action.isFetching,
        err: action.err
      };
    case "SUCCESS":
      return {
        ...state,
        loading: action.isFetching,
        catData: action.cats
      };
    default:
      return state;
  }
}
