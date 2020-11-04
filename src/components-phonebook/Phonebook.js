import React, { Component } from "react";
import { connect } from "react-redux";
import contactOperations from "../redux/contactOperation";
import contactSelectors from "../redux/contactSelectors";
import { CSSTransition } from "react-transition-group";
import ContactCreator from "./ContactCreator";
import ContactList from "./ContactList";
import Section from "./Section";
import FilterContact from "./FilterContact";
import Notification from "./Notification";
import Spinner from "../components-phonebook/Spinner";
import notificationStyles from "./notification.module.css";

class Phonebook extends Component {
  componentDidMount() {
    this.props.fetchTask();
  }

  render() {
    const { items, loading, isNotification } = this.props;
    return (
      <>
        {loading && <Spinner />}

        <CSSTransition
          in={isNotification}
          classNames={notificationStyles}
          timeout={1000}
          unmountOnExit
        >
          <Notification />
        </CSSTransition>

        <Section title="Phonebook">
          <ContactCreator />
        </Section>
        <Section title={items.length > 0 ? "Contacts" : "Do not have contacts"}>
          {items.length > 0 && <FilterContact />}

          <ContactList />
        </Section>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  items: contactSelectors.getAllContact(state),
  isNotification: contactSelectors.getNotificationValue(state),
  loading: contactSelectors.isLoading(state),
});

const mapDispatchToProps = {
  fetchTask: contactOperations.fetchTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
