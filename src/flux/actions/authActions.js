import axios from 'axios';

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
    // User loading
    dispatch({ type: 'USER_LOADING' });
  
    axios
      .get('/api/auth/user', tokenConfig(getState))
      .then(res =>
        dispatch({
          type: 'USER_LOADED',
          payload: res.data
        })
      )
      .catch(err => {
        dispatch(Error(err.response.data, err.response.status));
        dispatch({
          type: 'AUTH_ERROR'
        });
      });
  };
  
  // Register User
  export const register = ({ firstName, lastName, country, city, pubgId, email, phone, password }) => (
    dispatch
  ) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    // Request body
    const body = JSON.stringify({firstName, lastName, country, city, pubgId, email, phone, password });
  
    axios
      .post('/api/auth/register', body, config)
      .then(res =>
        dispatch({
          type: 'REGISTER_SUCCESS',
          payload: res.data
        })
      )
      .catch(err => {
        dispatch(
            Error(err.response.data, err.response.status, 'REGISTER_FAIL')
        );
        dispatch({
          type: 'REGISTER_FAIL'
        });
      });
  };
  
  // Login User
  export const login = ({ phone, password }) => (
    dispatch
  ) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    // Request body
    const body = JSON.stringify({ phone, password });
  
    axios
      .post('/api/auth/login', body, config)
      .then(res =>
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: res.data
        })
      )
      .catch(err => {
        dispatch(
            Error(err.response.data, err.response.status, 'LOGIN_FAIL')
        );
        dispatch({
          type: 'LOGIN_FAIL'
        });
      });
  };
  
  // Logout User
  export const logout = () => {
    return {
      type: 'LOGOUT_SUCCESS'
    };
  };
  
  // Setup config/headers and token
  export const tokenConfig = (getState) => {
    // Get token from localstorage
    const token = getState()
  
    // Headers
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };
  
    // If token, add to headers
    if (token) {
      config.headers['x-auth-token'] = token;
    }
  
    return config;
  };