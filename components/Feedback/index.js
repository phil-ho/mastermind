import React, {useState} from 'react';

import styles from './feedback.module.css';

const Feedback = ({size, full, partial}) => {
  const hasNoFeedback = full === undefined && partial === undefined;

  const randomizeFeedback = (size, full, partial) => {
    if (hasNoFeedback) {
      return new Array(size).fill(0);
    }
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
    <span
      aria-hidden="true"
      attr-data={score}
      className={styles.feedbackIcon}
      key={index}>
    </span>
  ));

  const ariaAttributes = {};
  const buttonStyles = [styles.feedbackButton];

  if (hasNoFeedback) {
    buttonStyles.push(styles.feedbackButtonEmpty);
    ariaAttributes['aria-hidden'] = hasNoFeedback;
    ariaAttributes.tabIndex = -1;
  } else {
    ariaAttributes['aria-label'] = `${full} correct numbers in the correct spots. ${partial} correct numbers but in the wrong spots. ${size - full - partial} incorrect numbers.`;
  }

  return (
    <button className={buttonStyles.join(' ')} {...ariaAttributes}>
      {renderFeedbackItems()}
    </button>
  );
};


export default Feedback;
