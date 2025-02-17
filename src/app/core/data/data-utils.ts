export const API_DOMAIN = 'https://api.spacexdata.com';
export const API_VERSION = '/v4';

export function moduleApiUrl(path: string, version?: string): string {
  if (version) {
    return `${API_DOMAIN}/${version}${path}`;
  }
  return API_DOMAIN + API_VERSION + path;
}
