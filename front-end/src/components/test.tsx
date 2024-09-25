import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

test('renders the component correctly', () => {
    render(<MyComponent />);
    const element = screen.getByText(/some text/i);
    expect(element).toBeInTheDocument();
});
