import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from '../src/App';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it('renders without crashing', () => {
  const store = mockStore({weather: null,
    locationOptions: [],
    error: null});
  shallow(
    <Provider store={store}> 
      <App />
    </Provider>
  );
});