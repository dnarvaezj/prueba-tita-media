import useAxios from 'axios-hooks';

export const HttpRequest = (path) => {

  const [{ data, loading, error }] = useAxios({
    method: 'GET',
    url: `https://dummyapi.io/${path}`,
    headers: { 'app-id': '638e0a53ea7c03533a99df43' }
  });

  return {data, loading, error};
}