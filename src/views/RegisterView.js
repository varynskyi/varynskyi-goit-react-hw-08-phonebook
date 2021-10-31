import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import s from '../styles/RegisterView.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.container}>
      <p className={s.title}>
        Welcome to Phonebook!
        Let’s begin the adventure
      </p>
      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <input
          className={s.input}
          required
          type="name"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name*"
        />
        <input
          className={s.input}
          required
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="E-mail*"
        />
        <input
          className={s.input}
          required
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password*"
        />
        <button
          type="submit"
          className={s.button}
        >
          Sign up
        </button>
      </form>
    </div>
  );
}
