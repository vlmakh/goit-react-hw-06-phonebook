import { RootState } from './store';

export const selectFilter = (state: RootState) => state.contacts.filter;

export const selectContacts = (state: RootState) => state.contacts.contacts;
