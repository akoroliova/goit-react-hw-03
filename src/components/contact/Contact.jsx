import css from './Contact.module.css';
import { LuCat } from 'react-icons/lu';
import { LuPhone } from 'react-icons/lu';

const Contact = ({ contactId, name, number, onDelete }) => {
  return (
    <div className={css.contactCardContainer}>
      <ul className={css.contactDataListElement}>
        <li className={css.contactDataItemElement}>
          <div className={css.contactDataIcon}>
            <LuCat />
          </div>
          <div className={css.contactDataText}>{name}</div>
        </li>
        <li className={css.contactDataItemElement}>
          <div className={css.contactDataIcon}>
            <LuPhone />
          </div>
          <div className={css.contactDataText}>{number}</div>
        </li>
      </ul>
      <div className={css.contactDeleteButtonContainer}>
        <button
          className={css.buttonDelete}
          onClick={() => onDelete(contactId)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
