import { render, screen } from '@testing-library/react';
import Feedback from '../components/Feedback';
import '@testing-library/jest-dom';

describe('Feedback', () => {
  it('should render 4 feedback dots', () => {
    render(<Feedback size={4} full={2} partial={1} />);
    const button = screen.getByRole('button');
    const fullMatches = screen.getAllByTestId('feedback-2');
    const partialMatches = screen.getAllByTestId('feedback-1');
    const nonMatches = screen.getAllByTestId('feedback-0');

    expect(button).toBeInTheDocument();
    expect(fullMatches.length).toBe(2);
    expect(partialMatches.length).toBe(1);
    expect(nonMatches.length).toBe(1);
  });
});
