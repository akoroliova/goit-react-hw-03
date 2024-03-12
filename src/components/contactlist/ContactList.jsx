import css from './ContactList.module.css';
import Contact from '../contact/Contact.jsx';
// В компоненті ContactsList ніяких фільтрів не потрібно, лише створення розмітки.

const ContactList = ({ initialContacts }) => {
  return (
    <div className={css.contactListContainer}>
      <ul className={css.contactListListElement}>
        {initialContacts.map(eachItem => {
          const { id, name = 'N/A', number = 'N/A' } = eachItem;
          return (
            <li key={id} className={css.contactListItemElement}>
              <Contact name={name} number={number} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
