import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from "./types";

import axios from "axios";

// Get techs from server

// export const getTechs = () => async dispatch => {
//   try {
//     setLoading();

//     const res = await fetch("/techs");
//     const data = await res.json();

//     dispatch({
//       type: GET_TECHS,
//       payload: data
//     });
//   } catch (err) {
//     dispatch({
//       type: TECHS_ERROR,
//       payload: err.response.statusText
//     });
//   }
// };

//Get techs from server - Axios
export const getTechs = () => async dispatch => {
  try {
    setLoading();

    const res = await axios.get("/techs");
    const data = await res.data;

    dispatch({
      type: GET_TECHS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

// // Add techs to server

// export const addTech = tech => async dispatch => {
//   try {
//     setLoading();

//     const res = await fetch("/techs", {
//       method: "POST",
//       body: JSON.stringify(tech),
//       headers: { "Content-Type": "application/json" }
//     });
//     const data = await res.json();

//     dispatch({
//       type: ADD_TECH,
//       payload: data
//     });
//   } catch (err) {
//     dispatch({
//       type: TECHS_ERROR,
//       payload: err.response.statusText
//     });
//   }
// };

// Add techs to server - axios

export const addTech = tech => async dispatch => {
  try {
    setLoading();

    const res = await axios.post("/techs", tech);
    const data = await res.data;

    dispatch({
      type: ADD_TECH,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

// // Delete tech from server

// export const deleteTech = id => async dispatch => {
//   try {
//     setLoading();

//     await fetch(`/techs/${id}`, { method: "DELETE" });

//     dispatch({
//       type: DELETE_TECH,
//       payload: id
//     });
//   } catch (err) {
//     dispatch({
//       type: TECHS_ERROR,
//       payload: err.response.statusText
//     });
//   }
// };

// Delete tech from server - Axios

export const deleteTech = id => async dispatch => {
  try {
    setLoading();

    await axios.delete(`/techs/${id}`);

    dispatch({
      type: DELETE_TECH,
      payload: id
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
