import axios from "axios";

export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const FRIEND_FETCHED = "FRIEND_FETCHED";
export const FETCHED_DELETE = "FETCHED_DELETE";
export const FETCHED_ADD = "FETCHED_ADD";
export const FETCHED_EDIT = "FETCHED_EDIT";
export const ERRORS = "ERRORS";

export const deleteFriend = id => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(response => {
        console.log(response.data);
        dispatch({ type: FETCHED_DELETE, payload: response.id });
      })

      .catch(error => dispatch({ type: ERRORS, error: error }));
  };
};

export const addFriend = friend => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .post("http://localhost:5000/api/friends", friend)

      .then(response => {
        dispatch({ type: FETCHED_ADD, payload: response.data });
        // console.log(response.data);
      })

      .catch(error => dispatch({ type: ERRORS, error: error }));
  };
};

export const fetchFriends = () => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get("http://localhost:5000/api/friends")

      .then(response => {
        // console.log(response.data);
        dispatch({ type: FETCHED, payload: response.data });
      })

      .catch(error => dispatch({ type: ERRORS, error: error }));
  };
};

export const fetchFriend = id => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .get(`http://localhost:5000/api/friends/${id}`)

      .then(response => {
        // console.log(response);
        dispatch({ type: FRIEND_FETCHED, payload: response.data });
      })

      .catch(error => dispatch({ type: ERRORS, payload: error }));
  };
};

export const editFriend = updatedFriend => {
  return dispatch => {
    dispatch({ type: FETCHING });
    axios
      .put(`http://localhost:5000/api/friends/$updatedFriend.id`, {
        updatedFriend
      })

      .then(response => {
        // console.log(response);
        dispatch({ type: FETCHED_EDIT, payload: updatedFriend });
      })

      .catch(error => dispatch({ type: ERRORS, payload: error }));
  };
};
