import React, { useState } from "react";

function CreateBankAccount() {
  const [form, setForm] = useState({ name: "", description: "", amount: 0 });

  return (
    <form
      className="grid grid-cols-1 gap-6"
      onSubmit={(event) => {
        event.preventDefault();
        // ...
      }}
    >
      <label className="block" htmlFor="name">
        <span className="text-gray-700">Name</span>
        <input
          name="name"
          type="text"
          value={form.name}
          placeholder="john@example.com"
          onChange={({ target }) => setForm({ ...form, name: target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>

      <label className="block" htmlFor="description">
        <span className="text-gray-700">Description</span>
        <input
          name="description"
          type="text"
          value={form.description}
          placeholder="john@example.com"
          onChange={({ target }) =>
            setForm({ ...form, description: target.value })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>

      <label className="block" htmlFor="amount">
        <span className="text-gray-700">Amount</span>
        <input
          name="amount"
          type="number"
          step="0.01"
          value={form.amount}
          placeholder="john@example.com"
          onChange={({ target }) => setForm({ ...form, amount: target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </label>

      <button type="submit" className="rounded-md bg-green-300 p-2">
        CRIAR CONTA BANCÁRIA
      </button>
    </form>
  );
}

export default CreateBankAccount;
