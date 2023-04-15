import { Button } from './Button';
import { StyledInput } from './FormStyled';

export const Form = ({ value }) => {
  return (
    <Form>
      <StyledInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={value}
      />
      <Button text="Add contact" />
    </Form>
  );
};
