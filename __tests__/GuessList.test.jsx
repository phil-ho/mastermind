import { render, screen } from '@testing-library/react'
import GuessList from '../components/GuessList'
import '@testing-library/jest-dom'

describe('GuessList', () => {
  it('renders the GuessList', () => {
    const currentGuess = ["1", "2", "3"];
    const feedbackList = [{
      fullMatch: 2,
      partialMatch: 1,
    }, {
      fullMatch: 1,
      partialMatch: 2,
    }];
    const guessList = [
      ["0", "1", "2", "3"],
      ["4", "5", "6", "7"],
    ];
    const maxTurns = 4;
    const secretCodeLength = 4;

    render(<GuessList
      currentGuess={currentGuess}
      feedbackList={feedbackList}
      guessList={guessList}
      maxTurns={4}
      secretCodeLength={secretCodeLength} />);

    const tiles = screen.getAllByTestId('guess-tile');
    expect(tiles.length).toBe(16);

    const feedbackButtons = screen.getAllByRole('button');
    // only 2 actual feedback for 2 guesses in guessList
    expect(feedbackButtons.length).toBe(2);
  });
});
