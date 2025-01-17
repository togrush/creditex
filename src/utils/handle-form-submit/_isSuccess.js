import { RESPONSE } from 'Components/start-work/constants/response';

export function isSuccess(response) {
  return !!(response.status && response.status === RESPONSE.STATUS);
}
