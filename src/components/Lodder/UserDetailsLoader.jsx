import React from 'react';

const UserDetailsLoader = () => {
    return (
         <div className="p-6 bg-white rounded-2xl shadow-md animate-pulse space-y-4">
        <div className="h-6 w-32 bg-gray-200 rounded"></div>
        <div className="h-4 w-48 bg-gray-200 rounded"></div>
        <div className="h-4 w-32 bg-gray-300 rounded"></div>
        <div className="h-8 w-24 bg-gray-200 rounded mt-4"></div>
      </div>
    );
};

export default UserDetailsLoader;