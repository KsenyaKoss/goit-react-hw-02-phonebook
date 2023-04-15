import { Component } from 'react';
// import { Section } from './Section/Sectiion';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/ContactsList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = ({ name, number }) => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        {
          id: nanoid(),
          name,
          number,
        },
      ],
    });
  };

  handleFilter = () => {
    this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
  };

  onInputChange = ev => {
    this.setState({ filter: ev.target.value });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleAddContact} />
        <Filter
          value={this.state.filter}
          onChange={this.onInputChange}
          handleFilter={this.handleFilter}
        />
        <Contacts title="Contacts" contacts={this.state.contacts}></Contacts>
      </>
    );
  }
}
