import React from 'react';

import Title from './Title/Title';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, changeFilter, filterContact } from 'redux/counterSlice';

export function App() {
  const { contacts, filter } = useSelector(state => state);
  const dispatch = useDispatch();

  const filterFunc = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterState = (name, value) => {
    switch (name) {
      case 'filter':
        dispatch(changeFilter(value));
        break;

      default:
        console.warn('Чекни поле');
        break;
    }
  };

  const saveContacts = obj => {
    dispatch(addContact(obj));
  };

  const filterContacts = id => {
    dispatch(filterContact(id));
  };

  const filterMass = filterFunc();

  return (
    <div className="form">
      <Title text="Phonebook" />
      <ContactForm saveContacts={saveContacts} />

      {contacts[0] && (
        <>
          <Title text="Contacts" />
          <Filter filterState={filterState} />

          <ContactList
            filterMass={filterMass}
            filterContacts={filterContacts}
          />
        </>
      )}
    </div>
  );
}
