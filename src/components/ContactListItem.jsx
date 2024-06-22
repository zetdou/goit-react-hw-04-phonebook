import { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import styles from "../styles/ContactListItem.module.css"

export default class ContactListItem extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  render() {
    const { id, name, number, onDelete } = this.props;

    return (
      <li className={styles.contactListItem} key={id}>
        {name} - {number}
        <button className={styles.deleteContactBtn} onClick={() => onDelete(id)}>Delete</button>
      </li>
    );
  }
}
