import Keyboard from '../../components/Keyboard';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: Keyboard,
  title: 'Components/Keyboard',
};


const Template = args => <Keyboard {...args} />;

export const Default = Template.bind({});
Default.args = {
  keys: ['a', 'b', 'c'],
  size: 4,
  onEnter: () => console.log('Enter was clicked'),
  onChange: (keysPressed) => console.log(`keys pressed: ${keysPressed.join(', ')}`),
};
