import axios from "axios";

import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SEARCH_LOGS,
  SET_CURRENT,
  CLEAR_CURRENT
} from "./types";

// Get Logs  With Fetch
// export const getLogs = () => async dispatch => {
//   try {
//     setLoading();

//     const res = await fetch("/logs");
//     const data = await res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     });
//   } catch (err) {
//     dispatch({
//       type: LOGS_ERROR,
//       payload: err.response.statusText
//     });
//   }
// };

// Get Logs  With axios
export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const res = await axios.get("logs");
    const data = await res.data;

    dispatch({
      type: GET_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Add New Log
// export const addLog = log => async dispatch => {
//   try {
//     setLoading();

//     const res = await fetch("/logs", {
//       method: "POST",
//       body: JSON.stringify(log),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });
//     const data = await res.json();

//     dispatch({
//       type: ADD_LOG,
//       payload: data
//     });
//   } catch (err) {
//     dispatch({
//       type: LOGS_ERROR,
//       payload: err.response.statusText
//     });
//   }
// };

// Add New log - With Axios
export const addLog = log => async dispatch => {
  try {
    setLoading();

    const res = await axios.post("/logs/", log);
    const data = res.data;

    dispatch({
      type: ADD_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// // Delete log from server
// export const deleteLog = id => async dispatch => {
//   try {
//     setLoading();

//     await fetch(`/logs/${id}`, {
//       method: "DELETE"
//     });

//     dispatch({
//       type: DELETE_LOG,
//       payload: id
//     });
//   } catch (err) {
//     dispatch({
//       type: LOGS_ERROR,
//       payload: err.response.statusText
//     });
//   }
// };

// Delete log from server With Axios

export const deleteLog = id => async dispatch => {
  try {
    setLoading();

    await axios.delete(`/logs/${id}`);

    dispatch({ type: DELETE_LOG, payload: id });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Update log from server
// export const updateLog = log => async dispatch => {
//   try {
//     setLoading();

//     const res = await fetch(`/logs/${log.id}`, {
//       method: "PUT",
//       body: JSON.stringify(log),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });

//     const data = await res.json();

//     dispatch({
//       type: UPDATE_LOG,
//       payload: data
//     });
//   } catch (err) {
//     dispatch({
//       type: LOGS_ERROR,
//       payload: err.response.statusText
//     });
//   }
// };

// Update log from server -axios
export const updateLog = log => async dispatch => {
  try {
    setLoading();

    const res = await axios.put(`/logs/${log.id}`, log);

    const data = await res.data;

    dispatch({
      type: UPDATE_LOG,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Search Logs
// export const searchLogs = text => async dispatch => {
//   try {
//     setLoading();

//     const res = await fetch(`logs?q=${text}`);
//     const data = await res.json();

//     dispatch({
//       type: SEARCH_LOGS,
//       payload: data
//     });
//   } catch (err) {
//     dispatch({
//       type: LOGS_ERROR,
//       payload: err.response.statusText
//     });
//   }
// };

// //Set Current log
// export const setCurrent = log => {
//   return {
//     type: SET_CURRENT,
//     payload: log
//   };
// };

// Search Logs - axios

export const searchLogs = text => async dispatch => {
  try {
    setLoading();

    const res = await axios.get(`logs?q=${text}`);
    const data = await res.data;

    dispatch({
      type: SEARCH_LOGS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    });
  }
};

//Set Current log
export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  };
};

//Clear  Current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
