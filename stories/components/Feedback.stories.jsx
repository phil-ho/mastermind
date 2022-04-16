import Feedback from '../../components/Feedback';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: Feedback,
  title: 'Components/Feedback',
};

const Template = args => <Feedback {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 4,
  full: 2,
  partial: 1,
};


export const More = Template.bind({});
More.args = {
  size: 7,
  full: 2,
  partial: 1,
};
