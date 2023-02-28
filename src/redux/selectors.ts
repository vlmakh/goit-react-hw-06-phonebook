import { IState } from 'components/types';

export const selectFilter = (state: IState) => state.contacts.filter;

export const selectContacts = (state: IState) => state.contacts.contacts;

