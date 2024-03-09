import css from './Options.module.css';

const Options = ({ totalFeedback, updateFeedback }) => {
  function handleGood() {
    updateFeedback('good');
  }

  function handleNeutral() {
    updateFeedback('neutral');
  }

  function handleBad() {
    updateFeedback('bad');
  }

  function handleReset() {
    updateFeedback('reset');
  }

  return (
    <div className={css.optionsContainer}>
      <button onClick={handleGood} className={css.button}>
        Good
      </button>

      <button onClick={handleNeutral} className={css.button}>
        Neutral
      </button>

      <button onClick={handleBad} className={css.button}>
        Bad
      </button>

      {totalFeedback != 0 && (
        <button onClick={handleReset} className={css.button}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
