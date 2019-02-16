import axios from "axios";

// This will make an API request to delete cat by id, while telling redux its loading and what response comes back
export function deleteOneAction(id) {
  return function(dispatch) {
    dispatch(loading()); //redux please go to loading state while we do our API call
    axios.delete(`/api/v1/cats/delete/${id}`).then(response => {
      if (!response.status == 200) {
        dispatch(errorMessage(response.status)); //if DB fails or is down, this error runs through redux
      } else {
        dispatch(receiveCats(response.data)); //we received data back successfully, tell redux
      }
    });
  };
}

//time to go loading while we do our API calls
function loading() {
  return {
    type: "LOADING",
    isFetching: true
  };
}

//Oh no! an error! stop loading and send through the error
function errorMessage(err) {
  return {
    type: "ERROR",
    isFetching: false,
    err
  };
}

//wahoo cats! stop loading and send through the cats data to redux
function receiveCats(cats) {
  return {
    type: "SUCCESS",
    isFetching: false,
    cats
  };
}
