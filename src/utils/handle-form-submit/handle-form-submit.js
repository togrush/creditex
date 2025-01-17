import { serializeData } from 'Utils/handle-form-submit/_serialize-data';
import { sendData } from 'Utils/handle-form-submit/_send-data';

export async function handleFormSubmit(
  controlsArrayOrForm,
  method,
  url,
  responseHandlerFunction,
  waitResponse,
  // eslint-disable-next-line default-param-last
  defaultErrorControl = null,
  successMessage,
) {
  const data = serializeData(controlsArrayOrForm);
  const response = await sendData(method, data, url, waitResponse, successMessage);
  responseHandlerFunction(response, controlsArrayOrForm, defaultErrorControl);
}
