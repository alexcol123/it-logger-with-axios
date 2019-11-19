import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techActions";
import M from "materialize-css/dist/js/materialize.min.js";

const TechItem = ({ tech, deleteTech }) => {
  //console.log(tech);

  const onDelete = () => {
    deleteTech(tech.id);
    // Send Message
    M.toast({
      html: `Technician &nbsp  <span class = "yellow-text">  ${tech.firstName} ${tech.lastName}   </span>  &nbsp was Deleted `
    });
  };

  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a onClick={onDelete} href="#!" className="secondary-content">
          <i className="material-icons red-text"> delete_outline</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired
};

export default connect(null, { deleteTech })(TechItem);
