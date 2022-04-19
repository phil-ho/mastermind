import { fireEvent, render, screen } from '@testing-library/react'
import Rules from '../components/Rules'
import '@testing-library/jest-dom'

describe('Rules', () => {
  it('renders a title and button', () => {
    const handleStartGame = jest.fn();

    render(<Rules onStartGame={handleStartGame} />);

    const title = screen.getByText(/The Rules/i);
    const newGameButton = screen.getByRole('button', {
      name: /New Game/i,
    });

    expect(title).toBeInTheDocument();
    expect(newGameButton).toBeInTheDocument();

    fireEvent.click(newGameButton);
    expect(handleStartGame).toHaveBeenCalled();
  });
});
