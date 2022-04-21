import Rules from '../../components/Rules';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: Rules,
  title: 'Components/Rules',
};

const Template = args => (
  <div style={{
    background: 'rgb(100,100,100)',
    padding: '20px',
  }}>
    <Rules {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
};
