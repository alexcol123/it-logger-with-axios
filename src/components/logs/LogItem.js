import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteLog, setCurrent } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

function LogItem({ log, deleteLog, setCurrent }) {
  // console.log(setCurrent);
  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: "Log Deleted" });
  };

  return (
    <li className="collection-item">
      <div>
        <a
          onClick={() => setCurrent(log)}
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "black-text"
          } `}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text"> ID # {log.id}</span> Last updated by{" "}
          <span className="black-text">{log.tech}</span> on
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a onClick={onDelete} href="#!" className="secondary-content">
          <i className="material-icons red-text">delete_forever</i>
        </a>
      </div>
    </li>
  );
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
