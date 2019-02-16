import axios from "axios";

// This will make an API request to get cat by id, while telling redux its loading and what response comes back
export function editOneAction(id, name, age, location) {
  console.log(id, name, age, location);
  const data = {
    id,
    name,
    age,
    location
  };
  return function(dispatch) {
    dispatch(loading());
    axios.post(`/api/v1/cats/edit/:id`, data).then(response => {
      console.log(response);

      if (!response.status == 200) {
        dispatch(errorMessage(response.status));
      } else {
        dispatch(receiveCats(response.data));
      }
    });
  };
}

function loading() {
  return {
    type: "LOADING",
    isFetching: true
  };
}

function errorMessage(err) {
  return {
    type: "ERROR",
    isFetching: false,
    err
  };
}

function receiveCats(cats) {
  return {
    type: "SUCCESS",
    isFetching: false,
    cats
  };
}
