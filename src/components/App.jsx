import React, { useState, useEffect, useRef } from 'react';

import Title from './Title/Title';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const firstLoading = useRef(true);

  /*
  useEffect(() => {
    if (
      localStorage.getItem('contacts') &&
      JSON.parse(localStorage.getItem('contacts'))[0]
    ) {
      setContacts(JSON.parse(localStorage.getItem('contacts')));
    }
  }, []);*/

  useEffect(() => {
    if (firstLoading.current) {
      setContacts(JSON.parse(localStorage.getItem('contacts')));
      firstLoading.current = false;
    }

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
