import React from "react";
import { Link } from "react-router-dom";

function GithubRibbon() {
  return (
    <Link
      to="https://github.com/alieldeba/TodoList"
      className="fixed top-0 right-0 border border-gray-300 bg-gray-light p-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        className="inline fill-current text-gray-dark h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.05.95.1 1.92.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"></path>
      </svg>
      <span className="text-xs font-bold text-gray-dark">
        {" "}
        Fork me on GitHub
      </span>
    </Link>
  );
}

export default React.memo(GithubRibbon);
