import config from '../constants/config';

const localServerUrl = `${config.protocol}://${window.location.hostname}:${config.port}`;

export default {
  dictionary: () => `${localServerUrl}/dictionary`
};
