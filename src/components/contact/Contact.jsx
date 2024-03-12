// import { useId } from 'react';
//import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { LuCat } from 'react-icons/lu';
import { LuPhone } from 'react-icons/lu';

const Contact = ({ name, number }) => {
  //   const nameFieldId = useId();
  //   const numberFieldId = useId();

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
        <button className={css.buttonDelete}>Delete</button>
      </div>
    </div>
  );
};

// Contact.propTypes = {
//   name: PropTypes.string,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string,
//   image: PropTypes.string,
//   stats: PropTypes.object,
// };

export default Contact;
