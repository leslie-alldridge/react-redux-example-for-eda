const initialState = {
  catData: [],
  loading: false
};

export default function cats(state = initialState, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: action.isFetching,
        err: null,
        err2: null
      };
    case "ERROR":
    case "ERROR2":
      return {
        ...state,
        loading: action.isFetching,
        err: action.err,
        err2: action.err2
      };
    case "SUCCESS":
      return {
        ...state,
        loading: action.isFetching,
        catData: action.cats,
        err: null,
        err2: null
      };
    default:
      return state;
  }
}
