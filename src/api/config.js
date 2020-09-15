import config from '../constants/config';
const localServerUrl = `${config.protocol}://${window.location.hostname}:${config.port}`;

export default {
  dictionary: (locale) => `${localServerUrl}/dictionary/${locale}`,
  examples: () => `${localServerUrl}/examples`
};
