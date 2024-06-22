import { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import styles from "../styles/ContactForm.module.css"


export default class Filter extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  render() {
    const { filter, onChange } = this.props;
    const searchId = nanoid();

    return (
      <div className={styles.filterContainer}>
        <label className={styles.phonebookFormLabels} htmlFor={searchId}>Find contact</label>
        <input
          className={styles.phonebookFormInputs}
          type="text"
          id={searchId}
          name="filter"
          value={filter}
          onChange={onChange}
        />
      </div>
    );
  }
}
