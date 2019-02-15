const initialState = {
  catData: [],
  loading: false
};

export default function cats(state = initialState, action) {
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
