import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterChange } from 'redux/store';
import { selectFilter } from 'redux/selectors';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilter = (event: { currentTarget: { value: string; }; }) => {
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
