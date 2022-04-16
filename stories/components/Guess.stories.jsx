import Guess from '../../components/Guess';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: Guess,
  title: 'Components/Guess',
};


const Template = args => <Guess {...args} />;

export const Default = Template.bind({});
Default.args = {
  guess: ['1', '2', '3', '4'],
  secretCodeLength: 4,
};

export const Blank = Template.bind({});
Blank.args = {
  secretCodeLength: 4,
};

export const PartiallyFilled = Template.bind({});
PartiallyFilled.args = {
  guess: ['A'],
  secretCodeLength: 4,
};
