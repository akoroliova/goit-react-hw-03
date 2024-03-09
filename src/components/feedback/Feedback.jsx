import css from './Feedback.module.css';

const Feedback = ({
  numberOfGood,
  numberOfNeutral,
  numberOfBad,
  totalFeedback,
  totalGoodPercentage,
}) => {
  return (
    <div className={css.feedbackContainer}>
      <p>Good: {numberOfGood}</p>
      <p>Neutral: {numberOfNeutral}</p>
      <p>Bad: {numberOfBad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {totalGoodPercentage}%</p>
    </div>
  );
};
export default Feedback;
