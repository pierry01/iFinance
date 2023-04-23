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
        bankAccount {
          id
          amount
          sumOfIncomes
          sumOfExpenses
        }
      }
    }
  }
`;

function CreateTransaction({ onClose, bankAccountId }) {
  const FORM = {
    name: "",
    done: true,
    amount: 0.0,
    dueDate: "",
    bankAccountId,
    kind: "INCOME",
    description: "",
  };

  const navigate = useNavigate();
  const [form, setForm] = useState(FORM);
  const [createTransaction, { loading }] = useMutation(MUTATION);

  const onSubmit = async (event) => {
    event.preventDefault();

    const { data } = await createTransaction({
      variables: { transactionInput: form },
    });

    if (data.createTransaction.errors) alert("ERRO!");
    else {
      navigate("/");
      onClose();
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <label htmlFor="name">
        <span className="text-gray-700">Name</span>

        <input
          name="name"
          type="text"
          value={form.name}
          onChange={({ target }) => setForm({ ...form, name: target.value })}
          className="w-full rounded-md border-gray-300 shadow-sm"
        />
      </label>

      <label htmlFor="description">
        <span className="text-gray-700">Description</span>

        <input
          name="description"
          type="text"
          value={form.description}
          placeholder="Description..."
          onChange={({ target }) =>
            setForm({ ...form, description: target.value })
          }
          className="w-full rounded-md border-gray-300 shadow-sm"
        />
      </label>

      <label htmlFor="amount">
        <span className="text-gray-700">Amount</span>

        <input
          min="0.00"
          step="0.01"
          name="amount"
          type="number"
          value={form.amount}
          className="w-full rounded-md border-gray-300 shadow-sm"
          onChange={({ target }) =>
            setForm({
              ...form,
              amount: parseFloat(target.value || 0),
            })
          }
        />
      </label>

      <div>
        <span className="text-gray-700">Kind</span>

        <div className="flex flex-row gap-4">
          <label htmlFor="income" className="flex items-center gap-2">
            <span className="text-gray-700">INCOME</span>

            <input
              id="income"
              name="kind"
              type="radio"
              checked={form.kind === "INCOME"}
              onChange={() => setForm({ ...form, kind: "INCOME" })}
              className="h-4 w-4 border-gray-300 text-blue-500"
            />
          </label>

          <label htmlFor="expense" className="flex items-center gap-2">
            <span className="text-gray-700">EXPENSE</span>

            <input
              name="kind"
              id="expense"
              type="radio"
              checked={form.kind === "EXPENSE"}
              onChange={() => setForm({ ...form, kind: "EXPENSE" })}
              className="h-4 w-4 border-gray-300 text-blue-500"
            />
          </label>
        </div>
      </div>

      <div>
        <span className="text-gray-700">Done</span>

        <div className="flex flex-row gap-4">
          <label htmlFor="done" className="flex items-center gap-2">
            <span className="text-gray-700">DONE</span>

            <input
              id="done"
              name="done"
              type="radio"
              checked={form.done}
              onChange={() => setForm({ ...form, done: true })}
              className="h-4 w-4 border-gray-300 text-blue-500"
            />
          </label>

          <label htmlFor="pending" className="flex items-center gap-2">
            <span className="text-gray-700">PENDING</span>

            <input
              name="done"
              id="pending"
              type="radio"
              checked={!form.done}
              onChange={() => setForm({ ...form, done: false })}
              className="h-4 w-4 border-gray-300 text-blue-500"
            />
          </label>
        </div>
      </div>

      <label htmlFor="dueDate">
        <span className="text-gray-700">Due date</span>

        <input
          type="date"
          name="dueDate"
          max="2099-12-31"
          value={form.dueDate}
          onChange={({ target }) => setForm({ ...form, dueDate: target.value })}
          className="w-full rounded-md border-gray-300 shadow-sm"
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

CreateTransaction.propTypes = {
  onClose: PropTypes.func.isRequired,
  bankAccountId: PropTypes.string.isRequired,
};

export default CreateTransaction;
