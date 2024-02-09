export async function sendData(method, data, url, waitResponse) {
  let responseJSON = null;
  const params = {
    method: method.toUpperCase(),
  };

  if (params.method === 'POST') {
    params.body = data;
  }

  try {
    const response = await fetch(url, params);

    if (waitResponse) {
      if (response.redirected) {
        window.location.href = response.url;
      }
      responseJSON = await response.json();
    }
    return responseJSON;
  } catch (e) {
    console.error(e);
    return responseJSON;
  }
}
