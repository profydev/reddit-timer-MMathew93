import fetchMock from 'jest-fetch-mock';

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import mockResponse from './_mocks_/subreddit-reactjs-response.json';
import App from './App';

fetchMock.enableMocks();

function setup() {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
}

describe('Header', () => {
  test.each(
    [
      { text: 'About', location: '/about' },
      { text: 'How it works', location: '/how-it-works' },
    ],
  )(
    'Check if links point back to correct pages',
    (link) => {
      setup();
      const linkDom = screen.getByText(link.text);
      expect(linkDom).toHaveAttribute('href', link.location);
    },
  );

  test('"Logo" link points back to the landing page', () => {
    setup();
    const link = screen.getByRole('link', { name: /reddit timer logo/i });
    userEvent.click(link);
    expect(
      screen.getByRole('heading', { name: /find the top posts on reddit/i }),
    ).toBeInTheDocument();
  });
});

describe('Subreddit form', () => {
  test('loads posts that are rendered on the page', async () => {
    fetch.once(JSON.stringify(mockResponse));
    setup();

    const subredditInput = screen.getByLabelText('r /');
    userEvent.type(subredditInput, 'reactjs');

    const submitButton = screen.getByRole('button', { name: /search/i });
    userEvent.click(submitButton);

    expect(screen.getByText(/is loading.../i)).toBeInTheDocument();

    expect(await screen.findByText(/number of top posts: 25/i)).toBeInTheDocument();

    expect(fetch).toHaveBeenCalledWith('https://www.reddit.com/r/reactjs/top.json');
  });
});
