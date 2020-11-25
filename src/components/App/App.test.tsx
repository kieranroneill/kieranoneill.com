import { shallow } from 'enzyme';
import React from 'react';

// Components.
import App from './App';

describe('components/App', () => {
  it('should mount?', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
