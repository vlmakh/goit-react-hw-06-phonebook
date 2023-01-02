import { Box } from './Box/Box';
import { AddForm } from './AddForm/AddForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { Notification } from 'components/Notification/Notification';

function App() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <Box width="360px" mx="auto" py={2}>
      <h1>Phonebook</h1>
      <AddForm />

      <Box p={3} mt={2} border="1px solid #212121" borderRadius={3}>
        <h2>Contacts</h2>

        {filteredContacts.length > 0 || filter ? (
          <Filter  />
        ) : (
          <Notification msg="No contacts added" />
        )}

        <ContactList contacts={filteredContacts}  />
      </Box>
    </Box>
  );
}

export { App };
