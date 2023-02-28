import css from './ContactListItem.module.css';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/store';
import { IContact } from 'components/types';

export function ContactListItem({ id, name, number }: IContact) {
  const dispatch = useDispatch();

  const handleDelete = (contactId: string) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <li className={css.contactItem}>
      <span className={css.contactName}>{name}</span>
      <span className={css.contactNumber}>{number}</span>
      <button
        type="button"
        className={css.delButton}
        onClick={() => handleDelete(id)}
        aria-label="Delete number"
      >
        <MdDeleteForever className={css.icon} />
      </button>
    </li>
  );
}
