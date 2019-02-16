//setting up initial state so react can still map over an empty catData array
//without this the code blows up without conditional rendering checking what props do/don't exist
const initialState = {
  catData: [],
  loading: false
};

//Take note that we're adjusting loading all the time, otherwise the reducer will leave it
//For example if we hit loading, then the error case, we need to tell redux stop loading otherwise
//our front end will continue to display a loading bar indefinitely.

//using the spread operator ...state is very important if you want to maintain redux state. Otherwise if you only do
//loading:action.isLoading that's all that you'll see in redux, everything else will vanish!

export default function cats(state = initialState, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: action.isFetching,
        err: null,
        err2: null
      };
    //Note: you can chain cases like these below :)
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
