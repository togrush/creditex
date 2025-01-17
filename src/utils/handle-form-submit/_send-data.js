import { showToast } from 'Components/create-request/toast';

export async function sendData(method, data, url, waitResponse, successMessage) {
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
    showToast(successMessage);

    return responseJSON;
  } catch (e) {
    showToast('Произошла ошибка, повторите попытку позже', true);
    console.error(e);
    return responseJSON;
  }
}
