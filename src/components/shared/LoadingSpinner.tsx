import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-48">
      <div className="animate-spin rounded-full border-t-4 border-primary border-opacity-25 h-12 w-12"></div>
    </div>
  );
};

export default LoadingSpinner;
