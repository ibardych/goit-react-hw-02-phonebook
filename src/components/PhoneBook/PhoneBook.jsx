import { Component } from 'react';
import Section from 'components/Section/Section';
import { PhoneBookContainer } from './PhoneBook.styled';
import Form from 'components/Form/Form';
import ContactsList from 'components/ContactsList/ContactsList';
import { nanoid } from 'nanoid';
import Notification from 'components/Notification/Notification';
import Input from 'components/Form/Input';
import { Button } from 'components/Button/Button.styled';

const defaultState = {
  contacts: [
    { id: 'id-1', name: 'Zara Nova', number: '459-12-56' },
    { id: 'id-2', name: 'Kairos Blackwood', number: '443-89-12' },
    { id: 'id-3', name: 'Lysandra Steele', number: '645-17-79' },
    { id: 'id-4', name: 'Xander Vex', number: '227-91-26' },
    { id: 'id-5', name: 'Vega Starlight', number: '124-87-56' },
  ],
  filter: '',
};

class PhoneBook extends Component {
  state = { ...defaultState };

  addContact = (e, { name, number }) => {
    e.preventDefault();

    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contact = { id: nanoid(), name, number };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  deleteAllContacts = () => {
    this.setState({ contacts: [] });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts.filter(item => id !== item.id)],
    }));
  };

  filter = e => {
    const filter = e.target.value;
    this.setState({ filter });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <PhoneBookContainer>
        <Section title="Phone book">
          <Form onSubmit={this.addContact} />
        </Section>
        <Section title="Contacts">
          {contacts.length ? (
            <>
              <Input
                label="Find contacts by name or number"
                type="text"
                name="filter"
                onChange={this.filter}
                value={this.state.filter}
              />
              <ContactsList
                onDeleteContact={this.deleteContact}
                filter={filter}
                contacts={contacts}
              />
              <Button type="default" onClick={this.deleteAllContacts}>
                Clear all contacts
              </Button>
            </>
          ) : (
            <Notification message="There is no contacts yet" />
          )}
        </Section>
      </PhoneBookContainer>
    );
  }
}

export default PhoneBook;
