import { StyledItem } from './ContactsListStyled';

export const ContactItem = ({ contactData }) => {
  const { name, number } = contactData;
  return <StyledItem>{`${name}: ${number}`}</StyledItem>;
};
