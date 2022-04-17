import GuessList from '../../components/GuessList';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: GuessList,
  title: 'Components/GuessList',
};


const Template = args => <GuessList {...args} />;

// currentGuess,
// feedbackList,
// guessList,
// maxTurns,
// secretCodeLength,

const feedbackList = [{
  fullMatch: 2,
  partialMatch: 1,
}, {
  fullMatch: 1,
  partialMatch: 2,
}];

export const Default = Template.bind({});
Default.args = {
  currentGuess: ['1', '2', '3'],
  feedbackList,
  guessList: [[1,2,3,4], [5,6,7,8]],
  maxTurns: 4,
  secretCodeLength: 4,
};
