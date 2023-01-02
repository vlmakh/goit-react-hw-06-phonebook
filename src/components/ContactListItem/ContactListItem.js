import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/store';

export function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = contactId => {
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

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
