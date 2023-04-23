import React, { useState } from "react";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";

import gql from "graphql-tag";
import { useMutation } from "@apollo/client";

export const MUTATION = gql`
  mutation CreateBankAccount($bankAccountInput: BankAccountInput!) {
    createBankAccount(input: { bankAccountInput: $bankAccountInput }) {
      errors
      bankAccount {
        id
        name
        amount
        description
        user {
          id
          bankAccounts {
            id
          }
        }
      }
    }
  }
`;

function CreateBankAccount({ onClose }) {
  const navigate = useNavigate();
  const [createBankAccount, { loading }] = useMutation(MUTATION);
  const [form, setForm] = useState({ name: "", description: "" });

  const onSubmit = async (event) => {
    event.preventDefault();

    const { data } = await createBankAccount({
      variables: { bankAccountInput: form },
    });

    if (data.createBankAccount.errors) alert("ERRO!");
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

      <button
        type="submit"
        disabled={loading}
        className="rounded-md bg-green-300 p-2"
      >
        CRIAR CONTA BANCÁRIA
      </button>
    </form>
  );
}

CreateBankAccount.propTypes = { onClose: PropTypes.func.isRequired };

export default CreateBankAccount;
