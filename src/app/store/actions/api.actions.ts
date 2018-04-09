export const API = '[Api] Reqeust';

interface ApiActionParams {
  method: string;
  url: string;
  data?: any;
  onSuccess?: (dispatch: any, data: any) => any;
}
export const apiAction = ({
  method,
  url,
  data,
  onSuccess
}: ApiActionParams) => ({
  type: API,
  payload: {
    method,
    url,
    data,
    onSuccess
  }
});
