import { Button } from 'components/Button/Button.styled';
import { Component } from 'react';
import { FormContainer } from './Form.styled';
import Input from './Input';

const defaultState = {
  name: '',
  number: '',
};

class Form extends Component {
  state = { ...defaultState };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState(prevState => ({ ...prevState, [name]: value }));
  };

  resetForm = () => this.setState({ ...defaultState });

  render() {
    const onSubmit = this.props.onSubmit;

    return (
      <FormContainer
        onSubmit={e => {
          onSubmit(e, this.state);
          this.resetForm();
        }}
      >
        <Input
          label="Name"
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <Input
          label="Number"
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </FormContainer>
    );
  }
}

export default Form;
