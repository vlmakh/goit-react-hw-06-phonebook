import { configureStore, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const savedData = JSON.parse(localStorage.getItem('phonebook'));

const startData = [
  { id: nanoid(4), name: 'Arnold Schwarzenegger', number: '5558801' },
  { id: nanoid(4), name: 'Sylvester Stallone', number: '5558802' },
  { id: nanoid(4), name: 'Bruce Willis', number: '5558803' },
  { id: nanoid(4), name: 'Jason Statham', number: '5558804' },
  { id: nanoid(4), name: 'Ryan Reynolds', number: '5558805' },
];

const myContacts = createSlice({
  name: 'contacts',
  initialState: {
    contacts: savedData ? savedData : startData,
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      if (
        state.contacts.some(
          ({ name }) => name.toLowerCase() === action.payload.name.toLowerCase()
        )
      ) {
        alert(`${action.payload.name} is already in contacts`);
      } else {
        const newContact = {
          id: nanoid(4),
          name: action.payload.name,
          number: action.payload.number,
        };
        state.contacts.push(newContact);
      }
      localStorage.setItem('phonebook', JSON.stringify(state.contacts));
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
      localStorage.setItem('phonebook', JSON.stringify(state.contacts));
    },
    filterChange: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterChange } = myContacts.actions;

export const store = configureStore({
  reducer: { contacts: myContacts.reducer },
});