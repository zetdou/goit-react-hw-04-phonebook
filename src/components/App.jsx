import { Component } from "react";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import styles from "../styles/App.module.css";

export default class App extends Component {
      state = {
        contacts: [],
        filter: "",
      };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (newContact) => {
    const { contacts } = this.state;
    if (contacts.some((contact) => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts!`);
    } else {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, newContact],
      }));
    }
  };
  
  handleFilterChange = (ev) => {
    this.setState({ filter: ev.currentTarget.value });
  };

  removeContact = (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id)
    }));
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((contact) => 
    contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <h1 className={styles.firstHeading}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact}/>

        <h2 className={styles.secondHeading}>Contacts</h2>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <ContactList contacts={filteredContacts} onDelete={this.removeContact} />
      </>
    );
  }
}
