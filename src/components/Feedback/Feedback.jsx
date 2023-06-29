import css from './Feedback.module.css';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';
import { useState } from 'react';

export const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = type => {
    if (type === 'good') {
      setGood(good + 1);
    } else if (type === 'neutral') {
      setNeutral(neutral + 1);
    } else if (type === 'bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return ((good / countTotalFeedback()) * 100).toFixed(0);
  };

  return (
    <div className={css.wrapper}>
      <Section title="Please leave feedback">
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={'Good'}
          onLeaveFeedback={() => handleClick('good')}
        ></FeedbackOptions>
        <FeedbackOptions
          options={'Neutral'}
          onLeaveFeedback={() => handleClick('neutral')}
        ></FeedbackOptions>
        <FeedbackOptions
          options={'Bad'}
          onLeaveFeedback={() => handleClick('bad')}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        <h1>Statistics</h1>
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={
              countPositiveFeedbackPercentage() > 0
                ? countPositiveFeedbackPercentage()
                : '0'
            }
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </div>
  );
};
