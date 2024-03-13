import css from './ContactList.module.css';
import Contact from '../contact/Contact.jsx';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={css.contactListContainer}>
      <ul className={css.contactListListElement}>
        {contacts.map(eachItem => {
          const { id, name = 'N/A', number = 'N/A' } = eachItem;
          return (
            <li key={id} className={css.contactListItemElement}>
              <Contact
                contactId={id}
                name={name}
                number={number}
                onDelete={onDelete}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
