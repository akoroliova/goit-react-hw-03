import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Description from '../description/Description.jsx';
import Options from '../options/Options.jsx';
import Notification from '../notification/Notification.jsx';
import Feedback from '../feedback/Feedback.jsx';

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedbackObject = window.localStorage.getItem(
      'saved-feedback-object'
    );
    if (savedFeedbackObject !== null) {
      return JSON.parse(savedFeedbackObject);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem(
      'saved-feedback-object',
      JSON.stringify(feedback)
    );
  }, [feedback]);

  const updateFeedback = feedbackType => {
    if (feedbackType === 'good') {
      setFeedback({
        ...feedback,
        good: feedback.good + 1,
      });
    } else if (feedbackType === 'neutral') {
      setFeedback({
        ...feedback,
        neutral: feedback.neutral + 1,
      });
    } else if (feedbackType === 'bad') {
      setFeedback({
        ...feedback,
        bad: feedback.bad + 1,
      });
    } else if (feedbackType === 'reset') {
      setFeedback({
        ...feedback,
        good: 0,
        neutral: 0,
        bad: 0,
      });
    }
  };

  const totalFeedback = Object.values(feedback).reduce(
    (prev, currentValue) => prev + currentValue,
    0
  );

  const totalGoodPercentage = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />

      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />

      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          numberOfGood={feedback.good}
          numberOfNeutral={feedback.neutral}
          numberOfBad={feedback.bad}
          totalFeedback={totalFeedback}
          totalGoodPercentage={totalGoodPercentage}
        />
      )}
    </>
  );
}

export default App;
