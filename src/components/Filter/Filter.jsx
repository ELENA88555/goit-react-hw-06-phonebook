import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, getFilter } from 'redux/slice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = event =>
    dispatch(changeFilter(event.currentTarget.value));

  return (
    <div className={css.labelFilter}>
      <p className={css.textFilter}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};
