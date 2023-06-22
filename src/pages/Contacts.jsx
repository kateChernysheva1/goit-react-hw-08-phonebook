import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/operations';
import { selectContacts, tokenUser } from 'redux/selectors';
import Title from 'components/Title/Title';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

export default function Contacts() {
  const { items: contacts, isLoading, error } = useSelector(selectContacts);
  const dispatch = useDispatch();
  const token = useSelector(tokenUser);

  useEffect(() => {
    dispatch(getContacts(token));
  }, [dispatch, token]);

  return (
    <div className="form">
      <Title text="Phonebook" />
      <ContactForm />
      {!isLoading && contacts[0] && (
        <>
          <Title text="Contacts" />
          <Filter />
          <ContactList />
        </>
      )}

      {isLoading && <div style={{ margin: 20 }}>Loading data...</div>}
      {error && <div style={{ margin: 20 }}>{error}</div>}
    </div>
  );
}
