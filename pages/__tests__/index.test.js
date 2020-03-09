import React from 'react';
import moxios from 'moxios';
import { cleanup, render } from '@testing-library/react';
import TestProviders from '../../helpers/TestProviders';
import Index from './index';

const setup = () => {
  const props = {};
  const comp = render((
    <TestProviders>
      <Index {...props} />
    </TestProviders>
  ));

  return { ...comp, props };
};

describe('<Index />', () => {
  beforeEach(moxios.install);

  afterEach(() => {
    moxios.uninstall();
    cleanup();
  });

  it('ticker sets currentBtcPrice', () => {
    const { asFragment } = setup();
    expect(asFragment()).toMatchSnapshot();
  });
});
