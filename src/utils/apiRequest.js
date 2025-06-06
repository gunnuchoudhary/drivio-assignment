import axios from 'axios';

export const apiRequest = async (url, method = 'get', data = {}, headers = {}) => {
  try {
    const config = {
      method,
      url,
      headers,
      ...(method.toLowerCase() === 'get' ? {} : { data }),
    };

    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;
  }
};
