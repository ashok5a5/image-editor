import { render, screen, cleanup } from '@testing-library/react';
import Header from '../Header';

test('Should render header component', () => {
    render(<Header/>);
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
});