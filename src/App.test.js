import { render, screen } from "@testing-library/react";
const App = () => {
  return (
    <div>
      <p>learn reactss</p>
    </div>
  );
};

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it("should be", () => {});
