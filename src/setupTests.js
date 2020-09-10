import 'raf/polyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from 'fetch-mock';

Enzyme.configure({ adapter: new Adapter() });

document.body.innerHTML = '<div id="root"></div><div id="modal"></div>';

afterEach(() => {
  fetchMock.restore();
});
