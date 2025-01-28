import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Login from "./LoginPage";

describe("Login page", () => {
  it("should render with required field", () => {
    //* Arrange

    render(<Login />);

    //* Act and Assert
    // getBy -> throw error in not found
    // findBy -> return promise if not found
    // queryBy -> return null if not found
    
    expect(screen.getByText("Sign in")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("password")).toBeInTheDocument();
    expect(screen.getByRole("button", {name: "Login"})).toBeInTheDocument();
    expect(screen.getByRole("checkbox", {name: "Remember me"})).toBeInTheDocument();
    expect(screen.getByText("Forgot Password")).toBeInTheDocument();

  });
});