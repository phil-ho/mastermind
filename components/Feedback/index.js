import React, {useState} from 'react';

import styles from './feedback.module.css';

const Feedback = ({size, full, partial}) => {

  const randomizeFeedback = (size, full, partial) => {
    // build array
    const fullArray = new Array(full).fill(2);
    const partialArray = new Array(partial).fill(1);
    const zeroArray = new Array(size - full - partial).fill(0);
    const resultArray = fullArray.concat(partialArray).concat(zeroArray);

    // shuffle array
    for (let i = resultArray.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      const lastValue = resultArray[i];
      const randomValue = resultArray[randomIndex];
      resultArray[randomIndex] = lastValue;
      resultArray[i] = randomValue;
    }

    return resultArray;
  };

  const [randomizedFeedback, setRandomizedFeedback] = useState(randomizeFeedback(size, full, partial));

  const renderFeedbackItems = () => randomizedFeedback.map((score, index) => (
    <div key={index} attr-data={score} className={styles.feedbackPin}>{score}</div>
  ));

  return (
    <div className={styles.feedback}>
      {renderFeedbackItems()}
    </div>
  );
};


export default Feedback;
