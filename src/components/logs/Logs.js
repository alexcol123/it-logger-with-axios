import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getLogs } from "../../actions/logActions";
import LogItem from "./LogItem";
import PropTypes from "prop-types";

function Logs({ log: { logs, loading }, getLogs }) {
  useEffect(() => {
    getLogs();
  }, [getLogs]);

  if (loading || logs === null) {
    return (
      <div className="center" style={{ marginTop: "10rem" }}>
        <div className="preloader-wrapper active">
          <div className="spinner-layer spinner-red-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>

      {!loading && logs.length === 0 ? (
        <p className="center"> No Logs to show...</p>
      ) : (
        logs.map(log => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
}

Logs.proptTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  log: state.log,
  getLogs: PropTypes.func.isRequired
});
export default connect(mapStateToProps, { getLogs })(Logs);
