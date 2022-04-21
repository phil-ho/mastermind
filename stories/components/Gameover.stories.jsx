import Gameover from '../../components/Gameover';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: Gameover,
  title: 'Components/Gameover',
};

const Template = args => (
  <div style={{
    background: 'rgb(100,100,100)',
    padding: '20px',
  }}>
    <Gameover {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  hasWon: true,
  guessList: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  secretCode: ['1','2','3','4'],
};
