import React, { useState } from "react";

import login from "config/login";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  return (
    <div className="mt-4 flex flex-col items-center justify-center p-4">
      <h2 className="mb-4 text-2xl font-bold">SIMPLE LOGIN PAGE</h2>

      <form
        className="grid grid-cols-1 gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          login(form);
        }}
      >
        <label className="block" htmlFor="email">
          <span className="text-gray-700">Email address</span>
          <input
            name="email"
            type="email"
            value={form.email}
            placeholder="john@example.com"
            onChange={({ target }) => setForm({ ...form, email: target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </label>

        <label className="block" htmlFor="password">
          <span className="text-gray-700">Password</span>
          <input
            name="password"
            type="password"
            placeholder="***********"
            value={form.password}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onChange={({ target }) =>
              setForm({ ...form, password: target.value })
            }
          />
        </label>

        <button type="submit" className="rounded-md bg-green-300 p-2">
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default Login;
