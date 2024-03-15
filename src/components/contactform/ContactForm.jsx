import css from './ContactForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const YupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  number: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export default function ContactForm({ onAdd }) {
  const contactId = nanoid();
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({
      id: contactId,
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={YupSchema}
    >
      {({ errors, touched }) => (
        <Form className={css.contactForm}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" className={css.inputField} />
          {errors.name && touched.name ? (
            <div className={css.errorText}>{errors.name}</div>
          ) : null}

          <label htmlFor={numberId}>Number</label>
          <Field type="text" name="number" className={css.inputField} />
          {errors.number && touched.number ? (
            <div className={css.errorText}>{errors.number}</div>
          ) : null}

          <div className={css.contactAddButtonContainer}>
            <button type="submit">Add contact</button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
