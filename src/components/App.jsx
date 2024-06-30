import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import styles from "../styles/App.module.css";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect (() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    if (contacts.some((contact) => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts!`);
    } else {
      setContacts((prevContacts) => [...prevContacts, newContact]);
    }
  };

  const handleFilterChange = (ev) => {
    setFilter(ev.currentTarget.value);
  };

  const removeContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) => 
    contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <h1 className={styles.firstHeading}>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2 className={styles.secondHeading}>Contacts</h2>
        <Filter filter={filter} onChange={handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDelete={removeContact}
        />
      </>
    );
  };

  export default App;

