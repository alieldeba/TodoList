import React from "react";

const NotFound = () => {
  return (
    <div className="flex items-center h-screen w-screen bg-gray-200">
      <div className="m-auto text-center">
        <h1 className="text-5xl font-medium text-gray-800">404</h1>
        <p className="text-2xl text-gray-700 my-4">Page Not Found</p>
        <p className="text-lg text-gray-600 my-4">
          Sorry, the page you are looking for could not be found.
        </p>
      </div>
    </div>
  );
};

export default React.memo(NotFound);