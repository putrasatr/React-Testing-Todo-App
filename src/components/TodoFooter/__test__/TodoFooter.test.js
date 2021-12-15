import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks, opacity }) => (
  <BrowserRouter>
    <TodoFooter
      numberOfIncompleteTasks={numberOfIncompleteTasks}
      opacity={opacity}
    />
  </BrowserRouter>
);
describe("TodoFooter", () => {
  describe("Function 1", () => {
    it('should renders "tast" when number one', () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} opacity={1} />);
      const paragraphElement = screen.getByText(/1 task left/i);
      expect(paragraphElement).toContainHTML("p");
    });
  });
  describe("Function 2", () => {
    it("should renders contain HTML", () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByText(/1 task left/i);
      expect(paragraphElement).toContainHTML("p");
    });

    it("should renders contain have content", () => {
      render(<MockTodoFooter numberOfIncompleteTasks={1} />);
      const paragraphElement = screen.getByTestId("para");
      expect(paragraphElement).toHaveTextContent("1 task left");
      expect(paragraphElement.textContent).toBe("1 task left");
    });
  });

  it('should renders "tast" when number', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} opacity={0} />);
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).not.toBeVisible();
  });
});
test("renders learn react link", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const paragraphElement5 = screen.getByText(/5 tasks left/i);

  expect(paragraphElement5).toBeInTheDocument();
  expect(paragraphElement5).toBeVisible();
});
