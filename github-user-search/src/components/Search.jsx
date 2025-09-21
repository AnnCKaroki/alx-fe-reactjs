import React, { useState } from 'react';
import { fetchUserData, searchUsers } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);
    setPage(1);
    try {
      const data = await searchUsers({
        username,
        location,
        min_repos: minRepos,
        page: 1,
      });
      setUsers(data.items);
      setTotalCount(data.total_count);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);
    try {
      const data = await searchUsers({
        username,
        location,
        min_repos: minRepos,
        page: nextPage,
      });
      setUsers(prev => [...prev, ...data.items]);
      setPage(nextPage);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-lg shadow">
      <form onSubmit={handleAdvancedSearch} className="flex flex-col gap-4">
        <input
          className="border rounded px-3 py-2"
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          className="border rounded px-3 py-2"
          type="text"
          placeholder="Location"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <input
          className="border rounded px-3 py-2"
          type="number"
          min="0"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={e => setMinRepos(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
        >
          Advanced Search
        </button>
      </form>

      {loading && <p className="mt-4 text-blue-600">Loading...</p>}
      {error && <p className="mt-4 text-red-600">Looks like we cant find the user</p>}

      <div className="mt-6 space-y-4">
        {users.map(user => (
          <div key={user.id} className="flex items-center gap-4 p-4 border rounded">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <div>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-blue-700 hover:underline"
              >
                {user.login}
              </a>

            </div>
          </div>
        ))}
      </div>

      {users.length > 0 && users.length < totalCount && (
        <button
          onClick={loadMore}
          className="mt-6 w-full bg-gray-200 hover:bg-gray-300 rounded px-4 py-2"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
