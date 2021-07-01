import { Endpoint } from 'app/state/interfaces/Endpoint';

export const getPostmanData: Endpoint = (params: RequestInit = {}) =>
  fetch(
    'https://dev-ds.iatistandard.org/static/postman/postman_json.json',
    {
      method: 'GET',
    }
  ).then((res) => res.json());
