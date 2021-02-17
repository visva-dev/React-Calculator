import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from '../components/Navbar';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <>
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
        <h1>Every programmer is an author.</h1>
      </>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
