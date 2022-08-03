const {
  env: { NODE_ENV },
} = process;
const isRelease = NODE_ENV === 'release';
const RELEASE_BASE_URL = 'https://fbm-api.fbmms.cn';
const TEST_BASE_URL = `https://fbm-api-${NODE_ENV}.fbmms.cn`;
const PUBLIC_BASE_URL = isRelease ? JSON.stringify(RELEASE_BASE_URL) : JSON.stringify(TEST_BASE_URL);

module.exports = { PUBLIC_BASE_URL };
