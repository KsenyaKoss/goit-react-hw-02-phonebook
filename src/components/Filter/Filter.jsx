import { Styleddiv } from 'components/Contacts/ContactsListStyled';
import { StyledInput } from 'components/Form/FormStyled';

export const Filter = ({ value, handleFilter, onChange }) => {
  return (
    <Styleddiv>
      <h2>Find contacts by name</h2>
      <StyledInput
        type="text"
        onChange={evt => handleFilter(evt.target.value)}
        value={value}
      ></StyledInput>
    </Styleddiv>
  );
};
