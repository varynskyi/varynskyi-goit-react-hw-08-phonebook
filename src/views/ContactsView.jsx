import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { fetchContacts } from '../redux/contacts';
import s from '../styles/ContactsView.module.css';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <div className={s.container}>
      <p className={s.title}>
        Add contact
      </p>
      <ContactForm />
      <Filter />
      <p className={s.title}>
        My contacts
      </p>
      <ContactList />
    </div>
  );
}
