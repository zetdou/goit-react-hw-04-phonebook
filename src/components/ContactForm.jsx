import { Component } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import styles from "../styles/ContactForm.module.css"

export default class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  handleChange = (ev) => {
    const { name, value } = ev.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.onSubmit({
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({ name: "", number: "" });
  };

  render() {
    const nameId = nanoid();
    const numId = nanoid();

    return (
      <form className={styles.phonebookForm} onSubmit={this.handleSubmit}>
        <label className={styles.phonebookFormLabels} htmlFor={nameId}>Name</label>
        <input
          className={styles.phonebookFormInputs}
          id={nameId}
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label className={styles.phonebookFormLabels} htmlFor={numId}>Phone number</label>
        <input
          className={styles.phonebookFormInputs}
          id={numId}
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button className={styles.phonebookFormBtn} type="submit">Add contact</button>
      </form>
    );
  }
}
