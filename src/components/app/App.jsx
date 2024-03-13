import './App.css';
import ContactForm from '../contactform/ContactForm.jsx';
import SearchBox from '../searchbox/SearchBox.jsx';
import ContactList from '../contactlist/ContactList.jsx';
import { useState } from 'react';

function App() {
  // Щоб використати дані з локального сховища в setContacts передаємо callback функцію і з неї повертаємо дані з локального сховища або пустий масив.
  // Пропоную використати useEffect в масиві залежностей якого буде лише contacts для збереження даних в локальне сховище.

  // Застосунок повинен зберігати масив контактів між оновленням сторінки в локальному сховищі. Використовуй ефекти.

  //   Під час додавання та видалення контакту контакти зберігаються у локальне сховище.
  //   Під час завантаження застосунку контакти, якщо такі є, зчитуються з локального сховища і записуються у стан.

  const [contacts, setContacts] = useState([]);
  const addContact = newContact => {
    setContacts(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => {
      return prevContacts.filter(item => item.id !== contactId);
    });
  };

  const [searchBox, setSearchBox] = useState('');
  const filteredItems = contacts.filter(item =>
    item.name.toLowerCase().includes(searchBox.toLowerCase().trim())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox searchValue={searchBox} onFilter={setSearchBox} />
      <ContactList contacts={filteredItems} onDelete={deleteContact} />
    </>
  );
}

export default App;
