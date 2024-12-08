//run this command
//npm install --save-dev @testing-library/react @testing-library/jest-dom jest
//npm run test
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "./Login";
const axios = require("axios");

// const MockAdapter = require('axios-mock-adapter');

// const mock = new MockAdapter(axios);

// // Mock the GET request to the specified URL
// mock.onGet("https://jsonplaceholder.typicode.com/users/1").reply(200, {
//   id: 1,
//   name: "Anil",
// });

//This ensures that when the axios.get function is called inside the Login component,
// it will not actually make a real HTTP request, but instead, it will return the mock data specified in the mock implementation.
jest.mock("axios", () => ({
  __esModule: true,

  default: {
    get: (url) => {
      if (url === "https://jsonplaceholder.typicode.com/users/1") {
        return {
          data: { id: 1, name: "Anil" },
        };
      } else if (url === "https://example.com/api/data") {
        return {
          data: { key: "value" },
        };
      }
      // Add more conditions for other URLs if needed
    },
    // Add other methods such as post, put, delete if needed
  },
}));

//or

// jest.mock("axios", () => ({
//   __esModule: true,
//   default: {
//     get: (url) => {
//       if (url === "https://jsonplaceholder.typicode.com/users/1") {
//         return Promise.resolve({
//           data: { id: 1, name: "Anil" },
//         });
//       } else if (url === "https://example.com/api/data") {
//         return Promise.resolve({
//           data: { key: "value" },
//         });
//       }
//       // Add more conditions for other URLs if needed
//       return Promise.resolve({ data: {} });
//     },
//   },
// }));

test("username input should be rendered", () => {
  render(<Login />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  expect(usernameInputEl).toBeInTheDocument();
});

test("password input should be rendered", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl).toBeInTheDocument();
});

test("button should be rendered", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
});

test("username input should be empty", () => {
  render(<Login />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  expect(usernameInputEl.value).toBe("");
});

test("password input should be empty", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl.value).toBe("");
});

test("button should be disabled", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeDisabled();
});

test("loading should not be rendered", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).not.toHaveTextContent(/please wait/i);
});

test("error message should not be visible", () => {
  render(<Login />);
  const errorEl = screen.getByTestId("error");
  expect(errorEl).not.toBeVisible();
});

test("username input should change", () => {
  render(<Login />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  expect(usernameInputEl.value).toBe(testValue);
});

test("password input should change", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const testValue = "test";

  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  expect(passwordInputEl.value).toBe(testValue);
});

test("button should not be disabled when inputs exist", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });

  expect(buttonEl).not.toBeDisabled();
});

test("loading should be rendered when click", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  expect(buttonEl).toHaveTextContent(/please wait/i);
});

test("loading should not be rendered after fetching", async () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  await waitFor(() => expect(buttonEl).not.toHaveTextContent(/please wait/i));
});

test("user should be rendered after fetching", async () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);

  const userItem = await screen.findByText("Anil");

  expect(userItem).toBeInTheDocument();
});

// // Login.test.js
// import React from 'react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import Login from './Login';
// import axios from 'axios';

// jest.mock('axios');

// test('displays user name after successful login', async () => {
//   const mockUserData = { id: 1, name: 'Anil' };
//   axios.get.mockResolvedValue({ data: mockUserData });

//   render(<Login />);

//   const loginButton = screen.getByText('Login');
//   fireEvent.click(loginButton);

//   // Wait for the login process to complete
//   await waitFor(() => {
//     expect(screen.getByText('Welcome, Anil!')).toBeInTheDocument();
//   });
// });
