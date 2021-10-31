
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, deleteContacts } from '../../redux/contacts';
import s from "./ContactList.module.css";
import { visibleList } from '../../redux/contacts';

export default function ContactList() {
  const contacts = useSelector(visibleList);

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  const deleteContact = value => dispatch(deleteContacts(value));
  
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={s.item}>
          <span>{contact.name}</span>
          <span>{contact.number}</span>
          <span>
            <button
              type="button"
              className={s.button}
              onClick={() => deleteContact(contact)}
            >
              Delete
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
}
  
ContactList.propTypes = {
  deleteContact: PropTypes.func,
};
