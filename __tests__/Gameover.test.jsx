import { fireEvent, render, screen } from '@testing-library/react';
import Gameover from '../components/Gameover';
import '@testing-library/jest-dom';

describe('Gameover', () => {
  const guessList = [
    ['0', '0', '0', '0'],
    ['1', '3', '3', '4'],
  ];
  const secretCode = ['1','3','3','4'];

  it('should render Win screen when hasWon', () => {
    const handleStartGame = jest.fn();

    render(
      <Gameover
        guessList={guessList}
        hasWon={true}
        onStartGame={handleStartGame}
        secretCode={secretCode} />
    );

    const title = screen.getByText(/You Win!/i);
    const digits = screen.getAllByRole('listitem').map((li) => li.textContent);
    const turnsNumber = screen.getByText(/2/);

    expect(title).toBeInTheDocument();
    expect(digits).toEqual(secretCode);
    expect(turnsNumber).toBeInTheDocument();

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(handleStartGame).toHaveBeenCalled();
  });

  it('should render Lose screen when hasWon is false', () => {
    render(
      <Gameover
        guessList={guessList}
        hasWon={false}
        onStartGame={() => {}}
        secretCode={secretCode} />
    );

    const title = screen.getByText(/Game Over/i);
    expect(title).toBeInTheDocument();
  });
});
