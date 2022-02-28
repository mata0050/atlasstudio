import api from '../../utils/api';
import setAuthToken from '../../utils/setAuthToken';
const API_URL = 'auth/';

// loadUser user
const loadUser = async () => {
  if (JSON.parse(localStorage.user).token) {
    setAuthToken(JSON.parse(localStorage.user).token);
  }
  const response = await api.get(API_URL);
  return response.data[0];
};

// Register user
const register = async (userData) => {
  const response = await api.post(API_URL + '/register', userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

//Login user
const login = async (userData) => {
  const response = await api.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  loadUser,
  register,
  logout,
  login,
};

export default authService;
