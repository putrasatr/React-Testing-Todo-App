import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => (
  <BrowserRouter>
    <FollowersList />
  </BrowserRouter>
);

describe("FollowersList", () => {
  beforeAll(() => {
    console.log("");
  });
  it("should has follower item", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });

  it("should has follower im", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });
  it("should has follower itm", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  }); // it("should has followers item", async () => {
  //   render(<MockFollowersList />);
  //   const followerDivElement = await screen.findAllByTestId(/follower-item/);
  //   expect(followerDivElement.length).toBe(5);
  // });
});
