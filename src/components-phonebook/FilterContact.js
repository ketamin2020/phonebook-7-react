import React from "react";
import { connect } from "react-redux";
import contactActions from "../redux/contactActions";
import contactSelectors from "../redux/contactSelectors";
import PropTypes from "prop-types";
function filterContact({ value, onChangeFilter }) {
  return (
    <div className="group">
      <input
        type="text"
        value={value}
        required
        onChange={(e) => onChangeFilter(e.target.value)}
      />
      <span className="bar"></span>
      <label>Search Contact </label>
    </div>
  );
}
const mapDispatchToProps = {
  onChangeFilter: contactActions.changeFilter,
};

const mapToStateToProps = (state) => ({
  value: contactSelectors.getFilterValue(state),
});
export default connect(mapToStateToProps, mapDispatchToProps)(filterContact);

filterContact.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
