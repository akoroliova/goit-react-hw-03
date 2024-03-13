import css from './SearchBox.module.css';

const SearchBox = ({ searchValue, onFilter }) => {
  return (
    <div className={css.searchBoxContainer}>
      <p className={css.label}>Find contacts by name</p>
      <input
        type="text"
        value={searchValue}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
