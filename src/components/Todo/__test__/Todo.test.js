import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const tasks = ["Makan", "Ngoding", "Testing"];

const MockTodo = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
);
const addTask = (tasks = []) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });
  tasks.forEach((task) => {
    fireEvent.change(inputElement, {
      target: {
        value: task,
      },
    });
    fireEvent.click(buttonElement);
  });
};

describe("Todo", () => {
  it("should reanders lists of todo", () => {
    render(<MockTodo />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.change(inputElement, {
      target: {
        value: "Makan lah",
      },
    });
    fireEvent.click(buttonElement);
    const divElement = screen.getByText(/makan lah/i);
    expect(divElement).toBeInTheDocument();
  });
  it("should reanders lists of todos", () => {
    render(<MockTodo />);
    addTask(tasks);
    const divElement = screen.getAllByTestId(/task-container/i);
    expect(divElement.length).toBe(tasks.length);
  });
  it("should reanders lists of todos whne click", () => {
    render(<MockTodo />);
    addTask([tasks[0]]);
    const divElement = screen.getByText(/makan/i);
    // fireEvent.click(divElement[0]);
    expect(divElement).not.toHaveClass("todo-item-active");
  });
  it("should reanders lists of todos whenclick", () => {
    render(<MockTodo />);
    addTask([tasks[0]]);
    const divElement = screen.getByText(/makan/i);
    fireEvent.click(divElement);
    expect(divElement).toHaveClass("todo-item-active");
  });
});
