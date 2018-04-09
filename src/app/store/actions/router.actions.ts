export const NAVIGATE = '[Router] navigate';

export const navigate = params => ({
  type: NAVIGATE,
  payload: params
});
