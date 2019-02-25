const baseUrl = 'https://my-json-server.typicode.com/souvik-ghosh/fake-json';

export async function get(endPoint) {
  const requestUrl = baseUrl + endPoint;
  const response = await fetch(requestUrl, {
    headers: {
      Accept: 'application/json'
    }
  });

  try {
    return await response.json();
  } catch (err) {
    throw err;
  }
}

export async function put(endPoint, data) {
  const requestUrl = baseUrl + endPoint;
  const response = await fetch(requestUrl, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Accept: 'application/json'
    },
    body: JSON.stringify(data)
  });

  try {
    return await response.json();
  } catch (err) {
    throw err;
  }
}
