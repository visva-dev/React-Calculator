import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from '../components/Navbar';
import Display from '../components/Display';
import ButtonPanel from '../components/ButtonPanel';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <div className="app">
        <BrowserRouter>
          <NavBar />
        </BrowserRouter>
        <Display />
        <ButtonPanel />
      </div>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
