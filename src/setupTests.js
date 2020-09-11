import 'raf/polyfill';
import fetchMock from 'fetch-mock';

document.body.innerHTML = '<div id="root"></div><div id="modal"></div>';

afterEach(() => {
  fetchMock.restore();
});
