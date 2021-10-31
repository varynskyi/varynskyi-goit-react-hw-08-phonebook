import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts';
import s from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const getVisibleList = value => dispatch(filterContacts(value));
  const filterList = e => {
    getVisibleList(e.target.value);
  };

  return (
    <label htmlFor="filter" className={s.filter}>
      <p className={s.filterName}>Find contacts</p>
      <input
        className={s.input}
        onChange={filterList}
        type="text"
        name="filter"
        placeholder="Find*"
        autoComplete="off"
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  formSubmitHandler: PropTypes.func,
};
