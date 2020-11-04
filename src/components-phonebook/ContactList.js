import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import contactOperations from "../redux/contactOperation";
import contactSelectors from "../redux/contactSelectors";
import listTransition from "../components-phonebook/list-transition.module.css";
import PropTypes from "prop-types";

const ContactList = ({ items, removeContact }) => (
  <TransitionGroup component="ul" className="items">
    {items.map(({ id, name, number }) => (
      <CSSTransition key={id} timeout={400} classNames={listTransition}>
        <li key={id} className="list">
          <div className="infoContact">
            <p>Name: {name}</p> <p>Tel. {number}</p>
          </div>
          <button
            type="button"
            className="btn cross"
            onClick={() => removeContact(id)}
          ></button>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

const mapStateToProps = (state) => ({
  items: contactSelectors.getFilterContact(state),
});

const mapDispatchToProps = {
  removeContact: contactOperations.removeTask,
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
ContactList.propTypes = {
  items: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};
