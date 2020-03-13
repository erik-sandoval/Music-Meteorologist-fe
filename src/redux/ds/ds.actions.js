import DsActionTypes from "./ds.types";
import axios from "axios";

const url = process.env.REACT_APP_BACKEND_BASE_URL;

export const postDSSong = () => dispatch => {
  const token = localStorage.getItem("token");
  dispatch({
    type: DsActionTypes.GET_DS_SONGS_FETCHING
  });
  axios
    .post(`${url}/request`, { token })
    .then(res => {
      dispatch({
        type: DsActionTypes.GET_DS_SONGS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: DsActionTypes.GET_DS_SONGS_FAILURE,
        payload: err.data
      });
    });
};
