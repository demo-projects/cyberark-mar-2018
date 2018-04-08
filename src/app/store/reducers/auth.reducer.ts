export interface AuthState {
  user: string;
}

const initialState = {
  user: 'Adam'
};

export const authReducer = (state = initialState, action) => state;
