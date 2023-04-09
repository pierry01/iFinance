import React from "react";

function Login() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="mb-4 text-2xl font-bold">LOGIN</h2>

      <form
        className="grid grid-cols-1 gap-6"
        onSubmit={(event) => console.log("SUBMIT", event)}
      >
        <label className="block" htmlFor="email">
          <span className="text-gray-700">Email address</span>
          <input
            name="email"
            type="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="john@example.com"
          />
        </label>

        <label className="block" htmlFor="password">
          <span className="text-gray-700">Password</span>
          <input
            name="password"
            type="password"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="***********"
          />
        </label>

        <button type="submit"> SUBMIT </button>
      </form>
    </div>
  );
}

export default Login;
