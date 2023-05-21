import React, { useState, useEffect } from 'react';

import Title from './Title/Title';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return localStorage.getItem('contacts') &&
      JSON.parse(localStorage.getItem('contacts'))[0]
      ? JSON.parse(localStorage.getItem('contacts'))
      : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filterFunc = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterState = (name, value) => {
    switch (name) {
      case 'filter':
        setFilter(value);
        break;

      default:
        console.warn('Чекни поле');
        break;
    }
  };

  const saveContacts = obj => {
    setContacts([obj, ...contacts]);
  };

  const filterContacts = id => {
    setContacts(prevState => prevState.filter(el => el.id !== id));
  };

  const filterMass = filterFunc();

  return (
    <div className="form">
      <Title text="Phonebook" />
      <ContactForm contacts={contacts} saveContacts={saveContacts} />

      {contacts[0] && (
        <>
          <Title text="Contacts" />
          <Filter filter={filter} filterState={filterState} />

          <ContactList
            filterMass={filterMass}
            filterContacts={filterContacts}
          />
        </>
      )}
    </div>
  );
}
