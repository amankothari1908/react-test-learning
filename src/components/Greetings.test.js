import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";

describe("Greeting Component", () => {
  test("renders hello world", () => {
    // Arrange
    render(<Greetings />);

    // Act

    //Assert
    const helloWorldElemenet = screen.getByText("Hello world!");
    expect(helloWorldElemenet).toBeInTheDocument();
  });

  test("renders its good to see you if button was not clicked", () => {
    // Arrange
    render(<Greetings />);

    // Act

    //Assert
    const outputElemenet = screen.getByText("It's good to see you!");
    expect(outputElemenet).toBeInTheDocument();
  });

  test("renders changed if button was clicked", () => {
    // Arranged
    render(<Greetings />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElemenet = screen.getByText("changed");
    expect(outputElemenet).toBeInTheDocument();
  });

  test("removed text after button is clicked", () => {
    // Arranged
    render(<Greetings />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const elementNotVisible = screen.queryByText("It's good to see you!");
    expect(elementNotVisible).toBeNull();
  });
});
