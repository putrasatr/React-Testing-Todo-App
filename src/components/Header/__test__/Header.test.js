import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  test("renders learn react link", () => {
    render(<Header title={"NGETEST HEADER"} />);
    const headingElement = screen.getByText(/ngetest header/i);
    expect(headingElement).toBeInTheDocument();
  });
});

// it("should render same text with props", () => {
//   render(<Header title={"NGETEST HEADER"} />);
//   const headingElement = screen.getByRole("heading", {
//     name: /ngetest header/i,
//   });
//   expect(headingElement).toBeInTheDocument();
// });

// it("should render same text Cats", () => {
//   render(<Header title={"NGETEST HEADER"} />);
//   const headingElement = screen.getByTitle("header_nih");
//   expect(headingElement).toBeInTheDocument();
// });

// it("should render same text into props", () => {
//   render(<Header title={"NGETEST HEADER"} />);
//   const headingElement = screen.getByTestId("header-1");
//   expect(headingElement).toBeInTheDocument();
// });

// //find by
// it("should find by text", async () => {
//   render(<Header title={"NGETEST HEADER"} />);
//   const headingElement = await screen.findByText(/ngetest header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// //queryby

// it("should find by texta", async () => {
//   render(<Header title={"NGETEST HEADER"} />);
//   const headingElement = screen.queryByText(/haha/i);
//   expect(headingElement).not.toBeInTheDocument();
// });

// it("should find by texta get all by role", async () => {
//   render(<Header title={"NGETEST HEADER"} />);
//   const headingElements = screen.getAllByRole("heading");
//   expect(headingElements.length).toBe(2);
// });
