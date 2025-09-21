import axios from 'axios';

export const fetchUserData = async (username) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
