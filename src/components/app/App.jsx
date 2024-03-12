import './App.css';
import initialContacts from '../../initialContacts.json';
//import ContactForm from '../contactform/ContactForm.jsx';
//import SearchBox from '../searchbox/SearchBox.jsx';
import ContactList from '../contactlist/ContactList.jsx';

function App() {
  // Щоб використати дані з локального сховища в setContacts передаємо callback функцію і з неї повертаємо дані з локального сховища або пустий масив.
  // Пропоную використати useEffect в масиві залежностей якого буде лише contacts для збереження даних в локальне сховище.

  return (
    <>
      <h1>Phonebook</h1>
      <ContactList initialContacts={initialContacts} />
    </>
  );
}

export default App;
