import React, { useState } from "react";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";

import gql from "graphql-tag";
import { useMutation } from "@apollo/client";

export const MUTATION = gql`
  mutation CreateTransaction($transactionInput: TransactionInput!) {
    createTransaction(input: { transactionInput: $transactionInput }) {
      errors
      transaction {
        id
        name
        amount
        description
      }
    }
  }
`;

const FORM = {
  kind: "",
  name: "",
  done: true,
  amount: 0.0,
  due_date: "",
  description: "",
  bank_account_id: "",
};

function CreateTransaction({ onClose }) {
  const navigate = useNavigate();
  const [form, setForm] = useState(FORM);
  const [createTransaction, { loading }] = useMutation(MUTATION);

  const onSubmit = async (event) => {
    event.preventDefault();

    const amount = parseFloat(form.amount);

    const { data } = await createTransaction({
      variables: { transactionInput: { ...form, amount } },
    });

    if (data.createTransaction.errors) alert("ERRO!");
    else {
      navigate("/");
      onClose();
    }
  };

  return (
    <form className="grid grid-cols-1 gap-4 p-4" onSubmit={onSubmit}>
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
          placeholder="Description..."
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
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          onChange={({ target }) => setForm({ ...form, amount: target.value })}
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="rounded-md bg-green-300 p-2"
      >
        CREATE Transaction
      </button>
    </form>
  );
}

CreateTransaction.propTypes = { onClose: PropTypes.func.isRequired };

export default CreateTransaction;
