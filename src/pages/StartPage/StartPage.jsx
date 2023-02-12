import React from "react";
import { Link } from "react-router-dom";
import GithubRibbon from "../../components/GithubRibbon";

function StartPage() {
  return (
    <>
      <GithubRibbon />
      <div className="flex items-center h-screen w-screen bg-gray-200">
        <div className="m-auto text-center">
          <h1 className="text-3xl font-medium text-gray-800">
            Welcome To TodoList
          </h1>
          <p className="text-lg text-gray-700 my-4">
            Start organizing your tasks with ease. Add, edit, and track progress
            on your todo list today!
          </p>
          <Link
            to="/home"
            className="bg-blue-500 hover:bg-blue-400 text-white font-medium py-2 px-4 rounded"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}

export default React.memo(StartPage);
