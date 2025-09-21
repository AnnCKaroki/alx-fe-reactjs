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

export const searchUsers = async ({ username, location, min_repos, page = 1 }) => {
  let query = [];
  if (username) query.push(`${username} in:login`);
  if (location) query.push(`location:${location}`);
  if (min_repos) query.push(`repos:>=${min_repos}`);
  const q = query.join(' ');
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(q)}&page=${page}&per_page=10`;
  const response = await axios.get(url);
  return response.data;
};
