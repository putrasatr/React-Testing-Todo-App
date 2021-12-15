import { render, screen } from "@testing-library/react";
const App = () => {
  return (
    <div>
      <p>learn react</p>
    </div>
  );
};

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
