import { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import ContactListItem from "./ContactListItem";
import styles from "../styles/ContactList.module.css";

export default class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ).isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  render() {
    const { contacts, onDelete } = this.props;

    return (
      <ul className={styles.contactList}>
        {contacts.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={onDelete}
          />
        ))}
      </ul>
    );
  }
}
