import React from 'react';
import { render, screen } from '@testing-library/react';
import MainPage from "../mainpage";

test('renders main page with correct content', () => {
    render(<MainPage />);

    // Check if the header text is present
    const headerElement = screen.getByText(/Welcome to the Main Page!/i);
    expect(headerElement).toBeInTheDocument();

    // Check if the paragraph text is present
    const paragraphElement = screen.getByText(/This is a very basic main page component./i);
    expect(paragraphElement).toBeInTheDocument();
});
