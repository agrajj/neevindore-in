import packageInfo from '../../package.json';
export const environment = {
  cdn: `https://cdn.jsdelivr.net/gh/agrajj/neevindore-in@${packageInfo.version}/dist/assets`,
  production: true,
};
