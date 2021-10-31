import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import s from '../styles/LoginView.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.container}>
      <p
        className={s.title}>
        Sign in to Phonebook
      </p>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <input
          className={s.input}
          type="email"
          name="email"
          value={email}
          placeholder="E-mail*"
          onChange={handleChange}
          required
        />
        <input
          className={s.input}
          type="password"
          name="password"
          value={password}
          placeholder="Password*"
          onChange={handleChange}
          required
        />
        <button
          className={s.button}
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
