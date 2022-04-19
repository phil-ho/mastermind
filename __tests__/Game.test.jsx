import { render, screen } from '@testing-library/react'
import Game from '../components/Game'
import '@testing-library/jest-dom'

describe('Game', () => {
  it('renders a heading', () => {
    render(
      <>
        <Game />
        <div id='portal'></div>
      </>
    );

    const title = screen.getByText('Mastermind');
    const dialog = screen.getByRole('dialog');

    expect(title).toBeInTheDocument();
    expect(dialog).toBeInTheDocument();
  });
});
