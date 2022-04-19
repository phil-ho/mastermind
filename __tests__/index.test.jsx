import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(
      <>
        <Home />
        <div id='portal'></div>
      </>
    );

    const title = screen.getByText(/Mastermind/i);

    expect(title).toBeInTheDocument();
  });
});
