import React from 'react';
// import { nanoid } from 'nanoid';

import { Title } from './Title/Title';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [],
    /*contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],*/
    filter: '',
  };

  filter = () => {
    return this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  filterState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  saveContacts = obj => {
    this.setState({
      contacts: [obj, ...this.state.contacts],
    });
  };

  filterContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    const filterMass = this.filter();

    return (
      <div className="form">
        <Title text="Phonebook" />
        <ContactForm
          contacts={this.state.contacts}
          saveContacts={this.saveContacts}
        />

        {this.state.contacts[0] && (
          <>
            <Title text="Contacts" />
            <Filter filter={this.state.filter} filterState={this.filterState} />

            <ContactList
              filterMass={filterMass}
              filterContacts={this.filterContacts}
            />
          </>
        )}
      </div>
    );
  }
}
