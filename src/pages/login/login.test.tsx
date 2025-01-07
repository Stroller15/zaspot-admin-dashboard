import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import LoginPage from "./login";

describe("Login page", () => {
  it("should render with required field", () => {
    //* Arrange

    render(<LoginPage />);

    //* Act and Assert
    // getBy -> throw error
    // findBy -> return promise
    // queryBy -> return null
    
    expect(screen.getByText(/Sign in/))

  });
});