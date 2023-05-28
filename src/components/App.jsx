import React from 'react';

import Title from './Title/Title';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';

export function App() {
  const { contacts } = useSelector(state => state);

  return (
    <div className="form">
      <Title text="Phonebook" />
      <ContactForm />

      {contacts[0] && (
        <>
          <Title text="Contacts" />
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
}
