import { fireEvent, render, screen } from '@testing-library/react';
import Keyboard from '../components/Keyboard';
import '@testing-library/jest-dom';

describe('Keyboard', () => {
  it('renders the keyboard', () => {
    const handleOnEnter = jest.fn();
    const handleOnChange = jest.fn();
    const keys = ["A", "B", "C"];

    render(
      <Keyboard
        keys={keys}
        onChange={handleOnChange}
        onEnter={handleOnEnter}
        size={3} />);


    const enterButton = screen.getByRole('button', {
      name: /keyboard_return/,
    });
    const backspaceButton = screen.getByRole('button', {
      name: /backspace/,
    });
    const buttonA = screen.getByRole('button', {
      name: 'A',
    });
    const buttonB = screen.getByRole('button', {
      name: 'B',
    });
    const buttonC = screen.getByRole('button', {
      name: 'C',
    });

    expect(enterButton).toBeInTheDocument();
    expect(backspaceButton).toBeInTheDocument();
    expect(buttonA).toBeInTheDocument();
    expect(buttonB).toBeInTheDocument();
    expect(buttonC).toBeInTheDocument();

    // onEnter is not allowed to fire until number of keys pressed is "size" length
    fireEvent.click(enterButton);
    expect(handleOnEnter).not.toHaveBeenCalled();

    fireEvent.click(buttonA);
    expect(handleOnChange).toHaveBeenLastCalledWith(['A']);

    fireEvent.click(buttonB);
    expect(handleOnChange).toHaveBeenLastCalledWith(['A', 'B']);

    fireEvent.click(buttonC);
    expect(handleOnChange).toHaveBeenLastCalledWith(['A', 'B', 'C']);

    fireEvent.click(backspaceButton);
    expect(handleOnChange).toHaveBeenLastCalledWith(['A', 'B']);

    fireEvent.click(buttonC);
    expect(handleOnChange).toHaveBeenLastCalledWith(['A', 'B', 'C']);

    // can fire enter now
    fireEvent.click(enterButton);
    expect(handleOnEnter).toHaveBeenCalledTimes(1);
    // clears keypresses

    // cannot fire enter again
    fireEvent.click(enterButton);
    expect(handleOnEnter).toHaveBeenCalledTimes(1);
  });
});
