import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import RegistrationForm from "./RegistrationForm";

// Define a mock submitHandler function
// const submitHandler = jest.fn();

// Mock the submitHandler function
// jest.mock('./submitHandler', () => ({
//   __esModule: true,
//   default: submitHandler,
// }));

describe("RegistrationForm component", () => {
  test("renders all input fields correctly", () => {
    render(<RegistrationForm />);
    expect(screen.getByLabelText("Username:")).toBeInTheDocument();
    expect(screen.getByLabelText("Email:")).toBeInTheDocument();
    expect(screen.getByLabelText("Password:")).toBeInTheDocument();
    // expect(screen.getByLabelText('Gender:')).toBeInTheDocument();
    // expect(screen.getByLabelText('Interests:')).toBeInTheDocument();
    expect(screen.getByLabelText("Country:")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeInTheDocument();
    expect(screen.getByText("Male")).toBeInTheDocument();
    expect(screen.getByText("Female")).toBeInTheDocument();
    expect(screen.getByText("Reading")).toBeInTheDocument();
    expect(screen.getByText("Sports")).toBeInTheDocument();
    expect(screen.getByText("USA")).toBeInTheDocument();
    expect(screen.getByText("UK")).toBeInTheDocument();
    expect(screen.getByText("India")).toBeInTheDocument();
  });

  // test('submits form with correct data', async () => {
  //   render(<RegistrationForm />);
  //   fireEvent.change(screen.getByLabelText('Username:'), { target: { value: 'testuser' } });
  //   fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'test@example.com' } });
  //   fireEvent.change(screen.getByLabelText('Password:'), { target: { value: 'password123' } });
  //   fireEvent.click(screen.getByLabelText('Male'));
  //   fireEvent.click(screen.getByLabelText('Reading'));
  //   fireEvent.change(screen.getByLabelText('Country:'), { target: { value: 'usa' } });
  //   fireEvent.submit(screen.getByRole('button', { name: 'Submit' }));

  //   // Assertions for form submission
  //   await waitFor(() => {
  //     expect(submitHandler).toHaveBeenCalledWith({
  //       username: 'testuser',
  //       email: 'test@example.com',
  //       password: 'password123',
  //       gender: 'male',
  //       interests: ['reading'],
  //       country: 'usa'
  //     });
  //   });
  // });

  // Define a mock submitHandler function
  // const submitHandler = jest.fn();

  // Mock the submitHandler function
  // jest.mock('./submitHandler', () => ({
  //   __esModule: true,
  //   default: submitHandler,
  // }));

  // describe('RegistrationForm component', () => {
  //   test('renders all input fields correctly', () => {
  //     render(<RegistrationForm />);
  //     expect(screen.getByLabelText('Username:')).toBeInTheDocument();
  //     expect(screen.getByLabelText('Email:')).toBeInTheDocument();
  //     expect(screen.getByLabelText('Password:')).toBeInTheDocument();
  //     // expect(screen.getByLabelText('Gender:')).toBeInTheDocument();
  //     // expect(screen.getByLabelText('Interests:')).toBeInTheDocument();
  //     expect(screen.getByLabelText('Country:')).toBeInTheDocument();
  //     expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  //     expect(screen.getByText('Male')).toBeInTheDocument();
  //     expect(screen.getByText('Female')).toBeInTheDocument();
  //     expect(screen.getByText('Reading')).toBeInTheDocument();
  //     expect(screen.getByText('Sports')).toBeInTheDocument();
  //     expect(screen.getByText('USA')).toBeInTheDocument();
  //     expect(screen.getByText('UK')).toBeInTheDocument();
  //     expect(screen.getByText('India')).toBeInTheDocument();
  //   });

  // RegistrationForm.test.js

  // describe('RegistrationForm', () => {
  //   it('renders all form elements', () => {
  //     render(<RegistrationForm />);
  //     expect(screen.getByLabelText(/Username/i)).toBeInTheDocument();
  //     expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  //     expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  //     expect(screen.getByLabelText(/Male/i)).toBeInTheDocument();
  //     expect(screen.getByLabelText(/Female/i)).toBeInTheDocument();
  //     expect(screen.getByLabelText(/Reading/i)).toBeInTheDocument();
  //     expect(screen.getByLabelText(/Sports/i)).toBeInTheDocument();
  //     expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
  //     expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  //   });

  //   it('updates form data on input change', () => {
  //     render(<RegistrationForm />);
  //     fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'testuser' } });
  //     fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
  //     fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password123' } });
  //     fireEvent.click(screen.getByLabelText(/Male/i));
  //     fireEvent.click(screen.getByLabelText(/Reading/i));
  //     fireEvent.change(screen.getByLabelText(/Country/i), { target: { value: 'India' } });

  //     expect(screen.getByLabelText(/Username/i)).toHaveValue('testuser');
  //     expect(screen.getByLabelText(/Email/i)).toHaveValue('test@example.com');
  //     expect(screen.getByLabelText(/Password/i)).toHaveValue('password123');
  //     expect(screen.getByLabelText(/Male/i)).toBeChecked();
  //     expect(screen.getByLabelText(/Reading/i)).toBeChecked();
  //     expect(screen.getByLabelText(/Country/i)).toHaveValue('India');
  //   });

  // Add more test cases as per your component requirements to ensure 100% coverage
});
