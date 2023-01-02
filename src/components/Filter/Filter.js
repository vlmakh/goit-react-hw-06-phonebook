import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterChange } from 'redux/store';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const handleFilter = event => {
    dispatch(filterChange(event.currentTarget.value));
  };

  return (
    <input
      className={css.filterInput}
      type="text"
      value={filter}
      onChange={handleFilter}
      placeholder="Find contact by name"
    />
  );
}
