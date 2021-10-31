import s from '../styles/HomeView.module.css';

const HomeView = () => (
  <div className={s.container}>
    <p className={s.title}>
      Phonebook
      <span className={s.text}>
        An application designed to authorize users and work with the phone book.
        Enjoy your use!
      </span>
    </p>
  </div>
);
  
export default HomeView;
