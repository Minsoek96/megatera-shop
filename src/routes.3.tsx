import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import { screen, render, waitFor } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';

import defaultTheme from './styles/defaultTheme';

import routes from './routes';
import fixtures from '../fixtures';

const context = describe;

describe('routes', () => {
  function renderRouter(path: string) {
    const router = createMemoryRouter(routes, { initialEntries: [path] });
    render(
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>,
    );
  }

  context('when the current path is “/”', () => {
    it('renders the home page', () => {
      renderRouter('/');

      screen.getByText(/Home page/);
    });
  });

  context('When the current path is "/products")', () => {
    context('without category ID', () => {
      it('renders the product list page', async () => {
        renderRouter('/products');

        await waitFor(() => {
          screen.getAllByText(/Products/);
        });
      });
    });

    context('with category ID', () => {
      it('renders the product list page', async () => {
        renderRouter(`/products?categoryId=${fixtures.categories}`);

        await waitFor(() => {
          screen.getByText(/Category #1/);
        });
      });
    });
  });
});
