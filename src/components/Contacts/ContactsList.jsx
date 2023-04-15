import { StyledList, Styleddiv } from './ContactsListStyled';
import { StyledTitle } from '../Form/FormStyled';
import { ContactItem } from './ContactItem';

export const Contacts = ({ title, contacts }) => {
  return (
    <Styleddiv>
      <StyledTitle>{title}</StyledTitle>
      <StyledList>
        {contacts.map(contact => {
          return (
            <ContactItem key={contact.id} contactData={contact}></ContactItem>
          );
        })}
      </StyledList>
    </Styleddiv>
  );
};
