import { PropTypes } from 'prop-types';
import { List } from '../ContactsList/ContactsList.styled';
import { Contact } from '../Contact/Contact.styled';
import { Button } from 'components/Button/Button.styled';

const ContactsList = ({ filter, contacts, onDeleteContact }) => {
  const visibleContacts = contacts.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(filter.toLowerCase()) ||
      number.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <Contact key={id}>
          <span>
            {name}:<strong>{number}</strong>
          </span>
          <Button onClick={() => onDeleteContact(id)}>Delete</Button>
        </Contact>
      ))}
    </List>
  );
};

ContactsList.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
