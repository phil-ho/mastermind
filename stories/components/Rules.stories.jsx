import Rules from '../../components/Rules';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: Rules,
  title: 'Components/Rules',
};

const Template = args => <Rules {...args} />;

export const Default = Template.bind({});
Default.args = {
};
