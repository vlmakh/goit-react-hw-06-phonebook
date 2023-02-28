export interface IContact {
  id: string;
  name: string;
  number: string;
}

export interface IContactList {
  contacts: Array<IContact>;
}

export interface IState {
  contacts: { contacts: Array<IContact>; filter: string };
}

export interface IValues {
  name: string;
  number: string;
}

export interface IResetForm {
  resetForm: () => void;
}

export interface INotification {
  msg: string;
}
