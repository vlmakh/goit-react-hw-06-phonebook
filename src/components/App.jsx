import css from './App.module.css';
import { AddForm } from './AddForm/AddForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { Notification } from 'components/Notification/Notification';

function App() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <div className={css.layout}>
      <h1>Phonebook</h1>
      <AddForm />

      <div className={css.contacts}>
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
