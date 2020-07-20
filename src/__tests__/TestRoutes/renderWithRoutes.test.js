import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderWithRouter from '../../Pages/TestRoutes/renderWithRouter';
import TestRenderRoutes, { About } from '../../Pages/TestRoutes/testRenderRoutes';

afterEach(cleanup);

describe('Teste da aplicação toda', () => {
  it('deve renderizar o componente TestRenderRoutes', () => {
    const { getByText } = renderWithRouter(<TestRenderRoutes />);
    const home = getByText(/Você está na página Início/i);
    expect(home).toBeInTheDocument();
  });
});
it('should render the component About', () => {
  const { getByText, history } = renderWithRouter(<TestRenderRoutes />);
  fireEvent.click(getByText(/Sobre/i));
  const pathname = history.location.pathname;
  expect(pathname).toBe('/about');

  const aboutAll = getByText(/Você está na página Sobre/i);
  expect(aboutAll).toBeInTheDocument();
});

it('should test an unexistent path, and render Not Found', () => {
  const { getByText , history } = renderWithRouter(<TestRenderRoutes />);

  history.push('/pagina/que-nao-existe/');
  const noMatch = getByText(/Página não encontrada/i);
  expect(noMatch).toBeInTheDocument();
});

it('should render the About component (just the About one)', () => {
  const { getByText, getByTestId } = renderWithRouter(<About />);
  const aboutOnly = getByText(/Você está na página Sobre/i);

  expect(aboutOnly).toBeInTheDocument();
  expect(getByTestId('input-name')).toBeInTheDocument();
  expect(getByTestId('input-email')).toBeInTheDocument();
});

it('should change the value from name and email end keep the value', () => {
  const { getByTestId } = renderWithRouter(<About />);
  const inputName = getByTestId('input-name');
  expect(inputName.value).toBe('');

  fireEvent.change(inputName, { target: { value: 'Maite' } });
  expect(inputName.value).toBe('Maite');

  const inputEmail = getByTestId('input-email');
  expect(inputEmail.value).toBe('');

  fireEvent.change(inputEmail, { target: { value: 'test@test.com' } });
  expect(inputEmail.value).toBe('test@test.com');
})
