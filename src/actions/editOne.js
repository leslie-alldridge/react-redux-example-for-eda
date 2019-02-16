import axios from "axios";

// This will make an API request to edit cat by id, while telling redux its loading and what response comes back
export function editOneAction(id, name, age, location) {
  //create object to send with out post request!
  const data = {
    id,
    name,
    age,
    location
  };
  return function(dispatch) {
    dispatch(loading());
    axios.post(`/api/v1/cats/edit/:id`, data).then(response => {
      if (response.data.length == 0) {
        dispatch(errorMessage2("No cat with that ID")); //we can send the knex error from our backend which is preferred - stretch goal for you!
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

//using error message2 so it doesn't conflict with getOne. Otherwise both of my components will display errors
//this is why we normally split out reducers and components so there's no overlap (my app renders every single component at once)
function errorMessage2(err2) {
  return {
    type: "ERROR2",
    isFetching: false,
    err2
  };
}

function receiveCats(cats) {
  return {
    type: "SUCCESS",
    isFetching: false,
    cats
  };
}
