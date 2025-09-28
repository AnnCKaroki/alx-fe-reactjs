import React from 'react';

const UserProfile = () => {
  return (
    <div className="bg-gray-100 p-4 max-w-xs sm:p-4 sm:max-w-xs md:p-8 md:max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center transition-shadow duration-300 hover:shadow-xl">
      <img
        src="https://via.placeholder.com/150"
        alt="User Avatar"
        className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <h1 className="text-lg sm:text-lg md:text-xl text-blue-800 my-4 transition-colors duration-300 hover:text-blue-500">John Doe</h1>
      <p className="text-gray-600 text-sm sm:text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
};

export default UserProfile;
