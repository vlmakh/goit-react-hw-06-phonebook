export interface IContact {
  id: string;
  name: string;
  number: string;
}

export interface IContactList {
  contacts: Array<IContact>;
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
