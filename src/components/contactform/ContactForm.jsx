import css from './ContactForm.module.css';
import { useId } from 'react';
//Форму обов'язково створи за допомогою бібліотеки Formik.
//Додай валідацію полів форми бібліотекою Yup та виведи повідомлення про помилки:
// поля повинні бути обов'язковими для заповнення
// мінімальна кількість символів - 3
// максимальна кількість символів - 50

export default function ContactForm({ onAdd }) {
  //Для генерації ідентифікаторів використовуй будь-який відповідний пакет, наприклад nanoid.
  const contactId = Date.now();
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = e => {
    e.preventDefault();
    onAdd({
      id: contactId,
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    });
    e.target.reset();
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label htmlFor={nameId}>Name</label>
      <input className={css.inputField} type="text" name="name" />

      <label htmlFor={numberId}>Number</label>
      <input className={css.inputField} type="text" name="number" />

      <div className={css.contactAddButtonContainer}>
        <button type="submit">Add contact</button>
      </div>
    </form>
  );
}
