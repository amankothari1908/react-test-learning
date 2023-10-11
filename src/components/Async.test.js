import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async Component", () => {
  test("renders the posts if request sucess", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "post1" }],
    });
    render(<Async />);

    const itemList = await screen.findAllByRole("listitem");
    expect(itemList).not.toHaveLength(0);
  });
});
