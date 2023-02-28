import { AddForm } from './AddForm/AddForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { Notification } from 'components/Notification/Notification';
import { IContact } from './types';
import { selectFilter, selectContacts } from 'redux/selectors';

function App() {
  const contacts = useSelector(selectContacts);
  const filter: string = useSelector(selectFilter);

  const normalizedFilter: string = filter.toLowerCase();
  const filteredContacts = contacts.filter((contact: IContact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div className="layout">
      <h1>Phonebook</h1>
      <AddForm />

      <div className="contacts">
        <h2>Contacts</h2>

        {filteredContacts.length > 0 || filter ? (
          <Filter />
        ) : (
          <Notification msg="No contacts added" />
        )}

        <ContactList contacts={filteredContacts} />
      </div>
    </div>
  );
}

export { App };
