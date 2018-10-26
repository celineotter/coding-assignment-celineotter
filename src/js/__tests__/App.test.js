import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import App from 'js/App';
import Routes from 'js/Routes';
import Landing from 'js/components/screens/Landing';
// import { wrapWithProvider } from 'js/utils/stateHelpers';

describe('App', () => {
  it('renders without crashing', () => {
    const appWrapper = document.createElement('div');
    const landingWrapper = document.createElement('div');

    ReactDOM.render(<App />, appWrapper);
    ReactDOM.render(<Landing />, landingWrapper);

    expect(appWrapper.innerHTML).toContain(landingWrapper.innerHTML);

    ReactDOM.unmountComponentAtNode(appWrapper);
  });

  it('renders landing when default route is requested', () => {
    const app = shallow(
      <MemoryRouter initialEntries={[ '/' ]}>
        <Routes />
      </MemoryRouter>
    );
    const landing = shallow(<Landing />);

    expect(app.html()).toContain(landing.html());
  });
});
