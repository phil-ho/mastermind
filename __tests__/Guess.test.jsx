import { render, screen } from '@testing-library/react';
import Guess from '../components/Guess';
import '@testing-library/jest-dom';

describe('Guess', () => {
  it('should render the guess', () => {
    const guess = ['1', '2', '3'];
    render(<Guess guess={guess} secretCodeLength={4} />);

    const tiles = screen.getAllByTestId('guess-tile');
    const valuesRendered = tiles.map((tile) => tile.textContent);

    expect(tiles.length).toBe(4);
    expect(valuesRendered.join('')).toEqual(guess.join(''));
  });
});
